export function ProblemPanel() {
  return (
    <section className="h-full overflow-auto border-l border-app-border bg-app-panel">
      <div className="border-b border-app-border px-4 py-3">
        <p className="text-xs font-semibold uppercase text-app-accent">Array / Easy</p>
        <h2 className="mt-2 text-lg font-semibold">map으로 배열 변환하기</h2>
      </div>
      <div className="space-y-5 p-4 text-sm leading-6 text-app-muted">
        <p>
          숫자 배열을 입력받아 각 숫자를 두 배로 만든 새 배열을 반환하는 함수를 작성하세요.
          원본 배열은 변경하면 안 됩니다.
        </p>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">입력</h3>
          <pre className="rounded-md bg-app-bg p-3">[1, 2, 3]</pre>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">출력</h3>
          <pre className="rounded-md bg-app-bg p-3">[2, 4, 6]</pre>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-app-text">평가 기준</h3>
          <p>공개 테스트와 숨김 테스트를 모두 통과해야 완료됩니다.</p>
        </div>
      </div>
    </section>
  );
}
