"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Eye, GitBranch, Timer, Cpu } from "lucide-react";
import { SiReact, SiTypescript, SiVite } from "react-icons/si";

const signals = [
  {
    num: "01",
    icon: Brain,
    title: "Real-Time AI Personality",
    desc: "Every decision updates 3 core traits — Empathy, Logic, Control. The AI learns from you and becomes you.",
    color: "#a855f7",
    rgb: "168,85,247",
  },
  {
    num: "02",
    icon: Zap,
    title: "10 Signals. No Right Answers.",
    desc: "A child asking for help. A scientist with 17 years of research. A commander asking you to sacrifice 340 lives. Every choice costs something.",
    color: "#3b82f6",
    rgb: "59,130,246",
  },
  {
    num: "03",
    icon: Eye,
    title: "Surveillance + Hesitation Tracking",
    desc: "The AI watches how long you take to decide. \"I noticed you hesitated…\" Even indecision is data.",
    color: "#06b6d4",
    rgb: "6,182,212",
  },
  {
    num: "04",
    icon: Timer,
    title: "90-Second Pressure Mechanics",
    desc: "No pause. No undo. If you don't choose… the AI chooses. Real-time countdown on every signal.",
    color: "#f59e0b",
    rgb: "245,158,11",
  },
  {
    num: "05",
    icon: GitBranch,
    title: "Branching Narrative Memory",
    desc: "Ignore a child early → she remembers later. The story remembers everything you did — and didn't do.",
    color: "#10b981",
    rgb: "16,185,129",
  },
  {
    num: "06",
    icon: Cpu,
    title: "The Entity (System Corruption)",
    desc: "Mid-game, something breaks the UI. Traits rename. Screen glitches. The AI starts questioning reality.",
    color: "#ec4899",
    rgb: "236,72,153",
  },
];

const endings = [
  { label: "Compassionate AI",       emoji: "💙", color: "#3b82f6" },
  { label: "Cold Optimization",      emoji: "🧊", color: "#06b6d4" },
  { label: "Authoritarian Control",  emoji: "🔴", color: "#ef4444" },
  { label: "Total Silence",          emoji: "⚫", color: "#6b7280" },
];

const stack = [
  { Icon: SiReact,      label: "React",      color: "#61dafb" },
  { Icon: SiTypescript, label: "TypeScript",  color: "#3b82f6" },
  { Icon: SiVite,       label: "Vite",        color: "#646cff" },
];

function SignalCard({ item, i }: { item: typeof signals[0]; i: number }) {
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
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 50%, rgba(${item.rgb},0.1) 0%, transparent 65%)` }}
      />

      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        <div
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
          style={{
            background: `rgba(${item.rgb},0.12)`,
            borderColor: `rgba(${item.rgb},0.28)`,
          }}
        >
          <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          <h3
            className="font-bold text-white/80 text-sm sm:text-base mb-1.5 group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.015em" }}
          >
            {item.title}
          </h3>
          <p
            className="text-white/28 text-xs sm:text-sm leading-relaxed group-hover:text-white/48 transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {item.desc}
          </p>
        </div>
      </div>

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

export default function LastSignal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const endingsRef = useRef(null);
  const endingsInView = useInView(endingsRef, { once: true, margin: "-40px" });

  return (
    <section className="py-16 sm:py-28 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12 sm:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500/40" />
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(245,208,96,0.1) 0%, rgba(232,160,32,0.06) 100%)",
                border: "1px solid rgba(245,208,96,0.22)",
              }}
            >
              <span className="text-xs">🥈</span>
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#f5d060", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Game-O-Thon 2K26 · Zeal Institute · 2nd Runner-Up
              </span>
            </div>
          </motion.div>

          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black text-white leading-[0.88] mb-2"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 5.2rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.045em",
              }}
            >
              Last Signal:{" "}
              <span className="gradient-text italic">Humanity Protocol</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/22 text-sm mt-5 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            "You are the last human training an AI that will outlast civilization. What will you teach it?"
            A browser-based AI ethics narrative game where every decision shapes the personality of an AI.
            Not theory. Not simulation. A moral battlefield.
          </motion.p>

          {/* Stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-2 mt-6 flex-wrap"
          >
            {stack.map(({ Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                  color,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#10b981",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Zustand
            </div>
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium"
              style={{
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.2)",
                color: "#f59e0b",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {"< 500KB bundle"}
            </div>
          </motion.div>
        </div>

        {/* Signal cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14 sm:mb-16">
          {signals.map((item, i) => (
            <SignalCard key={item.num} item={item} i={i} />
          ))}
        </div>

        {/* Psychological Endings */}
        <div ref={endingsRef}>
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={endingsInView ? { opacity: 1, x: 0 } : {}}
            className="text-purple-400/50 text-xs uppercase tracking-[0.25em] mb-6 font-medium"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            4 Psychological Endings
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {endings.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={endingsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex flex-col items-center justify-center gap-2 py-5 px-3 rounded-2xl cursor-default text-center"
                style={{
                  background: `rgba(${e.color.replace("#", "").match(/.{2}/g)!.map((x) => parseInt(x, 16)).join(",")},0.06)`,
                  border: `1px solid rgba(${e.color.replace("#", "").match(/.{2}/g)!.map((x) => parseInt(x, 16)).join(",")},0.18)`,
                }}
              >
                <span className="text-2xl">{e.emoji}</span>
                <span
                  className="text-[11px] font-semibold leading-tight"
                  style={{ color: e.color, fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {e.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={endingsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-white/18 text-xs mt-6 text-center italic"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            "What kind of AI would you create?"
          </motion.p>
        </div>
      </div>
    </section>
  );
}
