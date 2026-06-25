import { Bot, CheckCircle2, CircleAlert } from "lucide-react";
import type { SubmissionResult, SubmissionStatus } from "@/features/submission/submission.types";

type ResultSource = "run" | "submit";

type ResultPanelProps = {
  activeResultSource: ResultSource | null;
  isRunning: boolean;
  isSubmitting: boolean;
  runResult: Omit<SubmissionResult, "submissionId"> | null;
  submissionResult: SubmissionResult | null;
  runErrorMessage: string | null;
  submissionErrorMessage: string | null;
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

function explainErrorMessage(errorMessage: string) {
  const normalized = errorMessage.toLowerCase();

  if (normalized.includes("is not a function")) {
    return "함수가 필요한 위치에 함수가 아닌 값을 전달했습니다. map/filter/reduce 콜백을 확인하세요.";
  }

  if (normalized.includes("cannot read") || normalized.includes("undefined")) {
    return "undefined 값을 참조하고 있습니다. 입력값과 객체/배열 접근 코드를 확인하세요.";
  }

  if (normalized.includes("module.exports must be a function")) {
    return "채점기는 module.exports로 내보낸 함수를 실행합니다. 함수가 export 되었는지 확인하세요.";
  }

  return "실행 중 예외가 발생했습니다. 에러 문구와 입력 케이스를 함께 확인해 보세요.";
}

function explainFailedResult(expectedOutput: unknown, actualOutput: unknown) {
  return `기대값(${formatValue(expectedOutput)})과 실제값(${formatValue(actualOutput)})이 다릅니다.`;
}

function describeEvaluationFocus(input: unknown) {
  if (Array.isArray(input)) {
    if (input.length === 0) {
      return "빈 배열 경계값 처리를 검증합니다.";
    }

    if (input.some((value) => typeof value === "number" && value < 0)) {
      return "음수/0을 포함한 배열 처리 정확성을 검증합니다.";
    }

    return "배열 순회와 원소 변환 로직을 검증합니다.";
  }

  if (typeof input === "string") {
    if (input.length === 0) {
      return "빈 문자열 경계값 처리를 검증합니다.";
    }

    return "문자열 순회 및 문자 조건 처리 로직을 검증합니다.";
  }

  if (typeof input === "number") {
    return "숫자 입력에 대한 계산 및 조건 처리 로직을 검증합니다.";
  }

  return "입력값 처리와 반환 형식의 일관성을 검증합니다.";
}

function sourceLabel(source: ResultSource | null) {
  if (source === "run") {
    return "Run · 공개 테스트";
  }

  if (source === "submit") {
    return "Submit · 전체 테스트";
  }

  return "";
}

export function ResultPanel({
  activeResultSource,
  isRunning,
  isSubmitting,
  runResult,
  submissionResult,
  runErrorMessage,
  submissionErrorMessage
}: ResultPanelProps) {
  const displayedResult =
    activeResultSource === "run"
      ? runResult
      : activeResultSource === "submit"
        ? submissionResult
        : null;

  const displayedError =
    activeResultSource === "run"
      ? runErrorMessage
      : activeResultSource === "submit"
        ? submissionErrorMessage
        : null;

  const isLoading =
    activeResultSource === "run" ? isRunning : activeResultSource === "submit" ? isSubmitting : false;

  const hasDetailedResult = Boolean(displayedError) || Boolean(displayedResult);

  return (
    <section className={`${hasDetailedResult ? "h-96" : "h-64"} border-t border-app-border bg-app-panel`}>
      <div className="flex h-10 items-center gap-4 border-b border-app-border px-4 text-sm">
        <span className="font-semibold">테스트 결과</span>
        <span className="text-app-muted">AI 리뷰</span>
        <span className="text-app-muted">콘솔</span>
      </div>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-1 gap-0 overflow-hidden md:grid-cols-2">
        <div className="overflow-y-auto border-r border-app-border p-4">
          {displayedError && (
            <div className="rounded-md border border-app-danger/40 bg-app-danger/10 p-3">
              <p className="text-sm font-semibold text-app-danger">
                {activeResultSource === "run" ? "실행 실패" : "제출 실패"}
              </p>
              <p className="mt-1 text-xs text-app-muted">{sourceLabel(activeResultSource)}</p>
              <p className="mt-1 text-sm text-app-danger/90">{displayedError}</p>
            </div>
          )}
          {!displayedError && isLoading && (
            <p className="text-sm text-app-muted">
              {activeResultSource === "run" ? "공개 테스트 실행 중..." : "전체 테스트 제출 중..."}
            </p>
          )}
          {!displayedError && !isLoading && displayedResult && (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                {displayedResult.status === "passed" ? (
                  <CheckCircle2 className="h-5 w-5 text-app-accent" />
                ) : (
                  <CircleAlert className="h-5 w-5 text-app-danger" />
                )}
                <p className="font-semibold">
                  {activeResultSource === "run" ? "실행 결과" : "제출 결과"}: <span className={statusClassName(displayedResult.status)}>{statusLabel(displayedResult.status)}</span>
                </p>
              </div>
              <p className="text-xs text-app-muted">{sourceLabel(activeResultSource)}</p>
              <p className="text-app-muted">
                점수 {displayedResult.score}점 · 실행 시간 {displayedResult.runtimeMs}ms
              </p>
              <ul className="space-y-1.5">
                {displayedResult.results.map((result, index) => (
                  <li key={`${result.testCaseId}-${index}`} className="rounded border border-app-border/70 px-2 py-1.5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-app-muted">테스트 {index + 1}</span>
                      <span className={statusClassName(result.status)}>{statusLabel(result.status)}</span>
                    </div>
                    <p className="mt-1 text-xs text-app-muted">평가 포인트: {describeEvaluationFocus(result.input)}</p>
                    {result.status === "error" && result.errorMessage && (
                      <div className="mt-1 space-y-1">
                        <p className="text-xs text-app-danger">{result.errorMessage}</p>
                        <p className="text-xs text-app-muted">원인: {explainErrorMessage(result.errorMessage)}</p>
                      </div>
                    )}
                    {result.status === "failed" && (
                      <div className="mt-1 space-y-1 text-xs text-app-muted">
                        <p>expected: {formatValue(result.expectedOutput)} / actual: {formatValue(result.actualOutput)}</p>
                        <p>원인: {explainFailedResult(result.expectedOutput, result.actualOutput)}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!displayedError && !isLoading && !displayedResult && !activeResultSource && (
            <p className="text-sm text-app-muted">Run 버튼으로 공개 테스트를 실행하세요.</p>
          )}
          {!displayedError && !isLoading && !displayedResult && activeResultSource && (
            <p className="text-sm text-app-muted">결과를 기다리는 중입니다.</p>
          )}
        </div>
        <div className="overflow-y-auto p-4">
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
