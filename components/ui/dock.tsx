"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export function Dock({
  className,
  children,
  iconSize = DEFAULT_SIZE,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  direction = "bottom",
  ...props
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && (child.type as React.FC).displayName === "DockIcon") {
        return React.cloneElement(child as React.ReactElement<DockIconProps>, {
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-14 items-end gap-2 rounded-2xl border border-white/10 px-3 pb-2",
        { "items-start pt-2 pb-0": direction === "top" },
        { "items-center": direction === "middle" },
        className
      )}
      style={{ background: "rgba(10,10,15,0.75)", backdropFilter: "blur(20px)" }}
      {...props}
    >
      {renderChildren()}
    </motion.div>
  );
}
Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

export function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.15);

  const defaultMouseX = useMotionValue(Infinity);
  const activeMouseX = mouseX ?? defaultMouseX;

  const distanceFromMouse = useTransform(activeMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [size, magnification, size]
  );
  const width = useSpring(widthSync, { stiffness: 300, damping: 28 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", className)}
    >
      <div style={{ padding }} className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
DockIcon.displayName = "DockIcon";
