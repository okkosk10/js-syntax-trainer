import { prisma } from "@/lib/prisma";
import { getHintsByProblemSlug } from "@/features/problem/problem-hints";

export type ProblemProgress = {
  attempts: number;
  passed: boolean;
  bestScore: number;
  lastSubmittedAt: string | null;
};

export type ProblemListItem = {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
  progress?: ProblemProgress;
};

export type ProblemDetail = ProblemListItem & {
  description: string;
  starterCode: string;
  explanation: string | null;
  hints?: string[];
};

export type ProblemListResponse = {
  problems: ProblemListItem[];
  initialProblem: ProblemDetail | null;
};

export type ProblemExecution = {
  id: string;
  testCases: {
    id: string;
    input: unknown;
    expectedOutput: unknown;
  }[];
};

function toProblemListItem(problem: {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
}, progress?: ProblemProgress): ProblemListItem {
  return {
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    category: problem.category,
    tags: problem.tags,
    progress
  };
}

function toProblemDetail(problem: {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
  description: string;
  starterCode: string;
  explanation: string | null;
}, progress?: ProblemProgress): ProblemDetail {
  return {
    ...toProblemListItem(problem, progress),
    description: problem.description,
    starterCode: problem.starterCode,
    explanation: problem.explanation,
    hints: getHintsByProblemSlug(problem.slug)
  };
}

async function getProgressMapByUserId(userId?: string) {
  if (!userId) {
    return new Map<string, ProblemProgress>();
  }

  const stats = await prisma.learningStat.findMany({
    where: { userId },
    select: {
      problemId: true,
      attempts: true,
      passed: true,
      bestScore: true,
      lastSubmittedAt: true
    }
  });

  return new Map<string, ProblemProgress>(
    stats.map((stat) => [
      stat.problemId,
      {
        attempts: stat.attempts,
        passed: stat.passed,
        bestScore: stat.bestScore,
        lastSubmittedAt: stat.lastSubmittedAt ? stat.lastSubmittedAt.toISOString() : null
      }
    ])
  );
}

export const problemRepository = {
  async findPublished(userId?: string) {
    const [problems, progressMap] = await Promise.all([
      prisma.problem.findMany({
        where: { isPublished: true },
        orderBy: [{ difficulty: "asc" }, { createdAt: "desc" }, { slug: "asc" }]
      }),
      getProgressMapByUserId(userId)
    ]);

    return problems.map((problem) => toProblemListItem(problem, progressMap.get(problem.id)));
  },

  async findPublishedWithInitialDetail(userId?: string): Promise<ProblemListResponse> {
    const [problems, progressMap] = await Promise.all([
      prisma.problem.findMany({
        where: { isPublished: true },
        orderBy: [{ difficulty: "asc" }, { createdAt: "desc" }, { slug: "asc" }]
      }),
      getProgressMapByUserId(userId)
    ]);

    return {
      problems: problems.map((problem) => toProblemListItem(problem, progressMap.get(problem.id))),
      initialProblem: problems[0] ? toProblemDetail(problems[0], progressMap.get(problems[0].id)) : null
    };
  },

  async findBySlug(slug: string, userId?: string) {
    const [problem, progressMap] = await Promise.all([
      prisma.problem.findUnique({
      where: { slug },
      include: {
        testCases: {
          where: { isHidden: false },
          orderBy: { order: "asc" }
        }
      }
      }),
      getProgressMapByUserId(userId)
    ]);

    return problem ? toProblemDetail(problem, progressMap.get(problem.id)) : null;
  },

  findPublicExecutionById(id: string): Promise<ProblemExecution | null> {
    return prisma.problem
      .findUnique({
        where: { id },
        include: {
          testCases: {
            where: { isHidden: false },
            orderBy: { order: "asc" }
          }
        }
      })
      .then((problem) => {
        if (!problem) {
          return null;
        }

        return {
          id: problem.id,
          testCases: problem.testCases.map((testCase) => ({
            id: testCase.id,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput
          }))
        };
      });
  }
};
