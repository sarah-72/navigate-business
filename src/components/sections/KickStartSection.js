"use client";

import { useState } from "react";
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

import WorkshopRegistrationDialog from "@/components/WorkshopRegistrationDialog";

export default function KickstartSection() {
  const [workshopOpen, setWorkshopOpen] = useState(false);

  const benefits = [
    { icon: Users, text: "Real-world mentoring — like sitting down with a cuppa and someone who gets it" },
    { icon: Video, text: "Monthly live group sessions to keep you on track" },
    { icon: Brain, text: "Clear structure so you actually progress (not overthink)" },
    { icon: Cpu, text: "Modern tools + AI to help you work smarter" },
    { icon: FileText, text: "Practical templates you can actually use immediately" },
    { icon: Heart, text: "Supportive community of business owners" },
  ];

  const tiers = [
    {
      name: "Navigate Start",
      price: "£49",
      description: "Get clear, get started, stop overthinking",
      features: [
        "Monthly focus session (marketing, pricing, mindset)",
        "Templates & resources",
        "Group support & accountability",
        "Q&A access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Navigate Build",
      price: "£99",
      description: "Build momentum and start making progress",
      features: [
        "Everything in Start",
        "Monthly group coaching",
        "Business check-in framework",
        "Training recordings",
      ],
      cta: "Join Build",
      popular: true,
    },
    {
      name: "Navigate Accelerate",
      price: "£179",
      description: "Fast-track growth with personal support",
      features: [
        "Everything in Build",
        "Monthly 1:1 session",
        "Personalised action plan",
        "Priority support",
      ],
      cta: "Enquire Now",
      popular: false,
    },
  ];

  const whoFor = [
    "Start-ups needing clarity",
    "Business owners feeling stuck",
    "Side hustlers ready to start earning",
    "Businesses wanting to refocus and grow",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Membership
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Stop trying to figure it out alone
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get structure, support and accountability to turn ideas into income.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <Check className="w-4 h-4" />
            No contracts. Cancel anytime.
          </div>
        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="border rounded-xl p-5 flex gap-3">
                <Icon className="text-blue-600" />
                <p className="text-sm text-gray-700">{b.text}</p>
              </div>
            );
          })}
        </div>

        {/* KICKSTART */}
        <div className="max-w-2xl mx-auto border-2 border-blue-600 rounded-2xl overflow-hidden mb-20">
          <div className="bg-blue-600 text-white text-center py-2 text-sm flex items-center justify-center gap-2">
            <Compass className="w-4 h-4" />
            1:1 Kickstart Session
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold">Navigate Kickstart</h3>
            <p className="text-gray-600 text-sm mt-1">
              Your roadmap session to get clarity and direction.
            </p>

            <div className="text-3xl font-bold mt-4">£150</div>
            <p className="text-sm text-gray-500">one-off</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li>✔ 1.5-hour deep dive session</li>
              <li>✔ Personal action plan</li>
              <li>✔ Follow-up support call</li>
              <li>✔ Clear next steps</li>
            </ul>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold">
              Book Kickstart Session
            </button>
          </div>
        </div>

        {/* TIERS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`border rounded-xl p-6 ${t.popular ? "border-blue-600 shadow-lg" : ""}`}
            >
              {t.popular && (
                <div className="text-xs bg-blue-600 text-white inline-block px-2 py-1 rounded mb-3">
                  Most Popular
                </div>
              )}

              <h3 className="font-bold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-600">{t.description}</p>

              <div className="text-2xl font-bold mt-3">{t.price}</div>
              <p className="text-xs text-gray-500">/month</p>

              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>

              <button
                className={`w-full mt-5 py-2 rounded-lg font-semibold ${
                  t.popular ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>

        {/* WHO IS IT FOR */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-6">Who is this for?</h3>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto text-sm">
            {whoFor.map((w, i) => (
              <div key={i} className="border p-3 rounded-lg">
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* WORKSHOPS CTA */}
        <div className="text-center bg-gray-50 p-10 rounded-2xl">
          <GraduationCap className="mx-auto mb-3" />
          <h3 className="text-xl font-bold">Virtual Workshops</h3>
          <p className="text-gray-600 mt-2">
            1-day workshops covering business, AI, marketing & growth.
          </p>

          <button
            onClick={() => setWorkshopOpen(true)}
            className="mt-5 bg-black text-white px-6 py-3 rounded-lg"
          >
            Register for Workshop
          </button>
        </div>

        <WorkshopRegistrationDialog
          open={workshopOpen}
          onOpenChange={setWorkshopOpen}
        />
      </div>
    </section>
  );
}