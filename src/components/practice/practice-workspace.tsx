"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, RotateCcw, Send } from "lucide-react";
import { MonacoCodeEditor } from "@/components/editor/monaco-code-editor";
import type { ProblemDetail, ProblemListItem, ProblemProgress } from "@/features/problem/problem.repository";
import type { SubmissionResult } from "@/features/submission/submission.types";
import { ProblemPanel } from "./problem-panel";
import { ProblemSidebar } from "./problem-sidebar";
import { ResultPanel } from "./result-panel";

const starterCode = `function doubleNumbers(numbers) {
  // 여기에 코드를 작성하세요.
}

module.exports = doubleNumbers;`;

const loadingMessages = [
  "문제 목록을 준비 중입니다...",
  "서버를 깨우는 중입니다...",
  "편집기와 테스트 환경을 연결하고 있습니다..."
];

type EditorMarker = {
  line: number;
  column?: number;
  message: string;
};

type CompletionState = {
  open: boolean;
  nextProblemSlug: string | null;
  allCompleted: boolean;
};

const initialCompletionState: CompletionState = {
  open: false,
  nextProblemSlug: null,
  allCompleted: false
};

function nextProblemProgress(previous: ProblemProgress | undefined, submission: SubmissionResult): ProblemProgress {
  const attempts = (previous?.attempts ?? 0) + 1;
  const passed = (previous?.passed ?? false) || submission.status === "passed";
  const bestScore = Math.max(previous?.bestScore ?? 0, submission.score);

  return {
    attempts,
    passed,
    bestScore,
    lastSubmittedAt: new Date().toISOString()
  };
}

function isSolved(problem: ProblemListItem) {
  return problem.progress?.passed ?? false;
}

function findNextProblemSlug(problems: ProblemListItem[], currentProblemId: string): string | null {
  const currentIndex = problems.findIndex((problem) => problem.id === currentProblemId);

  if (currentIndex < 0) {
    return null;
  }

  const nextProblems = problems.slice(currentIndex + 1);
  const nextUnsolved = nextProblems.find((problem) => !isSolved(problem));

  if (nextUnsolved) {
    return nextUnsolved.slug;
  }

  const nextByIndex = problems[currentIndex + 1];

  return nextByIndex?.slug ?? null;
}

function parseErrorLocation(errorMessage: string): { line: number; column?: number } | null {
  const patterns = [
    /evalmachine\.<anonymous>:(\d+):(\d+)/i,
    /<anonymous>:(\d+):(\d+)/i,
    /solution\.js:(\d+):(\d+)/i,
    /line\s+(\d+)\s+column\s+(\d+)/i
  ];

  for (const pattern of patterns) {
    const match = errorMessage.match(pattern);

    if (!match) {
      continue;
    }

    const line = Number.parseInt(match[1] ?? "", 10);
    const column = Number.parseInt(match[2] ?? "", 10);

    if (!Number.isNaN(line) && line > 0) {
      return {
        line,
        column: Number.isNaN(column) || column < 1 ? 1 : column
      };
    }
  }

  return null;
}

function toEditorMarkers(result: Omit<SubmissionResult, "submissionId"> | SubmissionResult | null): EditorMarker[] {
  if (!result) {
    return [];
  }

  const markers: EditorMarker[] = [];

  for (const testResult of result.results) {
    if (testResult.status !== "error" || !testResult.errorMessage) {
      continue;
    }

    const location = parseErrorLocation(testResult.errorMessage);

    if (!location) {
      continue;
    }

    markers.push({
      line: location.line,
      column: location.column,
      message: testResult.errorMessage
    });
  }

  return markers;
}

