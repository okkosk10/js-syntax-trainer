import { CheckCircle2, Circle, CircleDot } from "lucide-react";
import type { ProblemListItem } from "@/features/problem/problem.repository";

type ProblemSidebarProps = {
  problems: ProblemListItem[];
  selectedProblemId: string | null;
  onSelectProblem: (problemSlug: string) => void;
  mode?: "desktop" | "mobile";
};

function formatDifficultyLabel(difficulty: string) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

function compareDifficulty(left: string, right: string) {
  const order = {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2
  } as const;

  return (order[left as keyof typeof order] ?? 99) - (order[right as keyof typeof order] ?? 99);
}

function extractSequence(problem: ProblemListItem) {
  const match = problem.slug.match(/-(\d+)$/);
  return match ? Number.parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function compareProblemOrder(left: ProblemListItem, right: ProblemListItem) {
  const difficultyCompare = compareDifficulty(left.difficulty, right.difficulty);

  if (difficultyCompare !== 0) {
    return difficultyCompare;
  }

  return extractSequence(left) - extractSequence(right);
}

function groupProblemsByCategory(problems: ProblemListItem[]) {
  const categoryMap = new Map<string, ProblemListItem[]>();

  for (const problem of problems) {
    const current = categoryMap.get(problem.category) ?? [];
    current.push(problem);
    categoryMap.set(problem.category, current);
  }

  return [...categoryMap.entries()]
    .map(([category, items]) => {
      return {
        category,
        items: [...items].sort(compareProblemOrder)
      };
    })
    .sort((left, right) => left.category.localeCompare(right.category, "ko"));
}

function getProblemProgress(problem: ProblemListItem) {
  const progress = problem.progress;

  if (!progress || progress.attempts === 0) {
    return {
      label: "N",
      scoreText: null,
      className: "border-app-border/80 bg-app-bg text-app-muted",
      icon: Circle
    };
  }

  if (progress.passed) {
    return {
      label: "S",
      scoreText: `${progress.bestScore}%`,
      className: "border-app-accent/40 bg-app-accent/10 text-app-accent",
      icon: CheckCircle2
    };
  }

  return {
    label: "A",
    scoreText: `${progress.bestScore}%`,
    className: "border-app-danger/40 bg-app-danger/10 text-app-danger",
    icon: CircleDot
  };
}

export function ProblemSidebar({ problems, selectedProblemId, onSelectProblem, mode = "desktop" }: ProblemSidebarProps) {
  const groupedProblems = groupProblemsByCategory(problems);
  const isMobile = mode === "mobile";

  return (
    <aside
      className={`${
        isMobile ? "flex h-full w-full flex-col" : "hidden h-full w-64 shrink-0 md:flex md:flex-col xl:w-72"
      } border-r border-app-border bg-app-panel`}
    >
      <div className="flex h-12 items-center justify-between border-b border-app-border px-3">
        <span className="text-sm font-semibold">학습 목차</span>
        <span className="rounded-full border border-app-border bg-app-surface px-2 py-0.5 text-xs text-app-muted">
          {problems.length}문제
        </span>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {groupedProblems.map((group) => (
          <section key={group.category} className="mb-3 last:mb-0">
            <div className="sticky top-0 z-10 -mx-1 mb-1.5 flex items-center justify-between bg-app-panel/95 px-1 py-1.5 backdrop-blur-sm">
              <h3 className="truncate pr-2 text-[11px] font-semibold tracking-wide text-app-muted">{group.category}</h3>
              <span className="text-xs text-app-muted">{group.items.length}</span>
            </div>
            {group.items.map((problem) => {
              const progress = getProblemProgress(problem);
              const ProgressIcon = progress.icon;
              const isSelected = problem.id === selectedProblemId;

              return (
                <button
                  key={problem.id}
                  className={`mb-1.5 flex w-full items-start gap-2 rounded-md px-2 py-2 text-left hover:bg-app-surface ${
                    isSelected ? "bg-app-surface ring-1 ring-app-accent/30" : ""
                  }`}
                  onClick={() => onSelectProblem(problem.slug)}
                >
                  {isSelected ? (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-app-accent" />
                  ) : (
                    <Circle className="mt-0.5 h-3.5 w-3.5 text-app-muted" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] leading-5">{problem.title}</span>
                    <span className="mt-0.5 flex items-center justify-between gap-2 text-[11px] text-app-muted">
                      <span>{formatDifficultyLabel(problem.difficulty)}</span>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 ${progress.className}`}>
                        <ProgressIcon className="h-2.5 w-2.5" />
                        {progress.scoreText ? <span>{progress.scoreText}</span> : <span>{progress.label}</span>}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </section>
        ))}
      </div>
    </aside>
  );
}
