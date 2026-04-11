"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Building.", "Shipping.", "Winning."];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + Math.random() * 14 + 2, 100);
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 700);
    return () => clearInterval(t);
  }, []);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#030712" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)" }} />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
          />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
            style={{ border: "1px solid rgba(168,85,247,0.08)" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ border: "1px dashed rgba(59,130,246,0.06)" }}
          />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            {/* Logo mark */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="relative"
              >
                {/* Outer glow ring */}
                <motion.div
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-2 rounded-2xl blur-md"
                  style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(59,130,246,0.5))" }}
                />
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl"
                  style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                  TC
                </div>
              </motion.div>

              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl font-black text-white tracking-tight"
                >
                  Team Chaos
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-white/30 text-xs tracking-[0.2em] uppercase mt-1"
                >
                  Hackathon Runner-Up · 2025
                </motion.p>
              </div>
            </div>

            {/* Animated word */}
            <div className="h-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress section */}
            <div className="flex flex-col items-center gap-3 w-64">
              {/* Track */}
              <div className="relative w-full h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)", backgroundSize: "200% 100%" }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute top-0 h-full w-12 rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
                  animate={{ left: ["-10%", "110%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Counter + label */}
              <div className="flex items-center justify-between w-full">
                <span className="text-white/20 text-[10px] uppercase tracking-widest font-mono">Loading</span>
                <motion.span
                  className="text-white/50 text-xs font-mono tabular-nums"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {displayProgress}%
                </motion.span>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                    backgroundColor: ["rgba(168,85,247,0.4)", "rgba(59,130,246,0.8)", "rgba(168,85,247,0.4)"],
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  style={{ width: "5px", height: "5px", backgroundColor: "rgba(168,85,247,0.4)" }}
                />
              ))}
            </div>
          </motion.div>

          {/* Corner labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 text-white/10 text-[10px] font-mono uppercase tracking-widest hidden sm:block"
          >
            v1.0.0
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 text-white/10 text-[10px] font-mono uppercase tracking-widest hidden sm:block"
          >
            24hr build
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
