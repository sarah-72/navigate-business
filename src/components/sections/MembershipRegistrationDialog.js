"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/button";

export default function MembershipRegistrationDialog({
  open,
  onOpenChange,
  tier,
}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "membership",
          tier: tier?.tierKey,
          userEmail: email,
          userName: name || "Guest",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        alert(data?.error || "Unable to create checkout session.");
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      alert("Something went wrong. Please try again.");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-(--card) p-6 shadow-xl">

        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-(--muted-foreground) hover:text-(--foreground)"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-(--foreground) mb-2">
          Join {tier?.name}
        </h2>

        <p className="text-sm text-(--muted-foreground) mb-6">
          Enter your details and continue securely to payment.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm font-medium text-(--foreground)">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full rounded-md border border-(--border) bg-transparent px-3 py-2 text-sm"
            />
          </div>


          <div>
            <label className="text-sm font-medium text-(--foreground)">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-(--border) bg-transparent px-3 py-2 text-sm"
            />
          </div>


          <Button
            type="submit"
            disabled={loading}
            className="w-full gap-2"
          >
            {loading ? "Processing..." : "Continue to payment"}
            <ArrowRight className="w-4 h-4" />
          </Button>

        </form>

      </div>
    </div>
  );
}

