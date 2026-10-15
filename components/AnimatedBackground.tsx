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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#faf9fb]/80"
    >
      {/* 1. Warm Technical Dot-Matrix Grid */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-80"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 35%, black 65%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 65%, transparent 95%)",
        }}
      />

      {/* 2. Interactive Cursor Ambient Spotlight */}
      {mousePos && (
        <div
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#9c386d]/12 via-[#c6814b]/12 to-[#7ea368]/12 blur-[80px] transition-transform duration-150 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* 3. Few Hands Studio Ambient Color Blooms (Artisan Palette from Logo Hands) */}
      {/* Orb 1: Sage Olive & Forest Petrol (Top Left - Hand 1 & 4) */}
      <div className="absolute -top-[12%] left-[5%] w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-[#7ea368]/28 via-[#386161]/22 to-[#4b6c8c]/18 blur-[105px] animate-aurora-1" />

      {/* Orb 2: Radiant Plum Magenta & Warm Coral (Top Right - Hand 2 & 6) */}
      <div className="absolute top-[3%] -right-[8%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#9c386d]/25 via-[#ba5d60]/20 to-[#585068]/20 blur-[110px] animate-aurora-2" />

      {/* Orb 3: Warm Ochre Honey & Soft Sage (Mid-Page / Center - Hand 7 & 1) */}
      <div className="absolute top-[42%] left-[12%] w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-[#c6814b]/24 via-[#f0f5ec]/30 to-[#7ea368]/20 blur-[100px] animate-aurora-3" />

      {/* Orb 4: Slate Denim & Deep Plum Ink (Bottom Right - Hand 3 & 5) */}
      <div className="absolute -bottom-[12%] right-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-[#4b6c8c]/25 via-[#9c386d]/18 to-[#352f44]/15 blur-[115px] animate-aurora-1" />
    </div>
  );
};
