import { Worker } from "bullmq";
import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { LocalExecutionProvider } from "@/features/execution/local-execution.provider";

const provider = new LocalExecutionProvider();
const redisUrl = env.REDIS_URL ? new URL(env.REDIS_URL) : undefined;
const connection = redisUrl
  ? {
      host: redisUrl.hostname,
      port: Number(redisUrl.port || 6379),
      password: redisUrl.password || undefined
    }
  : { host: "127.0.0.1", port: 6379 };

new Worker(
  "test-execution",
  async (job) => {
    const submission = await prisma.submission.findUniqueOrThrow({
      where: { id: job.data.submissionId },
      include: {
        problem: {
          include: {
            testCases: true
          }
        }
      }
    });

    return provider.run({
      submissionId: submission.id,
      code: submission.code,
      tests: submission.problem.testCases.map((test) => ({
        id: test.id,
        input: test.input,
        expectedOutput: test.expectedOutput
      })),
      timeoutMs: 2000
    });
  },
  {
    connection
  }
);
