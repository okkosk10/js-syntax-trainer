import { Difficulty, Prisma, PrismaClient } from "@prisma/client";
import { problemBank } from "../src/features/problem/problem-bank";

const prisma = new PrismaClient();

function toDifficulty(value: "EASY" | "MEDIUM" | "HARD"): Difficulty {
  switch (value) {
    case "EASY":
      return Difficulty.EASY;
    case "MEDIUM":
      return Difficulty.MEDIUM;
    case "HARD":
      return Difficulty.HARD;
  }
}

function toInputJsonValue(value: unknown): Prisma.InputJsonValue | Prisma.JsonNullValueInput {
  if (value === null || value === undefined) {
    return Prisma.JsonNull;
  }

  return value as Prisma.InputJsonValue;
}

const problems = problemBank.map((problem) => ({
  id: problem.id,
  slug: problem.slug,
  title: problem.title,
  description: problem.description,
  difficulty: toDifficulty(problem.difficulty),
  category: problem.category,
  tags: problem.tags,
  starterCode: problem.starterCode,
  explanation: problem.explanation,
  hints: problem.hints,
  testCases: problem.testCases
}));

async function main() {
  for (const problem of problems) {
    await prisma.problem.upsert({
      where: { id: problem.id },
      update: {
        slug: problem.slug,
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty,
        category: problem.category,
        tags: problem.tags,
        starterCode: problem.starterCode,
        explanation: problem.explanation,
        isPublished: true,
        testCases: {
          deleteMany: {},
          create: problem.testCases.map((testCase) => ({
            id: testCase.id,
            input: toInputJsonValue(testCase.input),
            expectedOutput: toInputJsonValue(testCase.expectedOutput),
            isHidden: testCase.isHidden,
            order: testCase.order
          }))
        }
      },
      create: {
        id: problem.id,
        slug: problem.slug,
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty,
        category: problem.category,
        tags: problem.tags,
        starterCode: problem.starterCode,
        explanation: problem.explanation,
        isPublished: true,
        testCases: {
          create: problem.testCases.map((testCase) => ({
            id: testCase.id,
            input: toInputJsonValue(testCase.input),
            expectedOutput: toInputJsonValue(testCase.expectedOutput),
            isHidden: testCase.isHidden,
            order: testCase.order
          }))
        }
      }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
