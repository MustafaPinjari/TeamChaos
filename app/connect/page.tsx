"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaReact, FaEthereum, FaWallet, FaDocker } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiVite, SiFramer, SiReactrouter, SiAxios } from "react-icons/si";
import { Cloud, Bug, FlaskConical, Cpu, BarChart2, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Mustafa Pinjari",
    role: "Team Captain",
    specialty: "Backend & Blockchain",
    image: "/images/mustufa.jpeg",
    objectPosition: "top",
    accent: "#a855f7",
    accentRgb: "168,85,247",
    number: "01",
    linkedin: "https://www.linkedin.com/in/mustafapinjari/",
    github: "https://github.com/MustafaPinjari",
    worked: [
      { icon: SiDjango,   label: "Django",     color: "#10B981" },
      { icon: FaEthereum, label: "Blockchain",  color: "#F59E0B" },
      { icon: FaWallet,   label: "MetaMask",    color: "#F97316" },
      { icon: FaReact,    label: "React",       color: "#61DAFB" },
    ],
  },
  {
    name: "Nikhil Mistari",
    role: "Full Stack Developer",
    specialty: "Frontend, Backend & AI/ML",
    image: "/images/nikhil.jpeg",
    objectPosition: "50% -10%",
    accent: "#3b82f6",
    accentRgb: "59,130,246",
    number: "02",
    linkedin: "https://www.linkedin.com/in/nikhil-mistari-9018a125a/",
    github: "https://github.com/Nick7020",
    worked: [
      { icon: FaReact,       label: "React",    color: "#61DAFB" },
      { icon: SiAxios,       label: "Axios",    color: "#5A29E4" },
      { icon: Cpu,           label: "AI/ML",    color: "#8B5CF6" },
      { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    name: "Tanmay Bhogekar",
    role: "DevOps Engineer",
    specialty: "Cloud & Infrastructure",
    image: "/images/tanmay.png",
    objectPosition: "top",
    accent: "#06b6d4",
    accentRgb: "6,182,212",
    number: "03",
    linkedin: "https://www.linkedin.com/in/tanmay-bhogekar/",
    github: "https://github.com/buildsbytanmay",
    worked: [
      { icon: FaDocker,  label: "Docker",  color: "#2496ED" },
      { icon: Cloud,     label: "Cloud",   color: "#38BDF8" },
      { icon: SiVite,    label: "Vite",    color: "#646CFF" },
      { icon: BarChart2, label: "Metrics", color: "#F97316" },
    ],
  },
  {
    name: "Aakash Chauhan",
    role: "R&D Engineer",
    specialty: "Research, Debug & QA",
    image: "/images/aakash.png",
    objectPosition: "top",
    accent: "#ec4899",
    accentRgb: "236,72,153",
    number: "04",
    linkedin: "https://www.linkedin.com/in/aakash-chauhan-1ab0ab280/",
    github: "https://github.com/skyisme33",
    worked: [
      { icon: Bug,           label: "Debugging", color: "#EF4444" },
      { icon: FlaskConical,  label: "R&D",       color: "#A78BFA" },
      { icon: SiFramer,      label: "Framer",    color: "#EC4899" },
      { icon: SiReactrouter, label: "Router",    color: "#EF4444" },
    ],
  },
];

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 25 });

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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {/* Glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-px rounded-2xl sm:rounded-3xl blur-xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 50%, rgba(${member.accentRgb},0.2), transparent 70%)` }}
        />

        {/* Card */}
        <div
          className="relative flex items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl p-3 sm:p-4"
          style={{
            background: hovered ? `linear-gradient(135deg, rgba(${member.accentRgb},0.07), rgba(255,255,255,0.02))` : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? `rgba(${member.accentRgb},0.35)` : "rgba(255,255,255,0.08)"}`,
            boxShadow: hovered ? `0 16px 48px rgba(${member.accentRgb},0.12), inset 0 1px 0 rgba(255,255,255,0.05)` : "0 4px 20px rgba(0,0,0,0.25)",
            transition: "background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Left accent bar */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.25, scaleY: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full origin-center"
            style={{ background: `linear-gradient(to bottom, transparent, ${member.accent}, transparent)` }}
          />

          {/* Avatar */}
          <div className="pl-2 shrink-0">
            <motion.div
              animate={{
                boxShadow: hovered
                  ? `0 0 0 2px rgba(${member.accentRgb},0.5), 0 0 20px rgba(${member.accentRgb},0.25)`
                  : `0 0 0 1.5px rgba(${member.accentRgb},0.2)`,
              }}
              transition={{ duration: 0.4 }}
              className="rounded-full"
              style={{ padding: "2px", background: `linear-gradient(135deg, rgba(${member.accentRgb},0.3), transparent)` }}
            >
              <div className="relative rounded-full overflow-hidden" style={{ width: "68px", height: "68px" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.objectPosition }}
                  sizes="68px"
                  priority={index === 0}
                />
                <motion.div
                  animate={{ opacity: hovered ? 0.12 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                  style={{ background: member.accent }}
                />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Name + badge */}
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="min-w-0">
                <h2 className="text-white font-bold text-sm sm:text-base leading-tight truncate">{member.name}</h2>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  <span
                    className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: `rgba(${member.accentRgb},0.12)`, color: member.accent, border: `1px solid rgba(${member.accentRgb},0.2)` }}
                  >
                    {member.role}
                  </span>
                  <span className="text-white/25 text-[10px] hidden sm:inline truncate">{member.specialty}</span>
                </div>
              </div>
              {/* Number */}
              <span
                className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0"
                style={{ background: `rgba(${member.accentRgb},0.12)`, color: member.accent, border: `1px solid rgba(${member.accentRgb},0.2)` }}
              >
                {member.number}
              </span>
            </div>

            {/* Bottom: tech + social */}
            <div className="flex items-center justify-between gap-2">
              {/* Tech circles */}
              <div className="flex items-center">
                {member.worked.map((tech, j) => (
                  <motion.div
                    key={tech.label}
                    title={tech.label}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    className="rounded-full flex items-center justify-center cursor-default"
                    style={{
                      width: "28px", height: "28px",
                      background: `rgba(${member.accentRgb},0.08)`,
                      border: `1px solid rgba(${member.accentRgb},0.2)`,
                      marginLeft: j === 0 ? 0 : "-7px",
                      zIndex: member.worked.length - j,
                      position: "relative",
                    }}
                  >
                    <tech.icon style={{ color: tech.color, fontSize: "11px" }} />
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-1.5 shrink-0">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-colors duration-200"
                  style={{
                    background: hovered ? "rgba(10,102,194,0.15)" : "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(10,102,194,0.3)",
                    color: "#0A66C2",
                  }}
                >
                  <FaLinkedin style={{ fontSize: "12px" }} />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                </motion.a>
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-colors duration-200"
                  style={{
                    background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <FaGithub style={{ fontSize: "12px" }} />
                  <span className="hidden sm:inline">GitHub</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ConnectPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: "#030712",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-[500px] h-48 sm:h-64 md:h-[500px] bg-purple-600/8 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-40 sm:w-56 md:w-[400px] h-40 sm:h-56 md:h-[400px] bg-blue-600/8 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10 sm:mb-14">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm transition-colors duration-200 group">
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-10 sm:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 text-purple-400/60 text-xs mb-4 sm:mb-5"
            style={{ background: "rgba(168,85,247,0.06)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Team Chaos · 4 Members
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-3 sm:mb-4">
            Connect{" "}
            <span className="gradient-text">with us.</span>
          </h1>
          <p className="text-white/35 text-sm sm:text-base leading-relaxed max-w-md">
            We&apos;re always open to new ideas, collaborations, and conversations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/15 text-xs mt-10 sm:mt-12 font-mono tracking-widest uppercase"
        >
          Hackathon Runner-Up · 2025
        </motion.p>
      </div>
    </main>
  );
}
