"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaReact, FaEthereum, FaWallet, FaDocker } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiVite, SiFramer, SiReactrouter, SiAxios } from "react-icons/si";
import { Cloud, Bug, FlaskConical, Cpu, BarChart2, ArrowUpRight, Globe } from "lucide-react";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/ui/Navbar";

const team = [
  {
    name: "Mustafa Pinjari",
    role: "Team Captain",
    specialty: "Backend & Blockchain",
    image: "/images/mustufa.jpg",
    objectPosition: "top",
    accent: "#a855f7",
    accentRgb: "168,85,247",
    number: "01",
    linkedin: "https://www.linkedin.com/in/mustafapinjari/",
    github: "https://github.com/MustafaPinjari",
    portfolio: "https://www.mustafapinjari.live/",
    worked: [
      { icon: SiDjango,   label: "Django",    color: "#10B981" },
      { icon: FaEthereum, label: "Blockchain", color: "#F59E0B" },
      { icon: FaWallet,   label: "MetaMask",   color: "#F97316" },
      { icon: FaReact,    label: "React",      color: "#61DAFB" },
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
    portfolio: "https://nikhilmistari.netlify.app/",
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
    image: "/images/tanmay.jpeg",
    objectPosition: "top",
    accent: "#06b6d4",
    accentRgb: "6,182,212",
    number: "03",
    linkedin: "https://www.linkedin.com/in/tanmay-bhogekar/",
    github: "https://github.com/buildsbytanmay",
    portfolio: null,
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
    image: "/images/aakash.jpeg",
    objectPosition: "top",
    accent: "#ec4899",
    accentRgb: "236,72,153",
    number: "04",
    linkedin: "https://www.linkedin.com/in/aakash-chauhan-1ab0ab280/",
    github: "https://github.com/skyision33",
    portfolio: null,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(${member.accentRgb},0.09) 0%, rgba(6,6,10,0.98) 100%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `rgba(${member.accentRgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 24px 64px rgba(${member.accentRgb},0.12), inset 0 1px 0 rgba(255,255,255,0.05)`
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
        transition: "all 0.4s ease",
      }}
    >
      {/* Top accent line */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 inset-x-0 h-px origin-left"
        style={{ background: `linear-gradient(90deg, ${member.accent}, rgba(${member.accentRgb},0.2), transparent)` }}
      />

      <div className="p-5 sm:p-6">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar with ring */}
          <div className="relative shrink-0">
            <motion.div
              animate={{
                boxShadow: hovered
                  ? `0 0 0 2px rgba(${member.accentRgb},0.6), 0 0 24px rgba(${member.accentRgb},0.2)`
                  : `0 0 0 1.5px rgba(${member.accentRgb},0.2)`,
              }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden"
              style={{ width: 72, height: 72 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={72}
                height={72}
                className="object-cover w-full h-full"
                style={{ objectPosition: member.objectPosition }}
                priority={index === 0}
              />
            </motion.div>
            {/* Number badge */}
            <div
              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-black font-mono"
              style={{
                background: `rgba(${member.accentRgb},0.15)`,
                border: `1px solid rgba(${member.accentRgb},0.4)`,
                color: member.accent,
                backdropFilter: "blur(8px)",
              }}
            >
              {member.number}
            </div>
          </div>

          {/* Name + role */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-white font-bold text-base sm:text-lg leading-tight mb-1.5 truncate"
              style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.025em" }}
            >
              {member.name}
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `rgba(${member.accentRgb},0.12)`,
                  color: member.accent,
                  border: `1px solid rgba(${member.accentRgb},0.25)`,
                }}
              >
                {member.role}
              </span>
              <span className="text-white/25 text-[11px] hidden sm:block">{member.specialty}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-4" style={{ background: `rgba(${member.accentRgb},0.08)` }} />

        {/* Tech stack row */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {member.worked.map((tech, j) => (
              <div
                key={tech.label}
                title={tech.label}
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: `rgba(${member.accentRgb},0.08)`,
                  border: `1px solid rgba(${member.accentRgb},0.18)`,
                  marginLeft: j === 0 ? 0 : "-5px",
                  zIndex: member.worked.length - j,
                  position: "relative",
                }}
              >
                <tech.icon style={{ color: tech.color, fontSize: "11px" }} />
              </div>
            ))}
          </div>
          <span className="text-white/20 text-[10px] font-mono ml-1">{member.specialty}</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <motion.a
            href={member.linkedin} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
            style={{ background: "rgba(10,102,194,0.1)", border: "1px solid rgba(10,102,194,0.25)", color: "#4d9de0" }}
          >
            <FaLinkedin className="w-3 h-3" />
            LinkedIn
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </motion.a>

          <motion.a
            href={member.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
          >
            <FaGithub className="w-3 h-3" />
            GitHub
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </motion.a>

          {member.portfolio && (
            <motion.a
              href={member.portfolio} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
              style={{
                background: `rgba(${member.accentRgb},0.1)`,
                border: `1px solid rgba(${member.accentRgb},0.3)`,
                color: member.accent,
              }}
            >
              <Globe className="w-3 h-3" />
              Portfolio
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ConnectPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main
        className="min-h-screen flex flex-col items-center px-4 sm:px-6 pb-28 pt-16 sm:pt-20 relative overflow-hidden"
        style={{ background: "#050508" }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.6,
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-[-10%] left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "rgba(168,85,247,0.06)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(59,130,246,0.06)" }} />

        <div className="relative z-10 w-full max-w-lg mx-auto">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link href="/"
              className="inline-flex items-center gap-2 text-white/25 hover:text-white/60 text-sm transition-colors duration-200 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-10 sm:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 text-purple-400/60 text-[11px] mb-5"
              style={{ background: "rgba(168,85,247,0.06)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Team Chaos · 4 Members · 2× Runner-Up
            </motion.div>

            <h1
              className="font-black text-white leading-[0.9] mb-3"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
                fontFamily: "var(--font-syne), sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              Connect{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #818cf8 50%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                with us.
              </span>
            </h1>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Open to collaborations, ideas, and conversations. Reach out to any of us directly.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-3">
            {team.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08))" }} />
            <p className="text-white/15 text-[10px] font-mono tracking-widest uppercase">
              TecDrill 2026 · Game-O-Thon 2K26 · 2× Runner-Up
            </p>
            <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.08))" }} />
          </motion.div>
        </div>
      </main>
    </>
  );
}
