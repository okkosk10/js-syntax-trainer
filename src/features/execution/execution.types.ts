export type CodeExecutionInput = {
  submissionId: string;
  code: string;
  tests: {
    id: string;
    input: unknown;
    expectedOutput: unknown;
  }[];
  timeoutMs: number;
};

export type CodeExecutionResult = {
  status: "passed" | "failed" | "error";
  score: number;
  runtimeMs: number;
  results: {
    testCaseId: string;
    status: "passed" | "failed" | "error";
    actualOutput?: unknown;
    expectedOutput?: unknown;
    errorMessage?: string;
    runtimeMs?: number;
  }[];
};

export interface CodeExecutionProvider {
  run(input: CodeExecutionInput): Promise<CodeExecutionResult>;
}
