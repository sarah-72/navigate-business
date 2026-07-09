"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Send, Check, Clock, CalendarDays, Monitor } from "lucide-react";

const workshopTopics = [
  "The Navigate Start-up Day",
  "AI for Small Business, Without the Overwhelm",
  "Stop Overthinking Your Content",
  "Revive & Thrive",
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
      if (!form.name.trim() || !form.email.includes("@")) {
        alert("Please enter your name and a valid email address.")
        return
      }

      setLoading(true);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "workshop",
          userEmail: form.email,
          userName: form.name,
          phone: form.phone,
          selectedTopics,
        }),
      });

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(data?.error || "Failed to create checkout session")
      }

      if (data?.url) {
        window.location.href = data.url;
        return
      }

      throw new Error(data?.error || "No checkout URL returned");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
          <Dialog.Portal forceMount>

            {/* OVERLAY */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* MODAL */}
            <Dialog.Content asChild>
              <motion.div
                className="
                  fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-2xl
                  -translate-x-1/2 -translate-y-1/2
                  rounded-2xl bg-white p-6 shadow-xl
                  max-h-[90vh] overflow-y-auto
                "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >

                {/* ACCESSIBILITY TITLE (REQUIRED) */}
                <Dialog.Title className="sr-only">
                  Workshop Registration
                </Dialog.Title>

                {/* CLOSE */}
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* HEADER */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold">
                    Register for a Virtual Workshop
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    1-day virtual workshop — invest in yourself and your business.
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    ⚡ Small classes — only 12 places available per workshop
                  </p>
                </div>

                {/* INFO */}
               <div className="flex flex-wrap gap-3 text-sm text-(--muted-foreground) mb-2">
          <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-(--primary)" /> Virtual / Online</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-(--primary)" /> 9:00 AM – 4:00 PM</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-(--primary)" /> 1 Day</span>
        </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    className="w-full border p-2 rounded"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />

                  <input
                    className="w-full border p-2 rounded"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />

                  <input
                    className="w-full border p-2 rounded"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />

                  {/* TOPICS */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
              Which workshops are you interested in? <span className="text-muted-foreground font-normal">(select all that apply)</span>
            </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {workshopTopics.map((topic) => {
                        const checked = selectedTopics.includes(topic);

                        return (
                          <div
                            key={topic}
                            onClick={() => toggleTopic(topic)}
                            className={`flex items-center gap-2 p-2 border rounded cursor-pointer transition ${
                              checked
                                ? "bg-gray-100 border-gray-400"
                                : ""
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

                  {/* FOOTER CTA (YOUR REQUESTED DESIGN) */}
                  <p className="text-xs text-muted-foreground mb-3">Once registered, one of our team will be in touch to confirm upcoming dates and secure your place.</p>
          <div className="flex items-center justify-between">
            {/* <p className="text-lg font-bold text-secondary">£99.99 <span className="text-sm font-normal text-muted-foreground">per workshop</span></p> */}

                  <div className="flex justify-end">
  <button
    type="submit"
    disabled={loading}
    className="bg-(--primary) text-white px-6 py-2 inline-flex items-center gap-2 rounded-md font-medium hover:opacity-90 transition disabled:opacity-50"
  >
    {loading ? "Processing..." : "Register Now"}  <Send className="w-4 h-4" />
  </button>
</div>

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