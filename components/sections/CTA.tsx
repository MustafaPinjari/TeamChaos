"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork } from "lucide-react";

const stats = [
  { v: "24h",   l: "Build Time"    },
  { v: "12k+",  l: "Lines of Code" },
  { v: "99%",   l: "Uptime"        },
  { v: "<50ms", l: "API Response"  },
];

const features = [
  { label: "AI Recommendations",         tag: "ML"         },
  { label: "Blockchain Verification",    tag: "Web3"       },
  { label: "Razorpay Payments",          tag: "Fintech"    },
  { label: "Real-time Admin Dashboard",  tag: "Live"       },
  { label: "Multi-Vendor Panel",         tag: "Platform"   },
  { label: "PDF / Excel Exports",        tag: "Reports"    },
];

export default function CTA() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="cta" ref={sectionRef} className="relative">

      {/* ── FULL-WIDTH HEADLINE BLOCK ── */}
      <div className="relative py-20 sm:py-28 px-5 sm:px-10"
        style={{ background: "linear-gradient(180deg, #050508 0%, #07070d 100%)" }}>

        {/* Parallax orb */}
        <motion.div style={{ y: bgY }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[140px]"
            style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.09) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)" }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="label-eyebrow text-purple-400/40 mb-8 max-w-6xl mx-auto"
        >
          Live & Deployed
        </motion.p>

        {/* Giant headline — full width, left-aligned */}
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-black text-white leading-[0.85]"
              style={{
                fontSize: "clamp(2.4rem, 9vw, 10rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Ready to
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="font-black text-white leading-[0.85]"
              style={{
                fontSize: "clamp(2.4rem, 9vw, 10rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              explore
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-black leading-[0.85] italic"
              style={{
                fontSize: "clamp(2rem, 7.5vw, 10rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #a855f7 0%, #818cf8 45%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NeuroCart?
            </motion.h2>
          </div>
        </div>

        {/* Horizontal rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mt-12 mb-10 h-px origin-left"
          style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(59,130,246,0.2), transparent)" }}
        />

        {/* Sub-row: description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p className="text-white/30 text-sm sm:text-base leading-relaxed max-w-sm">
            See the full system in action. Explore the codebase.
            Understand how we turned 25 failures into one runner-up finish.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 32px rgba(168,85,247,0.3)" }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white/50 border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <GitFork className="w-4 h-4" />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── STATS STRIP ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="border-y border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.07 }}
              className="px-6 sm:px-10 py-8 group cursor-default"
            >
              <div
                className="font-black tabular-nums mb-1 transition-colors duration-300"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontFamily: "var(--font-syne), sans-serif",
                  letterSpacing: "-0.03em",
                  color: i === 0 ? "#a855f7" : i === 1 ? "#3b82f6" : i === 2 ? "#06b6d4" : "#10b981",
                }}
              >
                {s.v}
              </div>
              <div className="text-white/25 text-[11px] uppercase tracking-[0.18em]">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── BENTO GRID ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] grid-rows-1 gap-4 items-stretch">

          {/* Left — repo card, spans full height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.07] p-7 sm:p-9 flex flex-col"
            style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.05) 0%, rgba(6,6,10,0.98) 50%, rgba(59,130,246,0.04) 100%)" }}
          >
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(59,130,246,0.3), transparent)" }} />

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <a href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
                  className="font-bold text-white hover:text-purple-300 transition-colors"
                  style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.1rem" }}>
                  Nick7020 / NeuroCart
                </a>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-yellow-500/25 text-yellow-400/70"
                  style={{ background: "rgba(234,179,8,0.06)" }}>
                  🏆 Runner-Up
                </span>
              </div>

              <p className="text-white/35 text-sm leading-relaxed mb-7 max-w-lg">
                An AI-powered multi-vendor e-commerce platform built in 24 hours. JWT auth, smart recommendations, Razorpay payments, blockchain order verification, and a real-time admin dashboard.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {features.map((f) => (
                  <div key={f.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm"
                      style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7" }}>
                      {f.tag}
                    </span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-4 text-white/20 text-xs">
                {[{ dot: "#3b82f6", l: "TypeScript" }, { dot: "#10b981", l: "Python" }, { dot: "#a855f7", l: "Solidity" }].map(lang => (
                  <span key={lang.l} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: lang.dot }} />
                    {lang.l}
                  </span>
                ))}
              </div>
              <motion.a
                href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shrink-0"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
              >
                <GitFork className="w-3.5 h-3.5" />
                View Repo
              </motion.a>
            </div>
          </motion.div>

          {/* Right column — two cards filling full height */}
          <div className="grid grid-rows-2 gap-4">

            {/* Live demo card */}
            <motion.a
              href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.65 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.07] p-7 flex flex-col justify-between cursor-pointer group"
              style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.14) 0%, rgba(59,130,246,0.09) 100%)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.22) 0%, rgba(59,130,246,0.15) 100%)" }} />
              <div className="relative z-10">
                <p className="label-eyebrow text-purple-400/50 mb-4">Live Product</p>
                <h3 className="font-black text-white leading-[0.9]"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.03em" }}>
                  See it<br />in action →
                </h3>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  nauros.netlify.app
                </span>
              </div>
            </motion.a>

            {/* Hackathon card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.72 }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.07] p-7 flex flex-col justify-between"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.4), transparent)" }} />
              <div>
                <p className="label-eyebrow text-yellow-400/40 mb-4">TecDrill 2026 · Deep-Hack</p>
                <h3 className="font-black text-white leading-[0.9] mb-3"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.03em" }}>
                  🥈 Runner-Up
                </h3>
                <p className="text-white/25 text-sm leading-relaxed">
                  Built in 24 hours.<br />Sinhgad Institute, Pune.
                </p>
              </div>
              <span className="text-white/15 text-[10px] font-mono tracking-widest uppercase">
                25 attempts → 1 win
              </span>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
