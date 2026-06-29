import { createCategoryProblems } from "./helpers";

export const stringProblems = createCategoryProblems({
  prefix: "str",
  category: "문자열",
  count: 25,
  difficultyPlan: { EASY: 13, MEDIUM: 9, HARD: 3 },
  templates: [
    {
      key: "reverse",
      tags: ["string", "reverse", "loop"],
      buildTitle: (variant) => `문자열 뒤집기 ${variant + 1}`,
      buildDescription: () => "문자열 input을 뒤집은 새 문자열을 반환하세요.",
      buildExplanation: () => "split/reverse/join 또는 반복문으로 구현할 수 있습니다.",
      buildHints: () => [
        "빈 문자열도 정상 처리되어야 합니다.",
        "원본 문자열은 변경되지 않습니다.",
        "대소문자와 숫자는 그대로 유지됩니다."
      ],
      createPublicInputs: () => ["JavaScript", "", "aB1"],
      createHiddenInputs: () => ["level", "  ab"],
      solve: (input) => (input as string).split("").reverse().join("")
    },
    {
      key: "normalize-space",
      tags: ["string", "trim", "split"],
      buildTitle: (variant) => `공백 정규화 ${variant + 1}`,
      buildDescription: () =>
        "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요.",
      buildExplanation: () => "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다.",
      buildHints: () => [
        "먼저 trim으로 양쪽 공백을 제거하세요.",
        "split(\" \") 후 빈 항목 제거가 핵심입니다.",
        "공백만 있는 입력은 빈 문자열을 반환해야 합니다."
      ],
      createPublicInputs: () => ["  hello   world  ", "a   b c", "   "],
      createHiddenInputs: () => ["one", "  JS   syntax   trainer "],
      solve: (input) => {
        const text = input as string;
        const normalized = text
          .trim()
          .split(" ")
          .filter((word) => word.length > 0)
          .join(" ");

        return normalized;
      }
    },
    {
      key: "is-palindrome",
      tags: ["string", "palindrome", "condition"],
      buildTitle: (variant) => `회문 문자열 검사 ${variant + 1}`,
      buildDescription: () =>
        "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다.",
      buildExplanation: () => "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다.",
      buildHints: () => [
        "비교 전 소문자로 통일하세요.",
        "영문자/숫자 외 문자는 제거하세요.",
        "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요."
      ],
      createPublicInputs: () => ["A man, a plan, a canal: Panama", "hello", ""],
      createHiddenInputs: () => ["No lemon, no melon", "123abccba321"],
      solve: (input) => {
        const text = (input as string).toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversed = text.split("").reverse().join("");

        return text === reversed;
      }
    },
    {
      key: "count-word",
      tags: ["string", "split", "count"],
      buildTitle: (variant) => `단어 개수 세기 ${variant + 1}`,
      buildDescription: () =>
        "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다.",
      buildExplanation: () => "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다.",
      buildHints: () => [
        "trim 후 split(\" \")을 사용해 보세요.",
        "빈 문자열은 단어 수 0입니다.",
        "연속 공백이 있어도 정확히 세야 합니다."
      ],
      createPublicInputs: () => ["hello world", "  one   two  three ", ""],
      createHiddenInputs: () => ["    ", "JS syntax trainer app"],
      solve: (input) => {
        const text = (input as string).trim();
        if (text.length === 0) {
          return 0;
        }

        return text.split(" ").filter((word) => word.length > 0).length;
      }
    },
    {
      key: "mask-last",
      tags: ["string", "slice", "format"],
      buildTitle: (variant) => `문자열 뒤쪽 마스킹 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(${2 + (variant % 3)})개는 그대로 노출합니다.`,
      buildExplanation: () => "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다.",
      buildHints: () => [
        "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
        "마스킹 길이는 text.length - visible입니다.",
        "repeat를 사용하면 * 문자열 생성이 편리합니다."
      ],
      createPublicInputs: (variant) => {
        const visible = 2 + (variant % 3);
        return [
          { text: "abcdef", visible },
          { text: "ab", visible },
          { text: "", visible }
        ];
      },
      createHiddenInputs: (variant) => {
        const visible = 2 + (variant % 3);
        return [
          { text: "1234567890", visible },
          { text: "xyz", visible: 0 }
        ];
      },
      solve: (input) => {
        const value = input as { text: string; visible: number };
        if (value.text.length <= value.visible) {
          return value.text;
        }

        if (value.visible <= 0) {
          return "*".repeat(value.text.length);
        }

        const head = value.text.slice(0, value.text.length - value.visible);
        const tail = value.text.slice(-value.visible);

        return `${head.replace(/./g, "*")}${tail}`;
      }
    }
  ]
});
