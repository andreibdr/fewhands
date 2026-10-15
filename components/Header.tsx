"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { useLogo } from "./LogoContext";
import { FewHandsLogo } from "./FewHandsLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const { logoVariant, setLogoVariant } = useLogo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo with dynamic variant */}
        <Link href="/" className="flex items-center group">
          <FewHandsLogo variant={logoVariant} />
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo Comparison Switcher */}
          <div
            className="hidden sm:flex items-center bg-slate-100/90 border border-slate-200/90 rounded-xl p-0.5 text-[11px] font-semibold text-slate-600"
            title={lang === "ru" ? "Сравнение: Оригинал из папки vs Куб" : "Compare: Original vs Cube"}
          >
            <button
              onClick={() => setLogoVariant("heritage")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                logoVariant === "heritage" || logoVariant === "modern"
                  ? "bg-white text-indigo-700 shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              title="Оригинальный логотип Few Hands"
            >
              <span>👌</span>
              <span>{lang === "ru" ? "Оригинал" : "Original"}</span>
            </button>
            <button
              onClick={() => setLogoVariant("cube")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                logoVariant === "cube"
                  ? "bg-white text-indigo-700 shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              title="Куб"
            >
              <span>🧊</span>
              <span>{lang === "ru" ? "Куб" : "Cube"}</span>
            </button>
          </div>

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

          {/* Mobile Logo Switcher */}
          <div className="pt-3 border-t border-slate-100 mt-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-1">
              {lang === "ru" ? "Вариант логотипа:" : "Logo Style:"}
            </div>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => setLogoVariant("heritage")}
                className={`py-2 px-2 rounded-lg text-center ${
                  logoVariant === "heritage" || logoVariant === "modern"
                    ? "bg-white text-indigo-700 shadow-sm font-bold"
                    : "text-slate-600"
                }`}
              >
                👌 {lang === "ru" ? "Оригинал" : "Original"}
              </button>
              <button
                onClick={() => setLogoVariant("cube")}
                className={`py-2 px-2 rounded-lg text-center ${
                  logoVariant === "cube"
                    ? "bg-white text-indigo-700 shadow-sm font-bold"
                    : "text-slate-600"
                }`}
              >
                🧊 {lang === "ru" ? "Куб" : "Cube"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
