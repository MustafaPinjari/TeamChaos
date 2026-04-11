"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setVisible(true);
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${mouseX}px`;
        dot.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = `${ringX}px`;
        ring.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ring.current) {
        ring.current.style.transform = "translate(-50%, -50%) scale(1.8)";
        ring.current.style.borderColor = "rgba(168,85,247,0.9)";
      }
    };
    const onLeave = () => {
      if (ring.current) {
        ring.current.style.transform = "translate(-50%, -50%) scale(1)";
        ring.current.style.borderColor = "rgba(168,85,247,0.5)";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
