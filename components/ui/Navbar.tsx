"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon, Users, Cpu, Zap, BookOpen, UserRound } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "#story",        icon: HomeIcon, label: "Home"         },
  { href: "#team",         icon: Users,    label: "Team"         },
  { href: "#architecture", icon: Cpu,      label: "Architecture" },
  { href: "#features",     icon: Zap,      label: "Features"     },
  { href: "#cta",          icon: BookOpen, label: "Project"      },
];

export default function Navbar() {
  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
      >
        <Dock
          iconSize={44}
          iconMagnification={64}
          iconDistance={130}
          className="h-14 gap-0.5 px-3 rounded-2xl"
        >
          {/* Logo */}
          <DockIcon size={44} magnification={64} distance={130}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" aria-label="Team Chaos"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-11")}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-lg"
                    style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}>
                    TC
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top"><p>Team Chaos</p></TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation="vertical" className="h-8 my-auto mx-0.5 opacity-20" />

          {navItems.map((item) => (
            <DockIcon key={item.label} size={44} magnification={64} distance={130}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={item.href} aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-11 text-white/50 hover:text-white transition-colors")}>
                    <item.icon className="w-[18px] h-[18px]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top"><p>{item.label}</p></TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-8 my-auto mx-0.5 opacity-20" />

          {/* Connect */}
          <DockIcon size={44} magnification={64} distance={130}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/connect" aria-label="Connect"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full size-11")}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", boxShadow: "0 0 14px rgba(168,85,247,0.4)" }}>
                    <UserRound className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top"><p>Connect</p></TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </motion.div>
    </TooltipProvider>
  );
}
