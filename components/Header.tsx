"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" />
              <path d="M12 3v18" opacity=".6" />
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              <span>Few Hands</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5">
              Engineering Studio
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/migrate" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
          </Link>
          <Link href="/development" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "Разработка" : "Development"}
          </Link>
          <Link href="/maintenance" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "Поддержка & Обучение" : "Support & Retainer"}
          </Link>
          <Link href="/ai-video" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "AI & Видео" : "AI & Video"}
          </Link>
          <Link href="/portfolio" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "Портфолио" : "Portfolio"}
          </Link>
          <Link href="/contact" className="hover:text-sky-400 transition-colors">
            {lang === "ru" ? "Контакты" : "Contact"}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("ru")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "ru"
                  ? "bg-slate-800 text-sky-400 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "en"
                  ? "bg-slate-800 text-sky-400 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Estimate CTA Button */}
          <Link
            href="/estimate"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/30"
          >
            <span>{lang === "ru" ? "Рассчитать проект" : "Estimate Project"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-800 text-slate-200"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-6 space-y-3 shadow-xl">
          <Link
            href="/migrate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
          </Link>
          <Link
            href="/development"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "Разработка" : "Development"}
          </Link>
          <Link
            href="/maintenance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "Поддержка & Обучение" : "Support & Retainer"}
          </Link>
          <Link
            href="/ai-video"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "AI & Видео" : "AI & Video"}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "Портфолио" : "Portfolio"}
          </Link>
          <Link
            href="/estimate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-sky-400 hover:bg-sky-950/30"
          >
            {lang === "ru" ? "Калькулятор проекта" : "Project Estimator"}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900"
          >
            {lang === "ru" ? "Контакты" : "Contact"}
          </Link>
        </div>
      )}
    </header>
  );
};
