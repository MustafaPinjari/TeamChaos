"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork, Zap, Brain, Shield, BarChart3, Users, Globe } from "lucide-react";
import {
  SiTypescript, SiPython, SiSolidity, SiReact, SiDjango,
  SiEthereum, SiRazorpay, SiRedis, SiPostgresql,
} from "react-icons/si";
import { AvatarCircles } from "@/components/ui/avatar-circles";

const stats = [
  { v: "24h",   l: "Build Time",     color: "#a855f7" },
  { v: "12k+",  l: "Lines of Code",  color: "#3b82f6" },
  { v: "99%",   l: "Uptime",         color: "#06b6d4" },
  { v: "<50ms", l: "API Response",   color: "#10b981" },
];

const features = [
  { label: "AI Recommendations",        tag: "ML",       rgb: "168,85,247",  color: "#a855f7" },
  { label: "Blockchain Verification",   tag: "Web3",     rgb: "59,130,246",  color: "#3b82f6" },
  { label: "Razorpay Payments",         tag: "Fintech",  rgb: "6,182,212",   color: "#06b6d4" },
  { label: "Real-time Admin Dashboard", tag: "Live",     rgb: "16,185,129",  color: "#10b981" },
  { label: "Multi-Vendor Panel",        tag: "Platform", rgb: "245,158,11",  color: "#f59e0b" },
  { label: "PDF / Excel Exports",       tag: "Reports",  rgb: "236,72,153",  color: "#ec4899" },
];

const techStack = [
  { Icon: SiTypescript, label: "TypeScript", color: "#3b82f6",  bg: "rgba(59,130,246,0.12)"  },
  { Icon: SiPython,     label: "Python",     color: "#10b981",  bg: "rgba(16,185,129,0.12)"  },
  { Icon: SiSolidity,   label: "Solidity",   color: "#a855f7",  bg: "rgba(168,85,247,0.12)"  },
  { Icon: SiReact,      label: "React",      color: "#06b6d4",  bg: "rgba(6,182,212,0.12)"   },
  { Icon: SiDjango,     label: "Django",     color: "#10b981",  bg: "rgba(16,185,129,0.12)"  },
  { Icon: SiEthereum,   label: "Ethereum",   color: "#818cf8",  bg: "rgba(129,140,248,0.12)" },
  { Icon: SiRazorpay,   label: "Razorpay",   color: "#06b6d4",  bg: "rgba(6,182,212,0.12)"   },
  { Icon: SiPostgresql, label: "PostgreSQL",  color: "#3b82f6",  bg: "rgba(59,130,246,0.12)"  },
  { Icon: SiRedis,      label: "Redis",      color: "#ef4444",  bg: "rgba(239,68,68,0.12)"   },
];

const teamAvatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/MustafaPinjari?v=4", profileUrl: "https://github.com/MustafaPinjari" },
  { imageUrl: "https://avatars.githubusercontent.com/Nick7020?v=4",         profileUrl: "https://github.com/Nick7020"        },
  { imageUrl: "https://avatars.githubusercontent.com/skyisme33?v=4",        profileUrl: "https://github.com/skyisme33"       },
  { imageUrl: "https://avatars.githubusercontent.com/buildsbytanmay?v=4",   profileUrl: "https://github.com/buildsbytanmay"  },
];

