"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Scan, Brain, Zap, BarChart3, Bell, Shield, Smartphone, Globe } from "lucide-react";

const features = [
  { icon: Scan,       title: "Smart Scanning",      desc: "Instant barcode + RFID scanning. Items added in milliseconds.", tag: "Core",       accent: "#a855f7" },
  { icon: Brain,      title: "AI Recommendations",  desc: "Neural network suggests products based on cart contents.",       tag: "AI",         accent: "#3b82f6" },
  { icon: Zap,        title: "Instant Checkout",    desc: "Skip the queue. Pay from the cart app. Zero wait time.",         tag: "UX",         accent: "#06b6d4" },
  { icon: BarChart3,  title: "Live Analytics",      desc: "Real-time vendor dashboards — sales, velocity, revenue.",        tag: "Analytics",  accent: "#10b981" },
  { icon: Bell,       title: "Smart Alerts",        desc: "Low-stock notifications, price alerts, promo triggers.",         tag: "Automation", accent: "#f59e0b" },
  { icon: Shield,     title: "Theft Prevention",    desc: "Weight sensors + AI detect item mismatches before checkout.",    tag: "Security",   accent: "#ef4444" },
  { icon: Smartphone, title: "Mobile-First",        desc: "Native iOS & Android with offline capability and sync.",         tag: "Mobile",     accent: "#ec4899" },
  { icon: Globe,      title: "Multi-Store",         desc: "One platform, unlimited stores. Centralized admin.",             tag: "Scale",      accent: "#8b5cf6" },
];

function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl p-5 sm:p-6 cursor-default overflow-hidden border transition-colors duration-400"
      style={{
        background: hovered ? `rgba(${f.accent.replace('#','').match(/.{2}/g)!.map(x=>parseInt(x,16)).join(',')},0.06)` : "rgba(255,255,255,0.025)",
        borderColor: hovered ? `${f.accent}35` : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Glow spot */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl pointer-events-none"
        style={{ background: `${f.accent}20` }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-2.5 rounded-xl border border-white/[0.06]"
            style={{ background: hovered ? `${f.accent}18` : "rgba(255,255,255,0.04)" }}
          >
            <f.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
              style={{ color: hovered ? f.accent : "rgba(255,255,255,0.5)" }} />
          </motion.div>
          <span className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
            style={{ color: f.accent, background: `${f.accent}12`, borderColor: `${f.accent}30` }}>
            {f.tag}
          </span>
        </div>
        <h3 className="font-bold text-sm sm:text-base mb-1.5 transition-colors duration-300"
          style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.8)" }}>
          {f.title}
        </h3>
        <p className="text-white/35 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-blue-400/70 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
          >
            Features & Strengths
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-black tracking-tighter text-white leading-[0.9] mb-4"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Everything retail <span className="gradient-text">needs.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/35 text-sm sm:text-base max-w-lg"
          >
            Eight powerful features built in 24 hours. Each one solving a real problem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => <FeatureCard key={f.title} f={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}
