"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  Check,
  Send,
  Clock,
  CalendarDays,
  Monitor,
} from "lucide-react";

const workshopTopics = [
  "Launch Your Business — Start-Up Essentials",
  "Reimagine & Refresh — For Existing Businesses",
  "Master Digital Marketing — Get Seen, Get Results",
  "AI for Business — Work Smarter, Not Harder",
  "Lead with Confidence — Leadership That Inspires",
  "Own Your Time — Productivity & Time Management",
  "Communicate to Connect — Business Communication",
  "Content Made Simple — Create Without the Stress",
  "Money Matters — Financial Planning & Budgeting",
  "Close the Deal — Sales & Negotiation Skills",
  "Social Media That Works — Strategy & Growth",
  "Build a Brand People Remember",
];

export default function WorkshopRegistrationDialog({
  open,
  onOpenChange,
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handleClose = () => {
    setForm({ name: "", email: "", phone: "" });
    setSelectedTopics([]);
    onOpenChange(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedTopics.length === 0) {
      alert("Please select at least one workshop topic.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: "price_xxxxx",
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/workshops`,
          form,
          selectedTopics,
        }),
      });

      const data = await res.json();

      const stripe = await (
        await import("@stripe/stripe-js")
      ).loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );

      await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* Modal */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
              >
                {/* Accessibility */}
                <Dialog.Title className="sr-only">
                  Workshop Registration
                </Dialog.Title>

                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* HEADER */}
                <div className="mb-5">
                  <h2 className="text-xl font-bold">
                    Register for a Virtual Workshop
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    1-day virtual workshop — invest in yourself for just{" "}
                    <span className="font-semibold">£99.99</span>.
                  </p>

                  <p className="text-xs font-semibold text-gray-500 mt-1">
                    ⚡ Small classes — only 10 places available per workshop
                  </p>
                </div>

                {/* INFO */}
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Monitor className="w-4 h-4" /> Virtual / Online
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 9:00 AM – 4:00 PM
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> 1 Day
                  </span>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="border p-2 rounded w-full"
                    />

                    <input
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="border p-2 rounded w-full"
                    />
                  </div>

                  {/* PHONE */}
                  <input
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="border p-2 rounded w-full"
                  />

                  {/* TOPICS */}
                  <div>
                    <p className="font-medium mb-2">
                      Which workshops are you interested in?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {workshopTopics.map((topic) => {
                        const checked = selectedTopics.includes(topic);

                        return (
                          <div
                            key={topic}
                            onClick={() => toggleTopic(topic)}
                            className={`flex items-center gap-2 p-2 border rounded cursor-pointer ${
                              checked ? "bg-gray-100" : ""
                            }`}
                          >
                            <div className="w-4 h-4 border flex items-center justify-center">
                              {checked && (
                                <Check className="w-3 h-3" />
                              )}
                            </div>

                            <span className="text-sm">{topic}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <p className="text-xs text-gray-500">
                    Once registered, one of our team will be in touch to confirm
                    upcoming dates and secure your place.
                  </p>

                  {/* PRICE + BUTTON */}
                  <div className="flex justify-between items-center">
                    <p className="font-bold">£99.99 per workshop</p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
                    >
                      {loading ? "Processing..." : "Register Now"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}