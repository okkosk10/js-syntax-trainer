import { Bot, CheckCircle2, CircleAlert } from "lucide-react";

type ResultPanelProps = {
  status: "idle" | "running" | "passed" | "failed";
};

export function ResultPanel({ status }: ResultPanelProps) {
  const isPassed = status === "passed";

  return (
    <section className="h-52 border-t border-app-border bg-app-panel">
      <div className="flex h-10 items-center gap-4 border-b border-app-border px-4 text-sm">
        <span className="font-semibold">테스트 결과</span>
        <span className="text-app-muted">AI 리뷰</span>
        <span className="text-app-muted">콘솔</span>
      </div>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-1 gap-0 md:grid-cols-2">
        <div className="border-r border-app-border p-4">
          {status === "idle" && <p className="text-sm text-app-muted">Run 버튼으로 공개 테스트를 실행하세요.</p>}
          {status === "running" && <p className="text-sm text-app-muted">테스트 실행 중...</p>}
          {status !== "idle" && status !== "running" && (
            <div className="flex items-start gap-3">
              {isPassed ? (
                <CheckCircle2 className="h-5 w-5 text-app-accent" />
              ) : (
                <CircleAlert className="h-5 w-5 text-app-danger" />
              )}
              <div>
                <p className="text-sm font-semibold">{isPassed ? "3개 테스트 통과" : "1개 테스트 실패"}</p>
                <p className="mt-1 text-sm text-app-muted">
                  {isPassed ? "제출하면 숨김 테스트까지 검증합니다." : "빈 배열 입력 케이스를 확인하세요."}
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
