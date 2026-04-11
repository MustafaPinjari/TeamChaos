"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Cpu, Store, LayoutDashboard } from "lucide-react";
import { FaReact, FaEthereum, FaWallet } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer, SiReactrouter, SiAxios, SiDjango, SiRazorpay, SiLucide } from "react-icons/si";
import { BarChart2 } from "lucide-react";

const nodes = [
  { icon: User,           label: "Customer",       desc: "Browse products, manage cart, checkout with Razorpay, track orders, view history",  color: "#a855f7", rgb: "168,85,247"  },
  { icon: Cpu,            label: "NeuroCart AI",   desc: "Co-occurrence recs, personalised suggestions, trending products, OpenAI re-ranking", color: "#3b82f6", rgb: "59,130,246"  },
  { icon: Store,          label: "Vendor",         desc: "Manage products, view own orders, track invoices, see customer analytics",           color: "#06b6d4", rgb: "6,182,212"   },
  { icon: LayoutDashboard,label: "Admin",          desc: "Real-time dashboard, user management, order lifecycle, payment reports, exports",    color: "#10b981", rgb: "16,185,129"  },
];

const techStack = [
  { label: "React 18",        category: "Frontend",   icon: FaReact,       color: "#61DAFB" },
  { label: "Vite",            category: "Build",      icon: SiVite,        color: "#646CFF" },
  { label: "Tailwind CSS",    category: "Styling",    icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Framer Motion",   category: "Animation",  icon: SiFramer,      color: "#EC4899" },
  { label: "React Router",    category: "Routing",    icon: SiReactrouter, color: "#EF4444" },
  { label: "Axios",           category: "API",        icon: SiAxios,       color: "#5A29E4" },
  { label: "Recharts",        category: "Charts",     icon: BarChart2,     color: "#F97316" },
  { label: "Lucide React",    category: "Icons",      icon: SiLucide,      color: "#e2e8f0" },
  { label: "Django 6",        category: "Backend",    icon: SiDjango,      color: "#10B981" },
  { label: "Razorpay",        category: "Payments",   icon: SiRazorpay,    color: "#3B82F6" },
  { label: "Ethereum",        category: "Blockchain", icon: FaEthereum,    color: "#F59E0B" },
  { label: "OpenAI",          category: "AI",         icon: FaWallet,      color: "#F97316" },
];

function NodeCard({ node, i, inView }: { node: typeof nodes[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl p-5 border cursor-default overflow-hidden transition-all duration-300"
      style={{
        background: `rgba(${node.rgb},0.05)`,
        borderColor: `rgba(${node.rgb},0.2)`,
      }}
    >
      {/* Corner glow on hover */}
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: node.color }} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
          style={{ background: `rgba(${node.rgb},0.15)`, border: `1px solid rgba(${node.rgb},0.3)` }}>
          <node.icon className="w-6 h-6" style={{ color: node.color }} />
        </div>
        <h3 className="font-bold text-white text-sm mb-1.5">{node.label}</h3>
        <p className="text-white/35 text-xs leading-relaxed">{node.desc}</p>

        {/* Bottom accent */}
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
            className="text-white/30 text-sm sm:text-base mt-4 max-w-xl"
          >
            Four interconnected layers — customer, AI, vendor, and admin — all communicating through a clean DRF API with JWT auth.
          </motion.p>
        </div>

        {/* Node cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {nodes.map((node, i) => (
            <NodeCard key={node.label} node={node} i={i} inView={inView} />
          ))}
        </div>

        {/* Connection line between cards — desktop only */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block h-px mb-12 origin-left"
          style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.4), rgba(59,130,246,0.4), rgba(6,182,212,0.4), rgba(16,185,129,0.4))" }}
        />

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
