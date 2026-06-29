import { NextResponse } from "next/server";
import { z } from "zod";
import { createInlineSubmission } from "@/features/submission/inline-submission.service";
import { ensureDemoUser } from "@/features/user/demo-user";
import { env } from "@/lib/env";

const submissionSchema = z.object({
  problemId: z.string().min(1),
  code: z.string().min(1),
  userId: z.string().min(1).optional()
});

export async function POST(request: Request) {
  try {
    const body = submissionSchema.parse(await request.json());
    const user = await ensureDemoUser();

    const userId = body.userId ?? user.id;

    if (env.SUBMISSION_MODE === "queued") {
      const { createSubmission } = await import("@/features/submission/queued-submission.service");
      const submission = await createSubmission({
        userId,
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
      userId,
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
