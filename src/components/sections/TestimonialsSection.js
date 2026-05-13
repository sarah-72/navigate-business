"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I'd been going round in circles for months trying to get my cake business off the ground. Sarah sat me down, helped me price properly and sort my socials — within six weeks I had my first wholesale order. She doesn't just talk, she rolls her sleeves up with you.",
    name: "Gemma P.",
    role: "Founder, Sweet Box Bakery",
    initials: "GP",
    highlight: "First wholesale order in 6 weeks",
  },
  {
    quote: "I was on Universal Credit with a dream of starting a cleaning business but no idea where to begin. Sarah helped me put together a proper business plan, get my pricing right, and gave me the confidence to actually go for it. Twelve months on I'm off benefits, employing two staff, and just signed my first commercial contract.",
    name: "Rachel D.",
    role: "Owner, Sparkle Commercial Cleaning",
    initials: "RD",
    highlight: "Off benefits & employing 2 staff",
  },
  {
    quote: "After redundancy I had no idea where to start. I was full of self-doubt and overthinking everything. Navigate helped me see what I already had — skills, experience, contacts I'd forgotten about. Nine months on, I'm fully booked as a freelance project manager and earning more than my old salary.",
    name: "Joanne K.",
    role: "Freelance Project Manager",
    initials: "JK",
    highlight: "Fully booked within 9 months",
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
                {t.highlight}
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