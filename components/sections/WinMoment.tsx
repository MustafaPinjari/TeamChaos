"use client";
import { motion, useInView } from "framer-motion";
import { useRef, forwardRef } from "react";
import { Trophy, Brain, Shield, BarChart3, Cpu, Zap, Layers, Share2 } from "lucide-react";
import { FileTextIcon, CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  SiTypescript, SiPython, SiSolidity, SiReact, SiDjango,
  SiEthereum, SiRazorpay, SiRedis, SiPostgresql, SiOpenai,
} from "react-icons/si";

/* ─────────────────────────────────────────────
   BACKGROUND 1 — scrolling tech file marquee
───────────────────────────────────────────── */
const techFiles = [
  { name: "recommendations.py",  body: "Co-occurrence matrix + OpenAI GPT-4o-mini re-ranking with 1-hour Redis cache and graceful fallback chain." },
  { name: "blockchain.sol",      body: "SHA-256 order fingerprint stored on Ethereum Sepolia — tamper-proof proof of purchase for every order." },
  { name: "jwt_auth.py",         body: "Token blacklisting on logout, role-based routing for customer, vendor, and admin with refresh rotation." },
  { name: "dashboard.tsx",       body: "Real-time revenue charts, trending products, low-stock alerts, and top customer of the day via Recharts." },
  { name: "razorpay.py",         body: "Full checkout flow with webhook verification, payment status tracking, and idempotent order creation." },
  { name: "vendor_panel.tsx",    body: "Dedicated /vendor route with product CRUD, order management, invoice auto-generation, and analytics." },
];

