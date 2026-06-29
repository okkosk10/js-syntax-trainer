import { NextResponse } from "next/server";
import { z } from "zod";
import { createInlineSubmission } from "@/features/submission/inline-submission.service";
import { getCurrentUser } from "@/features/user/current-user";
import { env } from "@/lib/env";

const submissionSchema = z.object({
  problemId: z.string().min(1),
  code: z.string().min(1)
});

export async function POST(request: Request) {
  try {
    const body = submissionSchema.parse(await request.json());
    const { user } = await getCurrentUser({ ensureCookie: true });

    if (env.SUBMISSION_MODE === "queued") {
      const { createSubmission } = await import("@/features/submission/queued-submission.service");
      const submission = await createSubmission({
        userId: user.id,
        problemId: body.problemId,
        code: body.code
      });

      return NextResponse.json({
        mode: "queued",
        submissionId: submission.id,
        status: submission.status
      });
    }

    const submission = await createInlineSubmission({
      userId: user.id,
      problemId: body.problemId,
      code: body.code
    });

    return NextResponse.json({
      mode: "inline",
      ...submission
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "제출 처리 중 오류가 발생했습니다."
      },
      { status: 400 }
    );
  }
}
