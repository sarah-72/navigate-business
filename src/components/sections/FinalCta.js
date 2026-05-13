"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-(--charcoal)">
      {/* Background effects */}
      <div
        aria-hidden="true"
       className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,122,89,0.18),transparent_60%)]"
      />

  <div
  aria-hidden="true"
  className="absolute inset-0 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-size-[64px_64px] opacity-[0.05]"
/>
      {/* Content */}
      <div className="relative section-padding">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl text-(--secondary-foreground) mb-5 leading-[1.1] tracking-tight">
              <span className="font-normal">One conversation. </span>
              <span className="italic tracking-[-0.01em] text-(--primary) font-normal">
                A clear next move
              </span>
              <span className="font-normal">.</span>
            </h2>

            <p className="font-normal text-(--muted-foreground) text-xl sm:text-2xl mb-10 leading-snug">
              Tell us where you are. We&apos;ll tell you the honest next step.
            </p>

            {/* CTA */}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-8 py-4 text-sm font-semibold text-(--primary-foreground) hover:bg-(--primary)/90 transition-colors shadow-[0_15px_50px_-10px_rgba(15,122,89,0.6)]"
            >
              Book the conversation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}