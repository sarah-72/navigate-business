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
  "The Navigate Start-up Day": Sparkles,
  "AI for Small Business, Without the Overwhelm": Cpu,
  "Stop Overthinking Your Content": MessageSquare,
  "Revive & Thrive": Users,
};

const defaultWorkshops = [
  {
    icon: Sparkles,
    title: "The Navigate Start-up Day",
    duration: "1 day · Virtual",
    price: "£149",
    description:
      "Build the foundations for a business that's ready to launch, with practical guidance every step of the way.",
    bullets: [
      "Validate your business idea",
      "Choose the right business structure",
      "Create a simple business plan",
      "Price with confidence",
      "Set SMART goals and a 90 day action plan",
      "Ask questions throughout with live mentoring",
    ],
     includes: [
      "Templates",
      "Practical resources",
      "Digital workbook",
    ],
  },
  {
    icon: Cpu,
    title: "AI for Small Business, Without the Overwhelm",
    duration: "1 day · Virtual",
    price: "£149",
    description:
      "Build practical AI skills you can start using immediately. No jargon. No complicated systems. Work smarter not harder.",
    bullets: [
      "Choose the right AI tools for your business",
      "Create marketing content in minutes",
      "Save hours on admin and repetitive tasks",
      "Build your own AI toolkit with confidence",
      "Ask questions throughout with live mentoring",
    ],
    includes: [
      "Prompts",
      "Templates",
      "Practical resources",
      "Digital workbook",
    ],
  },
  {
    icon: MessageSquare,
    title: "Stop Overthinking Your Content",
    duration: "1 day · Virtual",
    price: "£149",
    description:
      "Stop guessing what to post. Learn a simple content system that helps you create consistent, engagaing content without spending hours staring at a blank screen.",
    bullets: [
     "Build a 30-day content plan in one day",
      "Create scroll-stopping hooks",
      "Write captions faster with confidence",
      "Repurpose content without burning out",
      "Use AI to speed up content creation",
      "Leave with templates and your own content workbook",
    ],
  },
  {
    icon: Users,
    title: "Revive & Thrive",
    duration: "1 day · Virtual",
    price: "£179",
    description:
      "Sometimes your business doesn't need another strategy. It needs clarity. Step back, simplify whats no longer working, and rebuild with a clear direction for growth.",
    bullets: [
     "Identify what's helping your business grow and what's holding it back",
      "Refresh your business plan and priorities",
      "Simplify your offers and messaging",
      "Strengthen your marketing and visibility",
      "Live mentoring throughout the workshop",
    ],
    includes: [
      "Practical templates",
      "Planning tools",
      "Your own digital workbook",
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
      minimumFractionDigits: 0,
    maximumFractionDigits: 0,
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
              <span className="italic text-(--primary-bright)">Built for action.</span>
            </>
          }
          intro="Interactive workshops that combine real world mentoring, practical business tools, AI and hands on learning. Every session is designed so you leave with clarity, confidence and actions you can use immediately."
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
{w.includes?.length > 0 && (
  <div className="mb-6">
    <p className="text-sm font-semibold text-(--foreground) mb-3">
      Includes
    </p>

    <ul className="space-y-2">
      {w.includes.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm text-(--foreground)"
        >
          <Check className="w-4 h-4 text-(--primary) shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-(--foreground) text-(--background) px-6 py-3 text-sm font-semibold hover:bg-(--foreground)/90 transition-colors"
                    >
                      Book your place
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
                 <p className="text-(--muted-foreground) mt-4 max-w-2xl mx-auto">
                Every workshop combines practical learning, live mentoring and real business conversations, so you leave with clarity, confidence and an action plan, not just pages of notes. Replay available for 30 days.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Interactive Learning",
                  desc: "Live on Zoom with practical exercises, discussion and live mentoring. Replay available for 30 days.",
                },
                {
                  icon: Users,
                  title: "Small groups",
                  desc: "Capped at 12 attendees, so everyone gets the chance to ask questions and be heard.",
                },
                {
                  icon: GraduationCap,
                  title: "Workbooks included",
                  desc: "Leave with practical templates, frameworks and workbooks you will actually use, long after the workshop ends.",
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