export default function CTA() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="cta" ref={sectionRef} className="relative">

      {/* ── HEADLINE BLOCK ── */}
      <div className="relative py-20 sm:py-32 px-5 sm:px-10"
        style={{ background: "linear-gradient(180deg, #050508 0%, #06060c 100%)" }}>

        {/* Parallax orb */}
        <motion.div style={{ y: bgY }}
          className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full blur-[160px]"
            style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, rgba(59,130,246,0.04) 50%, transparent 70%)" }} />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 max-w-6xl mx-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/70 animate-pulse" />
          <span className="label-eyebrow text-white/25">Live & Deployed</span>
        </motion.div>

        {/* Giant headline */}
        <div className="max-w-6xl mx-auto">
          {[
            { text: "Ready to",   italic: false },
            { text: "explore",    italic: false },
            { text: "NeuroCart?", italic: true  },
          ].map((line, i) => (
            <div key={line.text} className="overflow-hidden mb-1">
              <motion.h2
                initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.05 + i * 0.1 }}
                className={`font-black text-white leading-[0.84] ${line.italic ? "italic" : ""}`}
                style={{
                  fontSize: "clamp(2.6rem, 9vw, 10.5rem)",
                  fontFamily: "var(--font-syne), sans-serif",
                  letterSpacing: "-0.045em",
                  ...(line.italic ? {
                    background: "linear-gradient(135deg, #c084fc 0%, #818cf8 45%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 30px rgba(168,85,247,0.3))",
                  } : {}),
                }}
              >
                {line.text}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Hairline */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mt-14 mb-12 h-px origin-left"
          style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.45), rgba(59,130,246,0.25), transparent)" }}
        />

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          <p className="text-white/28 text-sm sm:text-[15px] leading-[1.8] max-w-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            See the full system in action. Explore the codebase.
            Understand how we turned 25 failures into one runner-up finish.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                boxShadow: "0 0 36px rgba(168,85,247,0.3), 0 1px 0 rgba(255,255,255,0.1) inset",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href="https://github.com/MustafaPinjari/NeuroCart" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(255,255,255,0.18)" }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white/45 border border-white/[0.09] hover:text-white/75 transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
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
        className="border-y"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.012)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x"
          style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.07 }}
              whileHover={{ backgroundColor: `rgba(${s.color.replace('#','').match(/.{2}/g)!.map(x=>parseInt(x,16)).join(',')},0.04)` }}
              className="px-6 sm:px-10 py-9 cursor-default transition-colors duration-400 border-white/[0.05]"
              style={{ borderRightColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="font-black tabular-nums mb-1.5"
                style={{
                  fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
                  fontFamily: "var(--font-syne), sans-serif",
                  letterSpacing: "-0.04em",
                  color: s.color,
                  textShadow: `0 0 30px ${s.color}50`,
                }}
              >
                {s.v}
              </div>
              <div className="text-white/22 text-[10px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── BENTO GRID ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-24">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="label-eyebrow text-white/20 mb-8"
        >
          The Project
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* ── MAIN REPO CARD — spans 2 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 group relative flex flex-col justify-between overflow-hidden rounded-2xl"
            style={{
              background: "linear-gradient(145deg, rgba(168,85,247,0.07) 0%, rgba(6,6,12,0.98) 40%, rgba(59,130,246,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.6) 30%, rgba(59,130,246,0.4) 70%, transparent 100%)" }} />

            {/* Ambient glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(168,85,247,0.06)" }} />

            <div className="flex-1 p-7 sm:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <a href="https://github.com/MustafaPinjari/NeuroCart" target="_blank" rel="noopener noreferrer"
                  className="font-bold text-white hover:text-purple-300 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>
                  MustafaPinjari / NeuroCart
                </a>
                <motion.span whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,208,96,0.12) 0%, rgba(232,160,32,0.08) 100%)",
                    border: "1px solid rgba(245,208,96,0.28)",
                    color: "#f5d060",
                    boxShadow: "0 0 16px rgba(245,208,96,0.12)",
                    letterSpacing: "0.04em",
                  }}>
                  🏆 Runner-Up
                </motion.span>
              </div>

              <p className="text-white/32 text-sm leading-[1.8] mb-7 max-w-lg"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                An AI-powered multi-vendor e-commerce platform built in 24 hours. JWT auth, smart recommendations, Razorpay payments, blockchain order verification, and a real-time admin dashboard.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {features.map((f, i) => (
                  <motion.div key={f.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    whileHover={{ y: -2, borderColor: `rgba(${f.rgb},0.38)` }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: `1px solid rgba(${f.rgb},0.18)`,
                      color: "rgba(255,255,255,0.42)",
                    }}>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm"
                      style={{ background: `rgba(${f.rgb},0.18)`, color: f.color }}>
                      {f.tag}
                    </span>
                    {f.label}
                  </motion.div>
                ))}
              </div>

              {/* Tech stack icons */}
              <div className="flex flex-wrap gap-2">
                {techStack.map(({ Icon, label, color, bg }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.85 + i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.08 }}
                    title={label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium cursor-default transition-all duration-200"
                    style={{ background: bg, color, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: "var(--font-inter), sans-serif" }}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-7 sm:px-8 py-5 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {/* Team avatars */}
              <div className="flex items-center gap-3">
                <AvatarCircles
                  avatarUrls={teamAvatars}
                  className="[&_img]:w-7 [&_img]:h-7 [&_img]:border-[1.5px] [&_img]:border-white/20 -space-x-2"
                />
                <span className="text-white/25 text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  4 engineers
                </span>
              </div>
              <motion.a
                href="https://github.com/MustafaPinjari/NeuroCart" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
                  boxShadow: "0 0 24px rgba(168,85,247,0.25), 0 1px 0 rgba(255,255,255,0.1) inset",
                }}>
                <GitFork className="w-3.5 h-3.5" />
                View Repo
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Live Demo + Hackathon stacked ── */}
          <div className="lg:col-span-1 flex flex-col gap-4">

          {/* ── LIVE DEMO CARD ── */}
          <motion.a
            href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.65 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="flex-1 relative flex flex-col justify-between overflow-hidden rounded-2xl cursor-pointer group p-7"
            style={{
              background: "linear-gradient(145deg, rgba(168,85,247,0.16) 0%, rgba(99,102,241,0.1) 50%, rgba(59,130,246,0.12) 100%)",
              border: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset",
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(145deg, rgba(168,85,247,0.26) 0%, rgba(59,130,246,0.18) 100%)" }} />
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), rgba(59,130,246,0.5), transparent)" }} />

            {/* Floating icon */}
            <div className="relative z-10 mb-auto">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <ExternalLink className="w-5 h-5" style={{ color: "#a855f7" }} />
              </div>
              <p className="label-eyebrow text-purple-400/50 mb-3">Live Product</p>
              <h3 className="font-black text-white leading-[0.88]"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.035em" }}>
                See it<br />in action →
              </h3>
            </div>
            <div className="relative z-10 mt-6">
              <span className="inline-flex items-center gap-2 text-xs text-white/35"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                nauros.netlify.app
              </span>
            </div>
          </motion.a>

          {/* ── HACKATHON CARD ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.72 }}
            className="flex-1 relative flex flex-col justify-between overflow-hidden rounded-2xl p-7"
            style={{
              background: "linear-gradient(145deg, rgba(245,208,96,0.06) 0%, rgba(6,6,12,0.98) 60%)",
              border: "1px solid rgba(245,208,96,0.14)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
            }}
          >
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(245,208,96,0.5), transparent)" }} />

            {/* Trophy icon */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(245,208,96,0.1)", border: "1px solid rgba(245,208,96,0.2)" }}>
              <span className="text-lg">🏆</span>
            </div>

            <div>
              <p className="label-eyebrow mb-3" style={{ color: "rgba(245,208,96,0.4)" }}>TecDrill 2026 · Deep-Hack</p>
              <h3 className="font-black text-white leading-[0.88] mb-3"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.035em" }}>
                <span style={{ color: "#f5d060", textShadow: "0 0 20px rgba(245,208,96,0.3)" }}>🥈</span> Runner-Up
              </h3>
              <p className="text-white/25 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Built in 24 hours.<br />Sinhgad Institute, Pune.
              </p>
            </div>
            <span className="text-white/12 text-[10px] font-mono tracking-widest uppercase mt-4">
              25 attempts → 1 win
            </span>
          </motion.div>

          </div>{/* end right column */}

        </div>
      </div>

    </section>
  );
}
