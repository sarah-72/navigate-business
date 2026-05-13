"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Building2, PlayCircle } from "lucide-react";

export default function HeroSection({ content = {} }) {
  const {
    badgeText = 'Business Mentoring & Enterprise Delivery',
    titleLines = ['From Idea', 'to ', 'Income', '.'],
    description = 'Straight-talking support to help you start, grow, or get things properly moving again.',
    highlightText = 'No jargon. Just clear direction and results that move you forward.',
    ctaPrimary = { text: 'Get the Free Guide', href: '/start-here' },
    ctaSecondary = { text: 'Watch the Free Training', href: '/webinar' },
    note = 'Not sure where to start? Most people begin with the guide.',
    trustItems = [
      { icon: 'Award', label: '30+ years', sub: 'real business experience' },
      { icon: 'Building2', label: 'Trusted across', sub: 'DWP & funded programmes' },
      { icon: 'ShieldCheck', label: 'High engagement', sub: 'strong completion rates' },
    ],
  } = content

  const iconMap = {
    Award,
    ShieldCheck,
    Building2,
    PlayCircle,
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden" style={{backgroundColor: '#373643'}}>
      {/* Background image with deep gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/navigate-business-hero.jpg"
          alt="Navigate Business Hero Background"
          className="w-full h-full object-cover opacity-60"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/80 to-gray-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(24,203,150,0.18),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-green-400">
              {badgeText}
            </span>
            <span className="w-px h-3 bg-white/40" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-green-400">
              EXPERIENCE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[0.9] tracking-tight">
            <span className="font-poppins font-normal block">{titleLines[0]}</span>
            <span className="font-poppins font-normal">{titleLines[1]}</span>
            <span className="font-poppins font-normal text-green-400">{titleLines[2]}</span>
            <span className="font-poppins font-normal">{titleLines[3]}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Highlight */}
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto italic">
            {highlightText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
            <Link
              href={ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white hover:bg-green-600 transition-all shadow-lg"
            >
              {ctaPrimary.text}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={ctaSecondary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/5 px-7 py-3.25 text-sm font-semibold text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all"
            >
              <PlayCircle size={16} />
              {ctaSecondary.text}
            </Link>
          </div>

          <div className="-mt-8 mb-12 max-w-xl">
            <p className="text-xs sm:text-sm font-semibold text-green-400 mb-1">
              {note}
            </p>
          </div>

          {/* Trust markers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-2xl border-t border-white/10 pt-7">
            {trustItems.map(({ icon, label, sub }) => {
              const Icon = iconMap[icon] || Award
              return (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={18} className="text-green-400 mt-0.5 shrink-0" />
                  <div className="leading-tight">
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-white/75 text-xs">{sub}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}