function FilesBackground() {
  return (
    <div className="absolute inset-x-0 top-0 overflow-hidden px-3 pt-3"
      style={{
        height: "68%",
        maskImage: "linear-gradient(to bottom, #000 40%, transparent 100%)",
      }}>
      <div className="flex flex-col gap-2 animate-[marquee-vertical_20s_linear_infinite]">
        {[...techFiles, ...techFiles].map((f, i) => (
          <figure key={i}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.07]",
              "transform-gpu blur-[0.5px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileTextIcon className="w-3 h-3 text-white/40 shrink-0" />
              <figcaption className="text-xs font-medium text-white/70">{f.name}</figcaption>
            </div>
            <blockquote className="text-[10px] text-white/30 leading-relaxed line-clamp-2">{f.body}</blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACKGROUND 2 — animated notification list
───────────────────────────────────────────── */
const notifications = [
  { icon: "🏆", title: "2nd Runner-Up awarded",    time: "just now",  sub: "Game-O-Thon 2K26 · Zeal Institute" },
  { icon: "🥈", title: "Runner-Up awarded",         time: "1 month ago", sub: "TecDrill Deep-Hack 2026" },
  { icon: "🎮", title: "Last Signal shipped",       time: "just now",  sub: "AI ethics narrative game · React + Vite" },
  { icon: "⛓️", title: "Blockchain tx confirmed",  time: "1 month ago", sub: "Sepolia · 0x4f2a...c8b1" },
  { icon: "🤖", title: "AI personality engine live", time: "just now", sub: "Empathy · Logic · Control traits" },
  { icon: "🚀", title: "Back-to-back podiums",      time: "now",       sub: "Consistency beats everything" },
];

function NotificationsBackground() {
  return (
    <div className="absolute inset-x-0 top-0 overflow-hidden px-4 pt-4"
      style={{ height: "65%", maskImage: "linear-gradient(to bottom, #000 50%, transparent 100%)" }}>
      <AnimatedList delay={1200}>
        {notifications.map((n, i) => (
          <div key={i}
            className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.05] px-3 py-2.5 w-full backdrop-blur-sm">
            <span className="text-base shrink-0">{n.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white/80 truncate">{n.title}
                <span className="ml-2 text-[10px] font-normal text-white/30">· {n.time}</span>
              </p>
              <p className="text-[10px] text-white/35 truncate">{n.sub}</p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACKGROUND 3 — animated beam integrations
───────────────────────────────────────────── */
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div ref={ref}
      className={cn(
        "z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-lg backdrop-blur-sm",
        className
      )}>
      {children}
    </div>
  )
);
Circle.displayName = "Circle";

function BeamBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef      = useRef<HTMLDivElement>(null);
  const aiRef        = useRef<HTMLDivElement>(null);
  const ethRef       = useRef<HTMLDivElement>(null);
  const razorRef     = useRef<HTMLDivElement>(null);
  const dbRef        = useRef<HTMLDivElement>(null);
  const redisRef     = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}
      className="absolute inset-x-0 top-0 flex items-center justify-between px-8 overflow-hidden"
      style={{
        height: "70%",
        maskImage: "linear-gradient(to bottom, transparent 0%, #000 15%, #000 75%, transparent 100%)",
      }}
    >
      {/* Left — React frontend */}
      <Circle ref={userRef}>
        <SiReact className="w-4 h-4 text-white/60" />
      </Circle>

      {/* Center — AI core */}
      <Circle ref={aiRef} className="h-14 w-14">
        <SiOpenai className="w-6 h-6 text-white/70" />
      </Circle>

      {/* Right — services */}
      <div className="flex flex-col gap-3">
        <Circle ref={ethRef}><SiEthereum className="w-4 h-4 text-white/60" /></Circle>
        <Circle ref={razorRef}><SiRazorpay className="w-4 h-4 text-white/60" /></Circle>
        <Circle ref={dbRef}><SiPostgresql className="w-4 h-4 text-white/60" /></Circle>
        <Circle ref={redisRef}><SiRedis className="w-4 h-4 text-white/60" /></Circle>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={userRef} toRef={aiRef}
        pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.8)" gradientStopColor="rgba(255,255,255,0.3)" duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={ethRef}
        pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.8)" gradientStopColor="rgba(255,255,255,0.3)" duration={3.5} reverse curvature={-30} endYOffset={-20} />
      <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={razorRef}
        pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.8)" gradientStopColor="rgba(255,255,255,0.3)" duration={4} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={dbRef}
        pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.8)" gradientStopColor="rgba(255,255,255,0.3)" duration={3.2} reverse curvature={30} endYOffset={20} />
      <AnimatedBeam containerRef={containerRef} fromRef={aiRef} toRef={redisRef}
        pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.8)" gradientStopColor="rgba(255,255,255,0.3)" duration={4.5} reverse curvature={50} endYOffset={36} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   BACKGROUND 4 — stats / build timeline
───────────────────────────────────────────── */
function StatsBackground() {
  const stats = [
    { v: "24h",   l: "Build time"    },
    { v: "12k+",  l: "Lines of code" },
    { v: "8",     l: "Features"      },
    { v: "99%",   l: "Uptime"        },
  ];
  return (
    <div className="absolute inset-x-0 top-0 flex items-center justify-center p-5"
      style={{
        height: "65%",
        maskImage: "linear-gradient(to bottom, transparent 0%, #000 20%, #000 75%, transparent 100%)",
      }}>
      <div className="grid grid-cols-2 gap-2.5 w-full">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl border border-white/[0.09] bg-white/[0.05] p-3.5 text-center backdrop-blur-sm">
            <div className="text-2xl font-black text-white/90 tracking-tight leading-none mb-1"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {s.v}
            </div>
            <div className="text-[9px] text-white/35 uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STORY LINES
───────────────────────────────────────────── */
const storyLines = [
  { text: "The judges reviewed",          delay: 0    },
  { text: "over 30 projects.",            delay: 0.12 },
  { text: "Most built a CRUD app.",       delay: 0.24 },
  { text: "We built a moral battlefield.", delay: 0.36 },
  { text: "Then they called a name.",     delay: 0.48 },
  { text: "Again.",                       delay: 0.60 },
];

function StoryLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.p
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
        className="text-white/35 font-semibold leading-tight"
        style={{ fontSize: "clamp(1.1rem, 3vw, 2.2rem)", fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}
      >
        {text}
      </motion.p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BENTO FEATURES CONFIG
───────────────────────────────────────────── */
const bentoFeatures = [
  {
    Icon: FileTextIcon,
    name: "Production-grade code",
    description: "Every feature ships with tests, fallbacks, and real engineering decisions — not just a demo.",
    href: "https://github.com/MustafaPinjari/NeuroCart",
    cta: "View repo",
    className: "col-span-3 lg:col-span-1",
    background: <FilesBackground />,
  },
  {
    Icon: Zap,
    name: "Back-to-back podiums",
    description: "NeuroCart (TecDrill 2026) + Last Signal (Game-O-Thon 2K26). Two runner-up finishes in the same month.",
    href: "https://nauros.netlify.app/",
    cta: "See NeuroCart",
    className: "col-span-3 lg:col-span-2",
    background: <NotificationsBackground />,
  },
  {
    Icon: Share2,
    name: "Full-stack integrations",
    description: "React frontend talks to Django DRF, which connects to OpenAI, Ethereum Sepolia, Razorpay, PostgreSQL, and Redis.",
    href: "https://github.com/MustafaPinjari/NeuroCart",
    cta: "Explore architecture",
    className: "col-span-3 lg:col-span-2",
    background: <BeamBackground />,
  },
  {
    Icon: CalendarIcon,
    name: "2× Runner-Up · 2026",
    description: "TecDrill Deep-Hack + Game-O-Thon 2K26. Built at Sinhgad & Zeal Institute. 25 hackathons → 2 podiums.",
    href: "#",
    cta: "Our story",
    className: "col-span-3 lg:col-span-1",
    background: <StatsBackground />,
  },
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function WinMoment() {
  const badgeRef   = useRef(null);
  const badgeInView = useInView(badgeRef, { once: true, margin: "-60px" });
  const nameRef    = useRef(null);
  const nameInView  = useInView(nameRef, { once: true, margin: "-60px" });
  const awardsRef  = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: "-40px" });

  return (
    <section className="py-16 sm:py-28 px-5 sm:px-8 relative overflow-hidden dark">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.02) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Trophy badge */}
        <motion.div ref={badgeRef}
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={badgeInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.55, type: "spring", bounce: 0.4 }}
          className="mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(245,208,96,0.1) 0%, rgba(232,160,32,0.06) 100%)",
              border: "1px solid rgba(245,208,96,0.25)",
              boxShadow: "0 0 24px rgba(245,208,96,0.12), 0 1px 0 rgba(255,255,255,0.06) inset",
            }}>
            <motion.div
              animate={{ rotate: [0, -14, 14, -14, 0] }}
              transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatDelay: 6 }}
            >
              <Trophy className="w-4 h-4" style={{ color: "#f5d060" }} />
            </motion.div>
            <span className="text-sm font-semibold" style={{ color: "#f5d060", fontFamily: "var(--font-inter), sans-serif" }}>
              🥈 Back-to-Back Runner-Up
            </span>
          </div>
        </motion.div>

        {/* Story lines */}
        <div className="space-y-1.5 sm:space-y-2 mb-12 sm:mb-14">
          {storyLines.map((l) => (
            <StoryLine key={l.text} text={l.text} delay={l.delay} />
          ))}
        </div>

        {/* Big name reveal */}
        <div ref={nameRef} className="mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={nameInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tighter leading-[0.86] gradient-text"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 9.5rem)",
              fontFamily: "var(--font-syne), sans-serif",
              filter: nameInView
                ? "drop-shadow(0 0 20px rgba(168,85,247,0.9)) drop-shadow(0 0 60px rgba(168,85,247,0.5)) drop-shadow(0 0 100px rgba(59,130,246,0.3))"
                : "drop-shadow(0 0 0px transparent)",
              transition: "filter 1.8s ease 0.2s",
            }}
          >
            Team Chaos.
          </motion.h2>
        </div>

        {/* Award pills */}
        <motion.div ref={awardsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={awardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-16 sm:mb-20"
        >
          {["🥈 Runner-Up · TecDrill 2026", "🥈 2nd Runner-Up · Game-O-Thon 2K26", "🎯 Best Innovation", "⚡ Best Tech Stack"].map((a, i) => (
            <motion.span key={a}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={awardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, type: "spring", bounce: 0.35 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="px-4 py-2 rounded-full text-xs sm:text-sm cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(245,208,96,0.07) 0%, rgba(232,160,32,0.04) 100%)",
                border: "1px solid rgba(245,208,96,0.18)",
                color: "rgba(245,208,96,0.6)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {a}
            </motion.span>
          ))}
        </motion.div>

        {/* Section label */}
        <p className="text-white/18 text-[10px] uppercase tracking-[0.25em] mb-6 font-medium"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          What Made the Difference
        </p>

        {/* MagicUI BentoGrid — dark theme */}
        <BentoGrid>
          {bentoFeatures.map((f, i) => (
            <BentoCard key={i} {...f} />
          ))}
        </BentoGrid>

      </div>
    </section>
  );
}
