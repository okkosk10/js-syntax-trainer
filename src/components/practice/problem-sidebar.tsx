import { CheckCircle2, Circle, Filter } from "lucide-react";

const problems = [
  { id: "array-map-basics", title: "map으로 배열 변환하기", difficulty: "Easy", done: true },
  { id: "destructuring", title: "구조 분해 할당", difficulty: "Easy", done: false },
  { id: "closure-counter", title: "클로저 카운터", difficulty: "Medium", done: false },
  { id: "async-sequence", title: "비동기 순서 제어", difficulty: "Hard", done: false }
];

export function ProblemSidebar() {
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
            className="mb-2 flex w-full items-start gap-3 rounded-md px-3 py-3 text-left hover:bg-app-surface"
          >
            {problem.done ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-app-accent" />
            ) : (
              <Circle className="mt-0.5 h-4 w-4 text-app-muted" />
            )}
            <span className="min-w-0">
              <span className="block truncate text-sm">{problem.title}</span>
              <span className="mt-1 block text-xs text-app-muted">{problem.difficulty}</span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
