"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" />
              <path d="M12 3v18" opacity=".6" />
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
              <span>Few Hands</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase -mt-0.5 font-medium">
              Engineering Studio
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="/migrate" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
          </Link>
          <Link href="/development" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "Разработка" : "Development"}
          </Link>
          <Link href="/maintenance" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "Поддержка сайтов" : "Support & Retainer"}
          </Link>
          <Link href="/ai-video" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "AI & Видео" : "AI & Video"}
          </Link>
          <Link href="/portfolio" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "Портфолио" : "Portfolio"}
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">
            {lang === "ru" ? "Контакты" : "Contact"}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 border border-slate-200/80 rounded-xl p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("ru")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "ru"
                  ? "bg-white text-indigo-600 shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                lang === "en"
                  ? "bg-white text-indigo-600 shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Estimate CTA Button */}
          <Link
            href="/estimate"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md"
          >
            <span>{lang === "ru" ? "Рассчитать проект" : "Estimate Project"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 bg-white shadow-sm"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-6 space-y-2 shadow-xl">
          <Link
            href="/migrate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
          </Link>
          <Link
            href="/development"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "Разработка" : "Development"}
          </Link>
          <Link
            href="/maintenance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "Поддержка сайтов" : "Support & Retainer"}
          </Link>
          <Link
            href="/ai-video"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "AI & Видео" : "AI & Video"}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "Портфолио" : "Portfolio"}
          </Link>
          <Link
            href="/estimate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-indigo-600 bg-indigo-50/60"
          >
            {lang === "ru" ? "Калькулятор проекта" : "Project Estimator"}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-50"
          >
            {lang === "ru" ? "Контакты" : "Contact"}
          </Link>
        </div>
      )}
    </header>
  );
};
