"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const pct =
        docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

      setProgress(pct);
      setVisible(scrollTop > 600);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={scrollUp}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-(--card)/80 backdrop-blur-md border border-(--border) shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.45)] hover:shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.65)] hover:-translate-y-1 transition-all duration-500"
      style={{
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Progress Ring */}
      <svg
  className="absolute inset-0 -rotate-90"
  width="56"
  height="56"
  viewBox="0 0 56 56"
  aria-hidden="true"
>
  <circle
    cx="28"
    cy="28"
    r={radius}
    fill="none"
    stroke="#d4d2d9"
    strokeWidth="2"
  />
  <circle
    cx="28"
    cy="28"
    r={radius}
    fill="none"
    stroke="#0f7a59"
    strokeWidth="2"
    strokeLinecap="round"
    strokeDasharray={circumference}
    strokeDashoffset={offset}
    className="transition-[stroke-dashoffset] duration-150 ease-out"
  />
</svg>

      {/* Icon */}
      <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-(--primary) text-(--primary-foreground) transition-transform duration-300 group-hover:scale-110">
        <ArrowUp size={16} strokeWidth={2.5} />
      </span>
    </motion.button>
  );
}