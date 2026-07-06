"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Heart,
  CheckCircle2,
  Target,
  Compass,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const credibility = [
  { icon: Award, title: "30+ Years Experience", desc: "Real-world business and mentoring across the UK" },
  { icon: Users, title: "National Programme Delivery", desc: "DWP, Restart, IPS, Help to Grow" },
  { icon: GraduationCap, title: "Qualified & Accredited", desc: "ILM Level 5 in Business Mentoring & Coaching" },
  { icon: TrendingUp, title: "Proven Outcomes", desc: "Strong engagement, progression, and completion across programmes" },
];

const deliveryStrip = [
  "High engagement approach that keeps participants involved",
  "Strong completion rates through consistent support",
  "Effective virtual delivery that increases accessibility and retention",
  "Flexible delivery model tailored to what works best for clients",
];

const differentiators = [
  { icon: MessageCircle, title: "Clear and straightforward", desc: "Simple guidance that makes sense" },
  { icon: Sparkles, title: "Practical delivery", desc: "Focused on action and outcomes" },
  { icon: Heart, title: "Human first", desc: "Support without judgement" },
  { icon: CheckCircle2, title: "Real experience", desc: "Not theory, real-world delivery" },
  { icon: Target, title: "Outcome focused", desc: "Clarity, confidence, measurable progress" },
];

const howWeWork = [
  "No overcomplicating",
  "No unnecessary jargon",
  "No endless planning without movement",
];

const focusList = [
  "What matters right now",
  "What moves things forward",
  "What creates income, stability, and measurable outcomes",
];

const whoWeWorkWith = [
  "Individuals starting or exploring self employment",
  "Existing business owners who feel stuck or want to grow",
  "Training providers, councils, and delivery partners",
  "Organisations delivering enterprise programmes",
];

export default function DetailedAbout() {
  return (
    <>
      <Header />

      <main className="pt-24">

        {/* 1. HERO */}
        <section className="relative section-padding overflow-hidden bg-linear-to-b from-emerald-50/40 to-white">
          <div className="absolute inset-0 -z-10 opacity-[0.06] bg-foreground-dots" />
          <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full bg-(--primary/15) blur-3xl -z-10" />
          <div className="absolute -bottom-32 -left-32 w-112.5 h-112.5 rounded-full bg-(--mint-dark/10 )blur-3xl -z-10" />

          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-(--primary) hover:text-(--mint-dark) text-sm font-medium mb-6"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-(--accent) text-(--primary )text-sm font-medium">
                <Compass size={14} /> About Us
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--foreground) mb-6 leading-tight">
                About <span className="text-(--primary) italic">Navigate Business</span>
              </h1>

              <p className="text-lg sm:text-xl text-(--muted-foreground) max-w-2xl mx-auto leading-relaxed mb-8">
                Real experience. Straight talking support. Practical delivery that moves people from idea to income, with strong engagement, completion, and measurable outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#founder"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-7 py-3.5 text-base font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors shadow-md"
                >
                  Work With Us <ArrowRight size={18} />
                </a>

                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-700 bg-transparent px-7 py-3.5 text-base font-semibold text-(--primary) hover:bg-(--primary) hover:text-(--primary-foreground) transition-colors"
                >
                  Explore Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. CORE MESSAGE */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-6">
                A simple idea, <span className="text-(--primary) italic">done properly</span>
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-(--muted-foreground)">
                <p>People don&apos;t need more information.</p>

                <p>
                  They need the right support, in the right order, from someone who understands what it&apos;s actually like to build and run a business.
                </p>

                <p className="font-heading text-(--foreground) font-semibold text-xl italic">
                  That&apos;s what we do.
                </p>

                <p>
                  We take away the overwhelm, strip things back to what matters, and help people move forward with clarity and confidence.
                </p>

                <p className="font-heading text-(--foreground) font-semibold italic">
                  Because when people are supported in the right way, they stay engaged, complete, and move forward.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

       <section id="founder" className="section-padding bg-(--muted) relative overflow-hidden">
  <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-(--primary)/10 blur-3xl z-0" aria-hidden="true" />
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-linear-to-br from-emerald-700/30 to-emerald-800/20 blur-2xl -z-10" aria-hidden="true" />
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/sarah-grocott-new.png"
              alt="Sarah Grocott - Founder of Navigate Business"
              className="w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={600}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-(--primary) text-(--primary-foreground) rounded-full p-3 shadow-lg w-36 h-36 flex flex-col items-center justify-center text-center border-4 border-white">
            <p className="font-heading font-bold text-2xl leading-none">30+</p>
            <p className="text-[10px] opacity-95 leading-tight mt-1 font-medium">
              Years<br />Business &amp;<br />Programme<br />Delivery<br />Experience
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3"
      >
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium">
          Founder
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-6">
          Hi, I&apos;m <span className="text-(--primary) italic">Sarah</span>
        </h2>

        <div className="space-y-4 text-(--muted-foreground) leading-relaxed">
          <p>
            I&apos;ve spent over <strong className="text-(--foreground)">30 years</strong> working with start ups, business owners, and individuals trying to find their way into self employment.
          </p>

          <p>
            Over that time, I&apos;ve seen the same pattern again and again. People full of ideas, but stuck. Overthinking. Going round in circles. Not because they&apos;re not capable, but because no one has ever shown them what to focus on first.
          </p>

          <p className="text-(--foreground) font-semibold italic">
            That&apos;s where Navigate comes in.
          </p>

          <p>
            I&apos;ve worked across national programmes including <strong className="text-(--foreground)">DWP, Restart, IPS</strong>, and <strong className="text-(--foreground)">Help to Grow</strong>, supporting thousands of individuals with real barriers, real pressures, and real goals.
          </p>

          <p className="text-(--foreground) font-medium">This isn&apos;t theory.</p>

          <p>This is real world experience, working with people at every stage of the journey.</p>

          <div className="mt-5 p-5 rounded-xl bg-accent/40 border-l-4 border-emerald-700">
            <p className="text-(--foreground)">
              My approach is built around <strong>engagement and progression</strong>. When people feel supported, they show up, they take action, and they complete.
            </p>
            <p className="text-(--muted-foreground) text-sm mt-2">
              This is what drives strong outcomes across programmes, whether delivered face to face or virtually.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* how we work */}
