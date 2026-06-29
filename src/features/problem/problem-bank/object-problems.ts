import { createCategoryProblems } from "./helpers";

export const objectProblems = createCategoryProblems({
  prefix: "obj",
  category: "객체",
  count: 25,
  difficultyPlan: { EASY: 12, MEDIUM: 10, HARD: 3 },
  templates: [
    {
      key: "pick",
      tags: ["object", "key", "loop"],
      buildTitle: (variant) => `객체 키 선택하기 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다.",
      buildExplanation: () => "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요.",
      buildHints: () => [
        "결과 객체는 빈 객체에서 시작하세요.",
        "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
        "없는 키를 넣지 않도록 주의하세요."
      ],
      createPublicInputs: () => [
        { source: { a: 1, b: 2, c: 3 }, keys: ["a", "c"] },
        { source: { name: "kim" }, keys: ["name", "age"] },
        { source: {}, keys: ["x"] }
      ],
      createHiddenInputs: () => [
        { source: { x: 0, y: 1 }, keys: [] },
        { source: { p: "v", q: "w" }, keys: ["q", "p"] }
      ],
      solve: (input) => {
        const value = input as { source: Record<string, unknown>; keys: string[] };
        const result: Record<string, unknown> = {};

        for (const key of value.keys) {
          if (Object.prototype.hasOwnProperty.call(value.source, key)) {
            result[key] = value.source[key];
          }
        }

        return result;
      }
    },
    {
      key: "count-values",
      tags: ["object", "frequency", "array"],
      buildTitle: (variant) => `값 빈도 객체 만들기 ${variant + 1}`,
      buildDescription: () =>
        "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다.",
      buildExplanation: () => "누적 객체를 만들고 이미 있으면 +1 하세요.",
      buildHints: () => [
        "초기값이 없는 키는 0 대신 1부터 시작하세요.",
        "대소문자는 그대로 구분합니다.",
        "빈 배열이면 빈 객체를 반환합니다."
      ],
      createPublicInputs: () => [["a", "b", "a"], ["JS", "js"], []],
      createHiddenInputs: () => [["x", "x", "x"], ["a", "b", "c", "a", "b"]],
      solve: (input) => {
        const values = input as string[];
        const result: Record<string, number> = {};

        for (const value of values) {
          result[value] = (result[value] ?? 0) + 1;
        }

        return result;
      }
    },
    {
      key: "invert",
      tags: ["object", "entries", "transform"],
      buildTitle: (variant) => `객체 키-값 뒤집기 ${variant + 1}`,
      buildDescription: () =>
        "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다.",
      buildExplanation: () => "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요.",
      buildHints: () => [
        "반환 객체의 키는 문자열입니다.",
        "중복 값이 있으면 마지막 키가 남습니다.",
        "입력이 빈 객체일 수 있습니다."
      ],
      createPublicInputs: () => [{ a: 1, b: 2 }, { x: "yes" }, {}],
      createHiddenInputs: () => [{ k1: "same", k2: "same" }, { one: 1, two: 2, three: 3 }],
      solve: (input) => {
        const source = input as Record<string, string | number>;
        const result: Record<string, string> = {};

        for (const [key, value] of Object.entries(source)) {
          result[String(value)] = key;
        }

        return result;
      }
    },
    {
      key: "merge-sum",
      tags: ["object", "merge", "number"],
      buildTitle: (variant) => `숫자 객체 합치기 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요.",
      buildExplanation: () => "두 객체를 순회하며 누적 객체에 더해 주세요.",
      buildHints: () => [
        "결과 객체를 먼저 빈 객체로 만드세요.",
        "없는 키는 0으로 보고 더하면 편합니다.",
        "음수 값도 그대로 합산되어야 합니다."
      ],
      createPublicInputs: () => [
        { left: { a: 1, b: 2 }, right: { b: 3, c: 4 } },
        { left: {}, right: { x: 1 } },
        { left: { k: -2 }, right: { k: 1 } }
      ],
      createHiddenInputs: () => [
        { left: { p: 10 }, right: {} },
        { left: { x: 1, y: 1 }, right: { x: 2, y: -1 } }
      ],
      solve: (input) => {
        const value = input as { left: Record<string, number>; right: Record<string, number> };
        const result: Record<string, number> = {};

        for (const [key, numberValue] of Object.entries(value.left)) {
          result[key] = (result[key] ?? 0) + numberValue;
        }

        for (const [key, numberValue] of Object.entries(value.right)) {
          result[key] = (result[key] ?? 0) + numberValue;
        }

        return result;
      }
    },
    {
      key: "safe-get",
      tags: ["object", "optional", "default"],
      buildTitle: (variant) => `중첩 값 안전 조회 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요.",
      buildExplanation: () => "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다.",
      buildHints: () => [
        "중간 단계에서 null/undefined인지 항상 확인하세요.",
        "경로 배열이 비어 있으면 source 자체를 반환합니다.",
        "존재하지 않으면 defaultValue를 반환합니다."
      ],
      createPublicInputs: () => [
        { source: { user: { name: "Kim" } }, path: ["user", "name"], defaultValue: "-" },
        { source: { user: {} }, path: ["user", "age"], defaultValue: 0 },
        { source: { x: 1 }, path: [], defaultValue: null }
      ],
      createHiddenInputs: () => [
        { source: null, path: ["a"], defaultValue: "none" },
        { source: { a: { b: { c: 3 } } }, path: ["a", "b", "c"], defaultValue: 0 }
      ],
      solve: (input) => {
        const value = input as {
          source: Record<string, unknown> | null;
          path: string[];
          defaultValue: unknown;
        };

        let current: unknown = value.source;

        for (const key of value.path) {
          if (typeof current !== "object" || current === null || !Object.prototype.hasOwnProperty.call(current, key)) {
            return value.defaultValue;
          }

          current = (current as Record<string, unknown>)[key];
        }

        return current;
      }
    }
  ]
});
