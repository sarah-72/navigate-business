"use client";

import { useEffect } from "react";

export default function Analytics({ consent }) {
  useEffect(() => {
    if (!consent?.analytics) return;

    // Example: load GA only if allowed
    console.log("Analytics enabled");
  }, [consent]);

  return null;
}