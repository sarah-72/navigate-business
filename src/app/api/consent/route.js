import { NextResponse } from "next/server";

const COOKIE_NAME = "navigate_cookie_consent";
const MAX_AGE = 60 * 60 * 24 * 365;

export async function POST(request) {
  const body = await request.json();
  const { consent } = body;

  if (consent !== "accepted" && consent !== "declined") {
    return NextResponse.json({ error: "Invalid consent value" }, { status: 400 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, String(consent), {
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
