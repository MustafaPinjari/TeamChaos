"use client";
import { motion } from "framer-motion";
import { GitFork, Share2, Code2, Mail } from "lucide-react";

const socials = [
  { icon: GitFork, label: "GitHub", href: "#" },
  { icon: Share2, label: "Twitter", href: "#" },
  { icon: Code2, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:team@teamchaos.dev" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <div>
              <div className="font-bold text-white">TeamChaos</div>
              <div className="text-white/30 text-xs">by Team Chaos</div>
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 text-sm text-white/40"
          >
            {["Story", "Team", "Architecture", "Features"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-xl glass border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs"
        >
          <span>© 2025 TeamChaos. Built with ❤️ by Team Chaos.</span>
          <span className="font-mono">
            From 25+ attempts to{" "}
            <span className="gradient-text font-bold">1 win.</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
