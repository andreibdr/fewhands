"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf9fb]/85 backdrop-blur-md border-b border-[#e5e1eb] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Authentic Original Few Hands Identity */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img
            src="/logo.png"
            alt="Few Hands"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            style={{ imageRendering: "auto" }}
          />
          <div className="hidden sm:block border-l border-[#e5e1eb] pl-3">
            <div className="text-[10px] text-[#585068] font-mono tracking-wider uppercase font-semibold leading-none">
              Engineering Studio
            </div>
            <div className="text-[9px] text-[#8c829c] font-sans mt-0.5 leading-none">
              Est. 2008
            </div>
          </div>
        </Link>

        {/* Desktop Navigation in Studio Palette */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#585068]">
          <Link href="/migrate" className="hover:text-[#386161] transition-colors">
            {lang === "ru" ? "Миграция CMS" : lang === "sr" ? "Migracija CMS-a" : "CMS Migration"}
          </Link>
          <Link href="/development" className="hover:text-[#4b6c8c] transition-colors">
            {lang === "ru" ? "Разработка" : lang === "sr" ? "Razvoj veba" : "Development"}
          </Link>
          <Link href="/maintenance" className="hover:text-[#c6814b] transition-colors">
            {lang === "ru" ? "Поддержка сайтов" : lang === "sr" ? "Održavanje sajtova" : "Support & Retainer"}
          </Link>
          <Link href="/ai-video" className="hover:text-[#9c386d] transition-colors">
            {lang === "ru" ? "AI & Видео" : lang === "sr" ? "AI & Video" : "AI & Video"}
          </Link>
          <Link href="/portfolio" className="hover:text-[#2d263b] transition-colors">
            {lang === "ru" ? "Портфолио" : lang === "sr" ? "Portfolio" : "Portfolio"}
          </Link>
          <Link href="/contact" className="hover:text-[#2d263b] transition-colors">
            {lang === "ru" ? "Контакты" : lang === "sr" ? "Kontakt" : "Contact"}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#f1f0f5] border border-[#e5e1eb] rounded-xl p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "en"
                  ? "bg-white text-[#2d263b] shadow-sm font-bold"
                  : "text-[#585068] hover:text-[#2d263b]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ru")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "ru"
                  ? "bg-white text-[#2d263b] shadow-sm font-bold"
                  : "text-[#585068] hover:text-[#2d263b]"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("sr")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "sr"
                  ? "bg-white text-[#2d263b] shadow-sm font-bold"
                  : "text-[#585068] hover:text-[#2d263b]"
              }`}
            >
              SR
            </button>
          </div>

          {/* Estimate CTA Button - Studio Ink */}
          <Link
            href="/estimate"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-[#2d263b] hover:bg-[#1f1a29] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md"
          >
            <span>{lang === "ru" ? "Рассчитать проект" : lang === "sr" ? "Procenite projekat" : "Estimate Project"}</span>
            <ArrowUpRight className="w-4 h-4 text-[#e5e1eb]" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-[#e5e1eb] text-[#2d263b] bg-white shadow-sm"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5e1eb] bg-[#faf9fb]/95 backdrop-blur-xl px-4 py-6 space-y-2 shadow-xl">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#e5e1eb]">
            <span className="text-xs font-medium text-[#585068]">
              {lang === "ru" ? "Язык сайта:" : lang === "sr" ? "Jezik sajta:" : "Language:"}
            </span>
            <div className="flex items-center bg-[#f1f0f5] border border-[#e5e1eb] rounded-xl p-1 text-xs font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  lang === "en"
                    ? "bg-white text-[#2d263b] shadow-sm font-bold"
                    : "text-[#585068]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  lang === "ru"
                    ? "bg-white text-[#2d263b] shadow-sm font-bold"
                    : "text-[#585068]"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang("sr")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  lang === "sr"
                    ? "bg-white text-[#2d263b] shadow-sm font-bold"
                    : "text-[#585068]"
                }`}
              >
                SR
              </button>
            </div>
          </div>

          <Link
            href="/migrate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "Миграция CMS" : lang === "sr" ? "Migracija CMS-a" : "CMS Migration"}
          </Link>
          <Link
            href="/development"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "Разработка" : lang === "sr" ? "Razvoj veba" : "Development"}
          </Link>
          <Link
            href="/maintenance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "Поддержка сайтов" : lang === "sr" ? "Održavanje sajtova" : "Support & Retainer"}
          </Link>
          <Link
            href="/ai-video"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "AI & Видео" : lang === "sr" ? "AI & Video" : "AI & Video"}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "Портфолио" : lang === "sr" ? "Portfolio" : "Portfolio"}
          </Link>
          <Link
            href="/estimate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#faf9fb] bg-[#2d263b]"
          >
            {lang === "ru" ? "Калькулятор проекта" : lang === "sr" ? "Kalkulator projekta" : "Project Estimator"}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-[#585068] hover:bg-[#f1f0f5]"
          >
            {lang === "ru" ? "Контакты" : lang === "sr" ? "Kontakt" : "Contact"}
          </Link>
        </div>
      )}
    </header>
  );
};
