import { createCategoryProblems } from "./helpers";

export const asyncProblems = createCategoryProblems({
  prefix: "async",
  category: "비동기 Promise/async/await",
  count: 15,
  difficultyPlan: { EASY: 5, MEDIUM: 7, HARD: 3 },
  templates: [
    {
      key: "double-after-await",
      tags: ["async", "await", "promise"],
      isAsync: true,
      buildTitle: (variant) => `await 후 2배 반환 ${variant + 1}`,
      buildDescription: () =>
        "숫자 input을 Promise.resolve로 한 번 감싼 뒤 await으로 받아 2배 값을 반환하는 async 함수를 작성하세요.",
      buildExplanation: () => "await Promise.resolve(input)으로 값을 받은 뒤 계산하면 됩니다.",
      buildHints: () => [
        "함수 선언을 async로 시작하세요.",
        "Promise.resolve를 await으로 풀어 값을 얻으세요.",
        "반환값은 숫자이며 자동으로 Promise로 감싸집니다."
      ],
      createPublicInputs: () => [3, 0, -2],
      createHiddenInputs: () => [100, 1],
      solve: (input) => (input as number) * 2
    },
    {
      key: "sum-object",
      tags: ["async", "object", "await"],
      isAsync: true,
      buildTitle: (variant) => `Promise 객체 합산 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { a, b }입니다. Promise.resolve({ a, b })를 await 한 뒤 a + b를 반환하세요.",
      buildExplanation: () => "비동기에서 객체를 받아 구조 분해로 합산하면 됩니다.",
      buildHints: () => [
        "await 결과를 변수에 담아 사용하세요.",
        "숫자 합산이므로 문자열 결합이 되지 않게 주의하세요.",
        "음수 입력도 정상 처리되어야 합니다."
      ],
      createPublicInputs: () => [{ a: 1, b: 2 }, { a: 0, b: 0 }, { a: -5, b: 3 }],
      createHiddenInputs: () => [{ a: 100, b: 200 }, { a: 7, b: -7 }],
      solve: (input) => {
        const value = input as { a: number; b: number };
        return value.a + value.b;
      }
    },
    {
      key: "all-length",
      tags: ["async", "promise-all", "array"],
      isAsync: true,
      buildTitle: (variant) => `Promise.all 문자열 길이 합 ${variant + 1}`,
      buildDescription: () =>
        "문자열 배열 input을 Promise.all로 처리한 뒤 전체 문자열 길이 합을 반환하는 async 함수를 작성하세요.",
      buildExplanation: () => "input.map(Promise.resolve) 후 Promise.all 결과를 reduce로 합산하면 됩니다.",
      buildHints: () => [
        "Promise.all은 배열을 그대로 유지해 반환합니다.",
        "길이 합산은 reduce가 편리합니다.",
        "빈 배열이면 0을 반환해야 합니다."
      ],
      createPublicInputs: () => [["a", "bc"], [], ["JS", "TS", "Node"]],
      createHiddenInputs: () => [["", ""], ["hello"]],
      solve: (input) => (input as string[]).reduce((sum, value) => sum + value.length, 0)
    },
    {
      key: "safe-await",
      tags: ["async", "try-catch", "error"],
      isAsync: true,
      buildTitle: (variant) => `await 예외 안전 처리 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { shouldFail, value }입니다. shouldFail이 true면 에러를 catch하여 -1을 반환하고, 아니면 value를 반환하세요.",
      buildExplanation: () => "try/catch 안에서 Promise reject/resolve를 분기하면 됩니다.",
      buildHints: () => [
        "shouldFail에 따라 resolve/reject를 만들 수 있습니다.",
        "catch에서는 고정값 -1을 반환하세요.",
        "성공 케이스는 value를 그대로 반환합니다."
      ],
      createPublicInputs: () => [
        { shouldFail: false, value: 3 },
        { shouldFail: true, value: 10 },
        { shouldFail: false, value: -2 }
      ],
      createHiddenInputs: () => [
        { shouldFail: true, value: 0 },
        { shouldFail: false, value: 100 }
      ],
      solve: (input) => {
        const value = input as { shouldFail: boolean; value: number };
        return value.shouldFail ? -1 : value.value;
      }
    },
    {
      key: "chain",
      tags: ["promise", "then", "async"],
      isAsync: true,
      buildTitle: (variant) => `Promise 체인 계산 ${variant + 1}`,
      buildDescription: (variant) =>
        `숫자 input을 Promise 체인으로 처리해 (input + ${variant + 1}) * 3 값을 반환하세요.`,
      buildExplanation: () => "Promise.resolve(input).then(...).then(...) 패턴을 사용하면 됩니다.",
      buildHints: () => [
        "첫 then에서 덧셈을 처리하세요.",
        "다음 then에서 곱셈을 처리합니다.",
        "최종 결과는 숫자 하나여야 합니다."
      ],
      createPublicInputs: () => [1, 0, -4],
      createHiddenInputs: () => [10, 100],
      solve: (input, variant) => ((input as number) + (variant + 1)) * 3
    }
  ]
});
