import { Queue } from "bullmq";
import { env } from "@/lib/env";

function getRedisConnection() {
  if (!env.REDIS_URL) {
    return { host: "127.0.0.1", port: 6379 };
  }

  const url = new URL(env.REDIS_URL);

  return {
    host: url.hostname,
    port: Number(url.port || 6379),
    password: url.password || undefined
  };
}

const connection = getRedisConnection();

export const testExecutionQueue = new Queue("test-execution", { connection });
export const aiReviewQueue = new Queue("ai-review", { connection });
export const statsQueue = new Queue("stats", { connection });
