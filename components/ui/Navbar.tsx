"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Team", href: "#team" },
  { label: "Architecture", href: "#architecture" },
  { label: "Features", href: "#features" },
  { label: "Connect", href: "/connect" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(3,7,18,0)", "rgba(3,7,18,0.92)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: bg, backdropFilter: blur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/0 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              TC
            </div>
            <span className="font-bold text-white tracking-tight text-sm sm:text-base">Team Chaos</span>
          </motion.a>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/60"
          >
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#cta"
            className="hidden md:block px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-600/40 transition-all duration-200"
          >
            View Project
          </motion.a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-[56px] left-0 right-0 z-40 md:hidden border-b border-white/8"
          style={{ background: "rgba(3,7,18,0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-semibold text-center"
            >
              View Project
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
