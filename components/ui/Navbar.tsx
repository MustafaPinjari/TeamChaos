"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { HomeIcon, Users, Cpu, Zap, Mail, Menu, X, BookOpen } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "#story",        icon: HomeIcon,  label: "Home"         },
  { href: "#team",         icon: Users,     label: "Team"         },
  { href: "#architecture", icon: Cpu,       label: "Architecture" },
  { href: "#features",     icon: Zap,       label: "Features"     },
  { href: "#cta",          icon: BookOpen,  label: "Project"      },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setLastY(y);
  });

  return (
    <TooltipProvider delayDuration={0}>
      {/* ── Desktop dock ── */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <Dock iconSize={48} iconMagnification={72} iconDistance={140}
          className="h-16 gap-1 px-4 rounded-2xl"
        >
          {/* Logo mark */}
          <DockIcon size={48} magnification={72} distance={140}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" aria-label="Team Chaos"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-12")}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg"
                    style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                    TC
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top"><p>Team Chaos</p></TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-9 my-auto mx-1" />

          {/* Nav links */}
          {navItems.map((item) => (
            <DockIcon key={item.label} size={48} magnification={72} distance={140}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.href} aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-12 text-white/55 hover:text-white")}>
                    <item.icon className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top"><p>{item.label}</p></TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-9 my-auto mx-1" />

          {/* Connect */}
          <DockIcon size={48} magnification={72} distance={140}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/connect" aria-label="Connect with us"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-12")}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl border border-purple-500/30 text-purple-400 hover:text-purple-300 transition-colors"
                    style={{ background: "rgba(168,85,247,0.1)" }}>
                    <Mail className="w-4 h-4" />
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top"><p>Connect with us</p></TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </motion.div>

      {/* ── Mobile top bar ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-4 h-14"
        style={{ background: "rgba(5,5,8,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
            style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>TC</div>
          <span className="font-bold text-white text-sm">Team Chaos</span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden"
            style={{ background: "rgba(5,5,8,0.97)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/55 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/[0.06] my-1" />
              <Link href="/connect" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-400/80 hover:text-purple-300 hover:bg-purple-500/5 transition-all text-sm font-medium">
                <Mail className="w-4 h-4" />
                Connect with us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
}
