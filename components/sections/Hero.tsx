"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GitFork, ExternalLink, ArrowDown } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

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

const teamAvatars = [
  { imageUrl: "https://avatars.githubusercontent.com/MustafaPinjari?v=4", profileUrl: "https://github.com/MustafaPinjari" },
  { imageUrl: "https://avatars.githubusercontent.com/Nick7020?v=4",        profileUrl: "https://github.com/Nick7020"        },
  { imageUrl: "https://avatars.githubusercontent.com/skyisme33?v=4",       profileUrl: "https://github.com/skyisme33"       },
  { imageUrl: "https://avatars.githubusercontent.com/buildsbytanmay?v=4",  profileUrl: "https://github.com/buildsbytanmay"  },
];

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
    >
      {/* Deep layered background */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 140% 90% at 50% -20%, rgba(168,85,247,0.09) 0%, rgba(59,130,246,0.04) 40%, transparent 65%), #050508" }} />

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Refined grid — very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.014]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Primary orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, rgba(59,130,246,0.03) 45%, transparent 70%)" }}
      />

      {/* Secondary accent orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
      />

      <motion.div style={{ y, opacity: fade }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center"
      >
        {/* Eyebrow — refined pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/15" />
          <div className="frosted-pill flex items-center gap-2 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70 animate-pulse" />
            <span className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-medium">
              TecDrill 2026 · Deep-Hack · Runner-Up
            </span>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/15" />
        </motion.div>

        {/* Main headline */}
        <div className="mb-9 w-full">
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-white leading-[0.88] tracking-[-0.045em]"
              style={{ fontSize: "clamp(3rem, 8.5vw, 9.5rem)", fontFamily: "var(--font-syne), sans-serif" }}
            >
              25 Failures.
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.88] tracking-[-0.045em] italic"
              style={{
                fontSize: "clamp(3rem, 8.5vw, 9.5rem)",
                fontFamily: "var(--font-syne), sans-serif",
                background: "linear-gradient(135deg, #c084fc 0%, #818cf8 45%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(168,85,247,0.35))",
              }}
            >
              One Win.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.88] tracking-[-0.045em]"
              style={{
                fontSize: "clamp(3rem, 8.5vw, 9.5rem)",
                fontFamily: "var(--font-syne), sans-serif",
                WebkitTextStroke: "1px rgba(255,255,255,0.14)",
                color: "transparent",
              }}
            >
              NeuroCart.
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7 }}
          className="text-white/35 text-sm sm:text-[15px] leading-[1.8] max-w-md mb-10"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          An AI-powered multi-vendor e-commerce platform with blockchain order verification,
          smart recommendations, and a real-time admin dashboard — built in 24 hours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12"
        >
          <motion.a
            href="https://nauros.netlify.app/" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="btn-shine inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
              boxShadow: "0 0 40px rgba(168,85,247,0.35), 0 1px 0 rgba(255,255,255,0.12) inset, 0 -1px 0 rgba(0,0,0,0.2) inset",
              letterSpacing: "-0.01em",
            }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>→</motion.span>
          </motion.a>

          <motion.a
            href="https://github.com/MustafaPinjari/NeuroCart" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white/45 border border-white/[0.09] transition-all duration-300"
            style={{ letterSpacing: "-0.01em", backdropFilter: "blur(8px)" }}
          >
            <GitFork className="w-3.5 h-3.5" />
            GitHub
          </motion.a>

          <motion.a
            href="#team"
            whileHover={{ scale: 1.04, color: "rgba(255,255,255,0.55)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/28 transition-all duration-300"
            style={{ letterSpacing: "-0.01em" }}
          >
            Meet the Team
          </motion.a>
        </motion.div>

        {/* Team social proof */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex items-center gap-3 mb-12"
        >
          <AvatarCircles
            avatarUrls={teamAvatars}
            className="[&_img]:w-8 [&_img]:h-8 [&_img]:border-[1.5px] [&_img]:border-white/15 -space-x-2.5"
          />
          <div className="text-left">
            <p className="text-white/45 text-xs font-semibold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              4 engineers · 24 hours
            </p>
            <p className="text-white/20 text-[10px]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              TecDrill 2026 Runner-Up
            </p>
          </div>
        </motion.div>

        {/* Tags strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-14"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 + i * 0.06 }}
              className="text-white/18 text-[10px] uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {i > 0 && <span className="mr-6 text-white/08">·</span>}
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats row — luxury glass */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="w-full rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.05]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 + i * 0.08 }}
                whileHover={{ backgroundColor: "rgba(168,85,247,0.04)" }}
                className="flex flex-col items-center justify-center py-7 px-4 cursor-default transition-colors duration-400"
              >
                <div className="font-black tabular-nums mb-1.5"
                  style={{
                    fontSize: "clamp(1.7rem, 3.5vw, 2.9rem)",
                    fontFamily: "var(--font-syne), sans-serif",
                    background: i === 0 ? "linear-gradient(135deg, #c084fc, #a855f7)" :
                                i === 1 ? "linear-gradient(135deg, #818cf8, #3b82f6)" :
                                i === 2 ? "linear-gradient(135deg, #22d3ee, #06b6d4)" :
                                          "linear-gradient(135deg, #f5d060, #e8a020)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.04em",
                  }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/22 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-center leading-tight"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
