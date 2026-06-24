export type AIReviewInput = {
  problemTitle: string;
  problemDescription: string;
  starterCode: string;
  userCode: string;
  testSummary: string;
};

export type AIReviewResult = {
  summary: string;
  strengths: string[];
  issues: {
    title: string;
    explanation: string;
    severity: "low" | "medium" | "high";
    line?: number;
  }[];
  suggestions: string[];
  improvedCode?: string;
};

export interface AIReviewProvider {
  review(input: AIReviewInput): Promise<AIReviewResult>;
}
