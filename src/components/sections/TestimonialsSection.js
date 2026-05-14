"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I'd been sitting on the idea for nearly two years. Too scared to price it, too scared to launch. After Kickstart I had a proper 90-day plan, my pricing made sense, and six weeks later I landed my first wholesale order with a local farm shop. I genuinely don't think I'd have a business without that first conversation with Sarah.",
    name: "Gemma P.",
    role: "Founder, Sweet Box Bakery",
    initials: "GP",
    metric: "1st wholesale order · 6 weeks",
  },
  {
    quote: "A year ago I was on Universal Credit, cleaning a couple of houses cash-in-hand and feeling like I was going backwards. Sarah didn't sugar-coat anything — she told me exactly what to fix and what to stop wasting energy on. Today I'm off benefits, two staff on the books, and I've just signed my first commercial contract with a property management firm.",
    name: "Rachel D.",
    role: "Owner, Sparkle Commercial Cleaning",
    initials: "RD",
    metric: "Off benefits · 2 hires · commercial contract",
  },
  {
    quote: "I got made redundant at 47 and had no idea what to do. One Power Session and I left with three actual decisions made — pricing, niche, and how to position myself. I stopped second-guessing everything. Nine months later I'm fully booked through to next quarter and turning work away.",
    name: "Joanne K.",
    role: "Freelance Project Manager",
    initials: "JK",
    metric: "Fully booked · 9 months",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-(--background)">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="editorial-rule justify-center mb-5">
            Testimonials
          </div>

          <h2 className="text-3xl sm:text-5xl text-(--foreground) mb-4 leading-[1.1] tracking-tight">
            <span className="font-normal">Real people. </span>
            <span className="italic tracking-[-0.01em]text-(--primary) font-normal">
              Real outcomes
            </span>
            <span className="font-normal">.</span>
          </h2>

          <p className="text-(--muted-foreground) leading-relaxed mt-4">
            Unedited words from people who weren&apos;t sure where to start — and what
            changed after working with us.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-gray-200 bg-(--card) p-8 flex flex-col"
            >
              <Quote size={28} className="text-(--primary)/30 mb-3" />

              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-(--accent) text-(--primary) text-xs font-semibold w-fit">
                {t.metric}
              </span>

              <p className="text-(--foreground) leading-relaxed mb-6 flex-1 italic">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-(--primary) text-(--primary)"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--primary)/15 text-(--primary) font-bold text-sm flex items-center justify-center">
                  {t.initials}
                </div>

                <div>
                  <p className="font-bold text-(--foreground) text-sm">
                    {t.name}
                  </p>
                  <p className="text-(--muted-foreground) text-xs">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}