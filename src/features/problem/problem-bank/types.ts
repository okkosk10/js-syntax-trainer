export type ProblemDifficulty = "EASY" | "MEDIUM" | "HARD";

export type ProblemBankTestCase = {
  id: string;
  input: unknown;
  expectedOutput: unknown;
  isHidden: boolean;
  order: number;
};

export type ProblemBankProblem = {
  id: string;
  slug: string;
  title: string;
  difficulty: ProblemDifficulty;
  category: string;
  tags: string[];
  description: string;
  starterCode: string;
  explanation: string;
  hints: string[];
  testCases: ProblemBankTestCase[];
};
