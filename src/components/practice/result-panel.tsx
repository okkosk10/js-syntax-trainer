import { Bot, CheckCircle2, CircleAlert } from "lucide-react";
import type { SubmissionResult, SubmissionStatus } from "@/features/submission/submission.types";

type ResultPanelProps = {
  runStatus: "idle" | "running" | "passed" | "failed";
  isSubmitting: boolean;
  submissionResult: SubmissionResult | null;
  errorMessage: string | null;
};

function statusLabel(status: SubmissionStatus) {
  if (status === "passed") {
    return "passed";
  }

  if (status === "failed") {
    return "failed";
  }

  return "error";
}

function statusClassName(status: SubmissionStatus) {
  if (status === "passed") {
    return "text-app-accent";
  }

  if (status === "failed") {
    return "text-app-danger";
  }

  return "text-app-danger";
}

function formatValue(value: unknown) {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

export function ResultPanel({ runStatus, isSubmitting, submissionResult, errorMessage }: ResultPanelProps) {
  const isRunPassed = runStatus === "passed";

  return (
    <section className="h-52 border-t border-app-border bg-app-panel">
      <div className="flex h-10 items-center gap-4 border-b border-app-border px-4 text-sm">
        <span className="font-semibold">테스트 결과</span>
        <span className="text-app-muted">AI 리뷰</span>
        <span className="text-app-muted">콘솔</span>
      </div>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-1 gap-0 md:grid-cols-2">
        <div className="border-r border-app-border p-4">
          {errorMessage && (
            <div className="rounded-md border border-app-danger/40 bg-app-danger/10 p-3">
              <p className="text-sm font-semibold text-app-danger">제출 실패</p>
              <p className="mt-1 text-sm text-app-danger/90">{errorMessage}</p>
            </div>
          )}
          {!errorMessage && isSubmitting && <p className="text-sm text-app-muted">제출 중...</p>}
          {!errorMessage && !isSubmitting && submissionResult && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                {submissionResult.status === "passed" ? (
                  <CheckCircle2 className="h-5 w-5 text-app-accent" />
                ) : (
                  <CircleAlert className="h-5 w-5 text-app-danger" />
                )}
                <p className="font-semibold">
                  제출 결과: <span className={statusClassName(submissionResult.status)}>{statusLabel(submissionResult.status)}</span>
                </p>
              </div>
              <p className="text-app-muted">
                점수 {submissionResult.score}점 · 실행 시간 {submissionResult.runtimeMs}ms
              </p>
              <ul className="space-y-1.5">
                {submissionResult.results.map((result, index) => (
                  <li key={`${result.testCaseId}-${index}`} className="rounded border border-app-border/70 px-2 py-1.5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-app-muted">테스트 {index + 1}</span>
                      <span className={statusClassName(result.status)}>{statusLabel(result.status)}</span>
                    </div>
                    {result.status === "error" && result.errorMessage && (
                      <p className="mt-1 text-xs text-app-danger">{result.errorMessage}</p>
                    )}
                    {result.status === "failed" && (
                      <p className="mt-1 text-xs text-app-muted">
                        expected: {formatValue(result.expectedOutput)} / actual: {formatValue(result.actualOutput)}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!errorMessage && !isSubmitting && !submissionResult && runStatus === "idle" && (
            <p className="text-sm text-app-muted">Run 버튼으로 공개 테스트를 실행하세요.</p>
          )}
          {!errorMessage && !isSubmitting && !submissionResult && runStatus === "running" && (
            <p className="text-sm text-app-muted">테스트 실행 중...</p>
          )}
          {!errorMessage && !isSubmitting && !submissionResult && runStatus !== "idle" && runStatus !== "running" && (
            <div className="flex items-start gap-3">
              {isRunPassed ? (
                <CheckCircle2 className="h-5 w-5 text-app-accent" />
              ) : (
                <CircleAlert className="h-5 w-5 text-app-danger" />
              )}
              <div>
                <p className="text-sm font-semibold">{isRunPassed ? "3개 테스트 통과" : "1개 테스트 실패"}</p>
                <p className="mt-1 text-sm text-app-muted">
                  {isRunPassed ? "제출하면 숨김 테스트까지 검증합니다." : "빈 배열 입력 케이스를 확인하세요."}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Bot className="h-4 w-4 text-app-accent" />
            AI 리뷰
          </div>
          <p className="mt-2 text-sm text-app-muted">
            테스트 결과와 코드 제출 이력을 바탕으로 개선점을 구조화해서 보여주는 영역입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
