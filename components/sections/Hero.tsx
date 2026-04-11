"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GitFork, ExternalLink, ArrowDown } from "lucide-react";

/* ── Animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil((to - start) / 8);
        setCount(start >= to ? to : start);
        if (start < to) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Soft noise / grain overlay ── */
function GrainOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Hackathons entered" },
  { value: 24, suffix: "h", label: "Hours to build"    },
  { value: 4,  suffix: "",  label: "Engineers"         },
  { value: 2,  suffix: "nd",label: "Place finish"      },
];

const tags = ["AI Recommendations", "Blockchain Verified", "Razorpay Payments", "Real-time Dashboard", "Multi-vendor", "JWT Auth"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rawY  = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const y     = useSpring(rawY, { stiffness: 70, damping: 18 });
  const fade  = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="story"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
      style={{ background: "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(168,85,247,0.07) 0%, transparent 60%), #050508" }}
    >
      <GrainOverlay />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large blurred orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.09) 0%, rgba(59,130,246,0.04) 45%, transparent 70%)" }}
      />

      <motion.div style={{ y, opacity: fade }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center"
      >

        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-white/15" />
          <span className="text-white/35 text-[11px] uppercase tracking-[0.28em] font-medium"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            TecDrill 2026 · Deep-Hack · Runner-Up
          </span>
          <div className="h-px w-10 bg-white/15" />
        </motion.div>

        {/* ── Main headline ── */}
        <div className="mb-8 w-full">
          {/* Line 1 */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 8.5vw, 9rem)", fontFamily: "'Syne', sans-serif" }}
            >
              25 Failures.
            </motion.h1>
          </div>

          {/* Line 2 — italic accent */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.9] tracking-[-0.04em] italic"
              style={{
                fontSize: "clamp(3rem, 8.5vw, 9rem)",
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #a855f7 0%, #818cf8 40%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Win.
            </motion.h1>
          </div>

          {/* Line 3 — outlined / ghost */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.9] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(3rem, 8.5vw, 9rem)",
                fontFamily: "'Syne', sans-serif",
                WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                color: "transparent",
              }}
            >
              NeuroCart.
            </motion.h1>
          </div>
        </div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7 }}
          className="text-white/38 text-sm sm:text-base leading-[1.75] max-w-lg mb-10"
          style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
        >
          An AI-powered multi-vendor e-commerce platform with blockchain order verification,
          smart recommendations, and a real-time admin dashboard — built in 24 hours.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12"
        >
          <motion.a
            href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="btn-shine inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #a855f7, #3b82f6)",
              boxShadow: "0 0 36px rgba(168,85,247,0.3), 0 1px 0 rgba(255,255,255,0.1) inset",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>→</motion.span>
          </motion.a>

          <motion.a
            href="https://github.com/Nick7020/NeuroCart" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.06)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white/50 border border-white/10 hover:text-white/80 transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}
          >
            <GitFork className="w-3.5 h-3.5" />
            GitHub
          </motion.a>

          <motion.a
            href="#team"
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.04)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/35 border border-white/[0.07] hover:text-white/60 transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}
          >
            Meet the Team
          </motion.a>
        </motion.div>

        {/* ── Tags strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-14"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 + i * 0.06 }}
              className="text-white/22 text-[10px] uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {i > 0 && <span className="mr-5 text-white/10">·</span>}
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06]"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 + i * 0.08 }}
              whileHover={{ backgroundColor: "rgba(168,85,247,0.04)" }}
              className="flex flex-col items-center justify-center py-6 px-4 cursor-default transition-colors duration-300"
              style={{ background: "#050508" }}
            >
              <div className="font-black tabular-nums mb-1"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.04em",
                }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/25 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-center leading-tight"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
