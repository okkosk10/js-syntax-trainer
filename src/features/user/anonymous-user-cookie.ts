export const ANONYMOUS_USER_COOKIE_NAME = "js_syntax_trainer_user";
export const ANONYMOUS_USER_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function createAnonymousUserToken() {
  return crypto.randomUUID();
}

export function isValidAnonymousUserToken(value: string | undefined | null): value is string {
  if (!value) {
    return false;
  }

  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function getAnonymousUserCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ANONYMOUS_USER_COOKIE_MAX_AGE
  };
}
