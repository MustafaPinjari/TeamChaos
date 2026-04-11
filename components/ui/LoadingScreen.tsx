"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = ["Building.", "Shipping.", "Winning."];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    let current = 0;
    const id = setInterval(() => {
      current = Math.min(current + Math.random() * 12 + 3, 100);
      setProgress(current);
      if (current >= 100) { clearInterval(id); setTimeout(() => setDone(true), 600); }
    }, 90);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPhraseIdx(i => (i + 1) % PHRASES.length), 700);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#050508" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Single subtle glow — not overwhelming */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)" }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-7"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, type: "spring", bounce: 0.35 }}
              className="relative"
            >
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-2 rounded-2xl blur-lg pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(59,130,246,0.25))" }}
              />
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                TC
              </div>
            </motion.div>

            {/* Name + tagline */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-black text-white tracking-tight"
              >
                Team Chaos
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-white/20 text-[10px] tracking-[0.22em] uppercase mt-1"
              >
                Hackathon Runner-Up · 2025
              </motion.p>
            </div>

            {/* Cycling phrase */}
            <div className="h-6 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span key={phraseIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-semibold gradient-text"
                >
                  {PHRASES[phraseIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-2 w-52 sm:w-64">
              <div className="relative w-full h-[1.5px] rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)" }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <div className="flex justify-between w-full">
                <span className="text-white/15 text-[9px] uppercase tracking-[0.2em] font-mono">Loading</span>
                <span className="text-white/30 text-[9px] font-mono tabular-nums">{pct}%</span>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ background: ["#a855f7", "#3b82f6", "#06b6d4"][i] }}
                  animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
