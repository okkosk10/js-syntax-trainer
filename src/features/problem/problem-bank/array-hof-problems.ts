import { createCategoryProblems } from "./helpers";

export const arrayHigherOrderProblems = createCategoryProblems({
  prefix: "arr-hof",
  category: "배열 고차함수(map/filter/reduce/find/some/every)",
  count: 25,
  difficultyPlan: { EASY: 11, MEDIUM: 10, HARD: 4 },
  templates: [
    {
      key: "map-square",
      tags: ["array", "map", "number"],
      buildTitle: (variant) => `map으로 제곱 배열 만들기 ${variant + 1}`,
      buildDescription: () => "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요.",
      buildExplanation: () => "map 콜백에서 value * value를 반환하면 됩니다.",
      buildHints: () => [
        "원본 배열은 변경하지 마세요.",
        "음수도 제곱하면 양수가 됩니다.",
        "빈 배열은 빈 배열을 반환합니다."
      ],
      createPublicInputs: () => [[1, 2, 3], [-2, 0, 5], []],
      createHiddenInputs: () => [[10], [3, -3, 3]],
      solve: (input) => (input as number[]).map((value) => value * value)
    },
    {
      key: "filter-even",
      tags: ["array", "filter", "condition"],
      buildTitle: (variant) => `filter로 짝수 추출 ${variant + 1}`,
      buildDescription: () => "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요.",
      buildExplanation: () => "filter 콜백에서 value % 2 === 0 조건을 사용합니다.",
      buildHints: () => [
        "0도 짝수입니다.",
        "홀수만 있으면 빈 배열입니다.",
        "음수 짝수도 포함해야 합니다."
      ],
      createPublicInputs: () => [[1, 2, 3, 4], [1, 3, 5], [0, -2, -3]],
      createHiddenInputs: () => [[], [8, 8, 7]],
      solve: (input) => (input as number[]).filter((value) => value % 2 === 0)
    },
    {
      key: "reduce-sum",
      tags: ["array", "reduce", "accumulator"],
      buildTitle: (variant) => `reduce로 총합 계산 ${variant + 1}`,
      buildDescription: () => "숫자 배열 input의 합계를 reduce로 계산해 반환하세요.",
      buildExplanation: () => "초기값 0을 주고 누적합을 더합니다.",
      buildHints: () => [
        "reduce 초기값을 반드시 지정하세요.",
        "빈 배열은 0을 반환해야 합니다.",
        "양수/음수 혼합 케이스를 확인하세요."
      ],
      createPublicInputs: () => [[1, 2, 3], [], [-1, 1, -1, 1]],
      createHiddenInputs: () => [[100, 200], [-5, -5, 10]],
      solve: (input) => (input as number[]).reduce((sum, value) => sum + value, 0)
    },
    {
      key: "find-first",
      tags: ["array", "find", "object"],
      buildTitle: (variant) => `조건 만족 첫 항목 찾기 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { items, threshold }입니다. items에서 score가 threshold(${60 + variant}) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다.`,
      buildExplanation: () => "find로 객체를 찾고 결과가 없으면 null을 반환합니다.",
      buildHints: () => [
        "items는 { name, score } 형태입니다.",
        "조건을 만족하는 첫 번째 항목만 반환하세요.",
        "없을 때 undefined 대신 null을 반환합니다."
      ],
      createPublicInputs: (variant) => [
        {
          items: [
            { name: "a", score: 40 },
            { name: "b", score: 70 }
          ],
          threshold: 60 + variant
        },
        { items: [{ name: "x", score: 10 }], threshold: 50 },
        { items: [], threshold: 0 }
      ],
      createHiddenInputs: () => [
        {
          items: [
            { name: "kim", score: 90 },
            { name: "lee", score: 95 }
          ],
          threshold: 90
        },
        { items: [{ name: "solo", score: 89 }], threshold: 90 }
      ],
      solve: (input) => {
        const value = input as {
          items: Array<{ name: string; score: number }>;
          threshold: number;
        };

        const found = value.items.find((item) => item.score >= value.threshold);
        return found ? found.name : null;
      }
    },
    {
      key: "some-every",
      tags: ["array", "some", "every"],
      buildTitle: (variant) => `some/every 판별 ${variant + 1}`,
      buildDescription: () =>
        "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다.",
      buildExplanation: () => "some과 every를 각각 한 번씩 사용해 계산합니다.",
      buildHints: () => [
        "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
        "allFinite는 Number.isFinite를 활용하세요.",
        "빈 배열에서 every는 true를 반환합니다."
      ],
      createPublicInputs: () => [[1, 2, 3], [-1, 2], [Infinity, 1]],
      createHiddenInputs: () => [[], [NaN, 0]],
      solve: (input) => {
        const numbers = input as number[];
        return {
          hasNegative: numbers.some((value) => value < 0),
          allFinite: numbers.every((value) => Number.isFinite(value))
        };
      }
    }
  ]
});
