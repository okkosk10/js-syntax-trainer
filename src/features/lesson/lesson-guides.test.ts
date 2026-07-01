import test from "node:test";
import assert from "node:assert/strict";
import { getLessonGuideByCategory, hasLessonGuideForCategory } from "@/features/lesson/lesson-guides";
import { problemBank } from "@/features/problem/problem-bank";

test("문제 은행의 모든 카테고리는 학습 가이드를 가진다", () => {
  const categories = Array.from(new Set(problemBank.map((problem) => problem.category)));

  for (const category of categories) {
    assert.equal(hasLessonGuideForCategory(category), true, `가이드 누락 카테고리: ${category}`);
  }
});

test("카테고리 가이드는 학습 목표/개념/예제를 포함한다", () => {
  const guide = getLessonGuideByCategory("배열 기본");

  assert.ok(guide.title.length > 0);
  assert.ok(guide.goal.length > 0);
  assert.ok(guide.concepts.length > 0);
  assert.ok(guide.exampleCode.includes("module.exports"));
  assert.ok(guide.thinkingSteps.length > 0);
  assert.ok(guide.cautions.length > 0);
});
