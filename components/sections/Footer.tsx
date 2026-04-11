"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

const socials = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/Nick7020/NeuroCart" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaTwitter,  label: "Twitter",  href: "#" },
  { icon: Mail,       label: "Email",    href: "mailto:team@teamchaos.dev" },
];

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 pb-8 sm:pb-10 pt-0">
      <hr className="hr-gradient mb-8 sm:mb-10" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <motion.a href="/"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
            style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>TC</div>
          <span className="font-bold text-white/70 text-sm group-hover:text-white transition-colors">Team Chaos</span>
        </motion.a>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/30"
        >
          {["Story", "Team", "Architecture", "Features", "Connect"].map((item) => (
            <a key={item} href={item === "Connect" ? "/connect" : `#${item.toLowerCase()}`}
              className="hover:text-white/70 transition-colors">{item}</a>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} aria-label={label}
              className="p-2 rounded-lg text-white/25 hover:text-white/70 hover:bg-white/5 transition-all duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-white/15 text-[10px] mt-8 font-mono tracking-widest uppercase"
      >
        © 2025 Team Chaos · Hackathon Runner-Up · Built in 24 hours
      </motion.p>
    </footer>
  );
}
