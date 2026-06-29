import type { ProblemBankProblem, ProblemDifficulty, ProblemBankTestCase } from "./types";

type DifficultyPlan = {
  EASY: number;
  MEDIUM: number;
  HARD: number;
};

type ProblemTemplate = {
  key: string;
  tags: string[];
  isAsync?: boolean;
  buildTitle: (variant: number, sequence: number) => string;
  buildDescription: (variant: number, sequence: number) => string;
  buildExplanation: (variant: number, sequence: number) => string;
  buildHints: (variant: number, sequence: number) => string[];
  createPublicInputs: (variant: number, sequence: number) => unknown[];
  createHiddenInputs: (variant: number, sequence: number) => unknown[];
  solve: (input: unknown, variant: number, sequence: number) => unknown;
};

type CategoryGenerationConfig = {
  prefix: string;
  category: string;
  count: number;
  difficultyPlan: DifficultyPlan;
  templates: ProblemTemplate[];
};

const missionSubjects = [
  "입력 정제기",
  "응답 포매터",
  "에러 방어기",
  "집계 모듈",
  "검증 파이프",
  "데이터 변환기",
  "조건 라우터",
  "정렬 처리기",
  "필터 유틸",
  "요약 엔진",
  "지표 계산기",
  "리포트 생성기",
  "문자열 분석기",
  "배열 가공기",
  "객체 매퍼",
  "스코어 계산기",
  "포인트 처리기",
  "상태 판별기",
  "테스트 헬퍼",
  "규칙 실행기",
  "캐시 정리기",
  "로그 정규화기",
  "전처리 워커",
  "후처리 워커",
  "내보내기 모듈"
] as const;

const missionVerbs = [
  "안정화",
  "정규화",
  "압축",
  "확장",
  "교정",
  "최적화",
  "보정",
  "분해",
  "재조합",
  "표준화",
  "필터링",
  "집약",
  "정리",
  "보호",
  "검산",
  "재검증",
  "가공",
  "합성",
  "추출",
  "재매핑"
] as const;

const missionConstraints = [
  "원본 입력은 절대 변경하지 마세요.",
  "빈 입력에서도 예외 없이 동작해야 합니다.",
  "경계값과 음수 입력을 반드시 고려하세요.",
  "반환 타입을 문제 설명과 정확히 맞추세요.",
  "숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
  "대소문자와 공백 처리를 일관되게 유지하세요.",
  "조건 분기 순서가 결과를 깨지 않게 하세요.",
  "배열/객체 길이가 0인 경우도 처리해야 합니다.",
  "불필요한 형 변환 없이 결과를 반환하세요.",
  "테스트에 없는 입력에서도 예측 가능한 결과를 내세요."
] as const;

function normalizeTitle(baseTitle: string) {
  return baseTitle.replace(/\s+\d+$/, "").trim();
}

type VariantRule = {
  label: string;
  description: string;
  apply: (value: unknown, sequence: number) => unknown;
};

function inferOutputType(value: unknown) {
  if (Array.isArray(value)) {
    return "array" as const;
  }

  if (value === null) {
    return "null" as const;
  }

  switch (typeof value) {
    case "number":
      return "number" as const;
    case "string":
      return "string" as const;
    case "boolean":
      return "boolean" as const;
    case "object":
      return "object" as const;
    default:
      return "other" as const;
  }
}

function cloneValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function hashText(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createIndependentTitle(category: string, sequence: number, ruleLabel: string) {
  const seed = hashText(`${category}-${sequence}-${ruleLabel}`);
  const subject = missionSubjects[seed % missionSubjects.length];
  const verb = missionVerbs[(seed >>> 5) % missionVerbs.length];

  return `${category} · ${subject} ${verb} 미션 ${sequence}`;
}

function createIndependentDescription(
  category: string,
  sequence: number,
  baseDescription: string,
  ruleDescription: string
) {
  const seed = hashText(`${category}-${sequence}-${ruleDescription}`);
  const constraint = missionConstraints[seed % missionConstraints.length];

  return `${baseDescription} 추가 규칙: ${ruleDescription} 유의사항: ${constraint}`;
}

function toSortedObject(value: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right, "ko")));
}

