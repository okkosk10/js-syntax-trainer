import { prisma } from "@/lib/prisma";

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
