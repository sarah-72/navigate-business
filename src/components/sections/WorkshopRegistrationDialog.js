"use client";

import { useState } from "react";

export default function WorkshopRegistrationDialog({ open, onOpenChange }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [topics, setTopics] = useState([]);

  const workshopTopics = [
    "Start a Business",
    "Marketing Basics",
    "AI for Business",
    "Social Media Growth",
  ];

  const toggle = (t) => {
    setTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white max-w-lg w-full rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Workshop Registration</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div className="mb-3">
          {workshopTopics.map((t) => (
            <label key={t} className="block text-sm">
              <input
                type="checkbox"
                onChange={() => toggle(t)}
                className="mr-2"
              />
              {t}
            </label>
          ))}
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={() => {
            alert("Registered!");
            onOpenChange(false);
          }}
        >
          Submit
        </button>

        <button
          className="w-full mt-2 text-sm text-gray-500"
          onClick={() => onOpenChange(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}