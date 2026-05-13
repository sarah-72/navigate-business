"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Handshake,
  UserCheck,
  Users,
  Building2,
  ClipboardList,
  Network,
  Presentation,
  Target,
  Magnet,
  Video,
  MessageCircle,
  GraduationCap,
  FileDown,
  Mic,
  MessagesSquare,
  FolderOpen,
  NotebookPen,
  Settings,
  Laptop,
  Award,
  Heart,
  Compass,
  Rocket,
  TrendingUp,
} from "lucide-react";

const partnerships = [
  { icon: Users, title: "Primes & delivery partners", desc: "Flexible delivery with a focus on engagement, outcomes and completion" },
  { icon: Building2, title: "Councils, CICs & local organisations", desc: "Community-based enterprise support that actually makes a difference" },
  { icon: ClipboardList, title: "Contract delivery", desc: "End-to-end mentoring and training that delivers real impact" },
  { icon: Network, title: "Networking & outreach", desc: "Building relationships that create opportunities and trust" },
  { icon: Presentation, title: "Corporate training", desc: "Practical, engaging sessions that build confidence and skills" },
  { icon: Target, title: "Bid collaborations", desc: "Supporting strong, people-focused delivery proposals" },
];

const individuals = [
  { icon: Magnet, title: "Lead magnets & free resources", desc: "Simple starting points to help you take action straight away" },
  { icon: Video, title: "Free webinars & training", desc: "Clear guidance and a plan you can actually follow" },
  { icon: MessageCircle, title: "Pay as you go mentoring", desc: "Support when you need it, no pressure, no long-term commitment" },
  { icon: GraduationCap, title: "Workshops & courses", desc: "Build confidence, skills and real momentum" },
  { icon: FileDown, title: "Digital products", desc: "Tools, templates and guidance to help you move faster" },
  { icon: Mic, title: "Content & community", desc: "Honest support, real talk, and people who get it" },
];

const membership = [
  { icon: MessagesSquare, label: "Live monthly Q&A support" },
  { icon: Users, label: "Supportive, like-minded community" },
  { icon: FolderOpen, label: "Tools and templates you'll actually use" },
  { icon: NotebookPen, label: "Clear monthly guidance to keep you moving" },
];

const enablers = [
  { icon: Settings, title: "CRM & automation", desc: "Smarter systems so your business doesn't rely on guesswork" },
  { icon: Laptop, title: "Digital delivery", desc: "Flexible, accessible support that fits around real life" },
  { icon: Award, title: "Proven experience", desc: "Years of working with real businesses, not just theory" },
  { icon: Heart, title: "Trusted & values led", desc: "Honest support, real conversations, no fluff" },
];

const outcomes = [
  "Stronger businesses",
  "More confident leaders",
  "Sustainable growth",
  "Positive community impact",
];

function PillarCard({ badge, icon: BadgeIcon, heading, subheading, items }) {
  return (
    <div className="relative rounded-2xl border-2 border-emerald-400/20 bg-(--card) p-6 sm:p-8 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-400/5 transition-all">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-400 text-white px-5 py-2 rounded-full shadow-md">
        <BadgeIcon className="w-4 h-4" />
        <span className="text-sm font-bold tracking-widest uppercase">{badge}</span>
      </div>

      <div className="text-center mt-3 mb-6">
        <p className="text-base font-bold text-(--foreground) tracking-wide uppercase">{heading}</p>
        <p className="text-sm text-(--muted-foreground) mt-1">{subheading}</p>
      </div>

      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <item.icon className="text-emerald-400" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-(--foreground) leading-snug">{item.title}</p>
              <p className="text-xs text-(--muted-foreground) leading-snug mt-0.5">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EcosystemOverview() {
  return (
    <section className="section-padding bg-emerald-50/30">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-2">
            Our Self-Employment Ecosystem
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            From Idea to Income with <span className="text-emerald-400 italic">Clarity</span>
          </h2>

          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-base sm:text-lg">
            Business mentoring sits at the heart of everything we do, supporting real people at every stage, whether you&apos;re just starting out, growing something, or trying to get things back on track.
          </p>
        </motion.div>

        {/* Core */}
          <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mb-10 rounded-2xl bg-(--charcoal) text-white p-6 sm:p-8 text-center shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-transparent pointer-events-none" />
        <Compass className="w-8 h-8 text-(--primary) mx-auto mb-3" />
        <p className="text-xs tracking-widest uppercase text-(--primary) mb-2">At the heart of everything</p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">Business Mentoring</h3>
        <p className="text-white/80 text-sm sm:text-base italic">
          Real support that gives you clarity, structure and confidence to actually move forward, make decisions, and start seeing progress, not just thinking about it.
        </p>
      </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <PillarCard badge="Partnerships" icon={Handshake} heading="Delivering Impact Together" subheading="For organisations, primes and delivery partners" items={partnerships} />
          <PillarCard badge="Individuals" icon={UserCheck} heading="Supporting You at Every Stage" subheading="For start-ups, side hustles and business owners" items={individuals} />

          {/* Membership */}
          <div className="relative rounded-2xl border-2 border-emerald-400 bg-emerald-400/5 p-6 sm:p-8 h-full">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-400 text-white px-5 py-2 rounded-full shadow-md">
              <Users className="w-4 h-4" />
              <span className="text-sm font-bold uppercase">Membership</span>
            </div>

            <div className="text-center mt-3 mb-4">
              <p className="font-bold uppercase">Ongoing Support, On Your Terms</p>

              <p className="text-sm font-bold mt-3">
                From <span className="text-emerald-400 text-lg">£49</span> per month, pay as you go
              </p>

              <p className="text-xs text-(--muted-foreground) mt-1">
                Start your first month for <span className="font-semibold text-foreground/80">£29</span>
              </p>

              <p className="text-xs text-(--muted-foreground) mt-1">
                No contracts. Cancel anytime.
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <div className="px-3 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 text-xs font-semibold">
                ✓ Pay as you go. No contracts. No pressure.
              </div>
            </div>

            <p className="text-xs text-(--muted-foreground) text-center mb-5 max-w-xs mx-auto">
              Join when you need support. Step back when you don&apos;t. Simple, flexible, and designed around real life, not rigid subscriptions..
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {membership.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-(--card) rounded-xl p-3 border-gray-200">
                  <item.icon className="text-emerald-400 mb-2" size={24} />
                  <p className="text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm italic text-(--primary)">
              <span>Mentoring</span> • <span>Motivation</span> • <span>Community</span> • <span>Clarity</span> • <span>Action</span>
            </div>

            <Link
              href="#membership"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-emerald-400 text-white font-bold text-sm px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Explore Membership
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}