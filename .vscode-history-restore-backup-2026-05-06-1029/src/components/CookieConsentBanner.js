"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsentCookie = document.cookie.includes("navigate_cookie_consent=");
    const dismissed = localStorage.getItem("navigate_cookie_banner_dismissed");

    if (!hasConsentCookie && !dismissed) {
      setVisible(true);
    }
  }, []);

  const updateConsent = async (value) => {
    try {
      const response = await fetch("/api/consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ consent: value }),
      });

      if (!response.ok) {
        throw new Error("Unable to save consent");
      }

      localStorage.setItem("navigate_cookie_banner_dismissed", "true");
      setVisible(false);
      window.dispatchEvent(new Event("cookieConsentChanged"));
    } catch (error) {
      console.error(error);
      alert("Unable to update cookie consent. Please try again.");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:right-4 sm:max-w-3xl">
      <div className="rounded-2xl border border-(--border) bg-(--card) shadow-xl p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-(--foreground)">
              We use cookies to improve your experience.
            </p>
            <p className="mt-1 text-sm text-(--muted-foreground)">
              Accept cookies for analytics and site functionality. Read our{' '}
              <Link href="/privacy-policy" className="underline text-(--primary)">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="underline text-(--primary)">
                Cookie Policy
              </Link>.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => updateConsent("declined")}
              className="rounded-md border border-(--border) bg-transparent px-4 py-2 text-sm text-(--foreground) transition hover:bg-(--border)"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => updateConsent("accepted")}
              className="rounded-md bg-(--primary) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--primary)/90"
            >
              Accept cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
