"use client";

import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebinarThankYou() {
  return (
    <div className="min-h-screen bg-linear-to-br from-(--mint-light) via-(--background) to-(--background) flex items-center justify-center px-4 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 sm:p-12 text-center"
      >
        <div className="mx-auto h-16 w-16 rounded-full bg-(--primary)/10 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-(--primary)" />
        </div>

        <h1 className="mt-6 font-heading text-3xl sm:text-4xl font-bold text-(--secondary)">
          You&apos;re in.
        </h1>

        <p className="mt-4 text-lg text-(--muted-foreground) leading-relaxed">
          Check your email for the webinar details.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-(--muted-foreground) bg-(--primary)/10 rounded-xl p-4">
          <Mail className="h-4 w-4 text-(--primary)" />
          <span>
            If you don&apos;t see it, check your spam or promotions folder.
          </span>
        </div>

        <Button
          asChild
          variant="outline"
          className="mt-8 rounded-xl border-(--primary)/30 text-(--secondary) hover:bg-(--primary)/10"
        >
          <Link href="/">Back to Navigate Business</Link>
        </Button>
      </motion.div>
    </div>
  );
}