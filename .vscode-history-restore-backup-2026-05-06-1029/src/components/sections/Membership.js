"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import Link from "next/link";

import {
  Users,
  Video,
  Brain,
  Cpu,
  FileText,
  Heart,
  Check,
  ArrowRight,
  Star,
  Compass,
  GraduationCap,
} from "lucide-react";

import WorkshopRegistrationDialog from "@/components/sections/WorkshopRegistrationDialog";

const benefits = [
  {
    icon: Users,
    text: "Real-world mentoring — like sitting down with a cuppa and someone who gets it",
  },
  {
    icon: Video,
    text: "Monthly live group sessions to keep you on track",
  },
  {
    icon: Brain,
    text: "High completion and progression through engaging virtual delivery",
  },
  {
    icon: Cpu,
    text: "Forward-thinking approach using digital tools and AI",
  },
  {
    icon: FileText,
    text: "Practical templates, tools and resources you can actually use",
  },
  {
    icon: Heart,
    text: "A supportive community of like-minded business owners",
  },
];

const tiers = [
  {
    name: "Navigate Start",
    price: "£49",
    description: "Get clear, get started, stop overthinking",
    trial: "Start your first month for £29",
    features: [
      "1-hour Navigate Discovery Session to map out where you are and where you want to go",
      "Monthly business focus topic (marketing, pricing, mindset, etc.)",
      "Access to resource library (templates, guides, worksheets)",
      "Group support and accountability",
      "Q&A support during sessions",
    ],
    cta: "Get Started",
    popular: false,
    link: "/signup",
  },
  {
    name: "Navigate Build",
    price: "£99",
    description: "Build momentum and start seeing real progress",
    features: [
      "Everything in Navigate Start",
      "Monthly group coaching session",
      "Business check-in framework",
      "Access to recordings + mini trainings",
      "Priority Q&A support",
    ],
    cta: "Join Navigate Build",
    popular: true,
    link: "/signup",
  },
  {
    name: "Navigate Accelerate",
    price: "£179",
    description: "Fast-track your growth with personalised support",
    features: [
      "Everything in Navigate Build",
      "1 × monthly 1:1 session (1 hour)",
      "Personalised action plan support",
      "Direct access (voice note / priority messaging)",
    ],
    cta: "Enquire Now",
    popular: false,
    link: "/contact",
  },
];

const whoFor = [
  "Start-ups who need structure and direction",
  "Business owners feeling stuck or overwhelmed",
  "Side hustlers ready to turn ideas into income",
  "Existing businesses wanting to reset, refocus and grow",
];

export default function Membership() {
  const [workshopOpen, setWorkshopOpen] = useState(false);

  return (
    <motion.section
      id="membership"
      className="py-20 md:py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-(--primary) mb-3">
            Membership
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-(--secondary) mb-4 font-display">
            Stop trying to figure it out alone
          </h2>

          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-lg mb-4">
            Get the support, structure and accountability you need to turn your idea into consistent income.
          </p>

          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-base mb-5">
            Flexible support with no long-term commitment, stay as long as it&apos;s helping you move forward.
          </p>

          <p className="text-(--foreground) max-w-2xl mx-auto text-base font-semibold italic mb-6">
            This is where things start to click, and income starts to follow.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/30 text-(--primary) font-semibold text-sm">
            <Check className="w-4 h-4" /> No contracts. No pressure. Cancel anytime.
          </div>
        </div>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 p-6 rounded-xl bg-(--accent)/40 border border-(--border)/60 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-(--primary)/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-(--primary)" />
              </div>
              <p className="text-(--secondary) font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* PRICING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 bg-(--card) overflow-hidden transition-shadow ${
                tier.popular
                  ? "border-(--primary) shadow-xl md:-mt-4"
                  : "border-(--border)/60 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="bg-(--primary) text-(--primary-foreground) text-center py-2.5 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5">
                  <Star className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div className="p-6 md:p-8">
                <h4 className="text-xl font-bold text-(--secondary) font-display mb-1">
                  {tier.name}
                </h4>

                <p className="text-(--muted-foreground) text-sm mb-5">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-(--secondary)">
                    {tier.price}
                  </span>
                  <span className="text-(--muted-foreground)">/month</span>
                </div>

                {tier.trial && (
                  <p className="text-sm text-(--muted-foreground) mb-3">
                    <span className="font-medium text-(--foreground)/80">
                      {tier.trial}
                    </span>
                  </p>
                )}

                <p className="text-xs text-(--muted-foreground) mb-3">
                  Pay as you go. No contracts. Cancel anytime.
                </p>

                <p className="text-xs text-(--primary) font-medium mb-5 italic">
                  Stay as long as it&apos;s helping you.
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-(--primary) shrink-0 mt-0.5" />
                      <span className="text-(--secondary)/80 text-sm">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.link}>
                  <Button
                    size="lg"
                    className={`w-full font-semibold gap-2 ${
                      tier.popular
                        ? ""
                        : "bg-(--secondary) hover:bg-(--secondary)/90"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* WHO IS IT FOR */}
        <div className="max-w-3xl mx-auto mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-(--secondary) font-display text-center mb-10">
            Who is this for?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whoFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-5 rounded-xl bg-(--accent)/40 border border-(--border)/60"
              >
                <Check className="w-5 h-5 text-(--primary) shrink-0" />
                <span className="text-(--secondary) font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-(--secondary) font-display mb-5">
            You don&apos;t have to figure this out on your own.
          </h3>

          <p className="text-(--muted-foreground) text-lg mb-3">
            With the right support, structure, and someone in your corner — everything becomes clearer, and more achievable.
          </p>

          <Link href="/membership">
            <Button size="lg" className="gap-2">
              Explore Membership <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* WORKSHOPS */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-(--accent)/40 border border-(--border)/60">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GraduationCap className="w-6 h-6 text-(--primary)" />
            <h3 className="text-xl md:text-2xl font-bold text-(--secondary) font-display">
              Virtual Workshops
            </h3>
          </div>

          <p className="text-(--muted-foreground) mb-5 max-w-lg mx-auto">
            1-day virtual workshops from just £100 — covering everything from start-ups to AI, leadership to content creation.
          </p>

          <Button size="lg" className="font-semibold gap-2" onClick={() => setWorkshopOpen(true)}>
            Register for a Workshop <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <WorkshopRegistrationDialog
          open={workshopOpen}
          onOpenChange={setWorkshopOpen}
        />
      </div>
    </motion.section>
  );
}
