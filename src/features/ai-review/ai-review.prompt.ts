import type { AIReviewInput } from "./ai-review.types";

export function buildAIReviewPrompt(input: AIReviewInput) {
  return [
    "You are a JavaScript syntax coach.",
    "Review the learner's code with concise, actionable feedback.",
    "Return JSON with summary, strengths, issues, suggestions, and optional improvedCode.",
    "",
    `Problem: ${input.problemTitle}`,
    input.problemDescription,
    "",
    "Starter code:",
    input.starterCode,
    "",
    "Learner code:",
    input.userCode,
    "",
    "Test summary:",
    input.testSummary
  ].join("\n");
}
