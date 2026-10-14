import React from "react";

interface FewHandsLogoProps {
  variant?: "heritage" | "modern" | "cube";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

/**
 * Recreated Heritage & Modern Few Hands Logos
 * Based on the original legacy favicon & branding:
 * - Green waving hand (welcoming, friendly craft)
 * - Magenta/Pink "OK" sign (precision, quality)
 * - Cyan/Sky blue thumbs-up / builder gesture (strength, delivery)
 */
export const FewHandsLogo: React.FC<FewHandsLogoProps> = ({
  variant = "heritage",
  size = "md",
  showText = true,
  className = "",
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const badgeDimensions = {
    sm: { w: 32, h: 32 },
    md: { w: 40, h: 40 },
    lg: { w: 48, h: 48 },
  };

  const dim = badgeDimensions[size] || badgeDimensions.md;

  // Heritage: Faithful vector recreation of the original legacy hands logo
  const renderHeritageIcon = () => (
    <div
      className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200/90 shadow-sm flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-indigo-300`}
      title="Few Hands Heritage Logo (Recreated)"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-0.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle background glow */}
        <circle cx="50" cy="50" r="46" fill="url(#heritageGlow)" opacity="0.4" />

        {/* --- HAND 1: Green Waving Hand (Left) --- */}
        <g id="hand-wave-green" transform="translate(10, 14) rotate(-10 20 40)">
          {/* Palm & Wrist */}
          <path
            d="M12 48 C10 38 10 30 14 26 C16 24 20 24 22 28 C23 30 24 35 24 40 L24 52 C20 54 14 53 12 48 Z"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Thumb */}
          <path
            d="M12 36 C8 34 3 34 2 38 C1 42 6 44 11 42"
            fill="#4ade80"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Index Finger */}
          <path
            d="M13 26 C12 18 13 10 17 10 C21 10 21 18 20 25"
            fill="#4ade80"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Middle Finger */}
          <path
            d="M20 24 C20 15 22 6 26 6 C30 6 30 15 29 25"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Ring Finger */}
          <path
            d="M28 26 C29 18 31 11 35 12 C38 13 37 20 35 28"
            fill="#4ade80"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Pinky Finger */}
          <path
            d="M34 32 C37 26 40 20 44 23 C47 26 43 32 39 38"
            fill="#22c55e"
            stroke="#15803d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* --- HAND 2: Magenta OK Sign 👌 (Center) --- */}
        <g id="hand-ok-pink" transform="translate(36, 10)">
          {/* Wrist & Palm */}
          <path
            d="M12 46 C11 40 12 34 16 31 C20 28 25 30 26 35 L27 54 C21 55 14 53 12 46 Z"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* OK Circle (Thumb + Index touching) */}
          <ellipse
            cx="11"
            cy="27"
            rx="6.5"
            ry="7"
            fill="#f472b6"
            stroke="#be185d"
            strokeWidth="1.8"
          />
          <ellipse
            cx="11"
            cy="27"
            rx="2.5"
            ry="2.8"
            fill="#ffffff"
            stroke="#be185d"
            strokeWidth="1.5"
          />
          {/* Middle Finger (upright) */}
          <path
            d="M17 25 C17 17 18 8 22 8 C26 8 26 17 25 25"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Ring Finger */}
          <path
            d="M24 25 C25 18 26 12 30 12 C33 12 33 19 31 27"
            fill="#f472b6"
            stroke="#be185d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Pinky Finger */}
          <path
            d="M30 28 C32 22 34 17 38 18 C41 19 40 26 36 32"
            fill="#ec4899"
            stroke="#be185d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* --- HAND 3: Cyan Thumbs-Up / Flex Gesture (Right) --- */}
        <g id="hand-power-cyan" transform="translate(62, 16) rotate(12 20 40)">
          {/* Forearm & Fist */}
          <path
            d="M8 48 C6 38 8 32 14 30 C20 28 26 32 27 38 L25 52 C20 54 12 53 8 48 Z"
            fill="#06b6d4"
            stroke="#0e7490"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Thumb Up */}
          <path
            d="M12 29 C11 20 12 12 16 11 C20 10 21 17 20 27"
            fill="#38bdf8"
            stroke="#0e7490"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Folded Fingers (Fist knuckle contours) */}
          <path
            d="M20 27 C24 27 26 30 26 34"
            stroke="#0e7490"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20 33 C25 33 27 36 26 40"
            stroke="#0e7490"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M19 39 C23 39 25 42 24 45"
            stroke="#0e7490"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* Bottom Banner Badge: "FEW HANDS" */}
        <g transform="translate(6, 64)">
          <rect
            x="0"
            y="0"
            width="88"
            height="26"
            rx="6"
            fill="#ffffff"
            stroke="#334155"
            strokeWidth="2.2"
          />
          {/* Subtle screw/rivet dots on banner */}
          <circle cx="5" cy="13" r="1.5" fill="#94a3b8" />
          <circle cx="83" cy="13" r="1.5" fill="#94a3b8" />
          {/* Text FEW HANDS */}
          <text
            x="44"
            y="17.5"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="12"
            letterSpacing="0.8"
            fill="#0f172a"
          >
            FEW HANDS
          </text>
        </g>

        {/* Gradient Defs */}
        <defs>
          <radialGradient id="heritageGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0e7ff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );

  // Modern: Clean minimalist tech interpretation (overlapping gradient handcraft glyphs)
  const renderModernIcon = () => (
    <div
      className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/35 transition-all duration-300`}
      title="Few Hands Modern Studio Mark"
    >
      <svg
        viewBox="0 0 40 40"
        className="w-6 h-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hand 1 (Left open gesture - delicate stroke) */}
        <path
          d="M10 26 C9 21 11 16 14 13 C15.5 11.5 17.5 12.5 17 15 L16 19 C18 16 20.5 16 21 18 C21.5 20 19 22 17 23 L18 25 C16 27 12 28 10 26 Z"
          fill="rgba(255,255,255,0.25)"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hand 2 (Right craft/connect gesture) */}
        <path
          d="M30 26 C31 21 29 16 26 13 C24.5 11.5 22.5 12.5 23 15 L24 19 C22 16 19.5 16 19 18 C18.5 20 21 22 23 23 L22 25 C24 27 28 28 30 26 Z"
          fill="rgba(255,255,255,0.45)"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Central spark/union dot */}
        <circle cx="20" cy="21" r="2" fill="#38bdf8" />
      </svg>
    </div>
  );

  // Cube: The geometric wireframe cube
  const renderCubeIcon = () => (
    <div
      className={`relative ${iconSizes[size]} rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform`}
      title="Isometric Cube"
    >
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
  );

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {variant === "heritage" && renderHeritageIcon()}
      {variant === "modern" && renderModernIcon()}
      {variant === "cube" && renderCubeIcon()}

      {showText && (
        <div>
          <div className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none mb-1">
            <span>Few Hands</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                variant === "heritage"
                  ? "bg-pink-500"
                  : variant === "modern"
                  ? "bg-sky-400"
                  : "bg-indigo-600"
              }`}
            />
          </div>
          <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-medium leading-none">
            Engineering Studio
          </div>
        </div>
      )}
    </div>
  );
};
