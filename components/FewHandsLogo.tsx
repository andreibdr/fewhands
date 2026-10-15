import React from "react";
import Image from "next/image";

interface FewHandsLogoProps {
  variant?: "heritage" | "modern" | "cube";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const FewHandsLogo: React.FC<FewHandsLogoProps> = ({
  variant = "heritage",
  size = "md",
  showText = true,
  className = "",
}) => {
  // If heritage / default: render the authentic original Few Hands logo provided by user
  if (variant === "heritage" || variant === "modern") {
    const heightClass =
      size === "sm" ? "h-9" : size === "lg" ? "h-13 sm:h-14" : "h-10 sm:h-11";

    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Authentic Original Logo */}
        <img
          src="/logo.png"
          alt="Few Hands"
          className={`${heightClass} w-auto object-contain transition-transform group-hover:scale-[1.02]`}
          style={{ imageRendering: "auto" }}
        />
        {showText && (
          <div className="hidden sm:block border-l border-slate-200/90 pl-3">
            <div className="text-[10px] text-slate-600 font-mono tracking-wider uppercase font-semibold leading-none">
              Engineering Studio
            </div>
            <div className="text-[9px] text-slate-400 font-sans mt-0.5 leading-none">
              Est. 2008
            </div>
          </div>
        )}
      </div>
    );
  }

  // Cube: The previous geometric isometric cube
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" />
          <path d="M12 3v18" opacity=".6" />
        </svg>
      </div>
      {showText && (
        <div>
          <div className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none mb-1">
            <span>Few Hands</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          </div>
          <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-medium leading-none">
            Engineering Studio
          </div>
        </div>
      )}
    </div>
  );
};
