"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Cpu, Store, LayoutDashboard, ArrowRight } from "lucide-react";
import { FaReact, FaEthereum, FaWallet } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer, SiReactrouter, SiAxios, SiDjango, SiRazorpay, SiLucide } from "react-icons/si";
import { BarChart2 } from "lucide-react";

const nodes = [
  {
    icon: User,
    label: "Customer",
    desc: "Scans items, gets AI suggestions, checks out instantly",
    color: "from-purple-500 to-purple-600",
    glow: "shadow-purple-500/30",
  },
  {
    icon: Cpu,
    label: "Team Chaos AI",
    desc: "Processes data, runs recommendations, syncs in real-time",
    color: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/30",
  },
  {
    icon: Store,
    label: "Vendor",
    desc: "Live inventory updates, sales analytics, stock alerts",
    color: "from-cyan-500 to-cyan-600",
    glow: "shadow-cyan-500/30",
  },
  {
    icon: LayoutDashboard,
    label: "Admin",
    desc: "Full platform control, user management, system health",
    color: "from-green-500 to-green-600",
    glow: "shadow-green-500/30",
  },
];

const techStack = [
  { label: "React 19",        category: "UI Framework",  icon: FaReact,       color: "#61DAFB" },
  { label: "Vite",            category: "Build Tool",    icon: SiVite,        color: "#646CFF" },
  { label: "Tailwind CSS v4", category: "Styling",       icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Framer Motion",   category: "Animations",    icon: SiFramer,      color: "#EC4899" },
  { label: "React Router v7", category: "Routing",       icon: SiReactrouter, color: "#EF4444" },
  { label: "Axios",           category: "API Calls",     icon: SiAxios,       color: "#5A29E4" },
  { label: "Recharts",        category: "Charts",        icon: BarChart2,     color: "#F97316" },
  { label: "Lucide React",    category: "Icons",         icon: SiLucide,      color: "#ffffff" },
  { label: "Django",          category: "Backend",       icon: SiDjango,      color: "#10B981" },
  { label: "Razorpay",        category: "Payments",      icon: SiRazorpay,    color: "#3B82F6" },
  { label: "Blockchain",      category: "Web3",          icon: FaEthereum,    color: "#F59E0B" },
  { label: "MetaMask",        category: "Wallet",        icon: FaWallet,      color: "#F97316" },
];

export default function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-32 sm:w-[500px] h-32 sm:h-[500px] bg-blue-600/8 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
          >
            System Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Built to{" "}
            <span className="gradient-text">scale.</span>
          </motion.h2>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex flex-row sm:flex-row items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`glass rounded-2xl p-4 sm:p-6 border border-white/8 w-40 sm:w-52 text-center group shadow-xl ${node.glow} cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <node.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{node.label}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{node.desc}</p>
              </motion.div>

              {i < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="hidden sm:flex items-center"
                >
                  <div className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-white/10" />
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="glass rounded-2xl p-8 border border-white/8"
        >
          <h3 className="text-center text-white/40 text-xs uppercase tracking-widest mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/8 hover:border-purple-500/30 transition-colors cursor-default"
              >
                <tech.icon style={{ color: tech.color }} className="w-7 h-7 text-[28px]" />
                <span className="text-white font-semibold text-sm text-center">{tech.label}</span>
                <span className="text-white/30 text-xs">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
