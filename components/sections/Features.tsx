"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, Brain, Zap, BarChart3, Bell, Shield, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Smart Item Scanning",
    desc: "Instant barcode + RFID scanning with zero friction. Items added to cart in milliseconds.",
    tag: "Core",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    desc: "Neural network analyzes cart contents and purchase history to suggest relevant products.",
    tag: "AI",
  },
  {
    icon: Zap,
    title: "Instant Checkout",
    desc: "Skip the queue entirely. Pay directly from the cart app. Zero waiting time.",
    tag: "UX",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    desc: "Real-time dashboards for vendors showing sales velocity, popular items, and revenue.",
    tag: "Analytics",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "Automated low-stock notifications, price change alerts, and promotional triggers.",
    tag: "Automation",
  },
  {
    icon: Shield,
    title: "Theft Prevention",
    desc: "Weight sensors + AI cross-validation detect item mismatches before checkout.",
    tag: "Security",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Native iOS and Android apps with offline capability and seamless sync.",
    tag: "Mobile",
  },
  {
    icon: Globe,
    title: "Multi-Store Support",
    desc: "One platform, unlimited stores. Centralized admin with per-store customization.",
    tag: "Scale",
  },
];

const tagColors: Record<string, string> = {
  Core: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  AI: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  UX: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Analytics: "text-green-400 bg-green-500/10 border-green-500/20",
  Automation: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Security: "text-red-400 bg-red-500/10 border-red-500/20",
  Mobile: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  Scale: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-16 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
          >
            Features & Strengths
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Everything retail{" "}
            <span className="gradient-text">needs.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Eight powerful features built in 24 hours. Each one solving a real problem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/8 group cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${tagColors[feature.tag]}`}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
