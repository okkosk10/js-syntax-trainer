import { NextResponse } from "next/server";
import { getMockProblemDetailBySlug, getMockProblemList } from "@/features/problem/mock-problems";
import { problemRepository } from "@/features/problem/problem.repository";

let dbState: "unknown" | "up" | "down" = "unknown";
let nextProbeAt = 0;
let probePromise: Promise<void> | null = null;

const ACTIVE_DB_TIMEOUT_MS = 400;
const PROBE_DB_TIMEOUT_MS = 4_000;
const PROBE_RETRY_COOLDOWN_MS = 20_000;

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

function createMockResponse(slug: string | null) {
  if (slug) {
    const mockProblem = getMockProblemDetailBySlug(slug);

    if (!mockProblem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    return NextResponse.json({
      problem: mockProblem,
      source: "mock"
    });
  }

  return NextResponse.json({
    problems: getMockProblemList(),
    source: "mock"
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (dbState !== "up") {
    ensureBackgroundProbe();
    return createMockResponse(slug);
  }

  try {
    if (slug) {
      const problem = await withTimeout(problemRepository.findBySlug(slug), ACTIVE_DB_TIMEOUT_MS);

      if (!problem) {
        return NextResponse.json({ error: "Problem not found" }, { status: 404 });
      }

      return NextResponse.json({ problem });
    }

    const problems = await withTimeout(problemRepository.findPublished(), ACTIVE_DB_TIMEOUT_MS);

    return NextResponse.json({ problems });
  } catch {
    dbState = "down";
    nextProbeAt = Date.now() + PROBE_RETRY_COOLDOWN_MS;
    ensureBackgroundProbe();
    return createMockResponse(slug);
  }
}
