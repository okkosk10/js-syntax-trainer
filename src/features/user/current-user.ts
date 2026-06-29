import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import {
  ANONYMOUS_USER_COOKIE_NAME,
  createAnonymousUserToken,
  getAnonymousUserCookieOptions,
  isValidAnonymousUserToken
} from "@/features/user/anonymous-user-cookie";

type GetCurrentUserOptions = {
  ensureCookie?: boolean;
};

export type CurrentUserResult = {
  user: {
    id: string;
    email: string;
    name: string | null;
  };
  token: string;
};

function tokenToAnonymousEmail(token: string) {
  return `anon_${token}@js-syntax-trainer.local`;
}

export async function getCurrentUser(options: GetCurrentUserOptions = {}): Promise<CurrentUserResult> {
  const cookieStore = await cookies();
  const rawToken = cookieStore.get(ANONYMOUS_USER_COOKIE_NAME)?.value;

  let token: string;
  let shouldSetCookie = false;

  if (isValidAnonymousUserToken(rawToken)) {
    token = rawToken;
  } else {
    token = createAnonymousUserToken();
    shouldSetCookie = true;
  }

  if (options.ensureCookie && shouldSetCookie) {
    cookieStore.set(ANONYMOUS_USER_COOKIE_NAME, token, getAnonymousUserCookieOptions());
  }

  const user = await prisma.user.upsert({
    where: { email: tokenToAnonymousEmail(token) },
    update: {},
    create: {
      email: tokenToAnonymousEmail(token),
      name: "익명 사용자"
    },
    select: {
      id: true,
      email: true,
      name: true
    }
  });

  return {
    user,
    token
  };
}
