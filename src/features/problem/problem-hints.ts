import { problemBank } from "@/features/problem/problem-bank";

const problemHintsBySlug: Record<string, string[]> = Object.fromEntries(
  problemBank.map((problem) => [problem.slug, [...problem.hints]])
);

export function getHintsByProblemSlug(slug: string): string[] | undefined {
  const hints = problemHintsBySlug[slug];

  return hints ? [...hints] : undefined;
}
