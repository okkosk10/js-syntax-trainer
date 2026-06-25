import type { CodeExecutionInput, CodeExecutionProvider, CodeExecutionResult } from "./execution.types";
import vm from "node:vm";

function normalizeInput(input: unknown) {
  return [input];
}

function isEqual(actual: unknown, expected: unknown) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

type ExecutionSandbox = {
  module: { exports: unknown };
  exports: unknown;
  __solution?: unknown;
  __testInput?: unknown[];
  __actualOutput?: unknown;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function runSolutionInContext(
  sandbox: ExecutionSandbox,
  solution: (...args: unknown[]) => unknown,
  testInput: unknown[],
  timeoutMs: number
) {
  sandbox.__solution = solution;
  sandbox.__testInput = testInput;
  sandbox.__actualOutput = undefined;

  try {
    vm.runInContext("__actualOutput = __solution(...__testInput)", sandbox, { timeout: timeoutMs });
    return sandbox.__actualOutput;
  } finally {
    delete sandbox.__solution;
    delete sandbox.__testInput;
    delete sandbox.__actualOutput;
  }
}

export class LocalExecutionProvider implements CodeExecutionProvider {
  async run(input: CodeExecutionInput): Promise<CodeExecutionResult> {
    const startedAt = Date.now();

    const sandbox: ExecutionSandbox = {
      module: { exports: undefined as unknown },
      exports: undefined as unknown
    };

    try {
      vm.createContext(sandbox);
      vm.runInContext(input.code, sandbox, { timeout: input.timeoutMs });

      const solution = sandbox.module.exports ?? sandbox.exports;

      if (typeof solution !== "function") {
        throw new Error("module.exports must be a function.");
      }

      const executableSolution = solution as (...args: unknown[]) => unknown;

      const results = input.tests.map((test) => {
        const testStartedAt = Date.now();

        try {
          const actualOutput = runSolutionInContext(
            sandbox,
            executableSolution,
            normalizeInput(test.input),
            input.timeoutMs
          );
          const passed = isEqual(actualOutput, test.expectedOutput);

          return {
            testCaseId: test.id,
            status: passed ? ("passed" as const) : ("failed" as const),
            input: test.input,
            actualOutput,
            expectedOutput: test.expectedOutput,
            runtimeMs: Date.now() - testStartedAt
          };
        } catch (error) {
          return {
            testCaseId: test.id,
            status: "error" as const,
            input: test.input,
            expectedOutput: test.expectedOutput,
            errorMessage: getErrorMessage(error),
            runtimeMs: Date.now() - testStartedAt
          };
        }
      });

      const passedCount = results.filter((result) => result.status === "passed").length;
      const score = input.tests.length === 0 ? 0 : Math.round((passedCount / input.tests.length) * 100);

      return {
        status: results.every((result) => result.status === "passed") ? "passed" : "failed",
        score,
        runtimeMs: Date.now() - startedAt,
        results
      };
    } catch (error) {
      return {
        status: "error",
        score: 0,
        runtimeMs: Date.now() - startedAt,
        results: input.tests.map((test) => ({
          testCaseId: test.id,
          status: "error" as const,
          input: test.input,
          expectedOutput: test.expectedOutput,
          errorMessage: getErrorMessage(error)
        }))
      };
    }
  }
}
