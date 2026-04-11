"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const announcement = [
  "The judges reviewed",
  "over 40 projects.",
  "They deliberated",
  "for two hours.",
  "Then they called",
  "a name.",
  "Team Chaos.",
];

function AnnouncementLine({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const isLast = index === announcement.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`leading-tight ${
        isLast
          ? "text-5xl md:text-8xl font-black gradient-text text-glow"
          : "text-3xl md:text-5xl font-bold text-white/70"
      }`}
    >
      {text}
    </motion.div>
  );
}

export default function WinMoment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none" />

      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10 pointer-events-none"
          style={{ width: `${i * 300}px`, height: `${i * 300}px` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl shadow-yellow-500/30 mb-8 mx-auto"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/30 text-yellow-300 text-sm mb-8"
          >
            🏆 The Win Moment
          </motion.div>
        </div>

        <div className="space-y-6 text-center">
          {announcement.map((line, i) => (
            <AnnouncementLine key={i} text={line} index={i} />
          ))}
        </div>

        {/* Confetti-like dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {["🥇 1st Place", "🎯 Best Innovation", "⚡ Best Tech Stack", "🌟 Judges' Choice"].map((award) => (
            <span
              key={award}
              className="px-4 py-2 rounded-full glass border border-yellow-500/20 text-yellow-300/80 text-sm"
            >
              {award}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
