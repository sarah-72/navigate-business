"use client";

import Header from "@/components/Header";
import PageHero from "@/components/sections/PageHero";
import Testimonials from "@/components/sections/TestimonialsSection";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Compass,
  Users,
  BookOpen,
  Laptop,
  Building,
  GraduationCap,
  Handshake,
  Network,
  Video,
  Check,
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const individualServices = [
  {
    icon: Compass,
    title: "Start-Up Guidance",
    desc: "Turn your idea into a clear, practical action plan. Understand what to do first, what to focus on, and how to move forward without overthinking.",
  },
  {
    icon: Users,
    title: "1:1 Mentoring",
    desc: "Ongoing personal support to help you stay focused, make decisions, and keep momentum. Honest guidance and clear next steps.",
  },
  {
    icon: BookOpen,
    title: "Workshops & Courses",
    desc: "Hands-on sessions focused on real business skills — planning, marketing, pricing, and growth. Practical tools you can apply immediately.",
  },
  {
    icon: Laptop,
    title: "Digital Marketing & AI Support",
    desc: "Simple, practical help to get your business visible online and using digital tools effectively — without the overwhelm.",
  },
];

const orgServices = [
  {
    icon: Building,
    title: "Enterprise Programme Delivery",
    desc: "High-quality delivery of funded enterprise and employability programmes. Engaging, consistent, and outcomes-driven.",
  },
  {
    icon: GraduationCap,
    title: "Workshop Facilitation",
    desc: "Interactive workshops designed to engage participants and create action, confidence, and progress.",
  },
  {
    icon: Handshake,
    title: "Mentoring for Funded Contracts",
    desc: "Experienced delivery across DWP, council, and training provider programmes. Reliable support that meets compliance and outcomes.",
  },
  {
    icon: Network,
    title: "Partnership Delivery",
    desc: "We work as an extension of your team, integrating seamlessly into your programmes to improve engagement and results.",
  },
  {
    icon: Video,
    title: "Training Delivery",
    desc: "Online and in-person sessions designed to build confidence, skills, and practical capability.",
  },
];

const membershipFeatures = [
  "Monthly live group support",
  "Business focus and accountability",
  "Tools, templates, and resources",
  "Practical guidance to keep you moving forward",
];

const moveForwardSteps = [
  { icon: Target, text: "Understand where you are" },
  { icon: Lightbulb, text: "Decide what matters next" },
  { icon: ArrowRight, text: "Take clear, confident action" },
  { icon: TrendingUp, text: "Keep moving forward with support" },
];

/* ---------------- COMPONENT ---------------- */

export default function ServicesDetails() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Services"
          title={
            <>
              From idea to income with{" "}
              <span className="italic text-(--primary)">clarity</span>.
            </>
          }
          intro="Business support for individuals and organisations who need clear direction, practical structure, and real progress — not just advice."
        />

        {/* -------- CORE -------- */}
        <section className="section-padding bg-(--background)">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-(--primary)/10 border border-(--primary)/30 text-(--primary) text-[11px] font-bold uppercase">
                <Sparkles size={14} /> Our approach
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-(--foreground) mb-6">
                Business mentoring at the core
              </h2>

              <p className="text-(--muted-foreground) mb-4">
                Business mentoring sits at the heart of everything we do. We help people move from
                stuck, overwhelmed, or unsure into clear thinking, confident decisions, and meaningful action.
              </p>

              <p className="italic text-(--muted-foreground)">
                No jargon. No confusion. Just support that helps you move forward.
              </p>
            </motion.div>
          </div>
        </section>

        {/* -------- CHOOSE PATH -------- */}
         <section className="section-padding bg-(--accent)/40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--foreground) mb-4">
            Choose your path
          </h2>
          <p className="text-(--muted-foreground) text-lg max-w-2xl mx-auto">
            Two clear routes — whichever fits, we make sure you leave with progress.
          </p>
        </motion.div>

        {/* INDIVIDUALS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mb-20"
        >
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-(--primary) rounded-full" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-(--primary)">
                For Individuals
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-(--foreground) mb-2">
              Start-ups, side hustles, and business owners
            </h3>

            <p className="text-(--muted-foreground) max-w-2xl">
              Practical support to help you start, grow, or reset your business with clarity and confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {individualServices.map((s) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="flex gap-5 rounded-2xl border border-(--border) bg-(--card) p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-(--primary)/10 text-(--primary) flex items-center justify-center">
                  <s.icon size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-(--foreground) mb-1.5 text-lg">
                    {s.title}
                  </h4>
                  <p className="text-(--muted-foreground) text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ORGANISATIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-(--secondary) rounded-full" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-(--secondary)">
                For Organisations
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-(--foreground) mb-2">
              Councils, primes, CICs, and delivery partners
            </h3>

            <p className="text-(--muted-foreground) max-w-2xl">
              We deliver structured, outcome-focused programmes that improve engagement, completion, and real-world progression.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {orgServices.map((s) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--card) p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-(--secondary)/10 text-(--secondary) flex items-center justify-center">
                  <s.icon size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-(--foreground) mb-1.5 text-lg">
                    {s.title}
                  </h4>
                  <p className="text-(--muted-foreground) text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>

        {/* -------- MEMBERSHIP -------- */}
        {/* Membership */}
