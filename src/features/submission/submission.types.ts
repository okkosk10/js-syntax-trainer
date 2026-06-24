export type SubmissionStatus = "passed" | "failed" | "error";

export type SubmissionTestResult = {
  testCaseId: string;
  status: SubmissionStatus;
  input?: unknown;
  actualOutput?: unknown;
  expectedOutput?: unknown;
  errorMessage?: string;
  runtimeMs?: number;
};

export type SubmissionResult = {
  submissionId: string;
  status: SubmissionStatus;
  score: number;
  runtimeMs: number;
  results: SubmissionTestResult[];
};
