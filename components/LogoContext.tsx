"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LogoVariant = "heritage" | "modern" | "cube";

interface LogoContextType {
  logoVariant: LogoVariant;
  setLogoVariant: (variant: LogoVariant) => void;
}

const LogoContext = createContext<LogoContextType>({
  logoVariant: "heritage",
  setLogoVariant: () => {},
});

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoVariant, setLogoVariantState] = useState<LogoVariant>("heritage");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fewhands_logo_variant") as LogoVariant | null;
      if (saved && ["heritage", "modern", "cube"].includes(saved)) {
        setLogoVariantState(saved);
      }
    } catch {
      // Ignore localStorage issues
    }
  }, []);

  const setLogoVariant = (variant: LogoVariant) => {
    setLogoVariantState(variant);
    try {
      localStorage.setItem("fewhands_logo_variant", variant);
    } catch {
      // Ignore
    }
  };

  return (
    <LogoContext.Provider value={{ logoVariant, setLogoVariant }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);
