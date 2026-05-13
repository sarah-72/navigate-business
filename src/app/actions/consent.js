"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "navigate_cookie_consent";

export async function setConsent(consent) {
  cookies().set(COOKIE_NAME, JSON.stringify(consent), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}