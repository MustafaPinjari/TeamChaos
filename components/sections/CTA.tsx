"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork } from "lucide-react";

const stats = [
  { v: "24h",   l: "Build Time",     color: "#a855f7" },
  { v: "12k+",  l: "Lines of Code",  color: "#3b82f6" },
  { v: "99%",   l: "Uptime",         color: "#06b6d4" },
  { v: "<50ms", l: "API Response",   color: "#10b981" },
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 30% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 60%)" }} />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        {/* Top divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px origin-left mb-12 sm:mb-16"
          style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(59,130,246,0.3), rgba(6,182,212,0.15), rgba(0,0,0,0))" }}
        />

        {/* Main content — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-purple-400/60 text-xs uppercase tracking-[0.22em] mb-5 font-medium"
            >
              Live & Deployed
            </motion.p>

            <div style={{ overflow: "hidden" }} className="mb-6">
              <motion.h2
                initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-black tracking-tighter text-white leading-[0.88]"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
              >
                Ready to explore{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  TeamChaos?
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/30 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              See the full system in action. Explore the codebase.
              Understand how we turned 25 failures into one runner-up finish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-shine group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 30px rgba(168,85,247,0.2)" }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.a>
              <motion.a
                href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white/50 border border-white/10 hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <GitFork className="w-4 h-4" />
                View on GitHub
              </motion.a>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl p-5 sm:p-6 border cursor-default overflow-hidden"
                style={{
                  background: `rgba(${s.color.replace('#','').match(/.{2}/g)!.map(x=>parseInt(x,16)).join(',')},0.05)`,
                  borderColor: `${s.color}25`,
                }}
              >
                {/* Corner glow */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: s.color }} />

                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl font-black mb-1 tabular-nums"
                    style={{ color: s.color }}>{s.v}</div>
                  <div className="text-white/30 text-xs uppercase tracking-[0.15em]">{s.l}</div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left"
                  style={{ background: `linear-gradient(90deg, ${s.color}, rgba(0,0,0,0))` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom — GitHub-style repo card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{ background: "rgba(13,13,18,0.9)" }}
        >
          {/* Subtle top accent */}
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(59,130,246,0.3), transparent)" }} />

          <div className="p-5 sm:p-6">
            {/* Repo header */}
            <div className="flex items-center gap-3 mb-3">
              <GitFork className="w-4 h-4 text-white/40 shrink-0" />
              <a href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
                className="font-bold text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
                Nick7020 / NeuroCart
              </a>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-yellow-500/30 text-yellow-400/70"
                style={{ background: "rgba(234,179,8,0.06)" }}>
                🏆 Runner-Up
              </span>
            </div>

            {/* Description */}
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 max-w-2xl">
              🛒 An AI-powered smart cart system built in 24 hours. Features real-time scanning, neural recommendations, instant checkout, and live vendor analytics.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-4 text-white/30 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0" />
                Python
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
                24
              </span>
              <span className="flex items-center gap-1.5">
                <GitFork className="w-3 h-3" />
                8
              </span>
              <span>Updated 2 days ago</span>
              <span>MIT License</span>
            </div>

            {/* Key features */}
            <div className="mb-5">
              <p className="text-white/40 text-xs font-semibold mb-2">Key Features:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1">
                {[
                  "AI-Powered Recommendations", "Instant Checkout", "Live Vendor Analytics",
                  "RFID + Barcode Scanning",    "Theft Prevention",  "Blockchain Payments",
                ].map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-white/35 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#a855f7" }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <motion.a
              href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
            >
              <GitFork className="w-4 h-4" />
              View Repository
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
