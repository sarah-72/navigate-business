"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection({ content = {} }) {
  const { heading = 'Ready to Get Started?', description = 'Take the first step towards your business goals.', button = { text: 'Get Started', href: '/contact' } } = content

  return (
    <section className="py-20 bg-(--primary)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-(--primary-foreground) mb-6">
            {heading}
          </h2>
          <p className="text-lg text-(--primary-foreground)/90 mb-8">
            {description}
          </p>
          <Link
            href={button.href || '/contact'}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--secondary-foreground) px-8 py-4 text-base font-semibold text-(--charcoal) hover:bg-(--primary-bright) transition-all shadow-lg"
          >
            {button.text || 'Get Started'}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}