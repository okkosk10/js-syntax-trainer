import { createCategoryProblems } from "./helpers";

export const variablesConditionsProblems = createCategoryProblems({
  prefix: "vars",
  category: "변수/연산/조건문",
  count: 15,
  difficultyPlan: { EASY: 10, MEDIUM: 4, HARD: 1 },
  templates: [
    {
      key: "clamp",
      tags: ["condition", "number", "if"],
      buildTitle: (variant) => `숫자 범위 제한하기 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요.",
      buildExplanation: () => "if/else 조건문으로 경계값을 먼저 처리하면 됩니다.",
      buildHints: () => [
        "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
        "범위 안에 있는 값은 그대로 반환해야 합니다.",
        "음수와 경계값(min, max 자체)도 테스트해 보세요."
      ],
      createPublicInputs: (variant) => {
        const base = variant + 2;
        return [
          { value: -base, min: 0, max: 10 },
          { value: base + 3, min: 0, max: 5 },
          { value: base, min: 0, max: 10 }
        ];
      },
      createHiddenInputs: (variant) => {
        const base = variant + 1;
        return [
          { value: -100, min: -10, max: 10 },
          { value: base, min: base, max: base }
        ];
      },
      solve: (input) => {
        const target = input as { value: number; min: number; max: number };
        if (target.value < target.min) {
          return target.min;
        }

        if (target.value > target.max) {
          return target.max;
        }

        return target.value;
      }
    },
    {
      key: "grade",
      tags: ["condition", "comparison", "number"],
      buildTitle: (variant) => `점수 등급 매기기 ${variant + 1}`,
      buildDescription: () =>
        "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다.",
      buildExplanation: () => "큰 구간부터 순서대로 비교하면 조건이 단순해집니다.",
      buildHints: () => [
        "90점 이상을 먼저 검사하세요.",
        "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
        "0점과 100점 같은 경계 점수도 확인하세요."
      ],
      createPublicInputs: () => [95, 82, 67],
      createHiddenInputs: () => [70, 0],
      solve: (input) => {
        const score = input as number;
        if (score >= 90) {
          return "A";
        }
        if (score >= 80) {
          return "B";
        }
        if (score >= 70) {
          return "C";
        }
        return "D";
      }
    },
    {
      key: "discount",
      tags: ["operator", "condition", "object"],
      buildTitle: (variant) => `할인 적용 금액 계산 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { price, isMember }입니다. 회원이면 ${10 + variant}% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다.`,
      buildExplanation: () => "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다.",
      buildHints: () => [
        "회원 여부에 따라 할인율을 먼저 정하세요.",
        "price * (1 - 할인율)로 계산할 수 있습니다.",
        "반환 전 Math.round를 적용해 정수로 맞추세요."
      ],
      createPublicInputs: (variant) => {
        const rate = 10 + variant;
        return [
          { price: 10000, isMember: true, rate },
          { price: 15990, isMember: false, rate },
          { price: 0, isMember: true, rate }
        ];
      },
      createHiddenInputs: (variant) => {
        const rate = 10 + variant;
        return [
          { price: 9999, isMember: true, rate },
          { price: 1200, isMember: false, rate }
        ];
      },
      solve: (input) => {
        const target = input as { price: number; isMember: boolean; rate: number };
        if (!target.isMember) {
          return target.price;
        }

        return Math.round(target.price * (1 - target.rate / 100));
      }
    }
  ]
});
