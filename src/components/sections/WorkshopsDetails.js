"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Check,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Cpu,
  MessageSquare,
} from "lucide-react";

import Header from "@/components/Header";
import PageHero from "@/components/sections/PageHero";
import WorkshopRegistrationDialog from "@/components/sections/WorkshopRegistrationDialog";

const iconMap = {
  "Start-Up in a Day": Sparkles,
  "AI for Small Business": Cpu,
  "Content That Converts": MessageSquare,
  "Leadership for Small Teams": Users,
};

const defaultWorkshops = [
  {
    icon: Sparkles,
    title: "Start-Up in a Day",
    duration: "1 day · Virtual",
    price: "£100",
    description:
      "From idea to launch-ready in a single day. Validate your offer, sort your pricing, and leave with a 90-day plan you can actually execute.",
    bullets: [
      "Idea validation framework",
      "Pricing & positioning",
      "First customer roadmap",
    ],
  },
  {
    icon: Cpu,
    title: "AI for Small Business",
    duration: "1 day · Virtual",
    price: "£120",
    description:
      "Stop watching from the sidelines. A practical hands-on day on the AI tools that actually save you hours — without the hype or the jargon.",
    bullets: [
      "Tools that pay back this week",
      "Prompts that work",
      "Build your own AI workflow",
    ],
  },
  {
    icon: MessageSquare,
    title: "Content That Converts",
    duration: "1 day · Virtual",
    price: "£100",
    description:
      "A full day on creating content that brings in real enquiries. Built for owners who hate posting on social media.",
    bullets: [
      "A 30-day content plan",
      "Hooks that stop the scroll",
      "Repurpose without burning out",
    ],
  },
  {
    icon: Users,
    title: "Leadership for Small Teams",
    duration: "1 day · Virtual",
    price: "£150",
    description:
      "For owners managing their first 1–10 people. The conversations, structures and standards that take pressure off you.",
    bullets: [
      "Hiring without regret",
      "Hard conversations made easy",
      "Hold standards without micromanaging",
    ],
  },
];

function formatPrice(price) {
  const amount = Number(price)
  if (Number.isNaN(amount)) {
    return price || 'TBA'
  }

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount / 100)
}

export default function WorkshopsDetails({ workshops = [] }) {
  const [open, setOpen] = useState(false);
  const workshopList = workshops.length > 0 ? workshops : defaultWorkshops;

  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Workshops"
          title={
            <>
              Practical 1-day workshops.{' '}
              <span className="italic text-(--primary-bright)">No fluff.</span>
            </>
          }
          intro="Live, virtual, small group. Built for owners who’d rather leave with a working plan than a pile of notes."
        />

        {/* IMAGE STRIP */}
        <section className="bg-(--background)">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/navigate-business-enterprise-workshop.webp"
                alt="Navigate Business workshop in session"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* WORKSHOPS GRID */}
        <section className="section-padding bg-(--background)">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <div className="editorial-rule justify-center mb-5">
                Upcoming workshops
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-(--foreground) leading-[1.1] tracking-tight">
                Pick the day that{' '}
                <span className="italic text-(--primary)">
                  moves you forward
                </span>
                .
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workshopList.map((w, i) => {
                const Icon = w.icon || iconMap[w.title] || Sparkles
                const priceLabel = w.price ? formatPrice(w.price) : 'TBA'

                return (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-(--border) bg-(--card) p-7 hover:border-(--primary)/40 hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-(--accent) text-(--primary)">
                        <Icon size={20} />
                      </div>
                      <span className="font-heading text-2xl font-bold text-(--foreground)">
                        {priceLabel}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-(--foreground) mb-2">
                      {w.title}
                    </h3>

                    <p className="inline-flex items-center gap-2 text-xs text-(--muted-foreground) mb-4">
                      <Clock size={14} /> {w.duration}
                    </p>

                    <p className="text-(--muted-foreground) leading-relaxed mb-5 flex-1">
                      {w.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {(w.bullets || []).map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-(--foreground)"
                        >
                          <Check className="w-4 h-4 text-(--primary) shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-(--foreground) text-(--background) px-6 py-3 text-sm font-semibold hover:bg-(--foreground)/90 transition-colors"
                    >
                      Register for this workshop
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="section-padding bg-(--muted)">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="editorial-rule justify-center mb-5">
                What to expect
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-light text-(--foreground) leading-[1.1] tracking-tight">
                Built to be{' '}
                <span className="italic text-(--primary)">
                  used, not stored
                </span>
                .
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Half-day or full-day",
                  desc: "Run live on Zoom. Recording available for 30 days.",
                },
                {
                  icon: Users,
                  title: "Small groups",
                  desc: "Capped at 12 attendees so nobody hides at the back.",
                },
                {
                  icon: GraduationCap,
                  title: "Workbooks included",
                  desc: "Templates and frameworks you keep and reuse.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-(--card) border border-(--border) p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-(--primary) text-(--primary-foreground) mb-4">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-heading font-bold text-(--foreground) mb-2">
                    {title}
                  </h3>

                  <p className="text-sm text-(--muted-foreground) leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WorkshopRegistrationDialog
          open={open}
          onOpenChange={setOpen}
        />
      </main>

    </>
  )
}