<section className="section-padding bg-background">
  <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-4 text-center">
        How we <span className="text-(--primary) italic">work</span>
      </h2>

      <p className="text-base text-(--primary) font-semibold text-center mb-3">
        Everything we do is designed to increase engagement, progression, and completion.
      </p>

      <p className="text-lg text-(--muted-foreground) leading-relaxed text-center mb-10">
        Built around helping people take action.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-card border border-[#d4d2d9] shadow-sm">
          <h3 className="font-heading font-bold text-(--foreground) mb-4">What we don&apos;t do</h3>
          <ul className="space-y-3">
            {howWeWork.map((item) => (
              <li key={item} className="flex items-start gap-3 text-(--muted-foreground)">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-destructive/10 text-destructive shrink-0 mt-0.5 text-xs font-bold">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-[#d4d2d9] shadow-sm">
          <h3 className="font-heading font-bold text-(--foreground) mb-4">What we focus on</h3>
          <ul className="space-y-3">
            {focusList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-(--muted-foreground)">
                <CheckCircle2 size={18} className="text-(--primary) shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
</section>

 {/* 5. CREDIBILITY */}
      <section className="section-padding bg-(--muted)">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-(--foreground) mb-4">
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
                className="p-6 rounded-2xl bg-(--card) border border-[#d4d2d9] text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-(--accent) text-(--primary) mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="font-heading font-bold text-(--foreground) text-lg mb-2">{item.title}</h3>
                <p className="text-(--muted-foreground) text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* 5b. BUILT FOR PROGRAMME DELIVERY */}
      <section className="section-padding bg-(--background)">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-linear-to-br from-emerald-50/60 to-white border border-emerald-700/20 p-8 sm:p-12 shadow-sm"
          >
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-(--primary) text-(--primary-foreground) text-sm font-medium">
                <Target size={14} /> For Delivery Partners
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground)">
                Built for <span className="text-(--primary) italic">programme delivery</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {deliveryStrip.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-5 rounded-xl bg-card border border-[#d4d2d9] shadow-sm"
                >
                  <CheckCircle2 size={20} className="text-(--primary) shrink-0 mt-0.5" />
                  <span className="text-(--foreground) text-sm sm:text-base leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. MULTI-PERSPECTIVE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-6">
              Not just one <span className="text-(--primary) italic">perspective</span>
            </h2>
            <div className="space-y-4 text-(--muted-foreground) leading-relaxed text-lg">
              <p>Navigate isn&apos;t built on one opinion or one way of doing things.</p>
              <p>
                It&apos;s shaped by experience across <strong className="text-(--foreground)">enterprise, digital, mindset, employability,</strong> and <strong className="text-(--foreground)">business growth</strong>.
              </p>
              <p>
                That means people aren&apos;t pushed into a one size fits all approach. They&apos;re supported in a way that works for them, their situation, and their goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. WHAT MAKES NAVIGATE DIFFERENT */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-(--foreground) mb-4">
              What makes Navigate <span className="text-(--primary) italic">different</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-card border border-[#d4d2d9] flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-(--primary) text-(--primary-foreground) shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-(--foreground) text-lg mb-1">{item.title}</h3>
                  <p className="text-(--muted-foreground) text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHO WE WORK WITH */}
      <section className="section-padding bg-(--background)">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-(--foreground) mb-6 text-center">
              Who we <span className="text-(--primary) italic">work with</span>
            </h2>
            <p className="text-lg text-(--muted-foreground) leading-relaxed text-center mb-8">
              We support individuals at all stages, from early ideas to growing businesses, as well as organisations delivering enterprise and employability programmes.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto mb-8">
              {whoWeWorkWith.map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-[#d4d2d9]">
                  <CheckCircle2 size={20} className="text-(--primary) shrink-0 mt-0.5" />
                  <span className="text-(--foreground)">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-heading text-(--foreground) font-semibold italic text-center text-lg">
              We help people engage, progress, complete, and move forward with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="section-padding bg-(--primary) text-(--primary-foreground) relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Not sure where to <span className="italic">start?</span>
            </h2>
            <p className="text-lg sm:text-xl text-(--primary-foreground/90) max-w-xl mx-auto mb-10">
              Start with our free webinar or explore membership and get the support you actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stan.store/navigatebusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-(--primary) hover:bg-white/90 transition-colors shadow-md"
              >
                Join Free Webinar <ArrowRight size={18} />
              </a>
              <Link
                href="/#membership"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-(--primary) transition-colors"
              >
                Explore Membership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

    
    </>
  );
}