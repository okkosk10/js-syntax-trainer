import type { ProblemDetail, ProblemListItem, ProblemProgress } from "@/features/problem/problem.repository";
import { getHintsByProblemSlug } from "@/features/problem/problem-hints";
import { getProblemById, problemBank } from "@/features/problem/problem-bank";

type MockProblemTestCase = {
  id: string;
  input: unknown;
  expectedOutput: unknown;
  isHidden: boolean;
  order: number;
};

type MockProblemInternal = Omit<ProblemDetail, "progress"> & {
  testCases: MockProblemTestCase[];
};

type MockProblemExecution = {
  id: string;
  testCases: {
    id: string;
    input: unknown;
    expectedOutput: unknown;
  }[];
};

const mockProblems: MockProblemInternal[] = problemBank.map((problem) => ({
  id: problem.id,
  slug: problem.slug,
  title: problem.title,
  difficulty: problem.difficulty,
  category: problem.category,
  tags: problem.tags,
  description: problem.description,
  starterCode: problem.starterCode,
  explanation: problem.explanation,
  hints: [...problem.hints],
  testCases: problem.testCases.map((testCase) => ({
    id: testCase.id,
    input: testCase.input,
    expectedOutput: testCase.expectedOutput,
    isHidden: testCase.isHidden,
    order: testCase.order
  }))
}));

function toProblemDetail(problem: MockProblemInternal): ProblemDetail {
  return {
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    category: problem.category,
    tags: problem.tags,
    description: problem.description,
    starterCode: problem.starterCode,
    explanation: problem.explanation,
    hints: getHintsByProblemSlug(problem.slug),
    progress: {
      attempts: 0,
      passed: false,
      bestScore: 0,
      lastSubmittedAt: null
    }
  };
}

function defaultProgress(): ProblemProgress {
  return {
    attempts: 0,
    passed: false,
    bestScore: 0,
    lastSubmittedAt: null
  };
}

export function getMockProblemList(): ProblemListItem[] {
  return mockProblems.map((problem) => ({
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    category: problem.category,
    tags: problem.tags,
    progress: defaultProgress()
  }));
}

export function getMockProblemDetailBySlug(slug: string): ProblemDetail | null {
  const problem = mockProblems.find((item) => item.slug === slug);

  return problem ? toProblemDetail(problem) : null;
}

export function getInitialMockProblemDetail(): ProblemDetail | null {
  return mockProblems[0] ? toProblemDetail(mockProblems[0]) : null;
}

export function getMockProblemExecutionById(problemId: string): MockProblemExecution | null {
  const problem = getProblemById(problemId);

  if (!problem) {
    return null;
  }

  return {
    id: problem.id,
    testCases: problem.testCases
      .filter((testCase) => !testCase.isHidden)
      .sort((left, right) => left.order - right.order)
      .map((testCase) => ({
        id: testCase.id,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput
      }))
  };
}
