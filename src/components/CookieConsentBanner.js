"use client";

import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

const CONSENT_KEY = "navigate_cookie_consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Reload to enable analytics
    window.location.reload();
  };

  const rejectCookies = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:max-w-md">
      <div className="relative rounded-xl border border-(--border) bg-(--card) shadow-xl overflow-hidden">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close cookie preferences"
          className="absolute top-2 right-2 text-muted-foreground"
        >
          <X size={16} />
        </button>

        <div className="bg-(--accent) px-4 py-3 flex items-center gap-2">
          <Cookie className="w-4 h-4 text-(--primary)" />
          <div>
            <p className="text-sm font-semibold">Cookie Preferences</p>
            <p className="text-xs text-muted-foreground">
              We use cookies to improve your experience
            </p>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <p className="text-xs text-muted-foreground">
            This website uses cookies to enhance your browsing experience and provide analytics.
          </p>

          <div className="flex gap-2">
            <button
              onClick={acceptCookies}
              className="flex-1 h-9 bg-(--primary) text-white rounded-md text-sm"
            >
              Accept All
            </button>
            <button
              onClick={rejectCookies}
              className="flex-1 h-9 border border-(--border) text-(--foreground) rounded-md text-sm hover:bg-(--accent)"
            >
              Reject All
            </button>
          </div>

          <Link
            href="/cookie-policy"
            className="block text-xs text-(--primary) hover:underline"
          >
            Learn more about our cookie policy
          </Link>
        </div>
      </div>
    </div>
  );
}