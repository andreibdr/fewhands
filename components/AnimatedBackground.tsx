"use client";

import React, { useState, useEffect } from "react";

export const AnimatedBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50/70"
    >
      {/* 1. Crisp Technical Dot-Matrix Grid (Stripe / Vercel style) */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-75"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 35%, black 60%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 60%, transparent 95%)",
        }}
      />

      {/* 2. Interactive Cursor Ambient Spotlight */}
      {mousePos && (
        <div
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-purple-500/15 blur-[80px] transition-transform duration-150 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* 3. Floating Aurora Mesh Gradients (Noticeable, vibrant & animated) */}
      {/* Orb 1: Vibrant Electric Sky / Indigo (Top Left) */}
      <div className="absolute -top-[12%] left-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-sky-400/35 via-indigo-500/30 to-purple-500/25 blur-[100px] animate-aurora-1" />

      {/* Orb 2: Radiant Violet / Magenta / Fuchsia (Top Right) */}
      <div className="absolute top-[3%] -right-[8%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-purple-500/30 via-pink-400/25 to-indigo-400/30 blur-[105px] animate-aurora-2" />

      {/* Orb 3: Cyan / Emerald Neon (Mid-Page / Center) */}
      <div className="absolute top-[42%] left-[15%] w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-cyan-400/30 via-teal-300/25 to-sky-400/30 blur-[95px] animate-aurora-3" />

      {/* Orb 4: Deep Royal Indigo / Lavender (Bottom Right) */}
      <div className="absolute -bottom-[12%] right-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-indigo-500/35 via-sky-400/25 to-purple-400/30 blur-[110px] animate-aurora-1" />
    </div>
  );
};