function createVariantRule(outputType: ReturnType<typeof inferOutputType>, index: number): VariantRule {
  const mode = index % 7;
  const magnitude = Math.floor(index / 7) + 1;

  switch (outputType) {
    case "number": {
      switch (mode) {
        case 0:
          return {
            label: `절댓값-${magnitude}`,
            description: "기존 계산 결과의 절댓값을 반환하세요.",
            apply: (value) => Math.abs(value as number)
          };
        case 1:
          return {
            label: `반전-${magnitude}`,
            description: "기존 계산 결과의 부호를 반전해 반환하세요.",
            apply: (value) => -(value as number)
          };
        case 2:
          return {
            label: `배수-${magnitude + 1}`,
            description: `기존 계산 결과에 ${magnitude + 1}을 곱해 반환하세요.`,
            apply: (value) => (value as number) * (magnitude + 1)
          };
        case 3:
          return {
            label: `오프셋+${magnitude}`,
            description: `기존 계산 결과에 ${magnitude}를 더해 반환하세요.`,
            apply: (value) => (value as number) + magnitude
          };
        case 4:
          return {
            label: `오프셋-${magnitude}`,
            description: `기존 계산 결과에서 ${magnitude}를 빼서 반환하세요.`,
            apply: (value) => (value as number) - magnitude
          };
        case 5:
          return {
            label: `나머지-${magnitude + 2}`,
            description: `기존 계산 결과를 ${magnitude + 2}로 나눈 나머지를 반환하세요.`,
            apply: (value) => (value as number) % (magnitude + 2)
          };
        default:
          return {
            label: `반올림-${magnitude}`,
            description: "기존 계산 결과를 반올림한 정수로 반환하세요.",
            apply: (value) => Math.round(value as number)
          };
      }
    }
    case "string": {
      switch (mode) {
        case 0:
          return {
            label: `대문자-${magnitude}`,
            description: "기존 계산 결과 문자열을 대문자로 변환해 반환하세요.",
            apply: (value) => String(value).toUpperCase()
          };
        case 1:
          return {
            label: `소문자-${magnitude}`,
            description: "기존 계산 결과 문자열을 소문자로 변환해 반환하세요.",
            apply: (value) => String(value).toLowerCase()
          };
        case 2:
          return {
            label: `역순-${magnitude}`,
            description: "기존 계산 결과 문자열을 뒤집어 반환하세요.",
            apply: (value) => String(value).split("").reverse().join("")
          };
        case 3:
          return {
            label: `접두사-${magnitude}`,
            description: "기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요.",
            apply: (value) => `P${magnitude}_${String(value)}`
          };
        case 4:
          return {
            label: `접미사-${magnitude}`,
            description: "기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요.",
            apply: (value) => `${String(value)}_S${magnitude}`
          };
        case 5:
          return {
            label: `길이-${magnitude}`,
            description: "기존 계산 결과 문자열의 길이를 숫자로 반환하세요.",
            apply: (value) => String(value).length
          };
        default:
          return {
            label: `공백치환-${magnitude}`,
            description: "기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요.",
            apply: (value) => String(value).replace(/\s+/g, "_")
          };
      }
    }
    case "array": {
      switch (mode) {
        case 0:
          return {
            label: `역순-${magnitude}`,
            description: "기존 계산 결과 배열을 역순으로 반환하세요.",
            apply: (value) => [...(value as unknown[])].reverse()
          };
        case 1:
          return {
            label: `중복제거-${magnitude}`,
            description: "기존 계산 결과 배열에서 중복을 제거해 반환하세요.",
            apply: (value) => [...new Set(value as unknown[])]
          };
        case 2:
          return {
            label: `정렬-${magnitude}`,
            description: "기존 계산 결과 배열을 오름차순 정렬해 반환하세요.",
            apply: (value) => [...(value as Array<string | number>)].sort((left, right) => {
              if (typeof left === "number" && typeof right === "number") {
                return left - right;
              }

              return String(left).localeCompare(String(right), "ko");
            })
          };
        case 3:
          return {
            label: `앞부분-${magnitude}`,
            description: `기존 계산 결과 배열의 앞에서 ${magnitude}개만 반환하세요.`,
            apply: (value) => (value as unknown[]).slice(0, magnitude)
          };
        case 4:
          return {
            label: `뒷부분-${magnitude}`,
            description: `기존 계산 결과 배열의 뒤에서 ${magnitude}개만 반환하세요.`,
            apply: (value) => (value as unknown[]).slice(-magnitude)
          };
        case 5:
          return {
            label: `길이-${magnitude}`,
            description: "기존 계산 결과 배열의 길이를 숫자로 반환하세요.",
            apply: (value) => (value as unknown[]).length
          };
        default:
          return {
            label: `문자열합성-${magnitude}`,
            description: "기존 계산 결과 배열을 문자열로 합쳐 반환하세요.",
            apply: (value) => (value as unknown[]).map((item) => String(item)).join("|")
          };
      }
    }
    case "object": {
      switch (mode) {
        case 0:
          return {
            label: `정렬객체-${magnitude}`,
            description: "기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요.",
            apply: (value) => toSortedObject(value as Record<string, unknown>)
          };
        case 1:
          return {
            label: `키배열-${magnitude}`,
            description: "기존 계산 결과 객체의 키 배열을 반환하세요.",
            apply: (value) => Object.keys(value as Record<string, unknown>).sort((left, right) => left.localeCompare(right, "ko"))
          };
        case 2:
          return {
            label: `값배열-${magnitude}`,
            description: "기존 계산 결과 객체의 값 배열을 반환하세요.",
            apply: (value) => Object.values(value as Record<string, unknown>)
          };
        case 3:
          return {
            label: `키개수-${magnitude}`,
            description: "기존 계산 결과 객체의 키 개수를 반환하세요.",
            apply: (value) => Object.keys(value as Record<string, unknown>).length
          };
        case 4:
          return {
            label: `엔트리배열-${magnitude}`,
            description: "기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요.",
            apply: (value) =>
              Object.entries(value as Record<string, unknown>).sort(([left], [right]) => left.localeCompare(right, "ko"))
          };
        case 5:
          return {
            label: `키정렬문자열-${magnitude}`,
            description: "기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요.",
            apply: (value) =>
              Object.keys(value as Record<string, unknown>)
                .sort((left, right) => left.localeCompare(right, "ko"))
                .join(",")
          };
        default:
          return {
            label: `기본객체-${magnitude}`,
            description: "기존 계산 결과 객체를 그대로 반환하세요.",
            apply: (value) => value
          };
      }
    }
    case "boolean": {
      switch (mode) {
        case 0:
          return {
            label: `반전-${magnitude}`,
            description: "기존 계산 결과 boolean 값을 반전해 반환하세요.",
            apply: (value) => !(value as boolean)
          };
        case 1:
          return {
            label: `숫자변환-${magnitude}`,
            description: "기존 계산 결과 boolean 값을 숫자(참=1, 거짓=0)로 반환하세요.",
            apply: (value) => ((value as boolean) ? 1 : 0)
          };
        case 2:
          return {
            label: `문자열변환-${magnitude}`,
            description: "기존 계산 결과 boolean 값을 문자열(" + '"true"/"false"' + ")로 반환하세요.",
            apply: (value) => String(value)
          };
        case 3:
          return {
            label: `유지-${magnitude}`,
            description: "기존 계산 결과 boolean 값을 그대로 반환하세요.",
            apply: (value) => !!value
          };
        case 4:
          return {
            label: `더블반전-${magnitude}`,
            description: "기존 계산 결과 boolean 값을 두 번 반전해 반환하세요.",
            apply: (value) => !!value
          };
        case 5:
          return {
            label: `강제참-${magnitude}`,
            description: "기존 계산 결과와 관계없이 true를 반환하세요.",
            apply: () => true
          };
        default:
          return {
            label: `강제거짓-${magnitude}`,
            description: "기존 계산 결과와 관계없이 false를 반환하세요.",
            apply: () => false
          };
      }
    }
    default:
      return {
        label: `기본반환-${magnitude}`,
        description: "기존 계산 결과를 그대로 반환하세요.",
        apply: (value) => value
      };
  }
}

