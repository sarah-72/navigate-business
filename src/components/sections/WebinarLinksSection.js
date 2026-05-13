"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, PlayCircle } from "lucide-react";

export default function WebinarLinksSection({ content = {} }) {
  const { heading = 'Webinar Resources', links = [] } = content

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <motion.div
              key={link._key || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href={link.url}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : ''}
                className="block p-6 rounded-xl bg-(--secondary-foreground)/5 border border-(--secondary-foreground)/10 hover:bg-(--secondary-foreground)/10 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-(--primary)/10 text-(--primary)">
                    <PlayCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-(--secondary-foreground) mb-2 group-hover:text-(--primary-bright) transition-colors">
                      {link.title}
                    </h3>
                    {link.description && (
                      <p className="text-(--secondary-foreground)/70 text-sm mb-3">
                        {link.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-(--primary-bright) text-sm font-medium">
                      {link.external ? (
                        <>
                          <span>Watch Now</span>
                          <ExternalLink size={14} />
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <PlayCircle size={14} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}