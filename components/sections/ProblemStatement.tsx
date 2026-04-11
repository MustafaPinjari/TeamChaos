"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Brain, Zap, BarChart3, Shield, Wifi } from "lucide-react";

const problems = [
  {
    icon: ShoppingCart,
    title: "Inefficient Checkout",
    desc: "Traditional retail checkout creates long queues, wasting customer time and reducing store throughput.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
  },
  {
    icon: Brain,
    title: "No Personalization",
    desc: "Stores lack real-time AI to suggest relevant products based on what's already in the cart.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
  },
  {
    icon: BarChart3,
    title: "Poor Inventory Insight",
    desc: "Vendors have no live visibility into what customers are picking up or putting back.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Slow Billing Process",
    desc: "Manual scanning at checkout is error-prone and creates friction in the buying experience.",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20",
  },
  {
    icon: Shield,
    title: "Theft & Shrinkage",
    desc: "Retailers lose billions annually to shoplifting with no real-time detection mechanism.",
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/20",
  },
  {
    icon: Wifi,
    title: "Disconnected Systems",
    desc: "Customer, vendor, and admin systems operate in silos with no unified data layer.",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
  },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
          >
            The Problem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Retail is{" "}
            <span className="gradient-text-warm">broken.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            We identified 6 critical pain points that cost retailers and customers billions every year.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass rounded-2xl p-6 border ${p.border} bg-gradient-to-br ${p.color} group cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <p.icon className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
