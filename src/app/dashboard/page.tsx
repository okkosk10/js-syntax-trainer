import { getDashboardStats } from "@/features/stats/stats.service";

export const dynamic = "force-dynamic";

function formatDateTime(value: string | null) {
  if (!value) {
    return "아직 기록 없음";
  }

  return new Date(value).toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const metricCards = [
    {
      label: "전체 문제 수",
      value: stats.totalProblems.toString(),
      hint: "문제은행 기준"
    },
    {
      label: "해결한 문제",
      value: stats.solvedProblems.toString(),
      hint: `진행률 ${stats.progressPercent}%`
    },
    {
      label: "시도한 문제",
      value: stats.attemptedProblems.toString(),
      hint: stats.attemptedProblems === 0 ? "아직 시도한 문제가 없습니다" : "LearningStat 기준"
    },
    {
      label: "평균 최고 점수",
      value: `${stats.averageBestScore}점`,
      hint: "시도한 문제 평균"
    },
    {
      label: "총 제출 수",
      value: stats.totalSubmissions.toString(),
      hint: "Submission 기준"
    },
    {
      label: "최근 제출 일시",
      value: formatDateTime(stats.recentSubmissionAt),
      hint: stats.recentSubmissionAt ? "가장 최근 제출" : "제출 기록을 만들면 표시됩니다"
    }
  ];

  return (
    <main className="min-h-screen bg-app-bg p-6 text-app-text">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold">학습 대시보드</h1>
        <p className="mt-2 text-sm text-app-muted">데모 사용자 기준으로 누적 학습 현황을 보여줍니다.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metricCards.map((card) => (
            <section key={card.label} className="rounded-md border border-app-border bg-app-panel p-4">
              <p className="text-sm text-app-muted">{card.label}</p>
              <strong className="mt-3 block text-2xl leading-tight">{card.value}</strong>
              <span className="mt-2 block text-xs text-app-muted">{card.hint}</span>
            </section>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <section className="rounded-md border border-app-border bg-app-panel p-5">
            <h2 className="text-sm font-semibold">난이도별 진행률</h2>
            <div className="mt-4 space-y-3">
              {stats.difficultyProgress.map((item) => (
                <div key={item.difficulty} className="rounded-md bg-app-surface p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.difficulty}</span>
                    <span className="text-app-muted">{item.solved}/{item.total} 해결</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-app-border">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: `${Math.min(item.progressPercent, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-app-muted">
                    시도 {item.attempted}개 · 진행률 {item.progressPercent}%
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-app-border bg-app-panel p-5">
            <h2 className="text-sm font-semibold">약한 카테고리</h2>
            <div className="mt-4 space-y-3">
              {stats.weakCategories.length === 0 ? (
                <p className="rounded-md bg-app-surface p-4 text-sm text-app-muted">
                  아직 약한 카테고리로 분류된 항목이 없습니다.
                </p>
              ) : (
                stats.weakCategories.map((item) => (
                  <div key={item.category} className="rounded-md bg-app-surface p-3">
                    <p className="text-sm font-medium">{item.category}</p>
                    <p className="mt-1 text-xs text-app-muted">{item.reason}</p>
                    <p className="mt-2 text-xs text-app-muted">
                      평균 최고 점수 {item.averageBestScore}점 · 해결 비율 {item.solvedPercent}%
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-md border border-app-border bg-app-panel p-5">
          <h2 className="text-sm font-semibold">카테고리별 진행률</h2>
          {stats.categoryProgress.length === 0 ? (
            <p className="mt-4 rounded-md bg-app-surface p-4 text-sm text-app-muted">
              아직 카테고리 진행 데이터가 없습니다.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-app-muted">
                  <tr className="border-b border-app-border">
                    <th className="px-2 py-2 font-medium">카테고리</th>
                    <th className="px-2 py-2 font-medium">해결/전체</th>
                    <th className="px-2 py-2 font-medium">시도</th>
                    <th className="px-2 py-2 font-medium">평균 최고 점수</th>
                    <th className="px-2 py-2 font-medium">진행률</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.categoryProgress.map((item) => (
                    <tr key={item.category} className="border-b border-app-border/60">
                      <td className="px-2 py-2">{item.category}</td>
                      <td className="px-2 py-2 text-app-muted">
                        {item.solved}/{item.total}
                      </td>
                      <td className="px-2 py-2 text-app-muted">{item.attempted}</td>
                      <td className="px-2 py-2 text-app-muted">{item.averageBestScore}점</td>
                      <td className="px-2 py-2 text-app-muted">{item.progressPercent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
