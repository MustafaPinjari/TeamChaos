"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork, ArrowUpRight } from "lucide-react";

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

        {/* Bottom — project link card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative rounded-2xl p-6 sm:p-8 border border-white/[0.06] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)" }} />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] mb-1 font-mono">Project</p>
              <h3 className="font-bold text-white text-base sm:text-lg">NeuroCart — AI Smart Cart System</h3>
              <p className="text-white/30 text-xs sm:text-sm mt-1">Built in 24 hours · Hackathon Runner-Up 2025</p>
            </div>
            <motion.a
              href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 4 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shrink-0"
              style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
            >
              Open Project <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
