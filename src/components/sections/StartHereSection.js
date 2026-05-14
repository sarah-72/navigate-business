"use client";

import { motion } from "framer-motion";
import { Download, PlayCircle, FileText, Video } from "lucide-react";
import Link from "next/link";

export default function StartHereSection() {
  return (
    <section id="start-here" className="section-padding bg-(--background)">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <div className="editorial-rule justify-center mb-5">Start here</div>

          <h2 className="text-3xl sm:text-5xl text-(--foreground) mb-5 leading-[1.1] tracking-tight">
            <span className="font-normal">
              Before you commit{" "}
            </span>
            <span className="italic tracking-[-0.01em] text-(--primary) font-normal">
              to anything
            </span>
            <span className="font-normal">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Free Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl border border-[#d4d2d9] bg-(--card) p-6 sm:p-8 hover:border-emerald-700/50 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="inline-flex items-center gap-2 self-start mb-4 px-3 py-1.5 rounded-full bg-(--primary)/10 text-(--primary) text-[11px] font-bold tracking-widest uppercase">
              <FileText className="w-3.5 h-3.5" /> Free Guide
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-(--foreground) mb-3">
              Fresh Start: From Idea to Income
            </h3>

            <p className="text-(--muted-foreground) mb-4 leading-relaxed">
              A practical, no-nonsense guide to help you get clear, get moving,
              and start turning your idea into something that actually makes
              money — whether you&apos;re starting from scratch or already
              running a business that feels stuck.
            </p>

            <p className="text-sm font-semibold text-(--foreground) mb-2">
              Inside, you&apos;ll learn:
            </p>

            <ul className="text-sm text-(--muted-foreground)/90 space-y-1.5 mb-6 flex-1">
              <li>· What actually turns an idea into income</li>
              <li>· How to build income using the Navigate Income Method</li>
              <li>· Price with confidence and land your first paying customers</li>
              <li>· What to focus on first (without the overwhelm)</li>
            </ul>

            <a
              href="/fresh-start-from-idea-to-income.pdf"
              download
              className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-(--foreground) text-(--background) px-6 py-3 text-sm font-semibold hover:opacity-90 transition-colors"
            >
              <Download size={16} /> Download the guide
            </a>
             <p className="text-xs text-(--muted-foreground) text-center mt-3">
            Start at your own pace. No pressure.
          </p>
          </motion.div>

          {/* Free Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl border border-[#2a2834]/20 bg-(--charcoal) text-white p-6 sm:p-8 hover:shadow-xl transition-all flex flex-col"
          >
            <div className="inline-flex items-center gap-2 self-start mb-4 px-3 py-1.5 rounded-full bg-(--primary) text-(--primary-foreground) text-[11px] font-bold tracking-widest uppercase">
              <Video className="w-3.5 h-3.5" /> Free Training
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              From Idea to Income — Free Training
            </h3>

            <p className="text-white/75 mb-4 leading-relaxed">
              A free 30-minute session where I walk you through the Navigate way
              of getting your business clear, structured, and moving in the
              right direction.
            </p>

            <p className="text-sm font-semibold text-white mb-2">
              Inside, you&apos;ll learn:
            </p>

            <ul className="text-sm text-white/70 space-y-1.5 mb-6 flex-1">
              <li>· What&apos;s actually holding your business back</li>
              <li>
                · How to simplify your idea into something people will actually
                pay for
              </li>
              <li>
                · How to use the Navigate Income Method to build income streams
              </li>
              <li>
                · The next step you can take this week to move things forward
              </li>
            </ul>

            <Link
              href="/webinar"
              className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) hover:opacity-90 transition-colors"
            >
              <PlayCircle size={16} /> Watch the training
            </Link>
             <p className="text-xs text-white/60 text-center mt-3">
            Perfect if you prefer to see the bigger picture first.
          </p>
          </motion.div>
        </div>

        <p className="text-center text-(--primary) italic mt-8 max-w-2xl mx-auto">
          This is where most people go from &quot;thinking about it&quot; to
          actually doing something.
        </p>
      </div>
    </section>
  );
}