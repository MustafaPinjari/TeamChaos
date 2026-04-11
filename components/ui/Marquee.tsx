"use client";
import { FaReact, FaEthereum, FaWallet, FaDocker, FaPython } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer, SiReactrouter, SiAxios, SiDjango, SiRazorpay } from "react-icons/si";
import { BarChart2 } from "lucide-react";

const items = [
  { label: "React 19",        icon: FaReact,       color: "#61DAFB" },
  { label: "Vite",            icon: SiVite,        color: "#646CFF" },
  { label: "Tailwind CSS",    icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Framer Motion",   icon: SiFramer,      color: "#EC4899" },
  { label: "React Router",    icon: SiReactrouter, color: "#EF4444" },
  { label: "Axios",           icon: SiAxios,       color: "#5A29E4" },
  { label: "Recharts",        icon: BarChart2,     color: "#F97316" },
  { label: "Django",          icon: SiDjango,      color: "#10B981" },
  { label: "Razorpay",        icon: SiRazorpay,    color: "#3B82F6" },
  { label: "Blockchain",      icon: FaEthereum,    color: "#F59E0B" },
  { label: "MetaMask",        icon: FaWallet,      color: "#F97316" },
  { label: "Docker",          icon: FaDocker,      color: "#2496ED" },
  // duplicate for seamless loop
  { label: "React 19",        icon: FaReact,       color: "#61DAFB" },
  { label: "Vite",            icon: SiVite,        color: "#646CFF" },
  { label: "Tailwind CSS",    icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Framer Motion",   icon: SiFramer,      color: "#EC4899" },
  { label: "React Router",    icon: SiReactrouter, color: "#EF4444" },
  { label: "Axios",           icon: SiAxios,       color: "#5A29E4" },
  { label: "Recharts",        icon: BarChart2,     color: "#F97316" },
  { label: "Django",          icon: SiDjango,      color: "#10B981" },
  { label: "Razorpay",        icon: SiRazorpay,    color: "#3B82F6" },
  { label: "Blockchain",      icon: FaEthereum,    color: "#F59E0B" },
  { label: "MetaMask",        icon: FaWallet,      color: "#F97316" },
  { label: "Docker",          icon: FaDocker,      color: "#2496ED" },
];

export default function Marquee() {
  return (
    <div className="relative py-4 sm:py-5 overflow-hidden border-y border-white/[0.05]"
      style={{ background: "rgba(255,255,255,0.01)" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #050508, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #050508, transparent)" }} />

      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}
            className="flex items-center gap-2 px-5 sm:px-7 whitespace-nowrap"
          >
            <item.icon style={{ color: item.color, fontSize: "15px", flexShrink: 0 }} />
            <span className="text-white/30 text-xs sm:text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
