"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BADGE = "🥈 Hackathon Runner-Up · Team Chaos";

/* ── Animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil((to - start) / 8);
        setCount(start >= to ? to : start);
        if (start < to) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Particle canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!; let raf: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.3 + 0.05,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(168,85,247,${0.06*(1-d/110)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
}

/* ── Word-by-word reveal ── */
function SplitReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const stats = [
    { value: 25, suffix: "+", label: "Hackathons" },
    { value: 2,  suffix: "nd", label: "Place Finish" },
    { value: 24, suffix: "h",  label: "Build Time" },
    { value: 4,  suffix: "",   label: "Team Members" },
  ];

  return (
    <section ref={ref} id="story" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <ParticleCanvas />

      {/* Layered radial glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(168,85,247,0.1) 0%, rgba(59,130,246,0.04) 50%, transparent 75%)" }} />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-purple-300 border border-purple-500/25 mb-8 sm:mb-10 tracking-wide"
          style={{ background: "rgba(168,85,247,0.07)", backdropFilter: "blur(12px)" }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"
          />
          {BADGE}
        </motion.div>

        {/* Headline — word split */}
        <div className="mb-3 overflow-hidden">
          <h1 className="font-black tracking-tighter text-white leading-[0.9]"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 7rem)" }}>
            <SplitReveal text="From 25+ Hackathons" delay={0.2} />
          </h1>
        </div>
        <div className="mb-8 sm:mb-10 overflow-hidden">
          <h1 className="font-black tracking-tighter leading-[0.9] gradient-text"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 7rem)" }}>
            <SplitReveal text="to Our First Win." delay={0.45} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-white/40 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          The story of how Team Chaos built an AI-powered smart cart system through
          persistence, sleepless nights, and relentless iteration — in just 24 hours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16"
        >
          <motion.a href="#cta" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="btn-shine group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white w-full sm:w-auto justify-center"
            style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 30px rgba(168,85,247,0.25)" }}>
            View Project
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </motion.a>
          <motion.a href="#team" whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white/55 border border-white/10 hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center">
            Meet the Team
          </motion.a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="border-t border-white/[0.06] pt-8 sm:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="text-center cursor-default"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text mb-1 tabular-nums">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/25 text-[10px] sm:text-xs uppercase tracking-[0.15em]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
          className="text-white/30 text-[9px] uppercase tracking-[0.25em]"
        >scroll</motion.span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-purple-500/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
