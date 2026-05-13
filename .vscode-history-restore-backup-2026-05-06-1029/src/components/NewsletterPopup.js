"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, X } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

const POPUP_DISMISSED_KEY = "navigate_newsletter_dismissed";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

 useEffect(() => {
  const dismissed = localStorage.getItem(POPUP_DISMISSED_KEY);
  if (dismissed) return;

  const shouldShow = () =>
    document.cookie.includes("navigate_cookie_consent=accepted");

  const schedulePopup = () => {
    const timer = window.setTimeout(() => setVisible(true), 2000);
    return () => window.clearTimeout(timer);
  };

  let cleanupTimer = null;

  if (shouldShow()) {
    cleanupTimer = schedulePopup();
  }

  const handleConsentChange = () => {
    if (shouldShow()) {
      if (cleanupTimer) cleanupTimer();
      cleanupTimer = schedulePopup();
    }
  };

  window.addEventListener("cookieConsentChanged", handleConsentChange);

  return () => {
    if (cleanupTimer) cleanupTimer();
    window.removeEventListener("cookieConsentChanged", handleConsentChange);
  };
}, []);

  const handleDismiss = () => {
    localStorage.setItem(POPUP_DISMISSED_KEY, "true");
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consent) {
      alert("Please tick the consent box to continue.");
      return;
    }

    if (!email.trim()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email.trim().toLowerCase());
      formData.append('name', name.trim());
      formData.append('consent', 'true');

      const result = await subscribeToNewsletter(formData);

      if (result.success) {
        alert(result.message);
        localStorage.setItem(POPUP_DISMISSED_KEY, "true");
        setVisible(false);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:max-w-xs animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="relative rounded-xl border border-[#d4d2d9] bg-(--card) shadow-xl overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-(--muted-foreground) hover:text-(--foreground)"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* HEADER */}
        <div className="bg-(--accent) px-4 py-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-(--primary)/10 flex items-center justify-center">
            <Mail className="w-4 h-4 text-(--primary)" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-(--foreground)">
              Stay in the Loop
            </h3>
            <p className="text-(--muted-foreground) text-xs">
              Tips, updates & events.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">

          <input
            type="text"
            placeholder="First name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="w-full h-9 px-3 rounded-md border border-[#d4d2d9] text-sm"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={255}
            className="w-full h-9 px-3 rounded-md border border-[#d4d2d9] text-sm"
          />

          {/* CHECKBOX */}
          <label className="flex items-start gap-2 text-[11px] text-(--muted-foreground)">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            I agree to receive updates from Navigate Business Ltd. See our{" "}
            <Link href="/privacy-policy" className="text-(--primary) underline">
              Privacy Policy
            </Link>.
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-(--primary) text-white text-xs py-2 rounded font-semibold"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

          <button
            type="button"
            onClick={handleDismiss}
            className="w-full text-xs text-(--muted-foreground)"
          >
            No thanks
          </button>

        </form>
      </div>
    </div>
  );
}