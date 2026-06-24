import type { CodeExecutionInput, CodeExecutionProvider, CodeExecutionResult } from "./execution.types";

export class LocalExecutionProvider implements CodeExecutionProvider {
  async run(input: CodeExecutionInput): Promise<CodeExecutionResult> {
    const startedAt = Date.now();

    const results = input.tests.map((test) => ({
      testCaseId: test.id,
      status: "error" as const,
      expectedOutput: test.expectedOutput,
      errorMessage: "Local execution provider is a placeholder. Replace with isolated-vm, Docker, or Judge0."
    }));

    return {
      status: "error",
      score: 0,
      runtimeMs: Date.now() - startedAt,
      results
    };
  }
}
