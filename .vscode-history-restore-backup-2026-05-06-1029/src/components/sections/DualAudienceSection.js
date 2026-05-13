"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Building2,
  Gift,
  Video,
  HandCoins,
  GraduationCap,
  Package,
  Users,
  Handshake,
  Landmark,
  FileCheck,
  Network,
  Briefcase,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const individualItems = [
  { Icon: Gift, title: "Lead magnets & free resources", desc: "Simple starting points to take action straight away" },
  { Icon: Video, title: "Free webinars & training", desc: "Clear guidance and a plan you can actually follow" },
  { Icon: HandCoins, title: "Pay-as-you-go mentoring", desc: "Support when you need it, no pressure, no long-term commitment" },
  { Icon: GraduationCap, title: "Workshops & courses", desc: "Build confidence, skills, and real momentum" },
  { Icon: Package, title: "Digital products", desc: "Tools, templates, and guidance to help you move faster" },
  { Icon: Users, title: "Content & community", desc: "Honest support, real talk, and people who get it" },
];

const orgItems = [
  { Icon: Handshake, title: "Primes & delivery partners", desc: "Flexible delivery with a focus on engagement, outcomes, and completion" },
  { Icon: Landmark, title: "Councils, CICs & local organisations", desc: "Community-based enterprise support that actually makes a difference" },
  { Icon: FileCheck, title: "Contract delivery", desc: "End-to-end mentoring and training that delivers real impact" },
  { Icon: Network, title: "Networking & outreach", desc: "Building relationships that create opportunities and trust" },
  { Icon: Briefcase, title: "Corporate training", desc: "Practical, engaging sessions that build confidence and skills" },
  { Icon: FileText, title: "Bid collaborations", desc: "Supporting strong, people-focused delivery proposals" },
];

export default function DualAudienceSection() {
  return (
    <section className="section-padding bg-(--background)">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="editorial-rule justify-center mb-5">
            Who we work with
          </div>

          <h2 className="text-3xl sm:text-5xl text-(--foreground) mb-4 leading-[1.1] tracking-tight">
            <span className="font-normal">Built for </span>
            <span className="italic tracking-[-0.01em] text-(--primary) font-normal">
              both sides of the table
            </span>
            <span className="font-normal">.</span>
          </h2>

          <p className="text-(--muted-foreground) text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4 font-light">
            Whether you&apos;re building something yourself or supporting others to do it, this is where we come in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* INDIVIDUAL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border-2 border-emerald-500 bg-(--card) overflow-hidden hover:border-(--mint-dark) hover:shadow-lg hover:shadow-(--primary)/10 transition-all duration-300"
          >
            <div className="h-52 overflow-hidden relative">
               <Image
    src="/navigate-business-individual-support.webp"
    alt="UK florist running her own small business with the help of navigate business mentoring"
    fill
     sizes="(max-width: 640px) 100vw, 50vw"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    loading="lazy"
  />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-(--mint-light) text-(--mint-dark)">
                  <User size={20} />
                </span>
                <div className="editorial-rule mb-0!">For Individuals</div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-(--foreground) mb-3 leading-tight">
                Got an idea, or trying to make things actually work?
              </h3>

              <p className="text-(--muted-foreground) text-base mb-5 leading-relaxed font-light">
                We support you at every stage, helping you turn your idea into a business that actually works. Here&apos;s how we can help:
              </p>

              <ul className="space-y-3 mb-6">
                {individualItems.map(({ Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-(--mint-light) text-(--mint-dark) mt-0.5">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm text-(--muted-foreground) leading-snug">
                      <span className="font-semibold text-(--foreground)">
                        {title}
                      </span>{" "}
                      — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/start-here"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-5 py-2.5 text-sm font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
                >
                  Start Here <ArrowRight size={16} />
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-700 px-5 py-2.5 text-sm font-semibold text-(--primary) hover:bg-(--primary) hover:text-(--primary-foreground) transition-colors"
                >
                  Book a Conversation
                </a>
              </div>
            </div>
          </motion.div>

          {/* ORGANISATION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border-2 border-emerald-500 bg-(--card) overflow-hidden hover:border-(--mint-dark) hover:shadow-lg hover:shadow-(--primary)/10 transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
    src="/navigate-business-enterprise-workshop.webp"
    alt="Navigate Business delivering enterprise workshop"
    fill
    sizes="(max-width: 640px) 100vw, 50vw"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
    loading="lazy"
  />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-(--mint-light) text-(--mint-dark)">
                  <Building2 size={20} />
                </span>
                <div className="editorial-rule mb-0!">
                  For Organisations
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-(--foreground) mb-3 leading-tight">
                For councils, primes, and delivery partners
              </h3>

              <p className="text-(--muted-foreground) text-base mb-5 leading-relaxed font-light">
                We deliver impact together, providing flexible, practical support that drives real outcomes. Here&apos;s how we work with organisations:
              </p>

              <ul className="space-y-3 mb-6">
                {orgItems.map(({ Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-(--mint-light) text-(--mint-dark) mt-0.5">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm text-(--muted-foreground) leading-snug">
                      <span className="font-semibold text-(--foreground)">
                        {title}
                      </span>{" "}
                      — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#partnerships"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-5 py-2.5 text-sm font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
                >
                  Speak to Our Delivery Team <ArrowRight size={16} />
                </a>

                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors"
                >
                  Start a Partnership
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}