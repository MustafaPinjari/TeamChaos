"use client";
import React, { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Cpu, Store, LayoutDashboard, Globe } from "lucide-react";
import { FaReact, FaEthereum, FaWallet } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer, SiReactrouter, SiAxios, SiDjango, SiRazorpay, SiLucide } from "react-icons/si";
import { BarChart2 } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const nodes = [
  { icon: User,            label: "Customer",     desc: "Browse products, manage cart, checkout with Razorpay, track orders, view history",  color: "#a855f7", rgb: "168,85,247" },
  { icon: Cpu,             label: "NeuroCart AI", desc: "Co-occurrence recs, personalised suggestions, trending products, OpenAI re-ranking", color: "#3b82f6", rgb: "59,130,246" },
  { icon: Store,           label: "Vendor",       desc: "Manage products, view own orders, track invoices, see customer analytics",           color: "#06b6d4", rgb: "6,182,212"  },
  { icon: LayoutDashboard, label: "Admin",        desc: "Real-time dashboard, user management, order lifecycle, payment reports, exports",    color: "#10b981", rgb: "16,185,129" },
];

const techStack = [
  { label: "React 18",      category: "Frontend",   icon: FaReact,       color: "#61DAFB" },
  { label: "Vite",          category: "Build",      icon: SiVite,        color: "#646CFF" },
  { label: "Tailwind CSS",  category: "Styling",    icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Framer Motion", category: "Animation",  icon: SiFramer,      color: "#EC4899" },
  { label: "React Router",  category: "Routing",    icon: SiReactrouter, color: "#EF4444" },
  { label: "Axios",         category: "API",        icon: SiAxios,       color: "#5A29E4" },
  { label: "Recharts",      category: "Charts",     icon: BarChart2,     color: "#F97316" },
  { label: "Lucide React",  category: "Icons",      icon: SiLucide,      color: "#e2e8f0" },
  { label: "Django 6",      category: "Backend",    icon: SiDjango,      color: "#10B981" },
  { label: "Razorpay",      category: "Payments",   icon: SiRazorpay,    color: "#3B82F6" },
  { label: "Ethereum",      category: "Blockchain", icon: FaEthereum,    color: "#F59E0B" },
  { label: "OpenAI",        category: "AI",         icon: FaWallet,      color: "#F97316" },
];

/* ── Beam node circle ── */
const BeamCircle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={`z-10 flex items-center justify-center rounded-2xl border border-white/10 shadow-lg ${className ?? ""}`}
      style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
    >
      {children}
    </div>
  )
);
BeamCircle.displayName = "BeamCircle";

/* ── Animated beam diagram ── */
function SystemBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frontendRef  = useRef<HTMLDivElement>(null);
  const backendRef   = useRef<HTMLDivElement>(null);
  const razorpayRef  = useRef<HTMLDivElement>(null);
  const infuraRef    = useRef<HTMLDivElement>(null);
  const openaiRef    = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-52 sm:h-60 w-full items-center justify-between overflow-hidden rounded-2xl border border-white/[0.06] px-8 sm:px-16"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      {/* Left — Frontend */}
      <div className="flex flex-col items-center gap-2 z-10">
        <BeamCircle ref={frontendRef} className="w-14 h-14 sm:w-16 sm:h-16">
          <FaReact className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#61DAFB" }} />
        </BeamCircle>
        <span className="text-white/30 text-[10px] font-medium tracking-wide">Frontend</span>
      </div>

      {/* Center — DRF */}
      <div className="flex flex-col items-center gap-2 z-10">
        <BeamCircle ref={backendRef} className="w-16 h-16 sm:w-20 sm:h-20">
          <SiDjango className="w-7 h-7 sm:w-9 sm:h-9" style={{ color: "#10B981" }} />
        </BeamCircle>
        <span className="text-white/30 text-[10px] font-medium tracking-wide">Django DRF</span>
      </div>

      {/* Right — 3 services */}
      <div className="flex flex-col gap-3 z-10">
        <BeamCircle ref={razorpayRef} className="w-11 h-11 p-2.5">
          <SiRazorpay className="w-5 h-5" style={{ color: "#3B82F6" }} />
        </BeamCircle>
        <BeamCircle ref={infuraRef} className="w-11 h-11 p-2.5">
          <FaEthereum className="w-5 h-5" style={{ color: "#F59E0B" }} />
        </BeamCircle>
        <BeamCircle ref={openaiRef} className="w-11 h-11 p-2.5">
          <Globe className="w-5 h-5" style={{ color: "#a855f7" }} />
        </BeamCircle>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={frontendRef} toRef={backendRef}
        gradientStartColor="#61DAFB" gradientStopColor="#10B981" duration={4} />
      <AnimatedBeam containerRef={containerRef} fromRef={backendRef} toRef={razorpayRef}
        gradientStartColor="#10B981" gradientStopColor="#3B82F6" curvature={-40} endYOffset={-10} duration={3.5} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={backendRef} toRef={infuraRef}
        gradientStartColor="#10B981" gradientStopColor="#F59E0B" duration={4.5} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={backendRef} toRef={openaiRef}
        gradientStartColor="#10B981" gradientStopColor="#a855f7" curvature={40} endYOffset={10} duration={3} reverse />
    </div>
  );
}

/* ── Node card ── */
function NodeCard({ node, i, inView }: { node: typeof nodes[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl p-5 border cursor-default overflow-hidden transition-all duration-300"
      style={{ background: `rgba(${node.rgb},0.05)`, borderColor: `rgba(${node.rgb},0.2)` }}
    >
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: node.color }} />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{ background: `rgba(${node.rgb},0.15)`, border: `1px solid rgba(${node.rgb},0.3)` }}>
          <node.icon className="w-6 h-6" style={{ color: node.color }} />
        </div>
        <h3 className="font-bold text-white text-sm mb-1.5">{node.label}</h3>
        <p className="text-white/35 text-xs leading-relaxed">{node.desc}</p>
        <motion.div
          initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 h-px origin-left rounded-full"
          style={{ background: `linear-gradient(90deg, ${node.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-60px" });

  return (
    <section id="architecture" className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-48 sm:w-[400px] h-48 sm:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-cyan-400/70 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
          >
            System Architecture
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black tracking-tighter text-white leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Built to <span className="gradient-text">scale.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-sm sm:text-[15px] mt-4 max-w-xl leading-[1.75]"
          >
            Four interconnected layers — customer, AI, vendor, and admin — all communicating through a clean DRF API with JWT auth.
          </motion.p>
        </div>

        {/* Node cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {nodes.map((node, i) => (
            <NodeCard key={node.label} node={node} i={i} inView={inView} />
          ))}
        </div>

        {/* Animated beam diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.22em] mb-4 font-medium text-center">
            System Data Flow
          </p>
          <SystemBeam />
        </motion.div>

        {/* Tech stack */}
        <div ref={stackRef}>
          <motion.p
            initial={{ opacity: 0 }} animate={stackInView ? { opacity: 1 } : {}}
            className="text-white/20 text-[10px] uppercase tracking-[0.22em] mb-6 font-medium text-center"
          >
            Technology Stack
          </motion.p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
            {techStack.map((tech, i) => (
              <motion.div key={tech.label}
                initial={{ opacity: 0, y: 16 }}
                animate={stackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.08 }}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <tech.icon style={{ color: tech.color, fontSize: "22px" }} className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-white/60 font-medium text-[9px] sm:text-[10px] text-center leading-tight group-hover:text-white/90 transition-colors">{tech.label}</span>
                <span className="text-white/20 text-[8px] text-center hidden sm:block">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
