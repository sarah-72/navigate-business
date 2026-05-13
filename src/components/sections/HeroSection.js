"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Building2, PlayCircle } from "lucide-react";


export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-(--charcoal)">
      {/* Background image with deep gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/navigate-business-hero.jpg"
          alt="Navigate Business Hero Background"
          className="w-full h-full object-cover opacity-60"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[hsl(252_10%_16%)] via-[hsl(252_10%_16%/0.9)] to-[hsl(252_10%_16%/0.4)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(160_78%_28%/0.18),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full bg-(--primary-bright/15) border border-(--secondary-foreground)/70 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-(--primary-bright)" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-(--primary-bright)">
              Business Mentoring &amp; Enterprise Delivery
            </span>
            <span className="w-px h-3 bg-(--primary-bright/40)" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-(--primary-bright)">
              30+ years
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[3rem] sm:text-6xl lg:text-7xl text-(--secondary-foreground) leading-none mb-7">
            <span className="font-poppins font-normal block">From Idea</span>
            <span className="font-poppins font-normal">to </span>
            <span className="font-poppins text-(--primary-bright) font-normal">Income</span>
            <span className="font-poppins font-normal">.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-(--secondary-foreground)/90 mb-3 max-w-xl leading-relaxed font-light">
            Straight-talking support to help you start, grow, or get things properly moving again.
          </p>
          <p className="text-sm sm:text-base mb-10 max-w-xl leading-relaxed font-light italic text-(--primary-bright)">
            No jargon. Just clear direction and results that move you forward.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
            <Link
              href="/start-here"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-7 py-3.5 text-sm font-semibold text-(--primary-foreground) hover:bg-mint-dark transition-all shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)]"
            >
              Get the Free Guide
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/webinar"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-(--secondary-foreground)/5 px-7 py-3.25 text-sm font-semibold text-(--secondary-foreground) hover:bg-(--secondary-foreground) hover:text-(--charcoal) backdrop-blur-sm transition-all"
            >
              <PlayCircle size={16} />
              Watch the Free Training
            </Link>
          </div>

          <div className="-mt-8 mb-12 max-w-xl">
            <p className="text-xs sm:text-sm font-semibold text-(--primary-bright) mb-1">
              Not sure where to start? Most people begin with the guide.
            </p>
          </div>

          {/* Trust markers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-2xl border-t border-white/10 pt-7">
            {[
              { icon: Award, label: "30+ years", sub: "real business experience" },
              { icon: Building2, label: "Trusted across", sub: "DWP & funded programmes" },
              { icon: ShieldCheck, label: "High engagement", sub: "strong completion rates" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={18} className="text-(--primary-bright) mt-0.5 shrink-0" />
                <div className="leading-tight">
                  <p className="text-(--secondary-foreground) text-sm font-semibold">{label}</p>
                  <p className="text-(--secondary-foreground)/75 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}