"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter";

const lines = [
  { text: "25+ hackathons.",          big: true,  gradient: false },
  { text: "Lost every one.",          big: false, gradient: false },
  { text: "Read the problem statement.", big: false, gradient: false },
  { text: "Saw what others missed.",  big: false, gradient: false },
  { text: "Built it production-grade.", big: false, gradient: false },
  { text: "Then came our win.",       big: true,  gradient: true  },
  { text: "Everything changed.",      big: true,  gradient: false },
];

function Line({ line, i }: { line: typeof lines[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.75, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className={`font-black tracking-tighter leading-[0.92] ${
          line.gradient ? "gradient-text" : line.big ? "text-white" : "text-white/22"
        }`}
        style={{ fontSize: line.big ? "clamp(2rem, 6vw, 5.5rem)" : "clamp(1.2rem, 3.5vw, 3rem)" }}
      >
        {line.text}
      </motion.div>
    </div>
  );
}

export default function TurningPoint() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-5 sm:px-8 overflow-hidden relative">
      {/* Parallax side glow */}
      <motion.div
        style={{ x: bgX, background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 rounded-full pointer-events-none"
      />

      <div className="max-w-5xl mx-auto">
        <motion.p ref={ref}
          initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          className="text-purple-400/60 text-xs uppercase tracking-[0.22em] mb-10 sm:mb-12 font-medium"
        >
          The Turning Point
        </motion.p>

        <div className="space-y-2 sm:space-y-3 mb-14 sm:mb-16">
          {lines.map((l, i) => <Line key={i} line={l} i={i} />)}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="pl-5 border-l-2 border-purple-500/35 max-w-2xl"
        >
          <p className="text-white/40 text-sm sm:text-base md:text-lg leading-relaxed italic">
            "When the problem statement dropped, most teams saw a standard e-commerce CRUD app.
            We saw something different. That last line —{" "}
            <Highlighter action="underline" color="#a855f7" strokeWidth={2} animationDuration={800}>
              additional features carry added weightage
            </Highlighter>
            {" "}— was the key.
            We decided in the first 30 minutes we weren't going to build a student project."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>TC</div>
            <span className="text-white/25 text-sm">Team Chaos · Hour 0</span>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}

