import { prisma } from "@/lib/prisma";

export const DEMO_USER_EMAIL = "demo@js-syntax-trainer.local";
export const DEMO_USER_NAME = "데모 사용자";

export async function ensureDemoUser() {
  return prisma.user.upsert({
    where: { email: DEMO_USER_EMAIL },
    update: {},
    create: {
      email: DEMO_USER_EMAIL,
      name: DEMO_USER_NAME
    }
  });
}
