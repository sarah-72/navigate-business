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
  { icon: Users, text: "Real-world mentoring — like sitting down with a cuppa and someone who gets it" },
  { icon: Video, text: "Monthly live group sessions to keep you on track" },
  { icon: Brain, text: "High completion and progression through engaging virtual delivery" },
  { icon: Cpu, text: "Forward-thinking approach using digital tools and AI" },
  { icon: FileText, text: "Practical templates, tools and resources you can actually use" },
  { icon: Heart, text: "A supportive community of like-minded business owners" },
];

const tiers = [
  {
    name: "Navigate Start",
    price: "£49",
    description: "Perfect if you're just getting started and want guidance without committing to a full programme.",
    trial: "Start your first month for £29",
    features: [
      "Monthly business focus topic (marketing, pricing, mindset, etc.)",
      "Access to resource library (templates, guides, worksheets)",
      "Group support and accountability",
      "Q&A support during sessions",
    ],
    cta: "Get Started",
    popular: false,
    tierKey: "start",
  },
  {
    name: "Navigate Build",
    price: "£99",
    description: "Best for businesses ready to grow with monthly mentoring workshop and practical support.",
    features: [
      "Everything in Navigate Start",
      "Monthly live mentoring workshop",
      "Business check-in framework",
      "Access to recordings + mini trainings",
      "Priority Q&A support",
    ],
    cta: "Join Navigate Build",
    popular: true,
    tierKey: "build",
  },
  {
    name: "Navigate Accelerate",
    price: "£179",
    description: "Dedicated strategic support for established businesses wanting faster growth and accountability.",
    features: [
      "Everything in Navigate Build",
      "Monthly 60 min strategy session",
      "Personalised action plans",
      "Priority voice note and email support",
      "Quarterly business reviews"
    ],
    cta: "Book your strategy call",
    popular: false,
    tierKey: "accelerate",
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
            Running a business can feel lonely when you&apos;re carrying everything yourself. This membership gives you support, accountability, practical guidance, and a community that actually gets it.
          </p>

          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-base mb-5">
            Flexible support with no long-term commitment, stay as long as it&apos;s helping you move forward.
          </p>

          <p className="text-(--foreground) max-w-2xl mx-auto text-base font-semibold italic mb-6">
           Because sometimes one good conversation can change the direction of your whole week.
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
{/* 1:1 Navigate Kickstart */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-(--secondary) font-display">
           Keep the journey going — choose your level
          </h3>
          <p className="text-(--muted-foreground) mt-3 max-w-xl mx-auto">
            Ongoing monthly support. No lock-in contracts. Cancel anytime.
          </p>
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

                <Button
                  size="lg"
                  className={`w-full font-semibold gap-2 ${
                    tier.popular
                      ? ""
                      : "bg-(--secondary) hover:bg-(--secondary)/90"
                  }`}
                  onClick={async () => {
                    try {
                      const userEmail = prompt("Enter your email to continue");

                      if (!userEmail || !userEmail.includes("@")) {
                        alert("Please enter a valid email");
                        return;
                      }

                      const res = await fetch("/api/stripe/checkout", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          type: "membership",
                          tier: tier.tierKey,
                          userEmail,
                          userName: "Guest",
                        }),
                      });

                      const data = await res.json().catch(() => null);

                      if (!res.ok) {
                        alert(data?.error || "Failed to create checkout session.");
                        return;
                      }

                      if (data?.url) {
                        window.location.href = data.url;
                        return;
                      }

                      alert(data?.error || "Failed to create checkout session.");
                    } catch (error) {
                      console.error(error);
                      alert("Something went wrong. Please try again.");
                    }
                  }}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

  <div className="text-center mb-24 -mt-12 max-w-3xl mx-auto px-4">
        <p className="text-(--muted-foreground) text-base">
          Every membership gives you access to the Navigate Business team, practical support, expert guidance and proven frameworks designed to help you move from idea to income.
        </p>
      </div>
 
 <div className="mb-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary font-display">
            Let&apos;s map out your journey together.
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Before you commit to the journey, let&apos;s sit down and map out your route together.
          </p>
        </div>
  </div>
    <div className="max-w-2xl mx-auto rounded-2xl border-2 border-(--primary) bg-(--card) shadow-xl overflow-hidden">
          <div className="bg-(--primary) text-(--primary-foreground) text-center py-3 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> Delivered using the Navigate Business Method<sup className="text-[0.6em] align-super">™</sup>
          </div>
          <div className="p-6 md:p-8">
            <h4 className="text-xl font-bold text-(--secondary) font-display mb-1">Navigate Kickstart</h4>
            <p className="text-(--muted-foreground) text-sm mb-5">Your Business Roadmap Session — because every journey needs a starting point.</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-(--secondary)">£150</span>
              <span className="text-(--muted-foreground)">one-off</span>
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-(--primary) mb-2">Perfect for</p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-(--primary) shrink-0" />
                  <span className="text-secondary/80 text-sm">New business ideas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-(--primary) shrink-0" />
                  <span className="text-secondary/80 text-sm">Side hustles ready to grow</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-(--primary) shrink-0" />
                  <span className="text-secondary/80 text-sm">Existing businesses needing direction</span>
                </li>
              </ul>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-(--primary) shrink-0 mt-1.5" />
                <span className="text-secondary/80 text-sm">Personal Business Health Check</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-(--primary) shrink-0 mt-1.5" />
                <span className="text-secondary/80 text-sm">90 Day Action Plan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-(--primary) shrink-0 mt-1.5" />
                <span className="text-secondary/80 text-sm">Priority business goals</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-(--primary) shrink-0 mt-1.5" />
                <span className="text-secondary/80 text-sm">Resource recommendations</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-(--primary) shrink-0 mt-1.5" />
                <span className="text-secondary/80 text-sm">Follow up accountability check</span>
              </li>
            </ul>
           <Button
  onClick={async () => {
    try {
      const userEmail = prompt("Enter your email to continue");

      if (!userEmail || !userEmail.includes("@")) {
        alert("Please enter a valid email");
        return;
      }

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "kickstart",
          userEmail,
          userName: "Guest",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        alert(data?.error || "Failed to create checkout session.");
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      alert(data?.error || "Failed to create checkout session.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }}
>
  Book Your Kickstart Session <ArrowRight className="w-4 h-4" />
</Button>
          </div>
        </div>
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
             With the right support, a clear plan and experienced people in your corner, your next step becomes clearer, more confident and far more achievable.
        </p>
        <p className="text-(--muted-foreground) text-sm italic mb-8">
          Support when you need it. Flexibility when you don&apos;t.
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
          Not quite ready for membership? Our practical one day virtual workshops are the perfect place to start. Learn real business skills, leave with a personalised action plan and the confidence to put it into practice straight away.
        </p>
        <p className="text-(--foreground) font-semibold mb-6 max-w-lg mx-auto">
          Workshops from £149.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/20">
            <Check className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--secondary)">Practical, hands on learning</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/20">
            <Check className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--secondary)">Action plan to take away</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/20">
            <Check className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--secondary)">Live workshops delivered by Sarah & the team</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/20">
            <Check className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--secondary)">Small groups (maximum 12) for personalised support</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--primary)/10 border border-(--primary)/20">
            <Check className="w-4 h-4 text-(--primary)" />
            <span className="text-sm font-medium text-(--secondary)">Study from home 9-4</span>
          </div>
        </div>
        <Button size="lg" className="font-semibold gap-2" onClick={() => setWorkshopOpen(true)}>
          Browse Workshops <ArrowRight className="w-4 h-4" />
        </Button>
        <p className="text-(--primary) text-sm mt-6 max-w-lg mx-auto">
          Need help deciding your route? Book your free 15 minute discovery call and we&apos;ll help you choose the right support for your business. Human insight compliments AI, the Navigate Way.
        </p>

          <Button
            size="lg"
            className="font-semibold gap-2 mt-4"
            onClick={() => setWorkshopOpen(true)}
          >
            Ignite the Spark — Book a Discovery Call <ArrowRight className="w-4 h-4" />
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