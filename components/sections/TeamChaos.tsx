"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "Mustafa Pinjari",
    role: "Team Captain",
    tag: "Backend & Blockchain",
    image: "/images/Mustafa.jpg",
    accent: "#a855f7",
    rgb: "168,85,247",
    number: "01",
    objectPosition: "top",
  },
  {
    name: "Nikhil Mistari",
    role: "Full Stack Dev",
    tag: "Frontend · Backend · AI/ML",
    image: "/images/nikhil.jpeg",
    accent: "#3b82f6",
    rgb: "59,130,246",
    number: "02",
    objectPosition: "50% -10%",
  },
  {
    name: "Tanmay Bhogekar",
    role: "DevOps Engineer",
    tag: "Cloud & Infrastructure",
    image: "/images/tanmay.jpeg",
    accent: "#06b6d4",
    rgb: "6,182,212",
    number: "03",
    objectPosition: "top",
  },
  {
    name: "Aakash Chauhan",
    role: "R&D Engineer",
    tag: "Research · Debug · QA",
    image: "/images/aakash.jpeg",
    accent: "#ec4899",
    rgb: "236,72,153",
    number: "04",
    objectPosition: "top",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 28 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mouseX.set(0); mouseY.set(0); setHovered(false); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        className="relative cursor-default"
      >
        {/* Animated conic border */}
        <motion.div
          className="absolute -inset-[1.5px] rounded-[28px] z-0 pointer-events-none"
          animate={hovered ? {
            background: [
              `conic-gradient(from 0deg, rgba(${member.rgb},0.8), rgba(${member.rgb},0) 80deg, rgba(${member.rgb},0.4) 180deg, rgba(${member.rgb},0) 260deg, rgba(${member.rgb},0.8) 360deg)`,
              `conic-gradient(from 360deg, rgba(${member.rgb},0.8), rgba(${member.rgb},0) 80deg, rgba(${member.rgb},0.4) 180deg, rgba(${member.rgb},0) 260deg, rgba(${member.rgb},0.8) 360deg)`,
            ]
          } : {
            background: `conic-gradient(from 0deg, rgba(${member.rgb},0.12), rgba(${member.rgb},0.05) 180deg, rgba(${member.rgb},0.12) 360deg)`,
          }}
          transition={{ duration: 2, repeat: hovered ? Infinity : 0, ease: "linear" }}
        />

        {/* Main card */}
        <motion.div
          animate={{ y: hovered ? -12 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-[26px] overflow-hidden"
          style={{
            background: "rgba(6,6,10,0.95)",
            boxShadow: hovered
              ? `0 32px 80px rgba(${member.rgb},0.25), 0 0 0 1px rgba(${member.rgb},0.2), inset 0 1px 0 rgba(255,255,255,0.06)`
              : "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          {/* Full-bleed image */}
          <div className="relative h-[320px] sm:h-[360px] overflow-hidden">
            <motion.div
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* Multi-layer gradient */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(6,6,10,1) 0%, rgba(6,6,10,0.6) 35%, rgba(6,6,10,0.1) 65%, transparent 100%)" }} />

            {/* Accent color wash on hover */}
            <motion.div
              animate={{ opacity: hovered ? 0.18 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at 50% 100%, ${member.accent}, transparent 70%)` }}
            />

            {/* Top-left number */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black font-mono"
                style={{
                  background: `rgba(${member.rgb},0.2)`,
                  color: member.accent,
                  border: `1px solid rgba(${member.rgb},0.4)`,
                  backdropFilter: "blur(8px)",
                }}>
                {member.number}
              </div>
            </div>

            {/* Top-right — role pill slides in on hover */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `rgba(${member.rgb},0.18)`,
                color: member.accent,
                border: `1px solid rgba(${member.rgb},0.35)`,
                backdropFilter: "blur(8px)",
              }}
            >
              {member.role}
            </motion.div>

            {/* Scan line effect on hover */}
            <motion.div
              animate={{ y: hovered ? ["0%", "100%"] : "0%" }}
              transition={{ duration: 1.5, repeat: hovered ? Infinity : 0, ease: "linear" }}
              className="absolute inset-x-0 h-[2px] pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, rgba(${member.rgb},0.6), transparent)`, opacity: hovered ? 0.6 : 0 }}
            />
          </div>

          {/* Info panel */}
          <div className="px-5 pb-5 pt-4 relative">
            {/* Subtle inner glow at top of panel */}
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, rgba(${member.rgb},0.3), transparent)` }} />

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">{member.name}</h3>
              {/* Dot indicator */}
              <motion.div
                animate={{ scale: hovered ? [1, 1.4, 1] : 1, opacity: hovered ? 1 : 0.4 }}
                transition={{ duration: 1, repeat: hovered ? Infinity : 0 }}
                className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                style={{ background: member.accent, boxShadow: `0 0 8px ${member.accent}` }}
              />
            </div>

            <p className="text-xs font-semibold mb-2" style={{ color: member.accent }}>{member.role}</p>
            <p className="text-white/25 text-xs leading-relaxed">{member.tag}</p>

            {/* Animated bottom bar */}
            <motion.div
              animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-[1.5px] origin-left rounded-full"
              style={{ background: `linear-gradient(90deg, ${member.accent}, rgba(${member.rgb},0.2), transparent)` }}
            />
          </div>
        </motion.div>

        {/* Floor glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl pointer-events-none"
          style={{ background: `rgba(${member.rgb},0.45)` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function TeamChaos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050508 0%, #000 40%, #050508 100%)" }}>

      {/* Fades */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#050508] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none z-10" />

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 85%, rgba(168,85,247,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div ref={ref} className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            className="text-purple-400/60 text-xs uppercase tracking-[0.22em] mb-4 font-medium"
          >
            The People Behind the Project
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: "100%" }} animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-black tracking-tighter text-white leading-[0.9]"
                style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
              >
                Meet{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Team Chaos.
                </span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-white/25 text-sm max-w-xs leading-relaxed sm:text-right shrink-0"
            >
              Four engineers. One vision.<br />Zero compromises. 24 hours.
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-px origin-left"
            style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(59,130,246,0.3), rgba(6,182,212,0.15), transparent)" }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-24"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07))" }} />
          <p className="text-white/12 text-[10px] font-mono tracking-[0.2em] uppercase">
            Hackathon Runner-Up · 2026
          </p>
          <div className="h-px flex-1 max-w-24"
            style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.07))" }} />
        </motion.div>
      </div>
    </section>
  );
}
