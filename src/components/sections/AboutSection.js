"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Award, Heart, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-(--muted)"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl relative">
        {/* FIXED LAYOUT (from version 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center lg:items-start">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-full bg-(--primary)/20 blur-2xl -z-10" />

              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white relative">
                <Image
                  src="/sarah-grocott.png"
                  alt="Sarah Grocott — Founder, Navigate Business"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* 30+ badge */}
              <div className="absolute -bottom-3 -right-3 bg-(--primary) text-(--primary-foreground) w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg">
                <span className="font-bold text-2xl leading-none">30+</span>
                <span className="text-[11px] text-center leading-tight mt-1">
                  Years
                </span>
              </div>
            </motion.div>

            {/* Credentials (V1 content preserved) */}
            <div className="mt-8 w-full max-w-sm">
              <p className="font-semibold text-(--foreground) mb-3">
                Credentials & Highlights
              </p>

              <ul className="space-y-2.5">
                {[
                  "30+ years of real-world business experience",
                "Help to Grow Business Mentor & Enterprise Trainer",
                "Member of the Association of Business Mentors",
                "Experience supporting delivery across start-ups, SMEs, DWP-funded, and national enterprise programmes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-(--muted-foreground) text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-(--primary) text-(--primary-foreground) flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN (V1 content restored) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="editorial-rule mb-5">
              The Wingwoman behind Navigate
            </div>

            <h2 className="text-3xl sm:text-5xl text-(--foreground) mb-5 leading-[1.1] tracking-tight">
              <span className="font-normal">Sarah Grocott — </span>
              <span className="italic text-(--primary) font-normal">
                30+ years building real businesses
              </span>
              <span className="font-normal">.</span>
            </h2>

            {/* V1 paragraph 1 */}
            <p className="text-(--muted-foreground) leading-relaxed mb-6 font-light text-lg">
              <strong className="text-(--foreground)">
                Navigate exists because most founders don&apos;t need more theory
              </strong>{" "}
              — they need someone who&apos;s actually done it to look at their situation and tell them the truth. That&apos;s the standard every session, every programme, every partnership is built on.
            </p>

            {/* V1 paragraph 2 */}
            <p className="text-(--muted-foreground) leading-relaxed mb-6 font-light text-lg">
              Hi, I&apos;m <strong className="text-(--foreground)">Sarah</strong>. I help founders, side hustlers, and organisations turn ideas into real businesses without the overwhelm. With hands-on support, practical tools, and clear next steps, I make sure you get moving — not just thinking about it.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-(--primary) px-6 py-3 text-(--primary-foreground) font-semibold hover:bg-(--primary)/90 transition-colors"
              >
                Meet Sarah <ArrowRight size={18} />
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-(--primary) px-6 py-3 text-(--primary) font-semibold hover:bg-(--primary) hover:text-(--primary-foreground) transition-colors"
              >
                Book a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}