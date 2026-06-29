import type { ProblemBankProblem } from "./types";
import { variablesConditionsProblems } from "./variables-conditions-problems";
import { loopProblems } from "./loop-problems";
import { arrayBasicProblems } from "./array-basic-problems";
import { stringProblems } from "./string-problems";
import { objectProblems } from "./object-problems";
import { functionScopeClosureProblems } from "./function-scope-problems";
import { arrayHigherOrderProblems } from "./array-hof-problems";
import { dateNumberRegexProblems } from "./date-number-regex-problems";
import { asyncProblems } from "./async-problems";
import { miniPracticeProblems } from "./mini-problems";

export const problemBank: ProblemBankProblem[] = [
  ...variablesConditionsProblems,
  ...loopProblems,
  ...arrayBasicProblems,
  ...stringProblems,
  ...objectProblems,
  ...functionScopeClosureProblems,
  ...arrayHigherOrderProblems,
  ...dateNumberRegexProblems,
  ...asyncProblems,
  ...miniPracticeProblems
];

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
