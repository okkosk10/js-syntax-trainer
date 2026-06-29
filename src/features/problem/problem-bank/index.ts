import type { ProblemBankProblem } from "./types";
import { staticProblems } from "./static-problems";

export const problemBank: ProblemBankProblem[] = staticProblems;

const slugSet = new Set<string>();
const idSet = new Set<string>();

for (const problem of problemBank) {
  if (slugSet.has(problem.slug)) {
    throw new Error(`Duplicate problem slug: ${problem.slug}`);
  }

  if (idSet.has(problem.id)) {
    throw new Error(`Duplicate problem id: ${problem.id}`);
  }

  slugSet.add(problem.slug);
  idSet.add(problem.id);
}

export function getProblemBySlug(slug: string) {
  return problemBank.find((problem) => problem.slug === slug) ?? null;
}

export function getProblemById(problemId: string) {
  return problemBank.find((problem) => problem.id === problemId) ?? null;
}
