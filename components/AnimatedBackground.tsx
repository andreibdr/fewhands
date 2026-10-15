"use client";

import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#faf9fb]"
    >
      {/* 1. Fine Technical Dot-Matrix Grid */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 30%, black 50%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 50%, transparent 90%)",
        }}
      />

      {/* 2. Soft Ambient Watercolor Blooms (Subtle, strictly in background, zero text interference) */}
      {/* Top Left: Soft Sage Dew */}
      <div className="absolute -top-[15%] left-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#d7edd2]/30 via-[#d3ebe7]/25 to-transparent blur-[120px] animate-aurora-1" />

      {/* Top Right: Pale Rose Quartz */}
      <div className="absolute top-[2%] -right-[10%] w-[620px] h-[620px] rounded-full bg-gradient-to-bl from-[#fae0eb]/30 via-[#fde7e0]/25 to-transparent blur-[125px] animate-aurora-2" />

      {/* Center/Mid: Warm Honey Tint */}
      <div className="absolute top-[45%] left-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#fcebd6]/35 via-transparent to-transparent blur-[110px] animate-aurora-3" />

      {/* Bottom Right: Soft Sky Iris */}
      <div className="absolute -bottom-[15%] right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#dde7f7]/30 via-[#f7e4ee]/20 to-transparent blur-[130px] animate-aurora-1" />
    </div>
  );
};
