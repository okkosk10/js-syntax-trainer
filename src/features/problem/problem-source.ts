import { problemRepository } from "@/features/problem/problem.repository";

let dbState: "unknown" | "up" | "down" = "unknown";
let nextProbeAt = 0;
let probePromise: Promise<void> | null = null;

const ACTIVE_DB_TIMEOUT_MS = 400;
const PROBE_DB_TIMEOUT_MS = 4_000;
const PROBE_RETRY_COOLDOWN_MS = 20_000;

type DatabaseQueryResult<T> =
  | {
      source: "db";
      value: T;
    }
  | {
      source: "fallback";
    };

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timeoutId: NodeJS.Timeout | undefined;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("DB_QUERY_TIMEOUT"));
    }, ms);
  });

  return Promise.race([
    promise.finally(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }),
    timeoutPromise
  ]);
}

async function probeDatabaseAvailability() {
  try {
    await withTimeout(problemRepository.findPublished(), PROBE_DB_TIMEOUT_MS);
    dbState = "up";
  } catch {
    dbState = "down";
    nextProbeAt = Date.now() + PROBE_RETRY_COOLDOWN_MS;
  } finally {
    probePromise = null;
  }
}

function ensureBackgroundProbe() {
  if (probePromise || Date.now() < nextProbeAt) {
    return;
  }

  probePromise = probeDatabaseAvailability();
}

export async function queryProblemDatabase<T>(query: () => Promise<T>): Promise<DatabaseQueryResult<T>> {
  if (dbState === "down") {
    ensureBackgroundProbe();
    return { source: "fallback" };
  }

  try {
    const value = await withTimeout(query(), ACTIVE_DB_TIMEOUT_MS);
    dbState = "up";

    return {
      source: "db",
      value
    };
  } catch {
    dbState = "down";
    nextProbeAt = Date.now() + PROBE_RETRY_COOLDOWN_MS;
    ensureBackgroundProbe();

    return { source: "fallback" };
  }
}
