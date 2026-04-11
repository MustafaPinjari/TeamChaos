"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const learnings = [
  {
    number: "01",
    title: "Scope is everything",
    desc: "We learned to ruthlessly cut features. A focused MVP beats a bloated prototype every time.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "02",
    title: "Communication wins hackathons",
    desc: "The team that communicates clearly and often moves 3x faster than the team that codes in silos.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "03",
    title: "Demo > Code",
    desc: "Judges see your demo, not your codebase. A polished 3-minute demo is worth 10 hours of refactoring.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    number: "04",
    title: "Solve a real problem",
    desc: "Every winning project we've seen solves something people actually feel. Emotion drives votes.",
    color: "from-green-500 to-green-600",
  },
  {
    number: "05",
    title: "Sleep is a feature",
    desc: "A rested mind at hour 36 outperforms an exhausted one at hour 48. Protect your sleep.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: "06",
    title: "Failure is the curriculum",
    desc: "25 losses gave us the exact knowledge we needed to win. Every rejection was a lesson in disguise.",
    color: "from-pink-500 to-red-500",
  },
];

export default function Learnings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
          >
            What We Learned
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            25 losses.{" "}
            <span className="gradient-text">6 lessons.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {learnings.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="flex gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.2, type: "spring" }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg shrink-0 mt-5`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-6 border border-white/8 group-hover:border-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold`}>
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
