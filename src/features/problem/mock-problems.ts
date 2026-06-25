import type { ProblemDetail, ProblemListItem, ProblemProgress } from "@/features/problem/problem.repository";
import { getHintsByProblemSlug } from "@/features/problem/problem-hints";

type MockProblemTestCase = {
  id: string;
  input: unknown;
  expectedOutput: unknown;
  isHidden: boolean;
  order: number;
};

type MockProblemInternal = ProblemDetail & {
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

const mockProblems: MockProblemInternal[] = [
  {
    id: "mock-double-numbers",
    slug: "double-numbers",
    title: "배열의 숫자를 2배로 만들기",
    difficulty: "EASY",
    category: "Array",
    tags: ["map", "array", "function"],
    description:
      "정수 배열 numbers가 주어질 때, 각 원소를 2배로 만든 새로운 배열을 반환하는 함수를 작성하세요.",
    starterCode: `function doubleNumbers(numbers) {
  // 여기에 코드를 작성하세요.
}

module.exports = doubleNumbers;`,
    explanation: "예: [1, 2, 3] -> [2, 4, 6]",
    testCases: [
      { id: "mock-double-numbers-1", input: [1, 2, 3], expectedOutput: [2, 4, 6], isHidden: false, order: 1 },
      { id: "mock-double-numbers-2", input: [0, -2, 5], expectedOutput: [0, -4, 10], isHidden: false, order: 2 },
      { id: "mock-double-numbers-3", input: [], expectedOutput: [], isHidden: false, order: 3 },
      { id: "mock-double-numbers-4", input: [100, -100, 7], expectedOutput: [200, -200, 14], isHidden: true, order: 4 }
    ]
  },
  {
    id: "mock-count-vowels",
    slug: "count-vowels",
    title: "문자열의 모음 개수 세기",
    difficulty: "EASY",
    category: "String",
    tags: ["string", "loop", "condition"],
    description: "문자열 s에서 a, e, i, o, u 모음의 개수를 반환하세요. 대소문자는 구분하지 않습니다.",
    starterCode: `function countVowels(s) {
  // 여기에 코드를 작성하세요.
}

module.exports = countVowels;`,
    explanation: "예: 'Hello' -> 2",
    testCases: [
      { id: "mock-count-vowels-1", input: "Hello", expectedOutput: 2, isHidden: false, order: 1 },
      { id: "mock-count-vowels-2", input: "JavaScript", expectedOutput: 3, isHidden: false, order: 2 },
      { id: "mock-count-vowels-3", input: "BCD", expectedOutput: 0, isHidden: false, order: 3 },
      { id: "mock-count-vowels-4", input: "Queueing", expectedOutput: 5, isHidden: true, order: 4 }
    ]
  }
];

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
  const problem = mockProblems.find((item) => item.id === problemId);

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
