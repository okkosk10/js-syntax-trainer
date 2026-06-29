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
    const solve = (input: unknown) => template.solve(input, variant, sequence);

    return {
      id: `pb-${slug}`,
      slug,
      title: template.buildTitle(variant, sequence),
      difficulty: difficulties[index],
      category: config.category,
      tags: template.tags,
      description: template.buildDescription(variant, sequence),
      starterCode: createStarterCode(functionName, Boolean(template.isAsync)),
      explanation: template.buildExplanation(variant, sequence),
      hints: template.buildHints(variant, sequence),
      testCases: buildTestCases(slug, publicInputs, hiddenInputs, solve)
    };
  });
}
