"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Users,
  Laptop,
  BookOpen,
  Building,
  Handshake,
  GraduationCap,
  Video,
} from "lucide-react";

const individualServices = [
  {
    icon: Rocket,
    title: "Start-Up Guidance",
    desc: "From idea to action plan — we help you get clear on your business, your market, and your next steps. No more scribbling on the back of receipts.",
  },
  {
    icon: Users,
    title: "1:1 Mentoring",
    desc: "Regular one-to-one support to keep you focused, accountable, and actually moving forward. Honest conversations and clear next steps.",
  },
  {
    icon: Laptop,
    title: "Digital Marketing & AI",
    desc: "We help you show up online in a way that actually attracts the right people. Simple, practical support — even if tech isn't your thing.",
  },
  {
    icon: BookOpen,
    title: "Workshops & Courses",
    desc: "Interactive group sessions covering business planning, marketing, growth, and more. Engaging, practical, and no death by PowerPoint.",
  },
];

const orgServices = [
  {
    icon: Building,
    title: "Enterprise Programme Delivery",
    desc: "High-quality delivery for enterprise support programmes and funded initiatives. Our team brings energy, engagement, and real outcomes.",
  },
  {
    icon: GraduationCap,
    title: "Workshop Facilitation",
    desc: "Engaging, outcomes-focused workshops for groups of all sizes. We make sessions that people actually want to attend.",
  },
  {
    icon: Handshake,
    title: "Mentoring for Funded Contracts",
    desc: "Experienced mentor support for DWP, council, and training provider contracts. Trusted, reliable, and properly backed.",
  },
  {
    icon: Users,
    title: "Collaboration Partnerships",
    desc: "Flexible partnership models that fit your programme needs. We integrate with your team, not bolt on from the outside.",
  },
  {
    icon: Video,
    title: "Training Delivery",
    desc: "Online and in-person training designed to engage and inspire participants. We deliver across the UK.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="workshops" className="section-padding bg-(--background)">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-(--foreground) mb-4">
            How We Help You Move Forward
          </h2>
          <p className="text-(--muted-foreground) text-lg max-w-2xl mx-auto">
            Starting or growing a business isn&apos;t always straightforward. It can feel messy, overwhelming, and hard to know what to focus on next.

That&apos;s where we come in.

We give you clarity, structure, and practical support to help you move forward, not just think about it.
          </p>
        </motion.div>

        {/* Individual */}
        <div className="mb-16">
         <motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-2xl font-bold text-(--foreground) mb-8 flex items-center flex-wrap gap-3"
>
  <span className="w-10 h-1 bg-(--primary) rounded-full" />
  
  <span>Individual Support</span>

  <span className="px-3 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 text-xs font-semibold">
    Start-ups, side hustles, and business owners
  </span>
</motion.h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {individualServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-(--card) p-6 hover:border-emerald-400/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent) text-(--primary) shrink-0">
                  <s.icon size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-(--foreground) mb-1">
                    {s.title}
                  </h4>
                  <p className="text-(--muted-foreground) text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organisations */}
        <div>
       <motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-2xl font-bold text-(--foreground) mb-8 flex items-center flex-wrap gap-3"
>
  <span className="w-10 h-1 bg-(--secondary) rounded-full" />
  
  <span>Organisation & Partnership Services</span>

  <span className="px-3 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-400 text-xs font-semibold">
    Councils, primes, and delivery partners
  </span>
</motion.h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {orgServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-gray-200 bg-(--card) p-6 hover:border-gray-800/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gray-800/10 text-(--secondary) shrink-0">
                  <s.icon size={22} />
                </div>

                <div>
                  <h4 className="font-heading font-bold text-(--foreground) mb-1">
                    {s.title}
                  </h4>
                  <p className="text-(--muted-foreground) text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
              
              
            ))}
          </div>
        </div>
<div>  
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 rounded-2xl bg-(--charcoal) text-white p-6 sm:p-8 text-center"
>
  <Rocket className="w-7 h-7 text-emerald-400 mx-auto mb-3" />

  <p className="font-heading text-xl sm:text-2xl font-bold mb-1">
    Not sure where you fit?
  </p>

  <p className="text-lg sm:text-xl italic text-emerald-400 mb-4">
    Start with a free resource or book a conversation
  </p>

  <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
    We&apos;ll help you figure out the right next step.
  </p>
</motion.div></div>
      </div>
    </section>
  );
}