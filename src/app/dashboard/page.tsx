const cards = [
  ["완료한 문제", "12", "+3 this week"],
  ["평균 점수", "84", "hidden tests 포함"],
  ["연속 학습", "5일", "최근 제출 기준"],
  ["취약 카테고리", "closure", "추천 문제에 반영"]
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-app-bg p-6 text-app-text">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold">학습 통계</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([label, value, hint]) => (
            <section key={label} className="rounded-md border border-app-border bg-app-panel p-4">
              <p className="text-sm text-app-muted">{label}</p>
              <strong className="mt-3 block text-3xl">{value}</strong>
              <span className="mt-2 block text-xs text-app-muted">{hint}</span>
            </section>
          ))}
        </div>
        <section className="mt-4 rounded-md border border-app-border bg-app-panel p-5">
          <h2 className="text-sm font-semibold">다음 확장 포인트</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {["난이도별 성공률", "태그별 취약점", "추천 문제 큐"].map((item) => (
              <div key={item} className="rounded-md bg-app-surface p-4 text-sm text-app-muted">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
