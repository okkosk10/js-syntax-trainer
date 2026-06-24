import { Worker } from "bullmq";
import { env } from "@/lib/env";

const redisUrl = env.REDIS_URL ? new URL(env.REDIS_URL) : undefined;
const connection = redisUrl
  ? {
      host: redisUrl.hostname,
      port: Number(redisUrl.port || 6379),
      password: redisUrl.password || undefined
    }
  : { host: "127.0.0.1", port: 6379 };

new Worker(
  "ai-review",
  async (job) => {
    return {
      submissionId: job.data.submissionId,
      status: "skipped",
      reason: "Connect an AIReviewProvider implementation before enabling this worker."
    };
  },
  {
    connection
  }
);
