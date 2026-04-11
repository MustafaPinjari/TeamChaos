"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GitFork, Share2, Code2 } from "lucide-react";

const team = [
  {
    name: "Arjun Sharma",
    role: "Full-Stack Lead",
    contribution: "System architecture, backend APIs, real-time sync",
    avatar: "AS",
    gradient: "from-purple-500 to-blue-500",
    hackathons: "25+",
  },
  {
    name: "Priya Patel",
    role: "AI/ML Engineer",
    contribution: "Recommendation engine, NLP product matching, model training",
    avatar: "PP",
    gradient: "from-blue-500 to-cyan-500",
    hackathons: "18+",
  },
  {
    name: "Rahul Verma",
    role: "Frontend Architect",
    contribution: "UI/UX design, React Native app, customer-facing interface",
    avatar: "RV",
    gradient: "from-cyan-500 to-green-500",
    hackathons: "22+",
  },
  {
    name: "Sneha Gupta",
    role: "Product & DevOps",
    contribution: "Product strategy, deployment pipeline, vendor dashboard",
    avatar: "SG",
    gradient: "from-pink-500 to-purple-500",
    hackathons: "15+",
  },
];

function TiltCard({ member, index, inView }: { member: typeof team[0]; index: number; inView: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease",
      }}
      className="glass rounded-2xl p-6 border border-white/8 group cursor-default"
    >
      {/* Avatar */}
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
        >
          {member.avatar}
        </div>
        <div className="text-right">
          <div className="text-xs text-white/30 uppercase tracking-widest">Hackathons</div>
          <div className="text-xl font-black gradient-text">{member.hackathons}</div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
      <div className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
        {member.role}
      </div>
      <p className="text-white/40 text-sm leading-relaxed mb-6">{member.contribution}</p>

      {/* Social links */}
      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[GitFork, Share2, Code2].map((Icon, i) => (
          <button
            key={i}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Icon className="w-3.5 h-3.5 text-white/50" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function TeamChaos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-32 px-6 relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-sm mb-6"
          >
            The People
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Meet{" "}
            <span className="gradient-text">Team Chaos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Four builders who refused to quit. Combined 80+ hackathon attempts before this win.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TiltCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
