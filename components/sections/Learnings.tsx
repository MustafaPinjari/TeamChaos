"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const learnings = [
  { n: "01", title: "Scope is everything",           desc: "A focused MVP beats a bloated prototype every time. We shipped 12 features, not 30.", color: "#a855f7", rgb: "168,85,247" },
  { n: "02", title: "Communication wins hackathons", desc: "The team that communicates clearly moves 3× faster. Daily syncs kept us aligned.", color: "#3b82f6", rgb: "59,130,246" },
  { n: "03", title: "Demo > Code",                   desc: "A polished 3-min demo of NeuroCart's AI recs and blockchain badge won the judges.", color: "#06b6d4", rgb: "6,182,212" },
  { n: "04", title: "Solve a real problem",          desc: "Every winning project solves something people actually feel. Multi-vendor pain is real.", color: "#10b981", rgb: "16,185,129" },
  { n: "05", title: "Fallbacks are features",        desc: "Every AI and blockchain call has a graceful fallback. Resilience is a design choice.", color: "#f59e0b", rgb: "245,158,11" },
  { n: "06", title: "Failure is the curriculum",     desc: "25 losses gave us the exact knowledge to build NeuroCart in one shot.", color: "#ec4899", rgb: "236,72,153" },
];

function LearningCard({ item, i }: { item: typeof learnings[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl p-5 sm:p-6 cursor-default overflow-hidden transition-all duration-300"
      style={{
        background: `rgba(${item.rgb},0.04)`,
        border: `1px solid rgba(${item.rgb},0.14)`,
        boxShadow: "0 1px 0 rgba(255,255,255,0.03) inset",
      }}
    >
      {/* Hover radial sweep */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 50%, rgba(${item.rgb},0.1) 0%, transparent 65%)` }}
      />

      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        {/* Number badge */}
        <div
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xs font-black font-mono border transition-all duration-300 group-hover:scale-110"
          style={{
            background: `rgba(${item.rgb},0.12)`,
            color: item.color,
            borderColor: `rgba(${item.rgb},0.28)`,
            boxShadow: `0 0 0 rgba(${item.rgb},0)`,
          }}
        >
          {item.n}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-bold text-white/80 text-sm sm:text-base mb-1.5 group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.015em" }}>
            {item.title}
          </h3>
          <p className="text-white/28 text-xs sm:text-sm leading-relaxed group-hover:text-white/48 transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            {item.desc}
          </p>
        </div>

        {/* Arrow */}
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="shrink-0 text-sm pt-0.5 transition-all"
          style={{ color: item.color }}
        >→</motion.span>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Learnings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-28 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-purple-400/50 text-xs uppercase tracking-[0.25em] mb-5 font-medium"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            What We Learned
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black text-white leading-[0.88]"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 5.2rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.045em",
              }}
            >
              25 losses.{" "}
              <span className="gradient-text italic">6 lessons.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="text-white/22 text-sm mt-5 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Every failure sharpened us. Here's what 25 hackathons taught us — distilled into the decisions that built NeuroCart.
          </motion.p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learnings.map((item, i) => (
            <LearningCard key={item.n} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
