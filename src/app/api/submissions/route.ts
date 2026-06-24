import { NextResponse } from "next/server";
import { z } from "zod";

const submissionSchema = z.object({
  problemId: z.string().min(1),
  code: z.string().min(1)
});

export async function POST(request: Request) {
  const body = submissionSchema.parse(await request.json());

  return NextResponse.json({
    submissionId: crypto.randomUUID(),
    status: "PENDING",
    received: body
  });
}