function toCamelCaseIdentifier(value: string) {
  const cleaned = value.replace(/[^a-zA-Z0-9]+/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return "solveProblem";
  }

  const [head, ...tail] = parts;
  const identifier = [
    head.toLowerCase(),
    ...tail.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
  ].join("");

  return /^[a-zA-Z_$]/.test(identifier) ? identifier : `solve${identifier}`;
}

function createStarterCode(functionName: string, isAsync: boolean) {
  const declaration = isAsync ? "async function" : "function";

  return `${declaration} ${functionName}(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = ${functionName};`;
}

function buildDifficultySequence(plan: DifficultyPlan, count: number): ProblemDifficulty[] {
  const expectedTotal = plan.EASY + plan.MEDIUM + plan.HARD;

  if (expectedTotal !== count) {
    throw new Error(`Difficulty plan mismatch: expected ${count}, got ${expectedTotal}.`);
  }

  const remaining: Record<ProblemDifficulty, number> = {
    EASY: plan.EASY,
    MEDIUM: plan.MEDIUM,
    HARD: plan.HARD
  };

  const sequence: ProblemDifficulty[] = [];

  while (sequence.length < count) {
    for (const difficulty of ["EASY", "MEDIUM", "HARD"] as const) {
      if (remaining[difficulty] <= 0) {
        continue;
      }

      sequence.push(difficulty);
      remaining[difficulty] -= 1;

      if (sequence.length === count) {
        break;
      }
    }
  }

  return sequence;
}

