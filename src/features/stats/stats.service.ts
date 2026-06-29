import { prisma } from "@/lib/prisma";
import { problemBank } from "@/features/problem/problem-bank";
import { DEMO_USER_EMAIL } from "@/features/user/demo-user";

type Difficulty = "EASY" | "MEDIUM" | "HARD";

export type DifficultyProgress = {
  difficulty: Difficulty;
  total: number;
  solved: number;
  attempted: number;
  progressPercent: number;
};

export type CategoryProgress = {
  category: string;
  total: number;
  solved: number;
  attempted: number;
  averageBestScore: number;
  progressPercent: number;
};

export type WeakCategory = {
  category: string;
  reason: string;
  averageBestScore: number;
  solvedPercent: number;
};

export type DashboardStats = {
  totalProblems: number;
  solvedProblems: number;
  attemptedProblems: number;
  progressPercent: number;
  averageBestScore: number;
  totalSubmissions: number;
  recentSubmissionAt: string | null;
  difficultyProgress: DifficultyProgress[];
  categoryProgress: CategoryProgress[];
  weakCategories: WeakCategory[];
};

type CategoryAccumulator = {
  total: number;
  attempted: number;
  solved: number;
  scoreSum: number;
  lowScoreCount: number;
};

const DIFFICULTIES: Difficulty[] = ["EASY", "MEDIUM", "HARD"];

function toPercent(value: number) {
  return Math.round(value);
}

