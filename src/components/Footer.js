"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Start Here", href: "/start-here" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Workshops", href: "/workshops" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarah-g-997598223?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/navigatebusinesssupport?igsh=bGIxZ3B1YmRxcWV1&utm_source=qr", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/share/14cFXuYvFBM/?mibextid=wwXIfr", label: "Facebook" },
];

  return (
    <footer className="bg-(--secondary) text-(--secondary-foreground)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/navigate-business-logo.png"
                alt="Navigate Business"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg text-(--secondary-foreground)">
                Navigate <span className="text-(--primary-bright)">Business</span>
              </span>
            </div>

            <p className="text-(--secondary-foreground)/90 text-sm leading-relaxed">
              Turning ambition into action. We equip founders, teams and organisations with the strategy, skills and support to build businesses that actually grow — no jargon, no fluff, just results.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-(--secondary-foreground)/80 hover:text-emerald-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className=" font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-(--secondary-foreground)/80">
              <li>
                <a href="tel:+447398104144" className="hover:text-emerald-400 transition-colors">
                  07398 104144
                </a>
              </li>
              <li>
                <a
                  href="mailto:sarah@navigatebusiness.co.uk"
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  sarah@navigatebusiness.co.uk
                </a>
              </li>
              <li className="text-xs text-(--secondary-foreground) pt-1">
                Supporting businesses throughout the UK
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>

            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={`Visit our ${s.label || s.href} page`}
                    className="w-10 h-10 rounded-lg bg-(--secondary-foreground)/10 flex items-center justify-center text-(--secondary-foreground,rgba(0,0,0,0.8)) hover:bg-emerald-400 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col gap-4 text-sm text-(--secondary-foreground/50)">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Navigate Business Support Ltd. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <p className="text-xs text-center sm:text-left text-(--secondary-foreground/40)">
            Navigate Business Support Ltd is a company registered in England & Wales. Company No. 17162687.
          </p>

        </div>
      </div>
    </footer>
  );
}