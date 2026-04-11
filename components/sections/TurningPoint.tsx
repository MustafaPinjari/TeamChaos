"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  { text: "I participated in 25+ hackathons.", size: "text-2xl sm:text-3xl md:text-5xl", weight: "font-black", color: "text-white" },
  { text: "Lost every single one.", size: "text-xl sm:text-2xl md:text-4xl", weight: "font-bold", color: "text-white/60" },
  { text: "Each loss taught us something.", size: "text-lg sm:text-xl md:text-3xl", weight: "font-semibold", color: "text-white/50" },
  { text: "We learned to build faster.", size: "text-lg sm:text-xl md:text-3xl", weight: "font-semibold", color: "text-white/50" },
  { text: "We learned to think clearer.", size: "text-lg sm:text-xl md:text-3xl", weight: "font-semibold", color: "text-white/50" },
  { text: "We learned to fail better.", size: "text-lg sm:text-xl md:text-3xl", weight: "font-semibold", color: "text-white/50" },
  { text: "Then came our win.", size: "text-2xl sm:text-3xl md:text-5xl", weight: "font-black", color: "gradient-text" },
  { text: "And everything changed.", size: "text-3xl sm:text-4xl md:text-6xl", weight: "font-black", color: "text-white" },
];

function StoryLine({ line, index }: { line: typeof lines[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${line.size} ${line.weight} ${line.color} leading-tight`}
    >
      {line.text}
    </motion.div>
  );
}

export default function TurningPoint() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-[400px] h-48 sm:h-[600px] bg-purple-600/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm mb-16"
          >
            The Turning Point
          </motion.div>
        </div>

        <div className="space-y-8">
          {lines.map((line, i) => (
            <StoryLine key={i} line={line} index={i} />
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-24">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-5 sm:p-8 border border-purple-500/20 relative"
          >
            <div className="absolute -top-4 left-8 text-6xl text-purple-500/30 font-serif leading-none">"</div>
            <p className="text-base sm:text-xl md:text-2xl text-white/80 leading-relaxed font-medium italic">
              We didn't just build a product. We built proof that persistence beats talent, 
              and that every failure is just a prototype for success.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                TC
              </div>
              <span className="text-white/40 text-sm">Team Chaos</span>
            </div>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
