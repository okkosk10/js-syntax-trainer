import { SubmissionStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { testExecutionQueue } from "@/lib/queue";

export async function createSubmission(input: {
  userId: string;
  problemId: string;
  code: string;
}) {
  const submission = await prisma.submission.create({
    data: {
      userId: input.userId,
      problemId: input.problemId,
      code: input.code,
      status: SubmissionStatus.PENDING
    }
  });

  await testExecutionQueue.add("run-tests", {
    submissionId: submission.id
  });

  return submission;
}
