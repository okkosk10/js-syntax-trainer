import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

test("Run API 경로는 공개 테스트 조회 함수(findPublicExecutionById)를 사용한다", () => {
  const routeFile = join(process.cwd(), "src", "app", "api", "run", "route.ts");
  const source = readFileSync(routeFile, "utf8");

  assert.match(source, /findPublicExecutionById/);
});

test("Run API 경로는 제출/진행도 저장 서비스를 참조하지 않는다", () => {
  const routeFile = join(process.cwd(), "src", "app", "api", "run", "route.ts");
  const source = readFileSync(routeFile, "utf8");

  assert.doesNotMatch(source, /createInlineSubmission/);
  assert.doesNotMatch(source, /learningStat/i);
  assert.doesNotMatch(source, /prisma\./i);
});
