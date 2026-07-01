type ExecutionSummary = {
  status: "passed" | "failed" | "error";
  score: number;
  runtimeMs: number;
};

export type LearningStatSnapshot = {
  attempts: number;
  passed: boolean;
  bestScore: number;
  averageRuntimeMs: number | null;
};

export type LearningStatCreateInput = {
  userId: string;
  problemId: string;
  attempts: number;
  passed: boolean;
  bestScore: number;
  lastSubmittedAt: Date;
  averageRuntimeMs: number;
};

export type LearningStatUpdateInput = {
  attempts: number;
  passed: boolean;
  bestScore: number;
  lastSubmittedAt: Date;
  averageRuntimeMs: number;
};

export function buildLearningStatCreateData(
  userId: string,
  problemId: string,
  execution: ExecutionSummary,
  submittedAt: Date
): LearningStatCreateInput {
  return {
    userId,
    problemId,
    attempts: 1,
    passed: execution.status === "passed",
    bestScore: execution.score,
    lastSubmittedAt: submittedAt,
    averageRuntimeMs: execution.runtimeMs
  };
}

export function buildLearningStatUpdateData(
  existingStat: LearningStatSnapshot,
  execution: ExecutionSummary,
  submittedAt: Date
): LearningStatUpdateInput {
  const nextAttempts = existingStat.attempts + 1;
  const previousRuntime = existingStat.averageRuntimeMs ?? execution.runtimeMs;

  return {
    attempts: nextAttempts,
    passed: existingStat.passed || execution.status === "passed",
    bestScore: Math.max(existingStat.bestScore, execution.score),
    lastSubmittedAt: submittedAt,
    averageRuntimeMs: Math.round((previousRuntime * existingStat.attempts + execution.runtimeMs) / nextAttempts)
  };
}
