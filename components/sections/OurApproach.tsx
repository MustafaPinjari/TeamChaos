"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScanLine, Sparkles, RefreshCw, CreditCard } from "lucide-react";

const steps = [
  { num: "01", title: "Define Every Role",       desc: "Mapped customer, vendor, and admin flows before writing a single line of code.", color: "#a855f7" },
  { num: "02", title: "API-First Backend",       desc: "Django REST Framework with JWT auth, role-based routing, and clean service layers.", color: "#3b82f6" },
  { num: "03", title: "AI & Blockchain Layer",   desc: "Co-occurrence recommendations, OpenAI re-ranking, and Ethereum Sepolia order fingerprinting.", color: "#06b6d4" },
  { num: "04", title: "Iterate Relentlessly",    desc: "12 prototypes in 24 hours. Ship, test, refine, repeat until every feature held.", color: "#10b981" },
];

const flowNodes = [
  { icon: ScanLine,   label: "Customer Browses & Orders",    sub: "JWT Auth · Razorpay",     color: "#a855f7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.25)" },
  { icon: Sparkles,   label: "AI Recommends Products",       sub: "Co-occurrence · OpenAI",  color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.25)"  },
  { icon: RefreshCw,  label: "Vendor Manages Inventory",     sub: "Live Stock · Invoices",   color: "#06b6d4", bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.25)"   },
  { icon: CreditCard, label: "Admin Sees Everything",        sub: "Analytics · Reports",     color: "#10b981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.25)"  },
];

export default function OurApproach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 sm:w-[400px] h-48 sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: steps ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-blue-400/70 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
            >
              Our Approach
            </motion.p>
            <div style={{ overflow: "hidden" }} className="mb-5">
              <motion.h2
                initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-black tracking-tighter text-white leading-[0.9]"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 4rem)" }}
              >
                Clarity over <span className="gradient-text">complexity.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/35 text-sm sm:text-base mb-10 leading-relaxed"
            >
              We didn't try to build everything. We built the right things, exceptionally well.
            </motion.p>

            <div className="space-y-3">
              {steps.map((step, i) => (
                <motion.div key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 5 }}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-black font-mono shrink-0"
                    style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}25` }}>
                    {step.num}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-white/80 text-sm mb-0.5 group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-white/30 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: hour-by-hour timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-12"
          >
            <p className="text-white/20 text-[10px] uppercase tracking-[0.22em] mb-6 font-medium">24-Hour Build Timeline</p>

            <div className="flex flex-col gap-0">
              {[
                { hours: "0 – 3h",   label: "Architecture First",      desc: "Mapped all three roles, service layer, JWT auth, React context pattern. No code yet.", color: "#a855f7", bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.25)" },
                { hours: "3 – 10h",  label: "Core Platform",           desc: "Auth, products, cart, checkout, Razorpay, vendor profiles, role-based routing.", color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.25)"  },
                { hours: "10 – 16h", label: "The Differentiators",     desc: "Smart recommendations (3 surfaces), blockchain verification, real-time analytics dashboard.", color: "#06b6d4", bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.25)"   },
                { hours: "16 – 22h", label: "Polish & Integration",    desc: "AI chatbot, invoice auto-gen, edge case fixes, global error handling, property-based tests.", color: "#10b981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.25)"  },
                { hours: "22 – 24h", label: "Final Push",              desc: "Seed data, end-to-end smoke tests across all three roles, documentation.", color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.25)"  },
              ].map((node, i, arr) => (
                <div key={node.hours} className="flex flex-col items-start">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="w-full flex items-start gap-4 p-4 rounded-2xl border cursor-default transition-all duration-300"
                    style={{ background: node.bg, borderColor: node.border }}
                  >
                    <div className="shrink-0 mt-0.5 px-2 py-1 rounded-lg text-[10px] font-black font-mono"
                      style={{ background: `rgba(0,0,0,0.3)`, color: node.color, border: `1px solid ${node.border}` }}>
                      {node.hours}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm leading-tight">{node.label}</p>
                      <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{node.desc}</p>
                    </div>
                  </motion.div>

                  {i < arr.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.65 + i * 0.1 }}
                      className="ml-9 w-px h-4 origin-top"
                      style={{ background: `linear-gradient(to bottom, ${node.color}50, ${arr[i+1].color}50)` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
