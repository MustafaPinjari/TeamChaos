"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const storyLines = [
  { text: "The judges reviewed",           delay: 0    },
  { text: "over 30 projects.",             delay: 0.12 },
  { text: "Most built a CRUD app.",        delay: 0.24 },
  { text: "We built a SaaS product.",      delay: 0.36 },
  { text: "Then they called a name.",      delay: 0.48 },
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
          className="flex flex-wrap gap-2 sm:gap-3 mb-14 sm:mb-16"
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

        {/* What made us win */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.22em] mb-6 font-medium">What Made the Difference</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { n: "01", title: "Treated extras as the main brief",  desc: "\"Additional features carry added weightage\" — we read that as the real brief. Blockchain, AI recs, real-time dashboard. All production-quality.", color: "#a855f7", rgb: "168,85,247" },
              { n: "02", title: "Architecture that looks real",       desc: "Service layer, JWT blacklisting, role-based routing, caching, DB indexes, graceful fallbacks — decisions real engineering teams make.", color: "#3b82f6", rgb: "59,130,246" },
              { n: "03", title: "Blockchain was unexpected",          desc: "Nobody else ships Ethereum integration in a 24h e-commerce hackathon. A real Sepolia tx hash on the order page was a moment that stood out.", color: "#06b6d4", rgb: "6,182,212" },
              { n: "04", title: "Recommendation system had depth",    desc: "Co-occurrence analysis, personalisation, trending with configurable windows, OpenAI re-ranking, full fallback chain, 1-hour caching.", color: "#10b981", rgb: "16,185,129" },
              { n: "05", title: "Correctness, not just demos",        desc: "Property-based tests, composite DB indexes, select_related to kill N+1s, race-safe invoice numbering — details that signal production thinking.", color: "#f59e0b", rgb: "245,158,11" },
              { n: "06", title: "UI felt like a SaaS product",        desc: "Loading skeletons, Recharts charts, blockchain badge, recommendation carousels — the frontend looked polished. Presentation matters.", color: "#ec4899", rgb: "236,72,153" },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-4 sm:p-5 border cursor-default overflow-hidden transition-all duration-300"
                style={{ background: `rgba(${item.rgb},0.04)`, borderColor: `rgba(${item.rgb},0.15)` }}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black font-mono border"
                    style={{ background: `rgba(${item.rgb},0.12)`, color: item.color, borderColor: `rgba(${item.rgb},0.25)` }}>
                    {item.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-white/80 text-xs sm:text-sm mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-white/25 text-xs leading-relaxed group-hover:text-white/40 transition-colors">{item.desc}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

