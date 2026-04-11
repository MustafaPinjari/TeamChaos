"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers, Server, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    num: "01", icon: Layers,
    title: "Define Every Role",
    desc: "Mapped customer, vendor, and admin flows before writing a single line of code. Three panels, one login, zero ambiguity.",
    color: "#a855f7", rgb: "168,85,247",
  },
  {
    num: "02", icon: Server,
    title: "API-First Backend",
    desc: "Django REST Framework with JWT auth, role-based routing, and a clean service layer. Business logic never touches views.",
    color: "#3b82f6", rgb: "59,130,246",
  },
  {
    num: "03", icon: Sparkles,
    title: "AI & Blockchain Layer",
    desc: "Co-occurrence recommendations, OpenAI re-ranking, and Ethereum Sepolia order fingerprinting — all with graceful fallbacks.",
    color: "#06b6d4", rgb: "6,182,212",
  },
  {
    num: "04", icon: Rocket,
    title: "Iterate Relentlessly",
    desc: "12 prototypes in 24 hours. Ship, test, refine, repeat. Every feature was smoke-tested across all three user roles.",
    color: "#10b981", rgb: "16,185,129",
  },
];

const timeline = [
  { hours: "0–3h",   phase: "Architecture",    detail: "Roles, service layer, JWT, React context. No code yet.",                                          color: "#a855f7", rgb: "168,85,247" },
  { hours: "3–10h",  phase: "Core Platform",   detail: "Auth, products, cart, checkout, Razorpay, vendor profiles.",                                      color: "#3b82f6", rgb: "59,130,246" },
  { hours: "10–16h", phase: "Differentiators", detail: "3-surface recommendations, blockchain verification, real-time dashboard.",                        color: "#06b6d4", rgb: "6,182,212"  },
  { hours: "16–22h", phase: "Polish",          detail: "AI chatbot, invoice auto-gen, global error handling, property-based tests.",                      color: "#10b981", rgb: "16,185,129" },
  { hours: "22–24h", phase: "Final Push",      detail: "Seed data, end-to-end smoke tests across all three roles.",                                       color: "#f59e0b", rgb: "245,158,11" },
];

function StepCard({ step, i, inView }: { step: typeof steps[0]; i: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl p-5 sm:p-6 border cursor-default overflow-hidden transition-all duration-300"
      style={{
        background: hovered ? `rgba(${step.rgb},0.07)` : "rgba(255,255,255,0.025)",
        borderColor: hovered ? `rgba(${step.rgb},0.35)` : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Corner glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl pointer-events-none"
        style={{ background: `rgba(${step.rgb},0.25)` }}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center border"
            style={{
              background: hovered ? `rgba(${step.rgb},0.18)` : `rgba(${step.rgb},0.08)`,
              borderColor: `rgba(${step.rgb},0.3)`,
            }}
          >
            <step.icon className="w-5 h-5" style={{ color: step.color }} />
          </motion.div>
          <span className="text-[10px] font-black font-mono px-2 py-1 rounded-lg"
            style={{ background: `rgba(${step.rgb},0.1)`, color: step.color, border: `1px solid rgba(${step.rgb},0.2)` }}>
            {step.num}
          </span>
        </div>

        <h3 className="font-bold text-white text-sm sm:text-base mb-2 leading-tight">{step.title}</h3>
        <p className="text-white/40 text-xs sm:text-sm leading-[1.7]">{step.desc}</p>

        {/* Bottom accent */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="mt-4 h-px origin-left rounded-full"
          style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function OurApproach() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-28 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div ref={ref} className="mb-14 sm:mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="label-eyebrow text-blue-400/60 mb-4"
          >
            Our Approach
          </motion.p>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black tracking-tighter text-white leading-[0.88]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              Clarity over{" "}
              <span className="gradient-text italic">complexity.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="text-white/40 text-sm sm:text-[15px] leading-[1.75]"
          >
            We didn't try to build everything. We built the right things, exceptionally well —
            then added the features that made judges stop and look twice.
          </motion.p>
        </div>

        {/* ── Step cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-24">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} inView={inView} />
          ))}
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef}>
          <motion.div
            initial={{ opacity: 0 }} animate={timelineInView ? { opacity: 1 } : {}}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 max-w-8"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1))" }} />
            <p className="label-eyebrow text-white/25">24-Hour Build Timeline</p>
            <div className="h-px flex-1"
              style={{ background: "linear-gradient(to right, rgba(255,255,255,0.1), transparent)" }} />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical track line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[19px] top-2 bottom-2 w-px origin-top hidden sm:block"
              style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.4), rgba(59,130,246,0.4), rgba(6,182,212,0.4), rgba(16,185,129,0.4), rgba(245,158,11,0.4))" }}
            />

            <div className="flex flex-col gap-3">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.hours}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 cursor-default"
                >
                  {/* Dot */}
                  <div className="relative shrink-0 mt-3.5 hidden sm:block">
                    <motion.div
                      animate={timelineInView ? { scale: [0, 1.4, 1] } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="w-[10px] h-[10px] rounded-full relative z-10"
                      style={{
                        background: t.color,
                        boxShadow: `0 0 8px ${t.color}, 0 0 16px rgba(${t.rgb},0.4)`,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border p-4 transition-all duration-300 group-hover:border-opacity-60"
                    style={{
                      background: `rgba(${t.rgb},0.04)`,
                      borderColor: `rgba(${t.rgb},0.18)`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded-md"
                        style={{ background: `rgba(${t.rgb},0.15)`, color: t.color }}>
                        {t.hours}
                      </span>
                      <h3 className="font-bold text-white text-sm">{t.phase}</h3>
                    </div>
                    <p className="text-white/35 text-xs leading-[1.65] pl-0">{t.detail}</p>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 h-px origin-left rounded-full"
                      style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
