"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ content = {} }) {
  const { heading = 'Frequently Asked Questions', questions = [] } = content
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-(--charcoal)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-(--secondary-foreground) mb-4">
            {heading}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {questions.map((faq, index) => (
            <motion.div
              key={faq._key || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-lg bg-(--secondary-foreground)/5 border border-(--secondary-foreground)/10 hover:bg-(--secondary-foreground)/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-(--secondary-foreground)">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-(--primary-bright) transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-(--secondary-foreground)/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}