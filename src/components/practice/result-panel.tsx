"use client";

import { useEffect, useMemo, useState } from "react";
import { Bot, CheckCircle2, ChevronDown, ChevronUp, CircleAlert, FlaskConical } from "lucide-react";
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
  hasEditorMarkers?: boolean;
};

type ResultTab = "tests" | "review";

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
  submissionErrorMessage,
  hasEditorMarkers = false
}: ResultPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<ResultTab>("tests");

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
  const summaryStatus = displayedError
    ? "error"
    : displayedResult?.status ?? (isLoading ? "running" : "idle");

  useEffect(() => {
    if (hasDetailedResult || isLoading) {
      setIsExpanded(true);
    }
  }, [hasDetailedResult, isLoading]);

  const summaryText = useMemo(() => {
    if (isLoading) {
      return activeResultSource === "run" ? "공개 테스트 실행 중..." : "전체 테스트 제출 중...";
    }

    if (displayedError) {
      return displayedError;
    }

    if (displayedResult) {
      return `${sourceLabel(activeResultSource)} · ${statusLabel(displayedResult.status)} · ${displayedResult.score}점 · ${displayedResult.runtimeMs}ms`;
    }

    return "Run 또는 Submit을 실행하면 결과가 표시됩니다.";
  }, [activeResultSource, displayedError, displayedResult, isLoading]);

  return (
    <section className={`${isExpanded ? "h-80" : "h-12"} shrink-0 border-t border-app-border bg-app-panel transition-[height] duration-200`}>
      <div className="flex h-12 items-center justify-between gap-3 px-4 text-sm">
        <div className="flex min-w-0 items-center gap-2">
          {summaryStatus === "passed" ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-app-accent" />
          ) : summaryStatus === "failed" || summaryStatus === "error" ? (
            <CircleAlert className="h-4 w-4 shrink-0 text-app-danger" />
          ) : (
            <FlaskConical className="h-4 w-4 shrink-0 text-app-muted" />
          )}
          <p className="truncate text-xs text-app-muted sm:text-sm">{summaryText}</p>
        </div>
        <button
          type="button"
          aria-expanded={isExpanded}
          className="inline-flex h-8 items-center gap-1 rounded-md border border-app-border px-2 text-xs text-app-muted hover:bg-app-surface hover:text-app-text"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? (
            <>
              접기
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              결과 보기
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="h-[calc(100%-3rem)] overflow-hidden border-t border-app-border">
          <div className="flex items-center gap-2 border-b border-app-border px-3 py-2">
            <button
              type="button"
              aria-pressed={activeTab === "tests"}
              className={`rounded-md px-2.5 py-1 text-xs ${
                activeTab === "tests" ? "bg-app-surface text-app-text" : "text-app-muted hover:text-app-text"
              }`}
              onClick={() => setActiveTab("tests")}
            >
              테스트 결과
            </button>
            <button
              type="button"
              aria-pressed={activeTab === "review"}
              className={`rounded-md px-2.5 py-1 text-xs ${
                activeTab === "review" ? "bg-app-surface text-app-text" : "text-app-muted hover:text-app-text"
              }`}
              onClick={() => setActiveTab("review")}
            >
              AI 리뷰
            </button>
          </div>

          {activeTab === "tests" && <div className="h-full overflow-y-auto p-4">
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
              {hasEditorMarkers && <p className="text-xs text-app-muted">에디터에서 오류 위치가 강조되었습니다.</p>}
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
          </div>}

          {activeTab === "review" && <div className="h-full overflow-y-auto p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
            <Bot className="h-4 w-4 text-app-accent" />
            AI 리뷰
            </div>
            <p className="mt-2 text-sm text-app-muted">
              테스트 결과와 코드 제출 이력을 바탕으로 개선점을 구조화해서 보여주는 영역입니다.
            </p>
            <p className="mt-2 text-sm text-app-muted">
              현재는 테스트 결과에 집중해 풀이를 안정화한 뒤, 필요할 때 리뷰를 확인하는 흐름을 권장합니다.
            </p>
          </div>}
        </div>
      )}
    </section>
  );
}
