import { Difficulty, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const problems = [
  {
    id: "mock-double-numbers",
    slug: "double-numbers",
    title: "배열의 숫자를 2배로 만들기",
    description:
      "정수 배열 numbers가 주어집니다. 각 원소를 2배로 만든 새 배열을 반환하는 함수를 작성하세요.",
    difficulty: Difficulty.EASY,
    category: "Array",
    tags: ["map", "array", "function"],
    starterCode: `function doubleNumbers(numbers) {
  // 여기에 코드를 작성하세요.
}

module.exports = doubleNumbers;`,
    explanation: "예: [1, 2, 3] -> [2, 4, 6]",
    hints: [
      "입력 배열을 직접 수정하지 말고, 새 배열을 반환하는 방식으로 작성해 보세요.",
      "배열의 각 원소를 같은 순서로 2배 변환해야 합니다. map을 쓰면 간결합니다.",
      "빈 배열이 들어와도 오류 없이 []를 반환하는지 확인하세요."
    ],
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
    description:
      "문자열 s에서 a, e, i, o, u 모음의 개수를 반환하세요. 대소문자는 구분하지 않습니다.",
    difficulty: Difficulty.EASY,
    category: "String",
    tags: ["string", "loop", "condition"],
    starterCode: `function countVowels(s) {
  // 여기에 코드를 작성하세요.
}

module.exports = countVowels;`,
    explanation: "예: 'Hello' -> 2",
    hints: [
      "모음 집합(a, e, i, o, u)을 먼저 정해 두고 문자별로 포함 여부를 검사해 보세요.",
      "대소문자 구분이 없으므로 문자열을 한 번 소문자로 바꾼 뒤 순회하면 편합니다.",
      "모음이 없는 문자열과 빈 문자열 케이스에서 0을 정확히 반환하는지 점검하세요."
    ],
    testCases: [
      { id: "mock-count-vowels-1", input: "Hello", expectedOutput: 2, isHidden: false, order: 1 },
      { id: "mock-count-vowels-2", input: "JavaScript", expectedOutput: 3, isHidden: false, order: 2 },
      { id: "mock-count-vowels-3", input: "BCD", expectedOutput: 0, isHidden: false, order: 3 },
      { id: "mock-count-vowels-4", input: "Queueing", expectedOutput: 5, isHidden: true, order: 4 }
    ]
  }
];

async function main() {
  for (const problem of problems) {
    await prisma.problem.upsert({
      where: { id: problem.id },
      update: {
        slug: problem.slug,
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty,
        category: problem.category,
        tags: problem.tags,
        starterCode: problem.starterCode,
        explanation: problem.explanation,
        isPublished: true,
        testCases: {
          deleteMany: {},
          create: problem.testCases.map((testCase) => ({
            id: testCase.id,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            isHidden: testCase.isHidden,
            order: testCase.order
          }))
        }
      },
      create: {
        id: problem.id,
        slug: problem.slug,
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty,
        category: problem.category,
        tags: problem.tags,
        starterCode: problem.starterCode,
        explanation: problem.explanation,
        isPublished: true,
        testCases: {
          create: problem.testCases.map((testCase) => ({
            id: testCase.id,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            isHidden: testCase.isHidden,
            order: testCase.order
          }))
        }
      }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
