import Link from "next/link";
import { BarChart3, Code2, Library, Sparkles } from "lucide-react";

const features = [
  { icon: Code2, title: "Monaco Editor", text: "VSCode와 비슷한 편집 경험" },
  { icon: Library, title: "문제은행", text: "난이도와 태그 기반 문제 관리" },
  { icon: Sparkles, title: "AI 코드 리뷰", text: "테스트 결과를 반영한 학습 피드백" },
  { icon: BarChart3, title: "학습 통계", text: "약점, 성공률, 풀이 기록 추적" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-app-bg text-app-text">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-app-accent">AI JavaScript Practice Lab</p>
          <h1 className="text-4xl font-semibold tracking-normal sm:text-6xl">
            JavaScript 문법을 직접 쓰고, 테스트하고, 리뷰받는 훈련 플랫폼
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-app-muted">
            Monaco Editor 기반 풀이 화면, 문제은행, 자동 테스트 검증, AI 코드 리뷰, 학습 통계를
            하나의 확장 가능한 Next.js 아키텍처로 구성했습니다.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/practice"
              className="inline-flex h-10 items-center rounded-md bg-app-accent px-4 text-sm font-semibold text-black"
            >
              연습 시작
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-10 items-center rounded-md border border-app-border px-4 text-sm font-semibold text-app-text"
            >
              통계 보기
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-md border border-app-border bg-app-panel p-4">
              <feature.icon className="mb-4 h-5 w-5 text-app-accent" />
              <h2 className="text-sm font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm text-app-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
