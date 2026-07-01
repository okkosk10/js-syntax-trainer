import type { ProblemDetail } from "@/features/problem/problem.repository";
import { getLessonGuideByCategory } from "@/features/lesson/lesson-guides";

type ProblemPanelProps = {
  problem: ProblemDetail | null;
  visibleHints?: string[];
};

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
  if (!problem) {
    return (
      <section className="h-full overflow-y-auto overflow-x-hidden border-l border-app-border bg-app-panel">
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
    <section className="h-full overflow-y-auto overflow-x-hidden border-l border-app-border bg-app-panel">
      <div className="border-b border-app-border px-4 py-3">
        <p className="text-xs font-semibold uppercase text-app-accent">
          {problem.category} / {formatDifficultyLabel(problem.difficulty)}
        </p>
        <h2 className="mt-2 text-lg font-semibold">{problem.title}</h2>
        <p className={`mt-1 text-xs ${progressLine.className}`}>{progressLine.text}</p>
      </div>
      <div className="space-y-5 p-4 text-sm leading-6 text-app-muted">
        <section className="rounded-lg border border-app-border bg-app-bg/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-app-accent">오늘의 학습</p>
          <h3 className="mt-2 text-base font-semibold text-app-text">{lessonGuide.title}</h3>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">목표</h4>
            <p className="mt-1 text-sm text-app-muted">{lessonGuide.goal}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">핵심 개념</h4>
            <ul className="mt-2 space-y-1 text-sm text-app-muted">
              {lessonGuide.concepts.map((concept) => (
                <li key={concept}>- {concept}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">풀이 접근 가이드</h4>
            <p className="mt-1 text-sm text-app-muted">{lessonGuide.explanation}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">예제</h4>
            <pre className="mt-2 overflow-x-auto rounded-md bg-app-panel p-3 text-xs leading-5 text-app-text">
              <code>{lessonGuide.exampleCode}</code>
            </pre>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">예제 해설</h4>
            <ul className="mt-2 space-y-1 text-sm text-app-muted">
              {lessonGuide.exampleExplanation.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">생각 순서</h4>
            <ol className="mt-2 space-y-1 text-sm text-app-muted">
              {lessonGuide.thinkingSteps.map((step, index) => (
                <li key={step}>{index + 1}. {step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-app-text">주의할 점</h4>
            <ul className="mt-2 space-y-1 text-sm text-app-muted">
              {lessonGuide.cautions.map((caution) => (
                <li key={caution}>- {caution}</li>
              ))}
            </ul>
          </div>
        </section>

        <p>{problem.description}</p>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">입력</h3>
          <p className="rounded-md bg-app-bg p-3 whitespace-pre-wrap break-words">{problem.tags.join(", ")}</p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">출력</h3>
          <p className="rounded-md bg-app-bg p-3 whitespace-pre-wrap break-words">
            {problem.explanation ?? "문제 설명을 참고하세요."}
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">평가 기준</h3>
          <p>공개 테스트와 숨김 테스트를 모두 통과해야 완료됩니다.</p>
        </div>
        {visibleHints.length > 0 && (
          <div className="rounded-md border border-app-accent/35 bg-app-accent/10 p-3">
            <h3 className="text-sm font-semibold text-app-text">{visibleHints.length > 1 ? "Hints" : "Hint"}</h3>
            <ul className="mt-2 space-y-1 text-sm text-app-muted">
              {visibleHints.map((hint, index) => (
                <li key={`${hint}-${index}`}>{index + 1}. {hint}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
