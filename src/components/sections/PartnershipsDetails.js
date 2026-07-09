"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Handshake,
  Activity,
  Trophy,
  Monitor,
  Mail,
  Phone,
  MessageCircle,
  Download,
  FileText,
} from "lucide-react";

const outcomes = [
  { icon: Activity, title: "High engagement delivery", desc: "Keeping participants involved, motivated, and progressing" },
  { icon: Trophy, title: "Strong completion focus", desc: "Supporting individuals through to programme completion" },
  { icon: Monitor, title: "Effective virtual delivery", desc: "Flexible, accessible support that increases retention" },
  { icon: Target, title: "Outcome-driven approach", desc: "Focused on measurable results, not just activity" },
];

const howWeWork = [
  "Seamless integration with existing delivery teams",
  "Support tailored to programme structure and participant needs",
  "Consistent, high-quality delivery across cohorts",
  "Focus on engagement, progression, and measurable outcomes",
];

const credibility = [
  { icon: Award, title: "30+ Years Experience", desc: "Real-world business support and programme delivery" },
  { icon: Users, title: "National Programme Delivery", desc: "DWP, Restart, IPS, Help to Grow" },
  { icon: GraduationCap, title: "Qualified & Accredited", desc: "ILM Level 5 in Business Mentoring & Coaching" },
  { icon: TrendingUp, title: "Proven Outcomes", desc: "Strong engagement, completion, and participant progression" },
];

const whoWeWorkWith = [
  "Training providers and delivery organisations",
  "Councils and local authorities",
  "Prime contractors and programme providers",
  "Organisations delivering enterprise and employability programmes",
];