function buildFallbackStats(): DashboardStats {
  const categoryTotals = new Map<string, number>();

  for (const problem of problemBank) {
    categoryTotals.set(problem.category, (categoryTotals.get(problem.category) ?? 0) + 1);
  }

  const difficultyProgress = DIFFICULTIES.map((difficulty) => ({
    difficulty,
    total: problemBank.filter((problem) => problem.difficulty === difficulty).length,
    solved: 0,
    attempted: 0,
    progressPercent: 0
  }));

  const categoryProgress = Array.from(categoryTotals.entries())
    .map(([category, total]) => ({
      category,
      total,
      solved: 0,
      attempted: 0,
      averageBestScore: 0,
      progressPercent: 0
    }))
    .sort((left, right) => left.category.localeCompare(right.category));

  return {
    totalProblems: problemBank.length,
    solvedProblems: 0,
    attemptedProblems: 0,
    progressPercent: 0,
    averageBestScore: 0,
    totalSubmissions: 0,
    recentSubmissionAt: null,
    difficultyProgress,
    categoryProgress,
    weakCategories: []
  };
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [user, publishedProblems] = await Promise.all([
      prisma.user.findUnique({
        where: { email: DEMO_USER_EMAIL },
        select: { id: true }
      }),
      prisma.problem.findMany({
        where: { isPublished: true },
        select: {
          id: true,
          difficulty: true,
          category: true
        }
      })
    ]);

    const totalProblems = publishedProblems.length > 0 ? publishedProblems.length : problemBank.length;

    const difficultyTotals = new Map<Difficulty, number>(DIFFICULTIES.map((difficulty) => [difficulty, 0]));
    const categoryTotals = new Map<string, number>();

    const baseProblems = publishedProblems.length > 0 ? publishedProblems : problemBank;

    for (const problem of baseProblems) {
      const difficulty = problem.difficulty as Difficulty;
      difficultyTotals.set(difficulty, (difficultyTotals.get(difficulty) ?? 0) + 1);
      categoryTotals.set(problem.category, (categoryTotals.get(problem.category) ?? 0) + 1);
    }

    if (!user) {
      return {
        ...buildFallbackStats(),
        totalProblems,
        difficultyProgress: DIFFICULTIES.map((difficulty) => ({
          difficulty,
          total: difficultyTotals.get(difficulty) ?? 0,
          solved: 0,
          attempted: 0,
          progressPercent: 0
        })),
        categoryProgress: Array.from(categoryTotals.entries())
          .map(([category, total]) => ({
            category,
            total,
            solved: 0,
            attempted: 0,
            averageBestScore: 0,
            progressPercent: 0
          }))
          .sort((left, right) => left.category.localeCompare(right.category))
      };
    }

    const [stats, submissionsSummary] = await Promise.all([
      prisma.learningStat.findMany({
        where: { userId: user.id },
        select: {
          bestScore: true,
          passed: true,
          problem: {
            select: {
              difficulty: true,
              category: true
            }
          }
        }
      }),
      prisma.submission.aggregate({
        where: { userId: user.id },
        _count: { _all: true },
        _max: { createdAt: true }
      })
    ]);

    const attemptedProblems = stats.length;
    const solvedProblems = stats.filter((stat) => stat.passed).length;
    const averageBestScore =
      attemptedProblems === 0
        ? 0
        : toPercent(stats.reduce((sum, stat) => sum + stat.bestScore, 0) / attemptedProblems);

    const difficultySolved = new Map<Difficulty, number>(DIFFICULTIES.map((difficulty) => [difficulty, 0]));
    const difficultyAttempted = new Map<Difficulty, number>(DIFFICULTIES.map((difficulty) => [difficulty, 0]));

    const categoryStats = new Map<string, CategoryAccumulator>();

    for (const [category, total] of categoryTotals.entries()) {
      categoryStats.set(category, {
        total,
        attempted: 0,
        solved: 0,
        scoreSum: 0,
        lowScoreCount: 0
      });
    }

    for (const stat of stats) {
      const difficulty = stat.problem.difficulty as Difficulty;
      difficultyAttempted.set(difficulty, (difficultyAttempted.get(difficulty) ?? 0) + 1);

      if (stat.passed) {
        difficultySolved.set(difficulty, (difficultySolved.get(difficulty) ?? 0) + 1);
      }

      const existing =
        categoryStats.get(stat.problem.category) ??
        {
          total: 0,
          attempted: 0,
          solved: 0,
          scoreSum: 0,
          lowScoreCount: 0
        };

      existing.attempted += 1;
      existing.solved += stat.passed ? 1 : 0;
      existing.scoreSum += stat.bestScore;
      existing.lowScoreCount += stat.bestScore < 70 ? 1 : 0;

      categoryStats.set(stat.problem.category, existing);
    }

    const difficultyProgress: DifficultyProgress[] = DIFFICULTIES.map((difficulty) => {
      const total = difficultyTotals.get(difficulty) ?? 0;
      const solved = difficultySolved.get(difficulty) ?? 0;
      const attempted = difficultyAttempted.get(difficulty) ?? 0;

      return {
        difficulty,
        total,
        solved,
        attempted,
        progressPercent: total === 0 ? 0 : toPercent((solved / total) * 100)
      };
    });

    const categoryProgress: CategoryProgress[] = Array.from(categoryStats.entries())
      .map(([category, data]) => {
        const averageScore = data.attempted === 0 ? 0 : toPercent(data.scoreSum / data.attempted);

        return {
          category,
          total: data.total,
          solved: data.solved,
          attempted: data.attempted,
          averageBestScore: averageScore,
          progressPercent: data.total === 0 ? 0 : toPercent((data.solved / data.total) * 100)
        };
      })
      .sort((left, right) => right.progressPercent - left.progressPercent || left.category.localeCompare(right.category));

    const weakCategories: WeakCategory[] = Array.from(categoryStats.entries())
      .filter(([, data]) => data.attempted > 0)
      .map(([category, data]) => {
        const averageScore = toPercent(data.scoreSum / data.attempted);
        const solvedPercent = toPercent((data.solved / data.attempted) * 100);
        const lowScoreRatio = (data.lowScoreCount / data.attempted) * 100;
        const reasons: string[] = [];

        if (lowScoreRatio >= 40) {
          reasons.push("낮은 최고 점수 문제 비중이 높음");
        }

        if (solvedPercent < 50) {
          reasons.push("해결 비율이 낮음");
        }

        return {
          category,
          reason: reasons.join(" / "),
          averageBestScore: averageScore,
          solvedPercent,
          lowScoreRatio
        };
      })
      .filter((item) => item.reason.length > 0)
      .sort((left, right) => right.lowScoreRatio - left.lowScoreRatio || left.solvedPercent - right.solvedPercent)
      .slice(0, 5)
      .map((item) => ({
        category: item.category,
        reason: item.reason,
        averageBestScore: item.averageBestScore,
        solvedPercent: item.solvedPercent
      }));

    return {
      totalProblems,
      solvedProblems,
      attemptedProblems,
      progressPercent: totalProblems === 0 ? 0 : toPercent((solvedProblems / totalProblems) * 100),
      averageBestScore,
      totalSubmissions: submissionsSummary._count._all,
      recentSubmissionAt: submissionsSummary._max.createdAt ? submissionsSummary._max.createdAt.toISOString() : null,
      difficultyProgress,
      categoryProgress,
      weakCategories
    };
  } catch {
    return buildFallbackStats();
  }
}

export async function getUserLearningSummary(userId: string) {
  const [stats, submissions] = await Promise.all([
    prisma.learningStat.findMany({
      where: { userId },
      include: { problem: true }
    }),
    prisma.submission.count({
      where: { userId }
    })
  ]);

  const solved = stats.filter((stat) => stat.passed).length;
  const averageBestScore =
    stats.length === 0
      ? 0
      : Math.round(stats.reduce((sum, stat) => sum + stat.bestScore, 0) / stats.length);

  return {
    solved,
    attempted: stats.length,
    submissions,
    averageBestScore,
    weakCategories: stats
      .filter((stat) => stat.bestScore < 70)
      .map((stat) => stat.problem.category)
  };
}
