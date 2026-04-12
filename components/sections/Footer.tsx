"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Story",        href: "#story"        },
  { label: "Team",         href: "#team"         },
  { label: "Architecture", href: "#architecture" },
  { label: "Features",     href: "#features"     },
  { label: "Connect",      href: "/connect"      },
];

const socials = [
  { icon: FaGithub,   href: "https://github.com/MustafaPinjari/NeuroCart", label: "GitHub"   },
  { icon: FaLinkedin, href: "#",                                            label: "LinkedIn" },
  { icon: FaTwitter,  href: "#",                                            label: "Twitter"  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="relative overflow-hidden"
      style={{ background: "#050508" }}>

      {/* Top hairline — premium gradient */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.5) 25%, rgba(99,102,241,0.4) 50%, rgba(59,130,246,0.3) 75%, transparent 100%)" }} />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.05) 0%, transparent 70%)" }} />

      {/* ── UPPER BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">

        {/* Row 1: eyebrow + CTA */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-5 h-[2px] rounded-full shrink-0"
              style={{ background: "linear-gradient(90deg, #a855f7, #3b82f6)" }} />
            <span className="text-white/25 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Get in touch
            </span>
          </motion.div>

          <motion.a
            href="https://nauros.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shine inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white shrink-0"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
              boxShadow: "0 0 24px rgba(168,85,247,0.25), 0 1px 0 rgba(255,255,255,0.1) inset",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            View Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Row 2: big email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <p className="text-white/20 text-xs sm:text-sm mb-2"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Reach the team at
          </p>
          <motion.a
            href="https://www.mustafapinjari.live/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="font-black text-white hover:text-purple-300 transition-colors duration-300 leading-none block"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 4rem)",
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "-0.035em",
              background: "linear-gradient(135deg, #ffffff 50%, rgba(255,255,255,0.5) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            mustafapinjari.live
          </motion.a>
        </motion.div>

        {/* Hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px origin-left"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </div>

      {/* ── MIDDLE BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-8 sm:py-12
                      grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-8">

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col gap-0.5"
        >
          {navLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 + i * 0.07 }}
              whileHover={{ x: 7 }}
              className="font-bold text-white/40 hover:text-white transition-colors duration-250 leading-snug"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.85rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Event info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-left sm:text-right"
        >
          <p className="font-bold text-white/40 text-xs sm:text-sm mb-2.5"
            style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.01em" }}>
            Event
          </p>
          <p className="text-white/18 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            TecDrill 2026<br />
            Deep-Hack 24h<br />
            Sinhgad Institute, Pune
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(245,208,96,0.1) 0%, rgba(232,160,32,0.06) 100%)",
              border: "1px solid rgba(245,208,96,0.22)",
              boxShadow: "0 0 12px rgba(245,208,96,0.08)",
            }}
          >
            <span className="text-xs">🥈</span>
            <span className="text-[11px] font-semibold"
              style={{ color: "#f5d060", fontFamily: "var(--font-inter), sans-serif" }}>
              Runner-Up
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── BIG BRAND NAME ── */}
      <div ref={nameRef} className="w-full overflow-hidden leading-none px-0">
        {nameInView && (
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-none cursor-default block w-full text-left px-5 sm:px-10 lg:px-12"
            style={{
              fontSize: "clamp(2rem, 7.5vw, 10.5rem)",
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "-0.045em",
              lineHeight: 0.86,
              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TeamChaos
          </motion.h2>
        )}

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={nameInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-[2px] sm:h-[3px] lg:h-[4px] origin-left mt-1.5 sm:mt-2 mx-5 sm:mx-10 lg:mx-12 rounded-full"
          style={{ background: "linear-gradient(90deg, #a855f7, #6366f1, #3b82f6, #06b6d4, transparent)" }}
        />
      </div>

      {/* ── BOTTOM META ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-5 sm:py-6
                   flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2"
      >
        <span className="text-white/12 text-[9px] sm:text-[10px] tracking-widest uppercase text-center sm:text-left"
          style={{ fontFamily: "var(--font-mono), monospace" }}>
          © 2026 Team Chaos · TecDrill Deep-Hack · Built in 24 hours
        </span>
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} aria-label={label}
              whileHover={{ y: -3, color: "rgba(255,255,255,0.6)" }}
              className="text-white/15 transition-colors duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </footer>
  );
}
