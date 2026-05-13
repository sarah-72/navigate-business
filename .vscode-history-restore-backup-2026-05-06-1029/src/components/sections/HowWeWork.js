"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Zap,
  ArrowRight,
  Check,
  Sparkles,
  GraduationCap,
  BadgeCheck,
  CalendarClock,
  Tag,
  FileX,
  MessageCircle,
  Users,
  Wrench,
  Lightbulb,
  Presentation,
  ClipboardList,
  Sparkle,
} from "lucide-react";
import Link from "next/link";

const offers = [
  {
    id: "kickstart",
    badge: "Kickstart",
    price: "£150",
    priceNote: "one-off",
    icon: Compass,
    title: "Foundational clarity.",
    description:
      "Where the business is, where it needs to be, and the first 90 days of focused action.",
    outcomes: [
      "Honest diagnostic of where you are",
      "90-day plan with the right priorities",
      "Clear definition of what success looks like",
    ],
    cta: "Begin with Kickstart",
    highlight: false,
  },
  {
    id: "power-session",
    badge: "Power Session",
    price: "£275",
    priceNote: "per session",
    icon: Zap,
    title: "High-intensity decision support.",
    description:
      "Bring the hard calls — pricing, hiring, scaling. One session, decision made.",
    outcomes: [
      "A specific decision made — not deferred",
      "Reasoning you can defend",
      "A move you can take this week",
    ],
    cta: "Book a Power Session",
    highlight: true,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="offers"
      className="relative section-padding overflow-hidden bg-linear-to-b from-white to-emerald-50"
    >
      {/* Backdrops */}
      <div
        aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,122,89,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
       className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#0f7a59_1px,transparent_1px),linear-gradient(to_right,#0f7a59_1px,transparent_1px)] bg-size-[64px_64px]"
      />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-(--primary)/10 border border-(--primary)/20 text-(--primary) text-[11px] font-bold tracking-[0.22em] uppercase">
            <Sparkles className="w-3.5 h-3.5" /> How we work
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-(--foreground) mb-5 leading-[1.05] tracking-tight">
            Two ways to <span className="italic text-(--primary)">get unstuck</span> — fast.
          </h2>

          <p className="text-(--muted-foreground) text-base sm:text-lg font-light leading-relaxed">
            No long programmes. No bloated retainers. Direct, senior-level mentoring designed to move your business forward this month — not next year.
          </p>
        </motion.div>

        {/* Offers */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;

            return (
              <motion.div
                key={offer.id}
                id={offer.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:-translate-y-1 ${
                  offer.highlight
                    ? "bg-(--primary) text-(--primary-foreground) border-(--primary) shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.5)]"
                    : "bg-(--card) text-(--foreground) border-(--border) shadow-xl hover:shadow-2xl"
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 right-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-(--foreground) text-(--background) text-[11px] font-bold tracking-wider uppercase shadow-lg">
                    Most chosen
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${
                      offer.highlight
                        ? "bg-(--primary-foreground)/15 text-(--primary-foreground)"
                        : "bg-(--accent) text-(--primary)"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <p
                    className={`text-xs font-bold tracking-widest uppercase ${
                      offer.highlight
                        ? "text-(--primary-foreground)/90"
                        : "text-(--primary)"
                    }`}
                  >
                    {offer.badge}
                  </p>
                </div>

                <h3 className="text-2xl sm:text-[1.7rem] font-bold leading-tight mb-3">
                  {offer.title}
                </h3>

                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-4xl sm:text-5xl font-bold">
                    {offer.price}
                  </span>
                  <span
                    className={`text-sm ${
                      offer.highlight
                        ? "text-(--primary-foreground)/70"
                        : "text-(--muted-foreground)"
                    }`}
                  >
                    {offer.priceNote}
                  </span>
                </div>

                <p
                  className={`leading-relaxed mb-6 ${
                    offer.highlight
                      ? "text-(--primary-foreground)/85"
                      : "text-(--muted-foreground)"
                  }`}
                >
                  {offer.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {offer.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full ${
                          offer.highlight
                            ? "bg-(--primary-foreground)/20 text-(--primary-foreground)"
                            : "bg-(--primary)/10 text-(--primary)"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] leading-snug">{o}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-all shadow-md ${
                    offer.highlight
                      ? "bg-(--primary-foreground) text-(--primary) hover:bg-(--primary-foreground)/90"
                      : "bg-(--foreground) text-(--background) hover:bg-(--foreground)/90"
                  }`}
                >
                  {offer.cta}
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* LOWER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-(--muted) border border-(--border) text-(--muted-foreground) text-[11px] font-bold tracking-[0.22em] uppercase">
              Not ready for 1:1?
            </div>

            <h3 className="text-2xl sm:text-4xl font-light text-(--foreground) mb-4 leading-[1.1] tracking-tight">
              Start with support that{" "}
              <span className="italic text-(--primary)">fits where you are</span>.
            </h3>

            <p className="text-(--muted-foreground) text-base sm:text-lg font-light leading-relaxed">
          Not ready for 1:1 mentoring? Start in a way that suits your needs, with
          flexible options designed around real life — no long-term commitment,
          no pressure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* MEMBERSHIP */}
        <div className="group relative flex flex-col rounded-2xl p-7 sm:p-8 bg-(--card) text-(--foreground) border-2 border-(--mint) shadow-lg hover:shadow-xl hover:border-(--mint-dark) hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-(--mint-light) text-(--mint-dark)">
              <BadgeCheck size={20} />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-(--mint-dark)">
              Membership
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            Ongoing Support, On Your Terms
          </h4>

          <ul className="space-y-2.5 mb-5 flex-1">
            {[
              { Icon: Tag, text: "From £49 per month, pay as you go" },
              { Icon: Sparkle, text: "Start your first month for £29" },
              { Icon: FileX, text: "No contracts. Cancel anytime" },
              { Icon: MessageCircle, text: "Live monthly Q&A support" },
              { Icon: Users, text: "Supportive, like-minded community" },
              { Icon: Wrench, text: "Tools and templates you&apos;ll actually use" },
              { Icon: CalendarClock, text: "Clear monthly guidance to keep you moving" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-(--mint-light) text-(--mint-dark) mt-0.5">
                  <Icon size={14} />
                </span>
                <span className="text-sm text-(--muted-foreground) leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm italic text-(--primary) mb-5">
            Mentoring • Motivation • Community • Clarity • Action
          </p>

          <Link
            href="/membership"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-5 py-3 text-sm font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
          >
            Explore Membership <ArrowRight size={16} />
          </Link>
        </div>

        {/* WORKSHOPS */}
        <div className="group relative flex flex-col rounded-2xl p-7 sm:p-8 bg-(--card) text-(--foreground) border-2 border-(--mint) shadow-lg hover:shadow-xl hover:border-(--mint-dark) hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-(--mint-light) text-(--mint-dark)">
              <GraduationCap size={20} />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-(--mint-dark)">
              Workshops
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            Focused Learning & Action
          </h4>

          <ul className="space-y-2.5 mb-5 flex-1">
            {[
              {
                Icon: Presentation,
                text: "Interactive sessions covering business planning, marketing, growth, and more",
              },
              {
                Icon: Lightbulb,
                text: "Hands-on, practical, and no &quot;death by PowerPoint&quot;",
              },
              {
                Icon: ClipboardList,
                text: "Leave each session with a clear, actionable plan",
              },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-(--mint-light) text-(--mint-dark) mt-0.5">
                  <Icon size={14} />
                </span>
                <span
                  className="text-sm text-(--muted-foreground) leading-snug"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </li>
            ))}
          </ul>

          <p className="text-sm text-(--muted-foreground) leading-relaxed mb-3">
            Whether you want to launch fast, get smarter with tech, create
            content that sells, or lead your team better, there&apos;s a session
            for you:
          </p>

          <ul className="space-y-2 mb-5">
            {[
              "Start-Up in a Day",
              "AI for Small Business",
              "Content That Converts",
              "Leadership for Small Teams",
            ].map((topic) => (
              <li key={topic} className="flex items-center gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-(--mint-light) text-(--mint-dark)">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-(--foreground)">
                  {topic}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/workshops"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-5 py-3 text-sm font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
          >
            Explore Workshops <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
      </div>
    </section>
  );
}