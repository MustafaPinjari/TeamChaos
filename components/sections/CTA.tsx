"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitFork, ExternalLink } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
          Live & Deployed
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
        >
          Ready to explore{" "}
          <span className="gradient-text">TeamChaos?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-base sm:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          See the full system in action. Explore the codebase. 
          Understand how we turned 25 failures into one win.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://nauros.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 glow-purple"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
            <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="https://github.com/Nick7020/NeuroCart"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/15 text-white font-semibold hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            <GitFork className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { value: "24hrs", label: "Build Time" },
            { value: "12k+", label: "Lines of Code" },
            { value: "99%", label: "Uptime" },
            { value: "< 50ms", label: "API Response" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-white/30 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
