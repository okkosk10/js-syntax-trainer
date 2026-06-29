import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ANONYMOUS_USER_COOKIE_NAME,
  createAnonymousUserToken,
  getAnonymousUserCookieOptions,
  isValidAnonymousUserToken
} from "@/features/user/anonymous-user-cookie";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ANONYMOUS_USER_COOKIE_NAME)?.value;

  if (isValidAnonymousUserToken(token)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.cookies.set(
    ANONYMOUS_USER_COOKIE_NAME,
    createAnonymousUserToken(),
    getAnonymousUserCookieOptions()
  );

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