<section className="section-padding bg-(--background)">
  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-(--charcoal) p-8 sm:p-12 lg:p-16"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,122,89,0.2),transparent_60%)]"
      />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-(--primary)/15 border border-(--primary)/40 text-(--primary) text-[11px] font-bold tracking-[0.2em] uppercase">
            Optional ongoing support
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-(--secondary-foreground) mb-5 leading-tight">
            Membership from{" "}
            <span className="italic text-(--primary)">
              £49/month
            </span>
          </h2>

          <p className="text-(--secondary-foreground)/85 text-base sm:text-lg leading-relaxed mb-3">
            Flexible business support. No contracts. Cancel anytime.
          </p>

          <p className="text-(--secondary-foreground)/80 leading-relaxed mb-8">
            Ongoing support designed around real life — join when you need
            guidance, step back when you don&apos;t. Support that fits your
            business, not rigid programmes.
          </p>

          <Link
            href="/membership"
            className="group inline-flex items-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-(--primary-foreground) font-semibold hover:bg-(--primary)/90 transition-all shadow-[0_10px_40px_rgba(15,122,89,0.4)]"
          >
            Explore membership
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* RIGHT LIST */}
        <ul className="space-y-4">
          {[
            "Monthly live group support",
            "Business focus and accountability",
            "Tools, templates, and resources",
            "Practical guidance to keep you moving forward",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-(--secondary-foreground)"
            >
              <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-(--primary)/20 text-(--primary)">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              <span className="text-base sm:text-lg font-light">
                {item}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </motion.div>
  </div>
</section>

        {/* -------- STEPS -------- */}
       {/* How we help you move forward */}
<section className="section-padding bg-(--accent)/40">
  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--foreground) mb-4 leading-tight">
        How we help you move forward
      </h2>

      <p className="text-(--muted-foreground) text-lg leading-relaxed">
        Starting or growing a business can feel unclear and overwhelming. We simplify it.
      </p>
    </motion.div>

    {/* Steps */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {[
        { icon: Target, text: "Understand where you are" },
        { icon: Lightbulb, text: "Decide what matters next" },
        { icon: ArrowRight, text: "Take clear, confident action" },
        { icon: TrendingUp, text: "Keep moving forward with support" },
      ].map((step, i) => (
        <motion.div
          key={step.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border border-(--border) bg-(--card) p-6 text-center hover:shadow-lg transition-all"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-(--primary)/10 text-(--primary) mb-4 mx-auto">
            <step.icon size={22} />
          </div>

          <div className="text-xs font-bold text-(--primary) mb-2 tracking-wider">
            STEP {i + 1}
          </div>

          <p className="text-(--foreground) font-medium leading-snug">
            {step.text}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Closing line */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xl sm:text-2xl font-light text-(--foreground) italic"
    >
      Clarity turns into progress. Progress turns into{" "}
      <span className="text-(--primary) not-italic font-medium">
        results
      </span>.
    </motion.p>

  </div>
</section>

        <Testimonials />

        {/* CTA */}
       {/* Work With Us CTA */}
<section className="section-padding bg-(--charcoal) relative overflow-hidden">
  {/* Background */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,122,89,0.18),transparent_60%)]"
  />

  <div className="container relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Label */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-(--primary)/15 border border-(--primary)/40 text-(--primary) text-[11px] font-bold tracking-[0.22em] uppercase">
        Work with us
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-(--secondary-foreground) mb-5 leading-tight">
        Not sure where you fit?{" "}
        <span className="italic text-(--primary)">
          We&apos;ll help you decide.
        </span>
      </h2>

      {/* Copy */}
      <p className="text-(--secondary-foreground)/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
        Book a conversation and we&apos;ll identify your next best step — whether
        that&apos;s mentoring, a programme, or partnership delivery.
      </p>

      {/* CTA */}
      <Link
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-xl bg-(--primary) px-8 py-4 text-(--primary-foreground) font-semibold hover:bg-(--primary)/90 transition-all shadow-[0_10px_40px_rgba(15,122,89,0.4)]"
      >
        Book a conversation
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </motion.div>
  </div>
</section>

        <Contact />
      </main>

    </>
  );
}