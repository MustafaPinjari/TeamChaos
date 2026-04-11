"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Understand the User", desc: "Deep empathy mapping for shoppers, vendors, and admins." },
  { num: "02", title: "Design for Clarity", desc: "Every interaction stripped to its essential form. No noise." },
  { num: "03", title: "Build with AI-First", desc: "NeuroCart's intelligence layer powers every recommendation." },
  { num: "04", title: "Iterate Relentlessly", desc: "12 prototypes in 48 hours. Ship, test, refine, repeat." },
];

export default function OurApproach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
            >
              Our Approach
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
            >
              Clarity over{" "}
              <span className="gradient-text">complexity.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-lg mb-12 leading-relaxed"
            >
              We didn't try to build everything. We built the right things, exceptionally well.
              Every decision was driven by one question: does this make the experience better?
            </motion.p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-xs font-mono text-purple-400/60 mt-1 w-8 shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-white/8">
              <div className="text-center mb-8">
                <span className="text-white/30 text-xs uppercase tracking-widest">NeuroCart Flow</span>
              </div>

              {/* Flow nodes */}
              <div className="flex flex-col items-center gap-0">
                {[
                  { label: "Customer Scans Item", color: "from-purple-500 to-purple-600" },
                  { label: "AI Processes & Suggests", color: "from-blue-500 to-blue-600" },
                  { label: "Cart Updates in Real-time", color: "from-cyan-500 to-cyan-600" },
                  { label: "Instant Checkout", color: "from-green-500 to-green-600" },
                ].map((node, i) => (
                  <div key={node.label} className="flex flex-col items-center w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                      className={`w-full max-w-xs px-6 py-3 rounded-xl bg-gradient-to-r ${node.color} text-white text-sm font-semibold text-center shadow-lg`}
                    >
                      {node.label}
                    </motion.div>
                    {i < 3 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.65 + i * 0.15 }}
                        className="w-[2px] h-8 bg-gradient-to-b from-white/20 to-white/5 origin-top"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
