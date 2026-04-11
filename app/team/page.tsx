"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaReact, FaEthereum, FaWallet, FaDocker } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiVite, SiFramer, SiReactrouter, SiAxios } from "react-icons/si";
import { Cloud, Bug, FlaskConical, Cpu, BarChart2 } from "lucide-react";

const team = [
  {
    slug: "mustafa-pinjari",
    name: "Mustafa Pinjari",
    role: "Team Captain / Backend Dev",
    image: "/images/mustufa.jpg",
    objectPosition: "top",
    accent: "#a855f7",
    accentRgb: "168,85,247",
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
    slug: "nikhil-mistari",
    name: "Nikhil Mistari",
    role: "Full Stack Developer",
    image: "/images/nikhil.jpeg",
    objectPosition: "50% -10%",
    accent: "#3b82f6",
    accentRgb: "59,130,246",
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
    slug: "tanmay-bhogekar",
    name: "Tanmay Bhogekar",
    role: "DevOps Engineer",
    image: "/images/tanmay.jpeg",
    objectPosition: "top",
    accent: "#06b6d4",
    accentRgb: "6,182,212",
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
    slug: "aakash-chauhan",
    name: "Aakash Chauhan",
    role: "R&D Engineer",
    image: "/images/aakash.jpeg",
    objectPosition: "top",
    accent: "#ec4899",
    accentRgb: "236,72,153",
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

export default function TeamPage() {
  return (
    <main
      className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center"
      style={{
        background: "#0a0a0a",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="w-full max-w-2xl mx-auto">
        {/* Back */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link href="/" className="text-white/30 hover:text-white text-sm transition-colors flex items-center gap-2">
            ← Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-3">Team Chaos</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The people behind{" "}
            <span style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the build.
            </span>
          </h1>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Card: avatar left + content right */}
              <div
                className="flex items-center gap-4 rounded-2xl border p-3 sm:p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: `rgba(${member.accentRgb},0.2)`,
                  boxShadow: `0 2px 20px rgba(${member.accentRgb},0.06)`,
                }}
              >
                {/* Avatar */}
                <div
                  className="rounded-full overflow-hidden shrink-0 border-2"
                  style={{
                    width: "72px",
                    height: "72px",
                    borderColor: `rgba(${member.accentRgb},0.5)`,
                    boxShadow: `0 0 20px rgba(${member.accentRgb},0.2)`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition }}
                      sizes="72px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-bold text-sm sm:text-base leading-tight truncate">{member.name}</h2>
                  <p className="text-xs font-medium mt-0.5 mb-2" style={{ color: member.accent }}>{member.role}</p>

                  <div className="flex items-center justify-between gap-2">
                    {/* Tech circles */}
                    <div className="flex items-center">
                      {member.worked.map((tech, j) => (
                        <div
                          key={tech.label}
                          title={tech.label}
                          className="rounded-full border border-white/10 flex items-center justify-center"
                          style={{
                            width: "28px", height: "28px",
                            background: "rgba(255,255,255,0.06)",
                            marginLeft: j === 0 ? 0 : "-8px",
                            zIndex: member.worked.length - j,
                            position: "relative",
                          }}
                        >
                          <tech.icon style={{ color: tech.color, fontSize: "12px" }} />
                        </div>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                        className="rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ width: "30px", height: "30px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#0A66C2" }}>
                        <FaLinkedin style={{ fontSize: "14px" }} />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                        className="rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ width: "30px", height: "30px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                        <FaGithub style={{ fontSize: "14px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
