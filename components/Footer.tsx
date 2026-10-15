"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-[#e5e1eb] bg-[#faf9fb]/90 backdrop-blur-md py-16 text-[#585068]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3.5 group">
              <img
                src="/logo.png"
                alt="Few Hands"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                style={{ imageRendering: "auto" }}
              />
            </Link>
            <p className="text-xs text-[#585068] leading-relaxed mb-4">
              {lang === "ru"
                ? "Инженерная студия веб-разработки: миграция с устаревших CMS, абонентское сопровождение (Retainer) и AI-видеопродакшн."
                : "Boutique web engineering studio: legacy CMS migrations, retainer support, and generative AI video."}
            </p>
            <div className="text-xs text-[#8c829c]">
              © 2008–{new Date().getFullYear()} Few Hands Studio.
            </div>
            <div className="flex items-center gap-2 mt-3 text-[11px] text-[#8c829c]">
              <span>👌 Clean Next.js Code</span>
              <span>•</span>
              <span>Zero Bloat</span>
            </div>
          </div>

          {/* Col 2: Migration Hub */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#2d263b] font-bold mb-4">
              {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/migrate/wordpress" className="hover:text-[#386161] transition">
                  WordPress / WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/migrate/tilda" className="hover:text-[#386161] transition">
                  Tilda Publishing
                </Link>
              </li>
              <li>
                <Link href="/migrate/webflow" className="hover:text-[#386161] transition">
                  Webflow
                </Link>
              </li>
              <li>
                <Link href="/migrate/bitrix" className="hover:text-[#386161] transition">
                  1C-Битрикс
                </Link>
              </li>
              <li>
                <Link href="/migrate/insales" className="hover:text-[#386161] transition">
                  InSales / OpenCart
                </Link>
              </li>
              <li>
                <Link href="/migrate" className="text-[#386161] font-semibold hover:underline">
                  {lang === "ru" ? "Все платформы →" : "All platforms →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#2d263b] font-bold mb-4">
              {lang === "ru" ? "Услуги студии" : "Studio Services"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/development" className="hover:text-[#4b6c8c] transition">
                  {lang === "ru" ? "Создание сайтов с нуля" : "Custom Web Engineering"}
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-[#c6814b] transition">
                  {lang === "ru" ? "Абонентская техподдержка" : "Monthly Retainer Support"}
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-[#c6814b] transition">
                  {lang === "ru" ? "Обучение персонала" : "Staff Onboarding & Training"}
                </Link>
              </li>
              <li>
                <Link href="/ai-video" className="hover:text-[#9c386d] transition">
                  {lang === "ru" ? "AI Видео-аватары (9:16)" : "AI Video Avatars (9:16)"}
                </Link>
              </li>
              <li>
                <Link href="/ai-video" className="hover:text-[#9c386d] transition">
                  {lang === "ru" ? "Монтаж YouTube (16:9)" : "YouTube Production (16:9)"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Partner */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#2d263b] font-bold mb-4">
              {lang === "ru" ? "Связь & Партнёр" : "Contact & Partner"}
            </h4>
            <ul className="space-y-2.5 text-xs mb-4">
              <li>
                <a href="mailto:web@fewhands.com" className="hover:text-[#9c386d] transition font-semibold text-[#2d263b]">
                  web@fewhands.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2d263b] transition">
                  {lang === "ru" ? "Форма обратной связи" : "Online Inquiry"}
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-[#2d263b] transition">
                  {lang === "ru" ? "Калькулятор проекта" : "Project Estimator"}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#2d263b] transition">
                  {lang === "ru" ? "Портфолио кейсов" : "Case Studies Portfolio"}
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#e5e1eb]">
              <a
                href="https://gomvp.dev/en/migrate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#8c829c] hover:text-[#2d263b] transition"
              >
                <span>{lang === "ru" ? "Инженерный партнёр GoMVP" : "Engineering Partner GoMVP"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
