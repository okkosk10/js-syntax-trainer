import { prisma } from "@/lib/prisma";

export const problemRepository = {
  findPublished() {
    return prisma.problem.findMany({
      where: { isPublished: true },
      orderBy: [{ difficulty: "asc" }, { createdAt: "desc" }]
    });
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
    });
  }
};
