import { createCategoryProblems } from "./helpers";

export const arrayBasicProblems = createCategoryProblems({
  prefix: "arr-basic",
  category: "배열 기본",
  count: 30,
  difficultyPlan: { EASY: 18, MEDIUM: 9, HARD: 3 },
  templates: [
    {
      key: "max",
      tags: ["array", "max", "loop"],
      buildTitle: (variant) => `배열 최댓값 찾기 ${variant + 1}`,
      buildDescription: () =>
        "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요.",
      buildExplanation: () => "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다.",
      buildHints: () => [
        "빈 배열인지 먼저 검사하세요.",
        "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
        "음수만 있는 배열도 올바르게 처리해야 합니다."
      ],
      createPublicInputs: () => [[1, 4, 2], [-5, -2, -9], []],
      createHiddenInputs: (variant) => [[10 + variant, 3, 10 + variant, 1], [0]],
      solve: (input) => {
        const numbers = input as number[];
        if (numbers.length === 0) {
          return null;
        }

        let max = numbers[0];
        for (const value of numbers) {
          if (value > max) {
            max = value;
          }
        }

        return max;
      }
    },
    {
      key: "remove-duplicates",
      tags: ["array", "set", "dedupe"],
      buildTitle: (variant) => `중복 제거 후 순서 유지 ${variant + 1}`,
      buildDescription: () =>
        "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요.",
      buildExplanation: () => "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다.",
      buildHints: () => [
        "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
        "이미 본 값인지 확인하는 자료구조가 필요합니다.",
        "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다."
      ],
      createPublicInputs: () => [[1, 1, 2, 3, 2], ["a", "b", "a"], []],
      createHiddenInputs: () => [[0, 0, 0, 0], ["A", "a", "A", "a"]],
      solve: (input) => {
        const values = input as Array<string | number>;
        const seen = new Set<string | number>();
        const result: Array<string | number> = [];

        for (const value of values) {
          if (seen.has(value)) {
            continue;
          }

          seen.add(value);
          result.push(value);
        }

        return result;
      }
    },
    {
      key: "chunk",
      tags: ["array", "slice", "loop"],
      buildTitle: (variant) => `배열 청크 나누기 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: ${2 + (variant % 2)})`,
      buildExplanation: () => "인덱스를 size씩 증가시키며 slice를 사용합니다.",
      buildHints: () => [
        "size가 유효한지 먼저 검사하세요.",
        "마지막 묶음은 size보다 작을 수 있습니다.",
        "빈 배열 입력도 그대로 빈 배열을 반환하세요."
      ],
      createPublicInputs: (variant) => [
        { items: [1, 2, 3, 4, 5], size: 2 + (variant % 2) },
        { items: [], size: 3 },
        { items: [1, 2], size: 0 }
      ],
      createHiddenInputs: () => [
        { items: ["a", "b", "c", "d"], size: 2 },
        { items: [1, 2, 3], size: 5 }
      ],
      solve: (input) => {
        const value = input as { items: Array<string | number>; size: number };
        if (value.size <= 0) {
          return [];
        }

        const result: Array<Array<string | number>> = [];
        for (let i = 0; i < value.items.length; i += value.size) {
          result.push(value.items.slice(i, i + value.size));
        }

        return result;
      }
    },
    {
      key: "rotate-left",
      tags: ["array", "index", "mod"],
      buildTitle: (variant) => `배열 왼쪽 회전 ${variant + 1}`,
      buildDescription: () =>
        "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요.",
      buildExplanation: () => "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다.",
      buildHints: () => [
        "k가 길이보다 커도 정상 동작해야 합니다.",
        "slice 두 번을 이어 붙이면 구현이 간단합니다.",
        "원본 배열은 변경하지 마세요."
      ],
      createPublicInputs: (variant) => [
        { items: [1, 2, 3, 4], k: 1 + (variant % 3) },
        { items: [], k: 3 },
        { items: ["x"], k: 10 }
      ],
      createHiddenInputs: () => [
        { items: [1, 2, 3], k: 3 },
        { items: [1, 2, 3], k: 5 }
      ],
      solve: (input) => {
        const value = input as { items: Array<string | number>; k: number };
        const length = value.items.length;

        if (length === 0) {
          return [];
        }

        const shift = ((value.k % length) + length) % length;
        return [...value.items.slice(shift), ...value.items.slice(0, shift)];
      }
    },
    {
      key: "pair-sum",
      tags: ["array", "sum", "loop"],
      buildTitle: (variant) => `인접 원소 합 배열 ${variant + 1}`,
      buildDescription: () =>
        "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다.",
      buildExplanation: () => "i와 i+1을 더하며 length-1까지 순회합니다.",
      buildHints: () => [
        "반복 종료 조건을 length - 1로 두세요.",
        "원소가 하나뿐인 경우 빈 배열입니다.",
        "음수와 0이 섞여도 정확히 계산해야 합니다."
      ],
      createPublicInputs: (variant) => [[1, 2, 3 + variant], [5], [-1, 1, -1, 1]],
      createHiddenInputs: () => [[0, 0, 0], [10, -10]],
      solve: (input) => {
        const numbers = input as number[];
        if (numbers.length < 2) {
          return [];
        }

        const result: number[] = [];
        for (let i = 0; i < numbers.length - 1; i += 1) {
          result.push(numbers[i] + numbers[i + 1]);
        }

        return result;
      }
    }
  ]
});
