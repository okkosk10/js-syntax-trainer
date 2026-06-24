import { CheckCircle2, Circle, Filter } from "lucide-react";
import type { ProblemListItem } from "@/features/problem/problem.repository";

type ProblemSidebarProps = {
  problems: ProblemListItem[];
  selectedProblemId: string | null;
  onSelectProblem: (problemSlug: string) => void;
};

function formatDifficultyLabel(difficulty: string) {
  return difficulty.charAt(0) + difficulty.slice(1).toLowerCase();
}

export function ProblemSidebar({ problems, selectedProblemId, onSelectProblem }: ProblemSidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-app-border bg-app-panel md:block">
      <div className="flex h-12 items-center justify-between border-b border-app-border px-4">
        <span className="text-sm font-semibold">문제은행</span>
        <button className="rounded p-1 text-app-muted hover:bg-app-surface" title="필터">
          <Filter className="h-4 w-4" />
        </button>
      </div>
      <div className="p-3">
        {problems.map((problem) => (
          <button
            key={problem.id}
            className={`mb-2 flex w-full items-start gap-3 rounded-md px-3 py-3 text-left hover:bg-app-surface ${
              selectedProblemId === problem.id ? "bg-app-surface" : ""
            }`}
            onClick={() => onSelectProblem(problem.slug)}
          >
            {selectedProblemId === problem.id ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-app-accent" />
            ) : (
              <Circle className="mt-0.5 h-4 w-4 text-app-muted" />
            )}
            <span className="min-w-0">
              <span className="block truncate text-sm">{problem.title}</span>
              <span className="mt-1 block text-xs text-app-muted">{formatDifficultyLabel(problem.difficulty)}</span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
