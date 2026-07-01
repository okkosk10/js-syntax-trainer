import test from "node:test";
import assert from "node:assert/strict";
import {
  buildLearningStatCreateData,
  buildLearningStatUpdateData,
  type LearningStatSnapshot
} from "@/features/submission/learning-stat";

test("LearningStat 생성 데이터: 첫 제출 시 attempts/passed/bestScore를 초기화한다", () => {
  const submittedAt = new Date("2026-07-01T00:00:00.000Z");

  const created = buildLearningStatCreateData(
    "user-1",
    "problem-1",
    {
      status: "failed",
      score: 40,
      runtimeMs: 120
    },
    submittedAt
  );

  assert.equal(created.userId, "user-1");
  assert.equal(created.problemId, "problem-1");
  assert.equal(created.attempts, 1);
  assert.equal(created.passed, false);
  assert.equal(created.bestScore, 40);
  assert.equal(created.averageRuntimeMs, 120);
  assert.equal(created.lastSubmittedAt.toISOString(), submittedAt.toISOString());
});

test("LearningStat 업데이트: 제출 시 attempts 증가, bestScore 최대값, lastSubmittedAt 갱신", () => {
  const submittedAt = new Date("2026-07-01T01:00:00.000Z");

  const updated = buildLearningStatUpdateData(
    {
      attempts: 2,
      passed: false,
      bestScore: 55,
      averageRuntimeMs: 150
    },
    {
      status: "failed",
      score: 70,
      runtimeMs: 90
    },
    submittedAt
  );

  assert.equal(updated.attempts, 3);
  assert.equal(updated.passed, false);
  assert.equal(updated.bestScore, 70);
  assert.equal(updated.lastSubmittedAt.toISOString(), submittedAt.toISOString());
  assert.equal(updated.averageRuntimeMs, 130);
});

test("LearningStat 업데이트: 한 번 solved면 이후 실패 제출이 와도 passed가 유지된다", () => {
  const existing: LearningStatSnapshot = {
    attempts: 3,
    passed: true,
    bestScore: 100,
    averageRuntimeMs: 80
  };

  const updated = buildLearningStatUpdateData(
    existing,
    {
      status: "failed",
      score: 20,
      runtimeMs: 200
    },
    new Date("2026-07-01T02:00:00.000Z")
  );

  assert.equal(updated.attempts, 4);
  assert.equal(updated.passed, true);
  assert.equal(updated.bestScore, 100);
});
