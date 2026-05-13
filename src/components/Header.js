"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Start Here", href: "/start-here" },
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const contactHref =
    pathname === "/partnerships" ? "#partner-cta" : "/services#contact";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#d4d2d9]">
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/navigate-business-logo.png"
            alt="Navigate Business"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-lg text-(--foreground)">
            Navigate <span className="text-(--primary)">Business</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-(--primary)"
                    : "text-(--muted-foreground) hover:text-(--primary)"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <a
            href={contactHref}
            className="inline-flex items-center justify-center rounded-lg bg-(--primary) px-5 py-2.5 text-sm font-semibold text-(--primary-foreground) hover:bg-(--mint-dark) transition-colors"
          >
            Book a Free Call
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-(--foreground)"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-(--background) border-b border-[#d4d2d9]"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-lg text-sm font-medium text-(--foreground) hover:bg-(--accent) transition-colors"
                >
                  {l.label}
                </Link>
              ))}

              <a
                href={contactHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-(--primary) px-5 py-3 text-sm font-semibold text-(--primary-foreground)"
              >
                Book a Free Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
