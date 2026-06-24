import { Prisma, SubmissionStatus, TestStatus } from "@prisma/client";
import { LocalExecutionProvider } from "@/features/execution/local-execution.provider";
import type { SubmissionResult } from "@/features/submission/submission.types";
import { prisma } from "@/lib/prisma";

const executionProvider = new LocalExecutionProvider();

type InlineSubmissionInput = {
  userId: string;
  problemId: string;
  code: string;
};

function toSubmissionStatus(status: "passed" | "failed" | "error") {
  switch (status) {
    case "passed":
      return SubmissionStatus.PASSED;
    case "failed":
      return SubmissionStatus.FAILED;
    default:
      return SubmissionStatus.ERROR;
  }
}

function toTestStatus(status: "passed" | "failed" | "error") {
  switch (status) {
    case "passed":
      return TestStatus.PASSED;
    case "failed":
      return TestStatus.FAILED;
    default:
      return TestStatus.ERROR;
  }
}

function toNullableJsonValue(value: unknown) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return Prisma.JsonNull;
  }

  return value as Prisma.InputJsonValue;
}

export async function createInlineSubmission(input: InlineSubmissionInput): Promise<SubmissionResult> {
  const problem = await prisma.problem.findUnique({
    where: { id: input.problemId },
    include: {
      testCases: {
        orderBy: { order: "asc" }
      }
    }
  });

  if (!problem) {
    throw new Error("Problem not found");
  }

  const submission = await prisma.submission.create({
    data: {
      userId: input.userId,
      problemId: input.problemId,
      code: input.code,
      status: SubmissionStatus.RUNNING
    }
  });

  const expectedByTestCaseId = new Map(problem.testCases.map((testCase) => [testCase.id, testCase.expectedOutput]));

  const execution = await executionProvider.run({
    submissionId: submission.id,
    code: input.code,
    tests: problem.testCases.map((testCase) => ({
      id: testCase.id,
      input: testCase.input,
      expectedOutput: testCase.expectedOutput
    })),
    timeoutMs: 2000
  });

  await prisma.$transaction(async (tx) => {
    if (execution.results.length > 0) {
      await tx.testResult.createMany({
        data: execution.results.map((result) => ({
          submissionId: submission.id,
          testCaseId: result.testCaseId,
          status: toTestStatus(result.status),
          actualOutput: toNullableJsonValue(result.actualOutput),
          expectedOutput: toNullableJsonValue(result.expectedOutput ?? expectedByTestCaseId.get(result.testCaseId)),
          errorMessage: result.errorMessage,
          runtimeMs: result.runtimeMs
        }))
      });
    }

    await tx.submission.update({
      where: { id: submission.id },
      data: {
        status: toSubmissionStatus(execution.status),
        score: execution.score,
        runtimeMs: execution.runtimeMs
      }
    });

    const existingStat = await tx.learningStat.findUnique({
      where: {
        userId_problemId: {
          userId: input.userId,
          problemId: input.problemId
        }
      }
    });

    if (!existingStat) {
      await tx.learningStat.create({
        data: {
          userId: input.userId,
          problemId: input.problemId,
          attempts: 1,
          passed: execution.status === "passed",
          bestScore: execution.score,
          lastSubmittedAt: new Date(),
          averageRuntimeMs: execution.runtimeMs
        }
      });

      return;
    }

    const nextAttempts = existingStat.attempts + 1;
    const previousRuntime = existingStat.averageRuntimeMs ?? execution.runtimeMs;
    const nextAverageRuntime = Math.round(
      (previousRuntime * existingStat.attempts + execution.runtimeMs) / nextAttempts
    );

    await tx.learningStat.update({
      where: {
        userId_problemId: {
          userId: input.userId,
          problemId: input.problemId
        }
      },
      data: {
        attempts: nextAttempts,
        passed: existingStat.passed || execution.status === "passed",
        bestScore: Math.max(existingStat.bestScore, execution.score),
        lastSubmittedAt: new Date(),
        averageRuntimeMs: nextAverageRuntime
      }
    });
  });

  return {
    submissionId: submission.id,
    status: execution.status,
    score: execution.score,
    runtimeMs: execution.runtimeMs,
    results: execution.results
  };
}
