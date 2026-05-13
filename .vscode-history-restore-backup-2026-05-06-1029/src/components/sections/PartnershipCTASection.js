"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function PartnershipCTA() {
  return (
    <section id="partnerships" className="relative overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/partnership-innovate-business.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gray-800/85" />
      </div>

      {/* Content */}
      <div className="relative section-padding">
        <div className="container mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-(--secondary-foreground) mb-6">
              A delivery partner <span className="text-primary">built on trust and results</span>
            </h2>

            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We partner with training providers, councils, the DWP, and organisations across the UK to deliver enterprise support, mentoring, and employability programmes. With experience across DPS, Restart, IPS, Help to Grow, and more — and high quality assurance built into everything we do. We integrate with your team, not bolt on from the outside.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-7 py-3.5 text-base font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
              >
                Partner With Us <ArrowRight size={18} />
              </a>

              <a
                href="/navigate-capability-statement.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-400/60 px-7 py-3.5 text-base font-semibold text-(--primary) hover:bg-(--primary)/10 transition-colors"
              >
                <Download size={18} /> Download Capability Statement
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-(--secondary-foreground) hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </a>

            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}