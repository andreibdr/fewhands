import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        studio: {
          ink: "#2d263b",         // Deep slate ink from logo banner outline & text
          inkSoft: "#585068",     // Secondary muted ink
          paper: "#faf9fb",       // Warm canvas background
          banner: "#f1f0f5",      // Banner inner tint
          border: "#e5e1eb",      // Warm card border
          sage: "#7ea368",        // Hand 1 (green wave)
          sageSoft: "#f0f5ec",
          plum: "#9c386d",        // Hand 2 (magenta OK 👌)
          plumSoft: "#fcf0f6",
          denim: "#4b6c8c",       // Hand 3 (slate blue)
          denimSoft: "#edf3f8",
          petrol: "#386161",      // Hand 4 (teal fist ✊)
          petrolSoft: "#edf5f5",
          terracotta: "#ba5d60",  // Hand 6 (coral)
          terracottaSoft: "#fdf2f2",
          ochre: "#c6814b",       // Hand 7 (honey peace ✌️)
          ochreSoft: "#fef7f0",
          taupe: "#76665b",       // Hand 8 (thumbs up 👍)
          taupeSoft: "#f5f2f0",
        },
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
    },
  },
  plugins: [],
};
export default config;
