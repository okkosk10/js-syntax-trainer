import { prisma } from "@/lib/prisma";

export type ProblemListItem = {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
};

export type ProblemDetail = ProblemListItem & {
  description: string;
  starterCode: string;
  explanation: string | null;
};

export type ProblemListResponse = {
  problems: ProblemListItem[];
  initialProblem: ProblemDetail | null;
};

function toProblemListItem(problem: {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
}): ProblemListItem {
  return {
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    category: problem.category,
    tags: problem.tags
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
}): ProblemDetail {
  return {
    ...toProblemListItem(problem),
    description: problem.description,
    starterCode: problem.starterCode,
    explanation: problem.explanation
  };
}

export const problemRepository = {
  findPublished() {
    return prisma.problem.findMany({
      where: { isPublished: true },
      orderBy: [{ difficulty: "asc" }, { createdAt: "desc" }]
    }).then((problems) => problems.map(toProblemListItem));
  },

  findPublishedWithInitialDetail(): Promise<ProblemListResponse> {
    return prisma.problem
      .findMany({
        where: { isPublished: true },
        orderBy: [{ difficulty: "asc" }, { createdAt: "desc" }]
      })
      .then((problems) => ({
        problems: problems.map(toProblemListItem),
        initialProblem: problems[0] ? toProblemDetail(problems[0]) : null
      }));
  },

  findBySlug(slug: string) {
    return prisma.problem.findUnique({
      where: { slug },
      include: {
        testCases: {
          where: { isHidden: false },
          orderBy: { order: "asc" }
        }
      }
    }).then((problem) => (problem ? toProblemDetail(problem) : null));
  }
};
