import type { ProblemDetail, ProblemListItem } from "@/features/problem/problem.repository";

const mockProblemDetails: ProblemDetail[] = [
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
    explanation: "예: [1, 2, 3] -> [2, 4, 6]"
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
    explanation: "예: 'Hello' -> 2"
  }
];

export function getMockProblemList(): ProblemListItem[] {
  return mockProblemDetails.map((problem) => ({
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    category: problem.category,
    tags: problem.tags
  }));
}

export function getMockProblemDetailBySlug(slug: string): ProblemDetail | null {
  return mockProblemDetails.find((problem) => problem.slug === slug) ?? null;
}

export function getInitialMockProblemDetail(): ProblemDetail | null {
  return mockProblemDetails[0] ?? null;
}
