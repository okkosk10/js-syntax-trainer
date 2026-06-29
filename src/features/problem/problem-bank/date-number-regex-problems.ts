import { createCategoryProblems } from "./helpers";

export const dateNumberRegexProblems = createCategoryProblems({
  prefix: "dnr",
  category: "날짜/숫자/정규식 기초",
  count: 15,
  difficultyPlan: { EASY: 6, MEDIUM: 6, HARD: 3 },
  templates: [
    {
      key: "pad-two",
      tags: ["number", "string", "format"],
      buildTitle: (variant) => `두 자리 숫자 포맷 ${variant + 1}`,
      buildDescription: () => "정수 input을 두 자리 문자열로 반환하세요. 10 미만이면 앞에 0을 붙입니다.",
      buildExplanation: () => "String과 padStart를 사용하면 간단합니다.",
      buildHints: () => [
        "음수는 그대로 문자열로 반환합니다.",
        "한 자리 양수만 0을 붙이면 됩니다.",
        "0 입력 결과를 확인하세요."
      ],
      createPublicInputs: () => [3, 12, 0],
      createHiddenInputs: () => [9, -1],
      solve: (input) => {
        const value = input as number;
        if (value >= 0 && value < 10) {
          return String(value).padStart(2, "0");
        }

        return String(value);
      }
    },
    {
      key: "round-step",
      tags: ["number", "math", "round"],
      buildTitle: (variant) => `배수 단위 반올림 ${variant + 1}`,
      buildDescription: (variant) =>
        `입력은 { value }입니다. value를 ${5 + variant} 단위로 반올림한 값을 반환하세요.`,
      buildExplanation: () => "value / step을 반올림한 뒤 step을 곱합니다.",
      buildHints: () => [
        "반올림 단위를 변수로 분리하세요.",
        "음수도 Math.round 규칙에 따라 처리됩니다.",
        "정수 결과를 반환해야 합니다."
      ],
      createPublicInputs: (variant) => [{ value: 12 + variant }, { value: 2 }, { value: -7 }],
      createHiddenInputs: () => [{ value: 0 }, { value: 123 }],
      solve: (input, variant) => {
        const step = 5 + variant;
        const value = (input as { value: number }).value;
        return Math.round(value / step) * step;
      }
    },
    {
      key: "extract-digits",
      tags: ["regex", "string", "match"],
      buildTitle: (variant) => `문자열에서 숫자만 추출 ${variant + 1}`,
      buildDescription: () => "문자열 input에서 숫자 문자(0-9)만 이어 붙인 문자열을 반환하세요.",
      buildExplanation: () => "정규식 /\d/g로 추출한 뒤 join하면 됩니다.",
      buildHints: () => [
        "숫자가 하나도 없으면 빈 문자열입니다.",
        "match 결과가 null일 수 있습니다.",
        "문자 순서는 원본 기준으로 유지됩니다."
      ],
      createPublicInputs: () => ["a1b2c3", "hello", "2026-06-29"],
      createHiddenInputs: () => ["0abc00", "room 101"],
      solve: (input) => {
        const matches = (input as string).match(/\d/g);
        return matches ? matches.join("") : "";
      }
    },
    {
      key: "weekday",
      tags: ["date", "utc", "format"],
      buildTitle: (variant) => `UTC 요일 문자열 ${variant + 1}`,
      buildDescription: () =>
        "입력은 YYYY-MM-DD 형식 문자열입니다. 해당 날짜의 UTC 요일을 영문 3글자(Sun~Sat)로 반환하세요.",
      buildExplanation: () => "Date를 만들고 getUTCDay 결과를 요일 배열에서 찾습니다.",
      buildHints: () => [
        "로컬 타임존 대신 UTC 기준으로 계산하세요.",
        "요일 배열 순서는 Sun부터 Sat까지입니다.",
        "문자열 뒤에 T00:00:00Z를 붙여 Date를 생성하세요."
      ],
      createPublicInputs: () => ["2026-06-29", "2024-02-29", "2025-01-01"],
      createHiddenInputs: () => ["1970-01-01", "2030-12-25"],
      solve: (input) => {
        const dateText = input as string;
        const date = new Date(`${dateText}T00:00:00Z`);
        const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return week[date.getUTCDay()];
      }
    },
    {
      key: "email-basic",
      tags: ["regex", "validation", "string"],
      buildTitle: (variant) => `이메일 형식 기초 검사 ${variant + 1}`,
      buildDescription: () =>
        "문자열 input이 간단한 이메일 형식인지 boolean을 반환하세요. 규칙: 공백 없음, @ 1개, @ 앞뒤에 최소 1글자, 점(.)이 도메인에 1개 이상.",
      buildExplanation: () => "기초 정규식으로 전체 문자열을 검사하세요.",
      buildHints: () => [
        "양끝 공백을 허용하지 않으므로 전체 매칭(^$)을 사용하세요.",
        "@는 정확히 한 번만 등장해야 합니다.",
        "도메인에 점이 포함되어야 합니다."
      ],
      createPublicInputs: () => ["user@example.com", "wrong@domain", "a b@c.com"],
      createHiddenInputs: () => ["x@y.z", "@example.com"],
      solve: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input as string)
    }
  ]
});
