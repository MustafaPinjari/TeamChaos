"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const team = [
  {
    name: "Mustafa Pinjari",
    role: "Team Captain",
    description: "Backend Integration & Blockchain",
    avatar: "MP",
    initials: "MP",
    accent: "#a855f7",
    gradientFrom: "from-purple-600",
    gradientTo: "to-violet-400",
    glowColor: "rgba(168,85,247,0.35)",
    borderGlow: "rgba(168,85,247,0.6)",
    number: "01",
  },
  {
    name: "Nikhil Mistari",
    role: "Full Stack Developer",
    description: "Frontend-Backend Integration & AI/ML",
    avatar: "NM",
    initials: "NM",
    accent: "#3b82f6",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-400",
    glowColor: "rgba(59,130,246,0.35)",
    borderGlow: "rgba(59,130,246,0.6)",
    number: "02",
  },
  {
    name: "Tanmay Bhogekar",
    role: "DevOps Engineer",
    description: "DevOps & Cloud Services",
    avatar: "TB",
    initials: "TB",
    accent: "#06b6d4",
    gradientFrom: "from-cyan-600",
    gradientTo: "to-teal-400",
    glowColor: "rgba(6,182,212,0.35)",
    borderGlow: "rgba(6,182,212,0.6)",
    number: "03",
  },
  {
    name: "Aakash Chauhan",
    role: "R&D Engineer",
    description: "R&D, Debugging & STQA",
    avatar: "AC",
    initials: "AC",
    accent: "#ec4899",
    gradientFrom: "from-pink-600",
    gradientTo: "to-purple-400",
    glowColor: "rgba(236,72,153,0.35)",
    borderGlow: "rgba(236,72,153,0.6)",
    number: "04",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // 3D tilt via motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-default"
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute -inset-[1px] rounded-3xl z-0"
          animate={
            hovered
              ? {
                  background: [
                    `conic-gradient(from 0deg, ${member.borderGlow}, transparent, ${member.borderGlow})`,
                    `conic-gradient(from 360deg, ${member.borderGlow}, transparent, ${member.borderGlow})`,
                  ],
                }
              : { background: "transparent" }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Card body */}
        <motion.div
          animate={hovered ? { y: -8 } : { y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 rounded-3xl overflow-hidden"
          style={{
            background: "rgba(10,10,15,0.85)",
            backdropFilter: "blur(24px)",
            border: hovered ? `1px solid ${member.borderGlow}` : "1px solid rgba(255,255,255,0.07)",
            boxShadow: hovered
              ? `0 30px 80px ${member.glowColor}, 0 0 0 1px ${member.borderGlow}`
              : "0 8px 32px rgba(0,0,0,0.4)",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Portrait image area */}
          <div className="relative h-72 overflow-hidden">
            {/* Gradient background as portrait placeholder */}
            <motion.div
              animate={hovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo}`}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Large initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                animate={hovered ? { scale: 1.1, opacity: 0.15 } : { scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
                className="text-[120px] font-black text-white select-none leading-none"
              >
                {member.initials}
              </motion.span>
            </div>

            {/* Centered avatar circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={hovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                  border: `2px solid rgba(255,255,255,0.2)`,
                  boxShadow: `0 0 40px ${member.glowColor}`,
                }}
              >
                {member.initials}
              </motion.div>
            </div>

            {/* Number badge */}
            <div
              className="absolute top-4 left-4 text-xs font-mono font-bold px-2 py-1 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                color: member.accent,
                border: `1px solid ${member.accent}40`,
              }}
            >
              {member.number}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
          </div>

          {/* Card content */}
          <div className="px-6 pb-6 pt-4">
            <h3 className="text-xl font-black text-white tracking-tight mb-1">{member.name}</h3>

            <div
              className="text-sm font-semibold mb-3"
              style={{ color: member.accent }}
            >
              {member.role}
            </div>

            <p className="text-white/40 text-sm leading-relaxed">{member.description}</p>

            {/* Hover reveal bar */}
            <motion.div
              animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-5 h-[1px] origin-left rounded-full"
              style={{ background: `linear-gradient(90deg, ${member.accent}, transparent)` }}
            />

            <motion.div
              animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-4 flex items-center gap-2"
            >
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: `${member.accent}18`,
                  color: member.accent,
                  border: `1px solid ${member.accent}30`,
                }}
              >
                Team Chaos
              </span>
              <span className="text-xs text-white/25">· NeuroCart</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Under-card glow */}
        <motion.div
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl pointer-events-none"
          style={{ background: member.glowColor }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function TeamChaos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden" style={{ background: "#000" }}>

      {/* Top fade from site bg */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none z-10" />

      {/* Purple wave glow — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.25) 0%, rgba(109,40,217,0.12) 50%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px]"
          style={{ background: "rgba(168,85,247,0.15)" }}
        />
      </div>

      {/* Ambient side glows */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(168,85,247,0.06)" }} />
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(59,130,246,0.06)" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 text-purple-400/70 text-sm mb-6"
            style={{ background: "rgba(168,85,247,0.06)", backdropFilter: "blur(12px)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            The People Behind NeuroCart
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
          >
            Meet{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team Chaos.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Four engineers. One vision. Zero compromises.
            Built NeuroCart in 48 hours and took home the win.
          </motion.p>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 mx-auto w-24 h-[1px] origin-center"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-white/15 text-sm font-mono tracking-widest uppercase">
            Hackathon Winners · 2025
          </p>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />
    </section>
  );
}