function buildTestCases(
  slug: string,
  publicInputs: unknown[],
  hiddenInputs: unknown[],
  solve: (input: unknown) => unknown
): ProblemBankTestCase[] {
  if (publicInputs.length < 3 || hiddenInputs.length < 2) {
    throw new Error(`Test case requirement mismatch for ${slug}.`);
  }

  const cases = [
    ...publicInputs.map((input) => ({ input, isHidden: false })),
    ...hiddenInputs.map((input) => ({ input, isHidden: true }))
  ];

  return cases.map((item, index) => ({
    id: `${slug}-tc-${index + 1}`,
    input: item.input,
    expectedOutput: solve(item.input),
    isHidden: item.isHidden,
    order: index + 1
  }));
}

export function createCategoryProblems(config: CategoryGenerationConfig): ProblemBankProblem[] {
  const difficulties = buildDifficultySequence(config.difficultyPlan, config.count);

  return Array.from({ length: config.count }, (_, index) => {
    const sequence = index + 1;
    const template = config.templates[index % config.templates.length];
    const variant = Math.floor(index / config.templates.length);
    const slug = `${config.prefix}-${template.key}-${sequence}`;
    const functionName = toCamelCaseIdentifier(slug);

    const publicInputs = template.createPublicInputs(variant, sequence);
    const hiddenInputs = template.createHiddenInputs(variant, sequence);
    const baseSolve = (input: unknown) => template.solve(input, variant, sequence);
    const selectedRuleIndex = variant * 11 + sequence * 3 + config.prefix.length;

    const solve = (input: unknown) => {
      const baseOutput = baseSolve(cloneValue(input));
      const outputType = inferOutputType(baseOutput);
      const selectedRule = createVariantRule(outputType, selectedRuleIndex);

      return selectedRule.apply(baseOutput, sequence);
    };

    const probeInput = publicInputs[0] ?? hiddenInputs[0] ?? null;
    const probeOutput = baseSolve(cloneValue(probeInput));
    const probeType = inferOutputType(probeOutput);
    const selectedRule = createVariantRule(probeType, selectedRuleIndex);
    const baseTitle = normalizeTitle(template.buildTitle(variant, sequence));
    const baseDescription = template.buildDescription(variant, sequence);
    const independentTitle = createIndependentTitle(config.category, sequence, selectedRule.label);
    const independentDescription = createIndependentDescription(
      config.category,
      sequence,
      baseDescription,
      selectedRule.description
    );

    return {
      id: `pb-${slug}`,
      slug,
      title: independentTitle,
      difficulty: difficulties[index],
      category: config.category,
      tags: template.tags,
      description: independentDescription,
      starterCode: createStarterCode(functionName, Boolean(template.isAsync)),
      explanation: `${template.buildExplanation(variant, sequence)} / 원문 주제: ${baseTitle}`,
      hints: [...template.buildHints(variant, sequence), `변형 규칙: ${selectedRule.description}`],
      testCases: buildTestCases(slug, publicInputs, hiddenInputs, solve)
    };
  });
}
