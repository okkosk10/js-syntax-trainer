import { createCategoryProblems } from "./helpers";

export const loopProblems = createCategoryProblems({
  prefix: "loop",
  category: "반복문",
  count: 20,
  difficultyPlan: { EASY: 12, MEDIUM: 6, HARD: 2 },
  templates: [
    {
      key: "sum-to-n",
      tags: ["for", "loop", "number"],
      buildTitle: (variant) => `1부터 N까지 합 구하기 ${variant + 1}`,
      buildDescription: () => "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요.",
      buildExplanation: () => "for문으로 누적합 변수를 업데이트하면 됩니다.",
      buildHints: () => [
        "합계를 담을 변수를 0으로 시작하세요.",
        "반복 범위를 1부터 n까지 정확히 맞추세요.",
        "n이 0 이하인 경우를 먼저 처리하면 안전합니다."
      ],
      createPublicInputs: () => [5, 1, 0],
      createHiddenInputs: () => [10, -3],
      solve: (input) => {
        const n = input as number;
        if (n < 1) {
          return 0;
        }

        let sum = 0;
        for (let i = 1; i <= n; i += 1) {
          sum += i;
        }

        return sum;
      }
    },
    {
      key: "count-char",
      tags: ["for", "string", "condition"],
      buildTitle: (variant) => `문자 개수 세기 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: ${String.fromCharCode(97 + (variant % 5))})`,
      buildExplanation: () => "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다.",
      buildHints: () => [
        "text와 target을 모두 소문자로 맞추세요.",
        "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
        "빈 문자열일 때 결과가 0인지 확인하세요."
      ],
      createPublicInputs: (variant) => {
        const target = String.fromCharCode(97 + (variant % 5));
        return [
          { text: `A${target}${target}b`, target },
          { text: "JavaScript", target: "a" },
          { text: "", target }
        ];
      },
      createHiddenInputs: (variant) => {
        const target = String.fromCharCode(98 + (variant % 4));
        return [
          { text: "BBBBbb", target },
          { text: "12345", target }
        ];
      },
      solve: (input) => {
        const value = input as { text: string; target: string };
        const text = value.text.toLowerCase();
        const target = value.target.toLowerCase();
        let count = 0;

        for (const char of text) {
          if (char === target) {
            count += 1;
          }
        }

        return count;
      }
    },
    {
      key: "range-step",
      tags: ["while", "loop", "array"],
      buildTitle: (variant) => `간격 배열 만들기 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다.",
      buildExplanation: () => "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다.",
      buildHints: () => [
        "step이 0 이하인지 먼저 확인하세요.",
        "현재 값이 end를 넘기 전까지 반복하세요.",
        "음수 시작값이나 start > end도 테스트해 보세요."
      ],
      createPublicInputs: (variant) => [
        { start: 0, end: 6 + variant, step: 2 },
        { start: -2, end: 2, step: 2 },
        { start: 5, end: 3, step: 1 }
      ],
      createHiddenInputs: (variant) => [
        { start: 1, end: 1 + variant, step: 0 },
        { start: 3, end: 9, step: 3 }
      ],
      solve: (input) => {
        const value = input as { start: number; end: number; step: number };
        if (value.step <= 0) {
          return [];
        }

        const result: number[] = [];
        let current = value.start;

        while (current <= value.end) {
          result.push(current);
          current += value.step;
        }

        return result;
      }
    },
    {
      key: "factorial",
      tags: ["loop", "math", "number"],
      buildTitle: (variant) => `팩토리얼 계산 ${variant + 1}`,
      buildDescription: () =>
        "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요.",
      buildExplanation: () => "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요.",
      buildHints: () => [
        "n이 음수인지 먼저 처리하세요.",
        "n이 0일 때는 반복 없이 1을 반환합니다.",
        "곱셈 누적값은 1에서 시작해야 합니다."
      ],
      createPublicInputs: (variant) => [3 + (variant % 3), 0, -1],
      createHiddenInputs: () => [5, 1],
      solve: (input) => {
        const n = input as number;
        if (n < 0) {
          return null;
        }

        let result = 1;
        for (let i = 2; i <= n; i += 1) {
          result *= i;
        }

        return result;
      }
    }
  ]
});
