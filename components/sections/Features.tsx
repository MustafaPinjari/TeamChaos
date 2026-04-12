"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Scan, Brain, Zap, BarChart3, Bell, Shield, Smartphone, Globe } from "lucide-react";
import { SiTypescript, SiPython, SiSolidity, SiReact, SiDjango, SiEthereum, SiRazorpay, SiRedis, SiPostgresql } from "react-icons/si";

const techBadges = [
  { Icon: SiReact,      label: "React",       color: "#06b6d4" },
  { Icon: SiTypescript, label: "TypeScript",  color: "#3b82f6" },
  { Icon: SiDjango,     label: "Django",      color: "#10b981" },
  { Icon: SiPython,     label: "Python",      color: "#10b981" },
  { Icon: SiEthereum,   label: "Ethereum",    color: "#818cf8" },
  { Icon: SiSolidity,   label: "Solidity",    color: "#a855f7" },
  { Icon: SiRazorpay,   label: "Razorpay",    color: "#06b6d4" },
  { Icon: SiPostgresql, label: "PostgreSQL",  color: "#3b82f6" },
  { Icon: SiRedis,      label: "Redis",       color: "#ef4444" },
];

const features = [
  { icon: Scan,       title: "JWT Auth & Roles",           desc: "Single login routes customers, vendors, and admins. Token blacklisting on logout.", tag: "Auth",       accent: "#a855f7" },
  { icon: Brain,      title: "AI Recommendations",         desc: "Co-occurrence, personalised, trending, and optional OpenAI GPT-4o-mini re-ranking.", tag: "AI",         accent: "#3b82f6" },
  { icon: Zap,        title: "Razorpay Payments",          desc: "Full checkout flow with payment status tracking and webhook support.",               tag: "Payments",   accent: "#06b6d4" },
  { icon: BarChart3,  title: "Admin Dashboard",            desc: "Real-time revenue, trending products, low-stock alerts, and top customer of the day.", tag: "Analytics",  accent: "#10b981" },
  { icon: Bell,       title: "Order Lifecycle",            desc: "Placed → Accepted → Processed → Dispatched → Delivered, enforced server-side.",      tag: "Orders",     accent: "#f59e0b" },
  { icon: Shield,     title: "Blockchain Verification",    desc: "SHA-256 order fingerprint stored on Ethereum Sepolia — tamper-proof proof of purchase.", tag: "Web3",    accent: "#ef4444" },
  { icon: Smartphone, title: "Vendor Panel",               desc: "Dedicated /vendor route with product CRUD, order management, and customer insights.", tag: "Vendor",     accent: "#ec4899" },
  { icon: Globe,      title: "Report Exports",             desc: "Admin generates payment reports for any date range, downloadable as Excel or PDF.",   tag: "Reports",    accent: "#8b5cf6" },
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
      className="relative rounded-2xl p-5 sm:p-6 cursor-default overflow-hidden border transition-all duration-400"
      style={{
        background: hovered ? `rgba(${f.accent.replace('#','').match(/.{2}/g)!.map(x=>parseInt(x,16)).join(',')},0.06)` : "rgba(255,255,255,0.02)",
        borderColor: hovered ? `${f.accent}40` : "rgba(255,255,255,0.06)",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${f.accent}20` : "0 1px 0 rgba(255,255,255,0.03) inset",
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
              Everything NeuroCart <span className="gradient-text">delivers.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/35 text-sm sm:text-base max-w-lg mb-8"
          >
            Eight production-grade features built in 24 hours. Each one solving a real requirement.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {techBadges.map(({ Icon, label, color }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.42 + i * 0.04 }}
                whileHover={{ y: -3, scale: 1.08 }}
                title={label}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium cursor-default transition-all duration-200"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}22`,
                  color,
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => <FeatureCard key={f.title} f={f} i={i} />)}
        </div>
      </div>
    </section>
  );
}

