"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationContent, translations } from "@/lib/translations";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "ru",
  setLang: () => {},
  t: translations.ru,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ru");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fewhands_lang");
      if (saved === "ru" || saved === "en") {
        setLangState(saved);
      } else {
        const userLang = (navigator.language || "").toLowerCase();
        if (userLang.startsWith("ru") || userLang.startsWith("uk") || userLang.startsWith("be") || userLang.startsWith("kk")) {
          setLangState("ru");
        } else {
          setLangState("en");
        }
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
