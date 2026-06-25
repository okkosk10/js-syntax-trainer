import { NextResponse } from "next/server";
import { z } from "zod";
import { LocalExecutionProvider } from "@/features/execution/local-execution.provider";
import { prisma } from "@/lib/prisma";

const runSchema = z.object({
  problemId: z.string().min(1),
  code: z.string().min(1)
});

const executionProvider = new LocalExecutionProvider();

export async function POST(request: Request) {
  try {
    const body = runSchema.parse(await request.json());

    const problem = await prisma.problem.findUnique({
      where: { id: body.problemId },
      include: {
        testCases: {
          where: { isHidden: false },
          orderBy: { order: "asc" }
        }
      }
    });

    if (!problem) {
      return NextResponse.json({ message: "문제를 찾을 수 없습니다." }, { status: 404 });
    }

    if (problem.testCases.length === 0) {
      return NextResponse.json({ message: "실행 가능한 공개 테스트가 없습니다." }, { status: 400 });
    }

    const execution = await executionProvider.run({
      submissionId: `run-${Date.now()}`,
      code: body.code,
      tests: problem.testCases.map((testCase) => ({
        id: testCase.id,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput
      })),
      timeoutMs: 2000
    });

    return NextResponse.json({
      status: execution.status,
      score: execution.score,
      runtimeMs: execution.runtimeMs,
      results: execution.results
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "요청 형식이 올바르지 않습니다." }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "실행 중 오류가 발생했습니다."
      },
      { status: 400 }
    );
  }
}
