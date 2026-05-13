"use client";

import { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";
import Link from "next/link";

const KEY = "navigate_newsletter_shown";

export default function NewsletterPopup() {
  console.log("COOKIE BANNER MOUNTED");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hasScrolled = false;
    let timerTriggered = false;

    const shown = localStorage.getItem(KEY);
    if (shown) return;

    // 1. Time delay (10–15s)
    const timer = setTimeout(() => {
      timerTriggered = true;
      maybeShow();
    }, 12000);

    // 2. Scroll detection
    const onScroll = () => {
      const scrollPercent =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (scrollPercent > 0.45) {
        hasScrolled = true;
        maybeShow();
      }
    };

    function maybeShow() {
      if (timerTriggered && hasScrolled) {
        setVisible(true);
        localStorage.setItem(KEY, "true");
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:max-w-xs">
      <div className="relative rounded-xl border border-(--border) bg-(--card) shadow-xl overflow-hidden">

        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground"
        >
          <X size={16} />
        </button>

        <div className="bg-(--accent) px-4 py-3 flex items-center gap-2">
          <Mail className="w-4 h-4 text-(--primary)" />
          <div>
            <p className="text-sm font-semibold">Stay in the Loop</p>
            <p className="text-xs text-muted-foreground">
              Tips, updates & opportunities
            </p>
          </div>
        </div>

        <div className="p-4 space-y-3">

          <p className="text-xs text-muted-foreground">
            Get practical business insights from real-world mentoring experience.
          </p>

          <Link
            href="/newsletter"
            className="block w-full text-center h-9 bg-(--primary) text-white rounded-md text-sm leading-9"
          >
            Join Free Updates
          </Link>

          <button
            onClick={() => setVisible(false)}
            className="w-full text-xs text-muted-foreground hover:text-foreground"
          >
            No thanks
          </button>

        </div>
      </div>
    </div>
  );
}