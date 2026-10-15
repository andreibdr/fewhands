"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Zap,
  Code2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const Header: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const services = [
    {
      href: "/migrate",
      icon: Zap,
      accentBg: "bg-[#386161]/10 text-[#386161]",
      title: lang === "ru" ? "Миграция CMS" : lang === "sr" ? "Migracija CMS-a" : "CMS Migration",
      desc:
        lang === "ru"
          ? "Перенос с WordPress, Tilda, Webflow на Next.js"
          : lang === "sr"
          ? "Prelazak sa WordPress, Tilda, Webflow na Next.js"
          : "Decoupled switch from WP, Tilda, Webflow to Next.js",
      badge: "Next.js",
    },
    {
      href: "/development",
      icon: Code2,
      accentBg: "bg-[#4b6c8c]/10 text-[#4b6c8c]",
      title: lang === "ru" ? "Веб-разработка" : lang === "sr" ? "Razvoj veba" : "Web Development",
      desc:
        lang === "ru"
          ? "Бутиковые веб-продукты и сложные интерфейсы"
          : lang === "sr"
          ? "Prilagođene veb aplikacije i brzi interfejsi"
          : "Boutique web applications and fast interfaces",
      badge: "Boutique",
    },
    {
      href: "/maintenance",
      icon: ShieldCheck,
      accentBg: "bg-[#c6814b]/10 text-[#c6814b]",
      title: lang === "ru" ? "Поддержка & Retainer" : lang === "sr" ? "Održavanje & Retainer" : "Support & Retainer",
      desc:
        lang === "ru"
          ? "Инженерный надзор, скорость, SLA и защита"
          : lang === "sr"
          ? "Inženjerski nadzor, brzina, SLA i stabilnost"
          : "Continuous engineering care, SLA and updates",
      badge: "SLA",
    },
    {
      href: "/ai-video",
      icon: Sparkles,
      accentBg: "bg-[#9c386d]/10 text-[#9c386d]",
      title: lang === "ru" ? "AI & Видео" : lang === "sr" ? "AI & Video" : "AI & Video",
      desc:
        lang === "ru"
          ? "Нейросети, видеоаватары на 30+ языках"
          : lang === "sr"
          ? "AI video avatari na 30+ jezika i automatizacija"
          : "Generative AI video presenters and workflows",
      badge: "AI",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9fb]/85 backdrop-blur-md border-b border-[#e5e1eb] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Authentic Original Few Hands Identity */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
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

        {/* Desktop Navigation: 4 clean, spacious items with Services dropdown */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-[#585068]">
          {/* Services Dropdown Item */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#2d263b] transition-colors whitespace-nowrap cursor-pointer ${
                servicesOpen ? "text-[#2d263b] font-semibold" : ""
              }`}
              aria-expanded={servicesOpen}
            >
              <span>{lang === "ru" ? "Услуги" : lang === "sr" ? "Usluge" : "Services"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#386161]" : "text-[#8c829c]"
                }`}
              />
            </button>

            {/* Dropdown Card */}
            <div
              className={`absolute top-full left-0 pt-2 w-[340px] sm:w-[380px] z-50 transition-all duration-200 origin-top-left ${
                servicesOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="bg-[#faf9fb] border border-[#e5e1eb] rounded-2xl shadow-xl p-2.5 space-y-1">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-[#e5e1eb] hover:bg-white transition-all group/item"
                    >
                      <div className={`p-2 rounded-lg ${item.accentBg} shrink-0 mt-0.5 transition-transform group-hover/item:scale-110`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-xs sm:text-sm text-[#2d263b] group-hover/item:text-[#386161] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#8c829c] px-1.5 py-0.5 rounded bg-[#f1f0f5]">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#585068] leading-snug mt-0.5 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}

                {/* Dropdown footer: Quick Calculator link */}
                <div className="pt-2 mt-1 border-t border-[#e5e1eb] px-2 pb-1">
                  <Link
                    href="/estimate"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between text-[11px] font-mono font-bold text-[#386161] hover:text-[#2d263b] transition-colors py-1"
                  >
                    <span>{lang === "ru" ? "Интерактивный расчет сметы" : lang === "sr" ? "Interaktivna procena projekta" : "Interactive Cost Calculator"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="hover:text-[#2d263b] transition-colors whitespace-nowrap">
            {lang === "ru" ? "Портфолио" : lang === "sr" ? "Portfolio" : "Portfolio"}
          </Link>
          <Link href="/about" className="hover:text-[#386161] transition-colors whitespace-nowrap">
            {lang === "ru" ? "О студии" : lang === "sr" ? "O studiju" : "About"}
          </Link>
          <Link href="/contact" className="hover:text-[#2d263b] transition-colors whitespace-nowrap">
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
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-[#2d263b] hover:bg-[#1f1a29] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md shrink-0"
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
        <div className="lg:hidden border-t border-[#e5e1eb] bg-[#faf9fb]/95 backdrop-blur-xl px-4 py-6 space-y-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-[#e5e1eb]">
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

          {/* Section: Services */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#8c829c] font-bold px-3 mb-1.5">
              {lang === "ru" ? "Услуги студии" : lang === "sr" ? "Usluge studija" : "Our Services"}
            </div>
            <div className="space-y-1">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#2d263b] hover:bg-[#f1f0f5] transition-colors"
                  >
                    <div className={`p-1.5 rounded-lg ${item.accentBg} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section: Main Pages */}
          <div className="pt-2 border-t border-[#e5e1eb]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#8c829c] font-bold px-3 mb-1.5">
              {lang === "ru" ? "О студии & Кейсы" : lang === "sr" ? "O studiju & Radovi" : "Studio & Work"}
            </div>
            <div className="space-y-1">
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
              >
                {lang === "ru" ? "Портфолио" : lang === "sr" ? "Portfolio" : "Portfolio"}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
              >
                {lang === "ru" ? "О студии & Манифест" : lang === "sr" ? "O studiju & Manifest" : "About Studio & Manifesto"}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-[#2d263b] hover:bg-[#f1f0f5]"
              >
                {lang === "ru" ? "Контакты" : lang === "sr" ? "Kontakt" : "Contact"}
              </Link>
            </div>
          </div>

          {/* CTA in mobile menu */}
          <div className="pt-2 border-t border-[#e5e1eb]">
            <Link
              href="/estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-[#faf9fb] bg-[#2d263b] shadow-sm hover:bg-[#1f1a29] transition-colors"
            >
              <span>{lang === "ru" ? "Рассчитать проект" : lang === "sr" ? "Procenite projekat" : "Estimate Project"}</span>
              <ArrowUpRight className="w-4 h-4 text-[#e5e1eb]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
