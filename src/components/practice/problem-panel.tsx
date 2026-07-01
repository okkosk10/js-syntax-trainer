"use client";

import { useState } from "react";
import type { ProblemDetail } from "@/features/problem/problem.repository";
import { getLessonGuideByCategory } from "@/features/lesson/lesson-guides";

type ProblemPanelProps = {
  problem: ProblemDetail | null;
  visibleHints?: string[];
};

type ProblemTab = "problem" | "guide" | "example" | "hint";

const panelTabs: { id: ProblemTab; label: string }[] = [
  { id: "problem", label: "문제" },
  { id: "guide", label: "가이드" },
  { id: "example", label: "예제" },
  { id: "hint", label: "힌트" }
];

function formatDifficultyLabel(difficulty: string) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

function getProgressLine(problem: ProblemDetail) {
  const progress = problem.progress;

  if (!progress || progress.attempts === 0) {
    return {
      text: "New",
      className: "text-app-muted"
    };
  }

  if (progress.passed) {
    return {
      text: `Solved · Best ${progress.bestScore}%`,
      className: "text-app-accent"
    };
  }

  return {
    text: `Attempted · Best ${progress.bestScore}%`,
    className: "text-app-danger"
  };
}

export function ProblemPanel({ problem, visibleHints = [] }: ProblemPanelProps) {
  const [activeTab, setActiveTab] = useState<ProblemTab>("problem");

  if (!problem) {
    return (
      <section className="h-full overflow-y-auto overflow-x-hidden border-l border-app-border bg-app-panel lg:max-w-[360px]">
        <div className="border-b border-app-border px-4 py-3">
          <p className="text-xs font-semibold uppercase text-app-accent">문제</p>
          <h2 className="mt-2 text-lg font-semibold">선택된 문제가 없습니다</h2>
        </div>
        <div className="space-y-5 p-4 text-sm leading-6 text-app-muted">
          <p>왼쪽 문제 목록에서 하나를 선택하면 상세 설명과 예제가 표시됩니다.</p>
        </div>
      </section>
    );
  }

  const progressLine = getProgressLine(problem);
  const lessonGuide = getLessonGuideByCategory(problem.category);

  return (
    <section className="h-full overflow-y-auto overflow-x-hidden border-l border-app-border bg-app-panel lg:max-w-[360px]">
      <div className="border-b border-app-border px-4 py-3">
        <p className="text-xs font-semibold uppercase text-app-accent">
          {problem.category} / {formatDifficultyLabel(problem.difficulty)}
        </p>
        <h2 className="mt-2 text-lg font-semibold">{problem.title}</h2>
        <p className={`mt-1 text-xs ${progressLine.className}`}>{progressLine.text}</p>
      </div>
      <div className="border-b border-app-border px-2 py-2">
        <div className="grid grid-cols-4 gap-1 rounded-md bg-app-bg p-1" role="tablist" aria-label="문제 패널 탭">
          {panelTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`rounded px-2 py-1.5 text-xs font-medium transition ${
                activeTab === tab.id ? "bg-app-panel text-app-text" : "text-app-muted hover:text-app-text"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 p-4 text-sm leading-6 text-app-muted">
        {activeTab === "problem" && (
          <>
            <p>{problem.description}</p>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-app-text">문제 요구사항</h3>
              <p className="rounded-md bg-app-bg p-3 whitespace-pre-wrap break-words">{problem.tags.join(", ")}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-app-text">반환/출력 힌트</h3>
              <p className="rounded-md bg-app-bg p-3 whitespace-pre-wrap break-words">
                {problem.explanation ?? "문제 설명을 참고하세요."}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-app-text">평가 기준</h3>
              <p>Run은 공개 테스트, Submit은 전체 테스트 기준으로 평가됩니다.</p>
            </div>
          </>
        )}

        {activeTab === "guide" && (
          <>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-app-accent">오늘의 학습</p>
              <h3 className="mt-1 text-base font-semibold text-app-text">{lessonGuide.title}</h3>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-app-text">목표</h4>
              <p className="mt-1">{lessonGuide.goal}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-app-text">핵심 개념</h4>
              <ul className="mt-2 space-y-1">
                {lessonGuide.concepts.map((concept) => (
                  <li key={concept}>- {concept}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-app-text">생각 순서</h4>
              <ol className="mt-2 space-y-1">
                {lessonGuide.thinkingSteps.map((step, index) => (
                  <li key={step}>{index + 1}. {step}</li>
                ))}
              </ol>
            </div>
          </>
        )}

        {activeTab === "example" && (
          <>
            <div>
              <h4 className="text-sm font-semibold text-app-text">예제 코드</h4>
              <pre className="mt-2 overflow-x-auto rounded-md bg-app-bg p-3 text-xs leading-5 text-app-text">
                <code>{lessonGuide.exampleCode}</code>
              </pre>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-app-text">예제 해설</h4>
              <ul className="mt-2 space-y-1">
                {lessonGuide.exampleExplanation.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-app-text">주의할 점</h4>
              <ul className="mt-2 space-y-1">
                {lessonGuide.cautions.map((caution) => (
                  <li key={caution}>- {caution}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeTab === "hint" && (
          <>
            {visibleHints.length > 0 ? (
              <ul className="space-y-2">
                {visibleHints.map((hint, index) => (
                  <li key={`${hint}-${index}`} className="rounded-md border border-app-accent/35 bg-app-accent/10 p-3">
                    <p className="text-xs font-semibold text-app-accent">힌트 {index + 1}</p>
                    <p className="mt-1 text-sm text-app-muted">{hint}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-md border border-app-border bg-app-bg p-3 text-sm text-app-muted">
                Run/Submit 후 필요할 때 힌트가 열립니다.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
