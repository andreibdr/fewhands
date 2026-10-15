"use client";

import React, { useState, useEffect } from "react";

export const AnimatedBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <>
      {/* 1. Deep Background Layer (z-0, below content) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#faf9fb]"
      >
        {/* Warm Technical Dot-Matrix Grid */}
        <div
          className="absolute inset-0 bg-dot-grid opacity-85"
          style={{
            maskImage: "radial-gradient(ellipse at 50% 35%, black 70%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 70%, transparent 95%)",
          }}
        />

        {/* Ambient Cursor Aura (illuminating background grid and space) */}
        {mousePos && isHovered && (
          <>
            {/* Primary cursor glow halo */}
            <div
              className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#9c386d]/30 via-[#c6814b]/25 to-[#7ea368]/25 blur-[95px] transition-transform duration-75 ease-out will-change-transform"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
            {/* Secondary trail follower orb (slightly smaller, soft lag effect) */}
            <div
              className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#4b6c8c]/25 via-[#386161]/25 to-[#ba5d60]/20 blur-[70px] transition-transform duration-200 ease-out will-change-transform"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
          </>
        )}

        {/* Floating Aurora Mesh Gradients (Hand Artisan Palette) */}
        {/* Orb 1: Sage Olive & Forest Petrol (Top Left - Hand 1 & 4) */}
        <div className="absolute -top-[12%] left-[5%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#7ea368]/30 via-[#386161]/25 to-[#4b6c8c]/20 blur-[105px] animate-aurora-1" />

        {/* Orb 2: Radiant Plum Magenta & Warm Coral (Top Right - Hand 2 & 6) */}
        <div className="absolute top-[3%] -right-[8%] w-[720px] h-[720px] rounded-full bg-gradient-to-bl from-[#9c386d]/28 via-[#ba5d60]/22 to-[#585068]/20 blur-[110px] animate-aurora-2" />

        {/* Orb 3: Warm Ochre Honey & Soft Sage (Mid-Page / Center - Hand 7 & 1) */}
        <div className="absolute top-[42%] left-[12%] w-[660px] h-[660px] rounded-full bg-gradient-to-tr from-[#c6814b]/26 via-[#f0f5ec]/35 to-[#7ea368]/22 blur-[100px] animate-aurora-3" />

        {/* Orb 4: Slate Denim & Deep Plum Ink (Bottom Right - Hand 3 & 5) */}
        <div className="absolute -bottom-[12%] right-[10%] w-[780px] h-[780px] rounded-full bg-gradient-to-tl from-[#4b6c8c]/28 via-[#9c386d]/20 to-[#352f44]/18 blur-[115px] animate-aurora-1" />
      </div>

      {/* 2. Foreground Interactive Spotlight (z-20, on top of cards & content, pointer-events-none) */}
      {mousePos && isHovered && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(156, 56, 109, 0.14), rgba(198, 129, 75, 0.10), rgba(75, 108, 140, 0.07), transparent 75%)`,
          }}
        />
      )}
    </>
  );
};
