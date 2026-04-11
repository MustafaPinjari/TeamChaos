"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const storyLines = [
  { text: "The judges reviewed",      delay: 0    },
  { text: "over 40 projects.",        delay: 0.12 },
  { text: "They deliberated.",        delay: 0.24 },
  { text: "Then they called a name.", delay: 0.36 },
];

function StoryLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.p
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
        className="text-white/40 font-semibold leading-tight"
        style={{ fontSize: "clamp(1.1rem, 3vw, 2.2rem)" }}
      >
        {text}
      </motion.p>
    </div>
  );
}

export default function WinMoment() {
  const badgeRef = useRef(null);
  const badgeInView = useInView(badgeRef, { once: true, margin: "-60px" });

  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, { once: true, margin: "-60px" });

  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: "-40px" });

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Badge */}
        <motion.div ref={badgeRef}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={badgeInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.5, type: "spring", bounce: 0.35 }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-yellow-500/20 text-yellow-300/70 text-sm"
            style={{ background: "rgba(234,179,8,0.05)" }}>
            <motion.div
              animate={{ rotate: [0, -12, 12, -12, 0] }}
              transition={{ duration: 0.7, delay: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <Trophy className="w-4 h-4" />
            </motion.div>
            🥈 Runner-Up
          </div>
        </motion.div>

        {/* Story lines */}
        <div className="space-y-1 sm:space-y-2 mb-10 sm:mb-12">
          {storyLines.map((l) => (
            <StoryLine key={l.text} text={l.text} delay={l.delay} />
          ))}
        </div>

        {/* Big name reveal */}
        <div ref={nameRef} className="mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={nameInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tighter leading-[0.88] gradient-text"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 9rem)",
              filter: nameInView
                ? "drop-shadow(0 0 18px rgba(168,85,247,1)) drop-shadow(0 0 50px rgba(168,85,247,0.6)) drop-shadow(0 0 90px rgba(59,130,246,0.35))"
                : "drop-shadow(0 0 0px transparent)",
              transition: "filter 1.6s ease 0.2s",
            }}
          >
            Team Chaos.
          </motion.h2>
        </div>

        {/* Awards */}
        <motion.div ref={awardsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={awardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {["🥈 Runner-Up", "🎯 Best Innovation", "⚡ Best Tech Stack", "🌟 Judges' Choice"].map((a, i) => (
            <motion.span key={a}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={awardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-yellow-300/55 text-xs sm:text-sm border border-yellow-500/15 cursor-default"
              style={{ background: "rgba(234,179,8,0.04)" }}
            >
              {a}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
