"use client";

import { useEffect, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Check } from "lucide-react";
import Link from "next/link";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

const POPUP_KEY = "navigate_newsletter_dismissed";

/* ---------------- INPUT ---------------- */
function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full h-10 px-3 text-sm rounded-md
        border border-[#d4d2d9]
        bg-transparent text-(--foreground)
        placeholder:text-(--muted-foreground)
        outline-none transition
        focus:ring-2 focus:ring-(--primary)
      "
    />
  );
}

/* ---------------- CHECKBOX ---------------- */
function Checkbox({ checked, onChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        w-4 h-4 mt-1 flex items-center justify-center rounded-sm border
        border-[#d4d2d9] transition
        ${checked ? "bg-(--primary) text-white" : "bg-transparent"}
      `}
    >
      {checked && <Check className="w-3 h-3" />}
    </button>
  );
}

/* ---------------- POPUP ---------------- */
export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState("");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (localStorage.getItem(POPUP_KEY)) return;
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    localStorage.setItem(POPUP_KEY, "true");
    setShow(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setMsg("");

    if (!consent) {
      setMsg("Please accept the privacy policy.");
      return;
    }

    const fd = new FormData();
    fd.append("email", email);
    fd.append("name", name);
    fd.append("consent", "true");

    startTransition(async () => {
      try {
        const res = await subscribeToNewsletter(fd);

        if (res?.status === "exists") {
          setMsg("You're already subscribed.");
        } else {
          setMsg("You're in 🎉 Welcome!");
          localStorage.setItem(POPUP_KEY, "true");
          setTimeout(() => setShow(false), 1200);
        }
      } catch {
        setMsg("Something went wrong. Try again.");
      }
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 sm:max-w-sm"
        >
          <div className="
            relative rounded-xl overflow-hidden shadow-xl
            border border-[#d4d2d9]
            bg-(--card)
          ">

            {/* CLOSE */}
            <button
              onClick={close}
              aria-label="Close newsletter popup"
              className="absolute top-2 right-2 text-(--muted-foreground) hover:text-(--foreground)"
            >
              <X size={16} />
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-3 px-4 py-3 bg-(--accent)">
              <div className="w-8 h-8 rounded-full bg-(--primary)/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-(--primary)" />
              </div>

              <div>
                <p className="text-sm font-semibold text-(--foreground)">
                  Stay in the Loop
                </p>
                <p className="text-xs text-(--muted-foreground)">
                  Business insights & updates
                </p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={submit} className="p-4 space-y-3">

              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name (optional)"
                maxLength={100}
              />

              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                maxLength={255}
              />

              {/* CONSENT */}
              <div className="flex items-start gap-2">
                <Checkbox checked={consent} onChange={setConsent} />

                <label className="text-[11px] text-(--muted-foreground) leading-snug">
                  I agree to receive updates from Navigate Business Ltd.{" "}
                  <Link href="/privacy-policy" className="text-(--primary) hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {msg && (
                <p className="text-xs text-(--muted-foreground)">
                  {msg}
                </p>
              )}

              <button
                disabled={pending}
                className="
                  w-full h-10 rounded-md
                  bg-(--primary) text-white text-sm font-medium
                  hover:opacity-90 transition disabled:opacity-50
                "
              >
                {pending ? "Subscribing..." : "Subscribe"}
              </button>

              <button
                type="button"
                onClick={close}
                className="w-full text-xs text-(--muted-foreground) hover:text-(--foreground)"
              >
                No thanks
              </button>

              <div className="text-center pt-2">
                <Link
                  href="/"
                  className="text-[10px] text-(--muted-foreground) hover:text-(--foreground)"
                >
                  navigatebusiness.co.uk →
                </Link>
              </div>

            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}