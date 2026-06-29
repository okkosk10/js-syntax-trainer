import { createCategoryProblems } from "./helpers";

export const functionScopeClosureProblems = createCategoryProblems({
  prefix: "fn-scope",
  category: "함수/스코프/클로저 기초",
  count: 20,
  difficultyPlan: { EASY: 10, MEDIUM: 8, HARD: 2 },
  templates: [
    {
      key: "default-arg",
      tags: ["function", "default", "parameter"],
      buildTitle: (variant) => `기본값 인자 처리 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요.",
      buildExplanation: () => "null 병합 연산자(??)를 활용하면 간단합니다.",
      buildHints: () => [
        "b가 0일 때는 기본값을 쓰면 안 됩니다.",
        "undefined와 null만 기본값으로 치환하세요.",
        "객체 입력의 필드 접근 오타를 주의하세요."
      ],
      createPublicInputs: () => [{ a: 5, b: 2 }, { a: 5, b: undefined }, { a: 1, b: null }],
      createHiddenInputs: () => [{ a: -3, b: 0 }, { a: 10, b: 20 }],
      solve: (input) => {
        const value = input as { a: number; b: number | null | undefined };
        return value.a + (value.b ?? 10);
      }
    },
    {
      key: "block-scope",
      tags: ["scope", "let", "loop"],
      buildTitle: (variant) => `블록 스코프 합산 ${variant + 1}`,
      buildDescription: () =>
        "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요.",
      buildExplanation: () => "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다.",
      buildHints: () => [
        "0은 양수에 포함하지 않습니다.",
        "for...of 안에서 조건에 맞을 때만 더하세요.",
        "빈 배열이면 0을 반환합니다."
      ],
      createPublicInputs: () => [[1, -1, 2, 0], [-3, -2], []],
      createHiddenInputs: () => [[10, 20, -5], [0, 0, 1]],
      solve: (input) => {
        const numbers = input as number[];
        let sum = 0;

        for (const value of numbers) {
          if (value > 0) {
            sum += value;
          }
        }

        return sum;
      }
    },
    {
      key: "closure-counter",
      tags: ["closure", "function", "array"],
      buildTitle: (variant) => `클로저 카운터 시뮬레이션 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: ${variant})`,
      buildExplanation: () => "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다.",
      buildHints: () => [
        "함수 안에 함수(클로저)를 만들어 보세요.",
        "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
        "steps가 0이면 빈 배열입니다."
      ],
      createPublicInputs: (variant) => [
        { start: variant, steps: 3 },
        { start: 10, steps: 0 },
        { start: -2, steps: 2 }
      ],
      createHiddenInputs: () => [{ start: 0, steps: 5 }, { start: 100, steps: 1 }],
      solve: (input) => {
        const value = input as { start: number; steps: number };
        let current = value.start;

        function nextValue() {
          current += 1;
          return current;
        }

        const result: number[] = [];
        for (let i = 0; i < value.steps; i += 1) {
          result.push(nextValue());
        }

        return result;
      }
    },
    {
      key: "compose",
      tags: ["function", "composition", "math"],
      buildTitle: (variant) => `함수 조합 계산 ${variant + 1}`,
      buildDescription: (variant) =>
        `숫자 input에 대해 add(x)=x+${variant + 2}, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요.`,
      buildExplanation: () => "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요.",
      buildHints: () => [
        "연산 순서는 add 후 mul입니다.",
        "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
        "음수 입력도 동일 규칙으로 계산하세요."
      ],
      createPublicInputs: () => [1, 0, -3],
      createHiddenInputs: () => [10, -10],
      solve: (input, variant) => {
        const n = input as number;
        const add = (value: number) => value + (variant + 2);
        const mul = (value: number) => value * 2;

        return mul(add(n));
      }
    }
  ]
});
