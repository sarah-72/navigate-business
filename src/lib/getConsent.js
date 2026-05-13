import { cookies } from "next/headers";

const COOKIE_NAME = "navigate_cookie_consent";

export function getConsent() {
  const value = cookies().get(COOKIE_NAME);
  return value ? JSON.parse(value.value) : null;
}