"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Text3DFlip from "@/components/ui/text-3d-flip";

const navLinks = [
  { label: "Story",        href: "#story"        },
  { label: "Team",         href: "#team"         },
  { label: "Architecture", href: "#architecture" },
  { label: "Features",     href: "#features"     },
  { label: "Connect",      href: "/connect"      },
];

const socials = [
  { icon: FaGithub,   href: "https://github.com/Nick7020/NeuroCart", label: "GitHub"   },
  { icon: FaLinkedin, href: "#",                                      label: "LinkedIn" },
  { icon: FaTwitter,  href: "#",                                      label: "Twitter"  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[#050508]">

      {/* Top hairline */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.35), rgba(59,130,246,0.25), transparent)" }} />

      {/* ── UPPER BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">

        {/* Row 1: eyebrow + CTA */}
        <div className="flex items-center justify-between mb-5 sm:mb-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-4 h-1 rounded-full shrink-0"
              style={{ background: "linear-gradient(90deg, #a855f7, #3b82f6)" }} />
            <span className="text-white/30 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase"
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white shrink-0"
            style={{
              background: "linear-gradient(135deg, #a855f7, #3b82f6)",
              boxShadow: "0 0 20px rgba(168,85,247,0.22)",
              fontFamily: "var(--font-syne), sans-serif",
            }}
          >
            View Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Row 2: big email — clamps tightly on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <p className="text-white/25 text-xs sm:text-sm mb-1.5"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Reach the team at
          </p>
          <motion.a
            href="https://www.mustafapinjari.live/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="font-black text-white hover:text-purple-300 transition-colors duration-300 leading-none block"
            style={{
              fontSize: "clamp(1.3rem, 4vw, 3.8rem)",
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            mustafapinjari.live
          </motion.a>
        </motion.div>

        {/* Hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px origin-left"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />
      </div>

      {/* ── MIDDLE BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-8 sm:py-10
                      grid grid-cols-2 sm:grid-cols-[1fr_auto] gap-8 sm:gap-6">

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
              whileHover={{ x: 6 }}
              className="font-bold text-white/50 hover:text-white transition-colors duration-200 leading-snug"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.025em",
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
          className="text-right"
        >
          <p className="font-bold text-white/55 text-xs sm:text-sm mb-2"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Event
          </p>
          <p className="text-white/22 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            TecDrill 2026<br />
            Deep-Hack 24h<br />
            Sinhgad Institute, Pune
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-yellow-500/20"
            style={{ background: "rgba(234,179,8,0.05)" }}>
            <span className="text-xs">🥈</span>
            <span className="text-yellow-300/55 text-[11px] font-semibold"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Runner-Up
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── BIG BRAND NAME + underline ── */}
      <div ref={nameRef} className="w-full overflow-hidden px-2 sm:px-4 lg:px-6 leading-none">
        {nameInView && (
          <div style={{
              fontSize: "clamp(3.8rem, 15vw, 18rem)",
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
            }}>
            <Text3DFlip
              rotateDirection="top"
              staggerDuration={0.04}
              staggerFrom="first"
              transition={{ type: "spring", damping: 22, stiffness: 140 }}
              textClassName="text-white"
              flipTextClassName="text-purple-400"
              className="font-black leading-none cursor-default"
            >
              TeamChaos
            </Text3DFlip>
          </div>
        )}

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={nameInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="h-[2px] sm:h-[3px] lg:h-1 origin-left mt-1 sm:mt-2"
          style={{ background: "linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, transparent)" }}
        />
      </div>

      {/* ── BOTTOM META ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-4 sm:py-5
                   flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2"
      >
        <span className="text-white/15 text-[9px] sm:text-[10px] tracking-widest uppercase text-center sm:text-left"
          style={{ fontFamily: "var(--font-mono), monospace" }}>
          © 2026 Team Chaos · TecDrill Deep-Hack · Built in 24 hours
        </span>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} aria-label={label}
              whileHover={{ y: -2 }}
              className="text-white/18 hover:text-white/55 transition-colors duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </footer>
  );
}

