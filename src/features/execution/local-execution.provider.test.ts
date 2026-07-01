import test from "node:test";
import assert from "node:assert/strict";
import { LocalExecutionProvider } from "@/features/execution/local-execution.provider";

test("LocalExecutionProvider: 정답 코드는 passed + 100점을 반환한다", async () => {
  const provider = new LocalExecutionProvider();

  const result = await provider.run({
    submissionId: "submission-1",
    code: "module.exports = function (numbers) { return numbers.reduce((sum, value) => sum + value, 0); };",
    tests: [
      { id: "t1", input: [1, 2, 3], expectedOutput: 6 },
      { id: "t2", input: [10, -5], expectedOutput: 5 }
    ],
    timeoutMs: 500
  });

  assert.equal(result.status, "passed");
  assert.equal(result.score, 100);
  assert.equal(result.results.length, 2);
  assert.ok(result.results.every((item) => item.status === "passed"));
});

test("LocalExecutionProvider: 오답 코드는 failed + 비정답 점수를 반환한다", async () => {
  const provider = new LocalExecutionProvider();

  const result = await provider.run({
    submissionId: "submission-2",
    code: "module.exports = function (numbers) { return 0; };",
    tests: [
      { id: "t1", input: [1, 2, 3], expectedOutput: 6 },
      { id: "t2", input: [10, -5], expectedOutput: 5 }
    ],
    timeoutMs: 500
  });

  assert.equal(result.status, "failed");
  assert.ok(result.score >= 0 && result.score < 100);
  assert.ok(result.results.some((item) => item.status === "failed"));
});

test("LocalExecutionProvider: module.exports가 함수가 아니면 error를 반환한다", async () => {
  const provider = new LocalExecutionProvider();

  const result = await provider.run({
    submissionId: "submission-3",
    code: "module.exports = { not: 'a function' };",
    tests: [{ id: "t1", input: [1], expectedOutput: 1 }],
    timeoutMs: 500
  });

  assert.equal(result.status, "error");
  assert.equal(result.score, 0);
  assert.equal(result.results[0]?.status, "error");
  assert.match(result.results[0]?.errorMessage ?? "", /must be a function/i);
});

test("LocalExecutionProvider: async 함수 반환값(Promise)을 정상 처리한다", async () => {
  const provider = new LocalExecutionProvider();

  const result = await provider.run({
    submissionId: "submission-4",
    code: "module.exports = async function (value) { return value * 2; };",
    tests: [{ id: "t1", input: 21, expectedOutput: 42 }],
    timeoutMs: 500
  });

  assert.equal(result.status, "passed");
  assert.equal(result.score, 100);
  assert.equal(result.results[0]?.status, "passed");
  assert.equal(result.results[0]?.actualOutput, 42);
});

test("LocalExecutionProvider: Promise timeout 동작이 유지된다", async () => {
  const provider = new LocalExecutionProvider();

  const result = await provider.run({
    submissionId: "submission-5",
    code: "module.exports = async function () { return new Promise(() => {}); };",
    tests: [{ id: "t1", input: null, expectedOutput: 1 }],
    timeoutMs: 20
  });

  assert.equal(result.status, "failed");
  assert.equal(result.results[0]?.status, "error");
  assert.match(result.results[0]?.errorMessage ?? "", /timed out/i);
});