export function PracticeWorkspace() {
  const [code, setCode] = useState(starterCode);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState<Omit<SubmissionResult, "submissionId"> | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [activeResultSource, setActiveResultSource] = useState<"run" | "submit" | null>(null);
  const [problems, setProblems] = useState<ProblemListItem[]>([]);
  const [selectedProblemSlug, setSelectedProblemSlug] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemDetail | null>(null);
  const [isLoadingProblems, setIsLoadingProblems] = useState(true);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [completionState, setCompletionState] = useState<CompletionState>(initialCompletionState);
  const [editorMarkers, setEditorMarkers] = useState<EditorMarker[]>([]);

  const isInitialLoading = isLoadingProblems || (Boolean(selectedProblemSlug) && !selectedProblem);

  useEffect(() => {
    if (!isInitialLoading) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setLoadingMessageIndex((current) => (current + 1) % loadingMessages.length);
    }, 1100);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isInitialLoading]);

  useEffect(() => {
    let isActive = true;

    async function loadProblems() {
      const response = await fetch("/api/problems");
      const data = (await response.json()) as { problems: ProblemListItem[] };

      if (!isActive) {
        return;
      }

      setProblems(data.problems);
      setSelectedProblemSlug((currentSlug) => currentSlug ?? data.problems[0]?.slug ?? null);
      setIsLoadingProblems(false);
    }

    loadProblems().catch(() => {
      if (isActive) {
        setProblems([]);
        setSelectedProblemSlug(null);
        setIsLoadingProblems(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedProblemSlug) {
      setSelectedProblem(null);
      return;
    }

    const problemSlug = selectedProblemSlug;
    let isActive = true;

    async function loadProblem() {
      const response = await fetch(`/api/problems?slug=${encodeURIComponent(problemSlug)}`);

      if (!response.ok) {
        throw new Error("Failed to load problem");
      }

      const data = (await response.json()) as { problem: ProblemDetail };

      if (isActive) {
        setSelectedProblem(data.problem);
        setCode(data.problem.starterCode);
      }
    }

    loadProblem().catch(() => {
      if (isActive) {
        setSelectedProblem(null);
        setCode("");
      }
    });

    return () => {
      isActive = false;
    };
  }, [selectedProblemSlug]);

  const selectedProblemId = useMemo(
    () => problems.find((problem) => problem.slug === selectedProblemSlug)?.id ?? null,
    [problems, selectedProblemSlug]
  );

  const displayedResult = useMemo(() => {
    if (activeResultSource === "run") {
      return runResult;
    }

    if (activeResultSource === "submit") {
      return submissionResult;
    }

    return null;
  }, [activeResultSource, runResult, submissionResult]);

  useEffect(() => {
    setEditorMarkers(toEditorMarkers(displayedResult));
  }, [displayedResult]);

  function resetExecutionState() {
    setRunResult(null);
    setRunError(null);
    setSubmissionResult(null);
    setSubmissionError(null);
    setActiveResultSource(null);
    setEditorMarkers([]);
  }

  function closeCompletionModal() {
    setCompletionState(initialCompletionState);
  }

  function moveToProblem(problemSlug: string) {
    if (problemSlug === selectedProblemSlug) {
      return;
    }

    setCode("");
    resetExecutionState();
    closeCompletionModal();
    setSelectedProblemSlug(problemSlug);
  }

  async function runTests() {
    setActiveResultSource("run");

    if (!selectedProblemId) {
      setRunResult(null);
      setRunError("실행할 문제를 먼저 선택하세요.");
      return;
    }

    setIsRunning(true);
    setRunError(null);
    setRunResult(null);
    setEditorMarkers([]);

    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          problemId: selectedProblemId,
          code
        })
      });

      const data = (await response.json().catch(() => null)) as
        | (Omit<SubmissionResult, "submissionId"> & { message?: string; error?: string })
        | null;

      if (!response.ok) {
        const message = data?.message ?? data?.error ?? "실행에 실패했습니다.";
        throw new Error(message);
      }

      if (
        !data ||
        typeof data.status !== "string" ||
        typeof data.score !== "number" ||
        typeof data.runtimeMs !== "number" ||
        !Array.isArray(data.results)
      ) {
        throw new Error("실행 응답 형식이 올바르지 않습니다.");
      }

      setRunResult(data);
    } catch (error) {
      setRunResult(null);
      setRunError(error instanceof Error ? error.message : "네트워크 오류가 발생했습니다.");
    } finally {
      setIsRunning(false);
    }
  }

  async function handleSubmit() {
    if (!selectedProblemId) {
      setSubmissionResult(null);
      setSubmissionError("제출할 문제를 먼저 선택하세요.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionResult(null);
    setActiveResultSource("submit");
    setEditorMarkers([]);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          problemId: selectedProblemId,
          code
        })
      });

      const data = (await response.json().catch(() => null)) as Partial<SubmissionResult> & {
        message?: string;
        error?: string;
      } | null;

      if (!response.ok) {
        const message = data?.message ?? data?.error ?? "제출 처리에 실패했습니다.";
        throw new Error(message);
      }

      if (
        !data ||
        typeof data.status !== "string" ||
        typeof data.score !== "number" ||
        typeof data.runtimeMs !== "number" ||
        !Array.isArray(data.results)
      ) {
        throw new Error("제출 응답 형식이 올바르지 않습니다.");
      }

      const submission = data as SubmissionResult;
      setSubmissionResult(submission);

      const nextProblems = problems.map((problem) => {
        if (problem.id !== selectedProblemId) {
          return problem;
        }

        return {
          ...problem,
          progress: nextProblemProgress(problem.progress, submission)
        };
      });

      setProblems(nextProblems);

      setSelectedProblem((currentProblem) => {
        if (!currentProblem || currentProblem.id !== selectedProblemId) {
          return currentProblem;
        }

        return {
          ...currentProblem,
          progress: nextProblemProgress(currentProblem.progress, submission)
        };
      });

      if (submission.status === "passed") {
        const nextProblemSlug = findNextProblemSlug(nextProblems, selectedProblemId);
        setCompletionState({
          open: true,
          nextProblemSlug,
          allCompleted: nextProblemSlug === null
        });
      }
    } catch (error) {
      setSubmissionResult(null);
      setSubmissionError(error instanceof Error ? error.message : "네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex h-screen overflow-hidden bg-app-bg text-app-text">
      <ProblemSidebar
        problems={problems}
        selectedProblemId={selectedProblemId}
        onSelectProblem={moveToProblem}
      />
      <section className="relative flex min-w-0 flex-1 flex-col">
        {isInitialLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-app-bg/90 backdrop-blur-sm">
            <div className="w-[min(520px,90%)] rounded-2xl border border-app-border bg-app-panel/95 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-app-text">실습 환경 준비 중</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-app-accent [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-app-accent [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-app-accent" />
                </div>
              </div>
              <p className="mt-2 text-sm text-app-muted">{loadingMessages[loadingMessageIndex]}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-app-surface">
                <div className="loading-bar h-full w-1/2 rounded-full" />
              </div>
            </div>
          </div>
        )}
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-app-border bg-app-panel px-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded bg-app-surface px-3 py-1.5">solution.js</span>
            <span className="hidden text-app-muted sm:inline">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-8 items-center gap-2 rounded-md border border-app-border px-3 text-sm hover:bg-app-surface"
              onClick={() => {
                setCode(starterCode);
                resetExecutionState();
                closeCompletionModal();
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              className="inline-flex h-8 items-center gap-2 rounded-md border border-app-border px-3 text-sm hover:bg-app-surface disabled:cursor-not-allowed disabled:opacity-70"
              onClick={runTests}
              disabled={isRunning}
            >
              <Play className="h-4 w-4" />
              {isRunning ? "Running..." : "Run"}
            </button>
            <button
              className="inline-flex h-8 items-center gap-2 rounded-md bg-app-accent px-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-70"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </header>
        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_360px]">
          <div className="min-h-0">
            <MonacoCodeEditor value={code} onChange={setCode} markers={editorMarkers} />
          </div>
          <ProblemPanel problem={selectedProblem} />
        </div>
        <ResultPanel
          activeResultSource={activeResultSource}
          isRunning={isRunning}
          isSubmitting={isSubmitting}
          runResult={runResult}
          runErrorMessage={runError}
          submissionResult={submissionResult}
          submissionErrorMessage={submissionError}
          hasEditorMarkers={editorMarkers.length > 0}
        />

        {completionState.open && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-xl border border-app-border bg-app-panel p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-app-accent">Submit Completed</p>
              <h3 className="mt-2 text-lg font-semibold text-app-text">정답 제출을 완료했습니다.</h3>
              <p className="mt-2 text-sm text-app-muted">
                {completionState.allCompleted
                  ? "모든 문제 완료 상태입니다. 복습하거나 다른 풀이를 시도해 보세요."
                  : "아직 해결하지 않은 다음 문제로 이동할 수 있습니다."}
              </p>
              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  className="inline-flex h-9 items-center rounded-md border border-app-border px-3 text-sm hover:bg-app-surface"
                  onClick={closeCompletionModal}
                >
                  닫기
                </button>
                {completionState.nextProblemSlug && (
                  <button
                    className="inline-flex h-9 items-center rounded-md bg-app-accent px-3 text-sm font-semibold text-black"
                    onClick={() => moveToProblem(completionState.nextProblemSlug!)}
                  >
                    다음 문제
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