export default function PartnershipsDetails({ settings = {} }) {
  const capabilityStatementUrl = settings.capabilityStatementUrl || '/navigate-capability-statement.pdf'

  return (
    <>
      <Header />

      <main className="pt-24">

        {/* 1. HERO */}
        <section className="relative section-padding overflow-hidden bg-linear-to-b from-(--accent)/40 to-(--background)">
          <div
            className="absolute inset-0 -z-10 opacity-[0.06] bg-foreground-dots"
          
          />
          <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-(--primary)/15 blur-3xl -z-10" />
          <div className="absolute -bottom-32 -left-32 w-112.5 h-112.5 rounded-full bg-(--mint-dark)/10 blur-3xl -z-10" />

          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-(--primary) hover:text-(--mint-dark) text-sm font-medium mb-6"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-(--accent) text-(--primary) text-sm font-medium">
                <Handshake size={14} /> Partnerships &amp; Delivery
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-(--foreground) mb-6 leading-tight">
                A delivery partner built on <span className="text-(--primary) italic">trust and results</span>
              </h1>

              <div className="space-y-4 text-lg sm:text-xl text-(--muted-foreground) max-w-2xl mx-auto leading-relaxed mb-8">
                <p>
                  We partner with training providers, councils, the DWP, and organisations across the UK to deliver enterprise support, mentoring, and employability programmes.
                </p>
                <p>
                  Our delivery is built around <strong className="text-(--foreground)">engagement, progression, and completion</strong>, helping participants stay involved, take action, and achieve measurable outcomes.
                </p>
                <p>
                  With experience across <strong className="text-(--foreground)">DPS, Restart, IPS, Help to Grow</strong> and more, we integrate seamlessly with your team, not bolt on from the outside.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#partner-cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-7 py-3.5 text-(--primary-foreground)">
                  Partner With Us <ArrowRight size={18} />
                </a>

                <a href={capabilityStatementUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-(--primary) px-7 py-3.5 text-(--primary)">
                  <Download size={18} /> Capability Statement
                </a>

                <a href="#partner-cta"
                  className="inline-flex items-center justify-center rounded-lg bg-(--card) border border-(--border) px-7 py-3.5 text-(--foreground)">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

 {/* Programme experience strip */}
      <section className="py-8 bg-(--muted) border-y border-(--border)">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-(--muted-foreground) font-semibold mb-4">
            Experience Across National Programmes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {["DWP Programmes Delivery", "Restart Programme", "Help To Grow Mentor", "Association of Business Mentors", "New Enterprise Allowance"].map((programme) => (
              <span
                key={programme}
                className="inline-flex items-center rounded-full bg-(--card) border border-(--primary) px-4 py-2 text-sm font-medium text-(--foreground) shadow-sm"
              >
                {programme}
              </span>
            ))}
          </div>
          <p className="text-(--muted-foreground) text-sm mt-5 max-w-2xl mx-auto leading-relaxed">
            Supporting start ups, SMEs and employability programmes through practical enterprise delivery that improves engagement, progression and outcomes.
          </p>
        </div>
      </section>

{/* 2. DELIVERY OUTCOMES */}
<section className="section-padding bg-(--background)">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-4">
        Built for <span className="text-(--primary) italic">programme outcomes</span>
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {outcomes.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="p-6 rounded-2xl bg-(--card) border border-(--border) text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-(--primary) text-(--primary-foreground) mb-4">
            <item.icon size={26} />
          </div>

          <h3 className="font-heading font-bold text-(--foreground) text-lg mb-2">
            {item.title}
          </h3>

          <p className="text-(--muted-foreground) text-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* 3. HOW WE WORK WITH PARTNERS */}
<section className="section-padding bg-(--muted)">
  <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-6 text-center">
        How we work with <span className="text-(--primary) italic">partners</span>
      </h2>

      <div className="space-y-4 text-lg text-(--muted-foreground) leading-relaxed text-center mb-10 max-w-3xl mx-auto">
        <p>
          We work as an extension of your delivery team, aligning with your programme goals, quality standards, and participant needs.
        </p>
        <p>
          Our approach is flexible, responsive, and built around what works best for your delivery model.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 gap-4">
        {howWeWork.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 p-5 rounded-xl bg-(--card) border border-(--border) shadow-sm"
          >
            <CheckCircle2
              size={20}
              className="text-(--primary) shrink-0 mt-0.5"
            />
            <span className="text-(--foreground)">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</section>

{/* 4. EXPERIENCE & CREDIBILITY */}
<section className="section-padding bg-(--background)">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-4">
        Experience you can <span className="text-(--primary) italic">trust</span>
      </h2>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {credibility.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="p-6 rounded-2xl bg-(--card) border border-(--border) text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-(--accent) text-(--primary) mb-4">
            <item.icon size={26} />
          </div>

          <h3 className="font-heading font-bold text-(--foreground) text-lg mb-2">
            {item.title}
          </h3>

          <p className="text-(--muted-foreground) text-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* 5. DELIVERY APPROACH */}
<section className="section-padding bg-(--muted)">
  <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-6">
        A delivery approach <span className="text-(--primary) italic">that works</span>
      </h2>

      <div className="space-y-4 text-lg text-(--muted-foreground) leading-relaxed">
        <p>
          Our delivery is built around real people, real challenges, and real outcomes.
        </p>

        <p>
          We focus on creating an environment where participants feel{" "}
          <strong className="text-(--foreground)">
            supported, confident, and able to take action
          </strong>.
        </p>

        <p className="font-heading text-(--foreground) font-semibold italic text-xl">
          Because when people are supported in the right way, they engage more, stay longer, and achieve better results.
        </p>
      </div>
    </motion.div>
  </div>
</section>


{/* 6. WHO WE WORK WITH */}
<section className="section-padding bg-(--background)">
  <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-8 text-center">
        Who we <span className="text-(--primary) italic">work with</span>
      </h2>

      <ul className="space-y-3 max-w-2xl mx-auto mb-8">
        {whoWeWorkWith.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 p-4 rounded-xl bg-(--card) border border-(--border)"
          >
            <CheckCircle2
              size={20}
              className="text-(--primary) shrink-0 mt-0.5"
            />
            <span className="text-(--foreground)">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className="font-heading text-(--foreground) font-semibold italic text-center text-lg">
        We help programmes improve engagement, increase completion, and deliver meaningful outcomes.
      </p>
    </motion.div>
  </div>
</section>
       

        {/* 7. FINAL CTA */}
        <section id="partner-cta" className="section-padding bg-(--primary) text-(--primary-foreground) relative overflow-hidden">
  <div
  aria-hidden="true"
  className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[32px_32px]"
/>

  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Let&apos;s talk about your delivery
      </h2>

      <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
        Whether you&apos;re looking to improve engagement, increase completion, or strengthen delivery, we&apos;ll work with you to build the right approach.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Contact options */}
      <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8">
        <h3 className="font-heading font-bold text-xl mb-5">Get in touch</h3>

        <ul className="space-y-4">

          <li>
            <a href="mailto:sarah@navigatebusiness.co.uk" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
              <Mail size={20} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wide opacity-80">Email</p>
                <p className="font-medium break-all">hello@navigatebusiness.co.uk</p>
              </div>
            </a>
          </li>

          <li>
            <a href="tel:+441615201927" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
              <Phone size={20} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wide opacity-80">Phone</p>
                <p className="font-medium">0161 520 1927</p>
              </div>
            </a>
          </li>

          <li>
            <a href="https://wa.me/447398104144" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
              <MessageCircle size={20} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wide opacity-80">WhatsApp</p>
                <p className="font-medium">Chat with us on WhatsApp — 07398 104144</p>
              </div>
            </a>
          </li>

          <li>
            <Link href="/#contact" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
              <FileText size={20} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wide opacity-80">Contact form</p>
                <p className="font-medium">Send us a message</p>
              </div>
            </Link>
          </li>

        </ul>
        <p className="text-sm leading-relaxed mt-6 pt-6 border-t border-white/20 opacity-90">
                We typically respond within one working day and are happy to discuss subcontract opportunities, delivery partnerships and programme support.
              </p>
      </div>

      {/* Discovery call box */}
      <div className="rounded-2xl bg-white text-(--foreground) p-6 sm:p-8 shadow-xl">

        <span className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-(--accent) text-(--primary) text-xs font-semibold">
          Free 30-minute call
        </span>

        <h3 className="font-bold text-xl text-(--foreground) mb-3">
          Book a Free Delivery Partnership Call
        </h3>

        <p className="text-(--muted-foreground) text-sm leading-relaxed mb-3">
         Looking for an experienced delivery partner for your enterprise or employability programme? Let&apos;s discuss your programme, your objectives, and how Navigate Business can support your delivery.
        </p>

        <p className="text-(--foreground) font-medium text-sm mb-5">
         Walk away with clarity, next steps, and an honest recommendation on whether we&apos;re the right fit.
        </p>

        <a
          href="mailto:sarah@navigatebusiness.co.uk?subject=Discovery%20Call%20Request"
          className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-(--primary) px-6 py-3.5 text-base font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors shadow-md"
        >
           30 minute online meeting no obligation via Teams or Z <ArrowRight size={18} />
        </a>

      </div>

    </div>
  </div>
</section>

      </main>
    </>
  );
}