"use client";

import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-slate-50">
      {/* Subtle Dot Matrix Grid with radial fade mask */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      {/* Animated Floating Aurora Mesh Orbs */}
      {/* Orb 1: Soft Sky / Indigo Blue (top-center/left) */}
      <div className="absolute -top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-300/40 via-indigo-300/30 to-purple-300/20 blur-[130px] animate-aurora-1" />

      {/* Orb 2: Soft Violet / Lavender (top-right) */}
      <div className="absolute top-[5%] -right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-purple-300/35 via-pink-200/25 to-blue-200/30 blur-[140px] animate-aurora-2" />

      {/* Orb 3: Soft Emerald / Cyan (mid-page accent) */}
      <div className="absolute top-[45%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-200/30 via-emerald-200/20 to-sky-200/30 blur-[120px] animate-aurora-3" />

      {/* Orb 4: Soft Amber / Warm Rose (bottom accent) */}
      <div className="absolute -bottom-[10%] right-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-indigo-200/30 via-sky-200/25 to-purple-200/20 blur-[150px] animate-aurora-1" />
    </div>
  );
};
