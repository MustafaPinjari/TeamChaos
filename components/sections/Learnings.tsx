"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const learnings = [
  { n: "01", title: "Scope is everything",           desc: "A focused MVP beats a bloated prototype every time.", color: "#a855f7", rgb: "168,85,247" },
  { n: "02", title: "Communication wins hackathons", desc: "The team that communicates clearly moves 3× faster.", color: "#3b82f6", rgb: "59,130,246" },
  { n: "03", title: "Demo > Code",                   desc: "A polished 3-min demo is worth 10 hours of refactoring.", color: "#06b6d4", rgb: "6,182,212" },
  { n: "04", title: "Solve a real problem",          desc: "Every winning project solves something people actually feel.", color: "#10b981", rgb: "16,185,129" },
  { n: "05", title: "Sleep is a feature",            desc: "A rested mind at hour 20 outperforms an exhausted one at 24.", color: "#f59e0b", rgb: "245,158,11" },
  { n: "06", title: "Failure is the curriculum",     desc: "25 losses gave us the exact knowledge we needed.", color: "#ec4899", rgb: "236,72,153" },
];

function LearningCard({ item, i }: { item: typeof learnings[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative rounded-2xl p-5 sm:p-6 border cursor-default overflow-hidden transition-all duration-300"
      style={{
        background: `rgba(${item.rgb},0.04)`,
        borderColor: `rgba(${item.rgb},0.15)`,
      }}
    >
      {/* Hover bg sweep */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 50%, rgba(${item.rgb},0.08) 0%, transparent 60%)` }}
      />

      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        {/* Number badge */}
        <div
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xs font-black font-mono border transition-all duration-300 group-hover:scale-110"
          style={{
            background: `rgba(${item.rgb},0.12)`,
            color: item.color,
            borderColor: `rgba(${item.rgb},0.25)`,
            boxShadow: `0 0 16px rgba(${item.rgb},0)`,
          }}
        >
          {item.n}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-bold text-white/85 text-sm sm:text-base mb-1 group-hover:text-white transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-white/30 text-xs sm:text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-300">
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
    <section className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-64 sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-purple-400/60 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
          >
            What We Learned
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black tracking-tighter text-white leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              25 losses.{" "}
              <span className="gradient-text">6 lessons.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="text-white/25 text-sm mt-4 max-w-md"
          >
            Every failure sharpened us. Here's what 25 hackathons taught us.
          </motion.p>
        </div>

        {/* Two-column grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learnings.map((item, i) => (
            <LearningCard key={item.n} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
