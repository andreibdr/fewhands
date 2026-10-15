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
      {/* 1. Deep Background Canvas (z-0, below content) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#faf9fb]"
      >
        {/* Warm Technical Dot-Matrix Grid */}
        <div
          className="absolute inset-0 bg-dot-grid opacity-75"
          style={{
            maskImage: "radial-gradient(ellipse at 50% 35%, black 70%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 70%, transparent 95%)",
          }}
        />

        {/* Luminous Interactive Cursor Aura (High-key pastel watercolor glow - zero dark pigments) */}
        {mousePos && isHovered && (
          <>
            {/* Primary bright cursor halo (warm honey & pale rose watercolor) */}
            <div
              className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#fbe4d0]/60 via-[#fde5ec]/55 to-[#ddede2]/50 blur-[90px] transition-transform duration-75 ease-out will-change-transform"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
            {/* Secondary trail follower orb (soft sky & lavender mist) */}
            <div
              className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#dce8f7]/55 via-[#f5e1eb]/50 to-[#faf0df]/45 blur-[65px] transition-transform duration-200 ease-out will-change-transform"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
          </>
        )}

        {/* Floating Luminous Watercolor Ambient Blooms (Pure light pastels, zero dark mud) */}
        {/* Orb 1: Fresh Sage Dew & Soft Mint Mist (Top Left) */}
        <div className="absolute -top-[12%] left-[5%] w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-[#d7edd2]/50 via-[#d3ebe7]/45 to-[#dbe8f5]/40 blur-[110px] animate-aurora-1" />

        {/* Orb 2: Pale Rose Quartz & Peach Blossom (Top Right) */}
        <div className="absolute top-[3%] -right-[8%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#fae0eb]/50 via-[#fde7e0]/45 to-[#eee8f7]/40 blur-[115px] animate-aurora-2" />

        {/* Orb 3: Warm Honey Gold & Clotted Cream (Mid-Page / Center) */}
        <div className="absolute top-[42%] left-[12%] w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-[#fcebd6]/55 via-[#fffaf4]/60 to-[#e2f0e6]/45 blur-[105px] animate-aurora-3" />

        {/* Orb 4: Soft Sky Denim & Iris Mist (Bottom Right) */}
        <div className="absolute -bottom-[12%] right-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-[#dde7f7]/50 via-[#f7e4ee]/40 to-[#ede9f5]/35 blur-[120px] animate-aurora-1" />
      </div>

      {/* 2. Foreground Radiant Spotlight (z-20, on top of cards, purely light & brightening - NO dark tint) */}
      {mousePos && isHovered && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.75) 0%, rgba(254, 249, 240, 0.45) 30%, rgba(253, 242, 246, 0.20) 55%, transparent 75%)`,
          }}
        />
      )}
    </>
  );
};
