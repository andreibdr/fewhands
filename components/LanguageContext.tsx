"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationContent, translations } from "@/lib/translations";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fewhands_lang");
      if (saved === "ru" || saved === "en" || saved === "sr") {
        setLangState(saved);
      } else {
        setLangState("en");
      }
    } catch {}
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("fewhands_lang", newLang);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
