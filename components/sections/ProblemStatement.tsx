"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Brain, Zap, BarChart3, Shield, Wifi } from "lucide-react";

const problems = [
  { icon: ShoppingCart, title: "Inefficient Checkout",   desc: "Long queues waste customer time and reduce store throughput.", num: "01", accent: "#a855f7" },
  { icon: Brain,        title: "No Personalization",     desc: "Stores lack real-time AI to suggest relevant products.", num: "02", accent: "#3b82f6" },
  { icon: BarChart3,    title: "Poor Inventory Insight", desc: "Vendors have no live visibility into what customers pick up.", num: "03", accent: "#06b6d4" },
  { icon: Zap,          title: "Slow Billing Process",   desc: "Manual scanning is error-prone and creates buying friction.", num: "04", accent: "#f59e0b" },
  { icon: Shield,       title: "Theft & Shrinkage",      desc: "Retailers lose billions with no real-time detection.", num: "05", accent: "#ef4444" },
  { icon: Wifi,         title: "Disconnected Systems",   desc: "Customer, vendor, and admin systems operate in silos.", num: "06", accent: "#10b981" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-purple-400/70 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
          >
            The Problem
          </motion.p>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black tracking-tighter text-white leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Retail is <span className="gradient-text-warm">broken.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/35 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            We identified 6 critical pain points costing retailers and customers billions every year.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container} initial="hidden" animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {problems.map((p) => (
            <motion.div key={p.title} variants={item}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group p-6 sm:p-8 cursor-default transition-colors duration-300"
              style={{ background: "#050508" }}
            >
              <div className="flex items-start justify-between mb-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-2.5 rounded-xl border border-white/[0.06] transition-colors duration-300"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/45 group-hover:text-white/80 transition-colors duration-300" />
                </motion.div>
                <span className="text-white/10 text-xs font-mono tabular-nums group-hover:text-white/20 transition-colors">{p.num}</span>
              </div>
              <h3 className="font-bold text-white/80 text-sm sm:text-base mb-2 group-hover:text-white transition-colors duration-300">{p.title}</h3>
              <p className="text-white/30 text-xs sm:text-sm leading-relaxed group-hover:text-white/45 transition-colors duration-300">{p.desc}</p>
              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-5 h-px origin-left rounded-full"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
