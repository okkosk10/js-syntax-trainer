import { createCategoryProblems } from "./helpers";

export const miniPracticeProblems = createCategoryProblems({
  prefix: "mini",
  category: "종합 실전 미니 문제",
  count: 10,
  difficultyPlan: { EASY: 3, MEDIUM: 6, HARD: 1 },
  templates: [
    {
      key: "todo-summary",
      tags: ["array", "object", "count"],
      buildTitle: (variant) => `할 일 목록 요약 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { todos }이며 todos는 { done: boolean } 객체 배열입니다. { total, done, pending } 요약 객체를 반환하세요.",
      buildExplanation: () => "총 개수와 완료 개수를 구해 미완료를 계산하면 됩니다.",
      buildHints: () => [
        "total은 배열 길이입니다.",
        "done은 done=true 개수입니다.",
        "pending은 total - done으로 계산할 수 있습니다."
      ],
      createPublicInputs: () => [
        { todos: [{ done: true }, { done: false }, { done: true }] },
        { todos: [] },
        { todos: [{ done: false }] }
      ],
      createHiddenInputs: () => [
        { todos: [{ done: true }] },
        { todos: [{ done: false }, { done: false }] }
      ],
      solve: (input) => {
        const value = input as { todos: Array<{ done: boolean }> };
        const total = value.todos.length;
        const done = value.todos.filter((todo) => todo.done).length;

        return {
          total,
          done,
          pending: total - done
        };
      }
    },
    {
      key: "inventory-alert",
      tags: ["array", "filter", "object"],
      buildTitle: (variant) => `재고 부족 상품 찾기 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { items }이며 items는 { name, qty } 배열입니다. qty가 ${3 + variant} 이하인 상품 이름 배열을 반환하세요.`,
      buildExplanation: () => "filter 후 map으로 이름만 추출하면 됩니다.",
      buildHints: () => [
        "임계값 이하(<=) 조건을 사용하세요.",
        "결과는 이름 문자열 배열입니다.",
        "해당 상품이 없으면 빈 배열입니다."
      ],
      createPublicInputs: (variant) => [
        {
          items: [
            { name: "pen", qty: 2 },
            { name: "notebook", qty: 10 }
          ],
          threshold: 3 + variant
        },
        { items: [], threshold: 3 + variant },
        {
          items: [
            { name: "eraser", qty: 3 },
            { name: "ruler", qty: 4 }
          ],
          threshold: 3 + variant
        }
      ],
      createHiddenInputs: (variant) => [
        {
          items: [
            { name: "a", qty: 0 },
            { name: "b", qty: 100 }
          ],
          threshold: 3 + variant
        },
        {
          items: [{ name: "x", qty: 4 }],
          threshold: 3 + variant
        }
      ],
      solve: (input) => {
        const value = input as {
          items: Array<{ name: string; qty: number }>;
          threshold: number;
        };

        return value.items.filter((item) => item.qty <= value.threshold).map((item) => item.name);
      }
    },
    {
      key: "message-clean",
      tags: ["string", "regex", "format"],
      buildTitle: (variant) => `메시지 정리 파이프라인 ${variant + 1}`,
      buildDescription: () =>
        "문자열 input을 정리해 반환하세요. 규칙: 양끝 공백 제거, 연속 공백 1개로 축소, 전체 소문자 변환.",
      buildExplanation: () => "trim, 정규식 치환, toLowerCase 순으로 적용하면 됩니다.",
      buildHints: () => [
        "공백 축소는 /\s+/g 정규식을 사용할 수 있습니다.",
        "입력이 빈 문자열이어도 동작해야 합니다.",
        "대문자 문자열도 소문자로 바꿔야 합니다."
      ],
      createPublicInputs: () => ["  HELLO   WORLD ", "JS", "   "],
      createHiddenInputs: () => ["  A   b   C  ", "No-Change"],
      solve: (input) => (input as string).trim().replace(/\s+/g, " ").toLowerCase()
    },
    {
      key: "score-board",
      tags: ["object", "reduce", "math"],
      buildTitle: (variant) => `점수판 통계 만들기 ${variant + 1}`,
      buildDescription: () =>
        "숫자 배열 input에 대해 { sum, avg, max } 객체를 반환하세요. 빈 배열이면 { sum:0, avg:0, max:null }을 반환합니다.",
      buildExplanation: () => "합계와 최댓값을 구한 뒤 평균을 계산합니다.",
      buildHints: () => [
        "빈 배열 예외 처리를 먼저 하세요.",
        "avg는 sum / length입니다.",
        "max는 Math.max 또는 순회로 계산할 수 있습니다."
      ],
      createPublicInputs: () => [[10, 20, 30], [], [5]],
      createHiddenInputs: () => [[-1, -2, -3], [0, 0, 0]],
      solve: (input) => {
        const numbers = input as number[];
        if (numbers.length === 0) {
          return {
            sum: 0,
            avg: 0,
            max: null
          };
        }

        const sum = numbers.reduce((acc, value) => acc + value, 0);

        return {
          sum,
          avg: sum / numbers.length,
          max: Math.max(...numbers)
        };
      }
    },
    {
      key: "student-pass",
      tags: ["array", "every", "some"],
      buildTitle: (variant) => `학생 통과 판정 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 점수 배열 input입니다. { allPass, hasPerfect }를 반환하세요. 통과 기준은 ${60 + variant}점 이상입니다.`,
      buildExplanation: () => "every와 some으로 두 조건을 각각 계산합니다.",
      buildHints: () => [
        "allPass는 모든 점수가 기준 이상인지 검사합니다.",
        "hasPerfect는 100점이 하나라도 있는지 검사합니다.",
        "빈 배열에서 every 결과는 true입니다."
      ],
      createPublicInputs: () => [[80, 90, 100], [50, 70], []],
      createHiddenInputs: () => [[60, 60, 60], [99, 100]],
      solve: (input, variant) => {
        const scores = input as number[];
        const threshold = 60 + variant;

        return {
          allPass: scores.every((score) => score >= threshold),
          hasPerfect: scores.some((score) => score === 100)
        };
      }
    }
  ]
});
