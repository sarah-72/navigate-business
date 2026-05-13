"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare, ArrowRight } from "lucide-react";

const enquiryTypes = [
  "Starting a business",
  "Growing an existing business",
  "Workshops / training",
  "Membership enquiry",
  "Partnership / delivery enquiry",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", type: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-(--muted)">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="editorial-rule justify-center mb-5">
            Get in touch
          </div>

          <h2 className="text-3xl sm:text-5xl text-(--foreground) leading-[1.1] tracking-tight">
            <span className="font-normal">Tell us where you are. </span>
            <span className="italic text-(--primary)">
              We&apos;ll take it from there
            </span>
            <span className="font-normal">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >

            {/* Email */}
            <div className="rounded-2xl bg-(--card) border border-(--border) p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-(--accent) text-(--primary) flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-(--muted-foreground)">Email</p>
                  <a
                    href="mailto:sarah@navigatebusiness.co.uk"
                    className="font-medium text-(--foreground) text-sm hover:text-(--primary) transition-colors"
                  >
                    sarah@navigatebusiness.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-(--card) border border-(--border) p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-(--accent) text-(--primary) flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-(--muted-foreground)">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+447398104144"
                    className="font-medium text-(--foreground) text-sm hover:text-(--primary) transition-colors"
                  >
                    07398 104144
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447398104144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 p-6 hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-medium text-(--foreground) text-sm">
                  Message on WhatsApp
                </p>
                <p className="text-xs text-(--muted-foreground)">
                  Direct line, weekdays
                </p>
              </div>
            </a>

            {/* Discovery call */}
            <div className="rounded-2xl bg-(--secondary) text-(--secondary-foreground) p-6">
              <p className="font-semibold text-lg mb-2">
                Discovery call
              </p>

              <p className="text-sm text-(--secondary-foreground)/80 mb-4">
                A 20-minute call to identify your real bottleneck and the most useful next step — whether that&apos;s Kickstart, a Power Session, membership, or a partnership conversation.
              </p>

              <Link
                href="/membership"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--primary-bright) hover:gap-2 transition-all"
              >
                Ask about our membership options <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl bg-(--card) border border-(--border) p-8 space-y-5"
          >

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-3 text-sm text-(--foreground) placeholder:text-(--muted-foreground)"
              />

              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-3 text-sm text-(--foreground) placeholder:text-(--muted-foreground)"
              />
            </div>

            {/* Phone + Type */}
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-3 text-sm text-(--foreground) placeholder:text-(--muted-foreground)"
              />

              <select
                required
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
                className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-3 text-sm text-(--foreground)"
              >
                <option value="">What do you need support with?</option>
                {enquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <textarea
              rows={4}
              required
              placeholder="Tell us a bit about what you need..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-lg border border-(--input) bg-(--background) px-4 py-3 text-sm text-(--foreground) placeholder:text-(--muted-foreground) resize-none"
            />

            {/* Note */}
            <p className="text-xs text-(--muted-foreground) italic">
              Looking for a delivery partner? Let us know in your message and we&apos;ll be in touch.
            </p>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--primary) px-7 py-3.5 text-base font-semibold text-(--primary-foreground) hover:bg-(--primary)/90 transition-colors w-full sm:w-auto"
              >
                Start the Conversation <Send size={16} />
              </button>

              <p className="text-xs text-(--muted-foreground) mt-2">
                We aim to respond within 24 hours.
              </p>
            </div>

          </motion.form>
        </div>
      </div>
    </section>
  );
}