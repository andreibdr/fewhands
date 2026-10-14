"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { platformsData } from "@/lib/platforms";
import { ArrowRight, Handshake, ExternalLink, ShieldCheck, Headphones, GraduationCap } from "lucide-react";

export default function MigrationHubPage() {
  const { lang } = useLanguage();
  const platforms = Object.values(platformsData);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-sky-400">{lang === "ru" ? "Миграция CMS" : "CMS Migration"}</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-4">
            <span>{lang === "ru" ? "Хаб модернизации платформ" : "Platform Modernization Hub"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {lang === "ru"
              ? "Миграция сайтов и магазинов с устаревших CMS на Next.js"
              : "Migrate Websites & Stores from Legacy CMS to Next.js"}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {lang === "ru"
              ? "Избавьтесь от плагинного ада WordPress, ограничений конструкторов Tilda/Webflow и медлительности Битрикса. Переносим проекты на сверхбыстрый стек Next.js со 100/100 по Google PageSpeed и сохранением всех позиций в SEO."
              : "Free your business from WordPress plugin vulnerabilities, builder caps, and sluggish monolithic architectures. Seamless migration to Next.js with preserved SEO equity."}
          </p>
        </div>

        {/* Model Division of Responsibility Banner (GoMVP + Few Hands) */}
        <div className="mt-12 p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                {lang === "ru" ? "Как устроена работа: Тандем GoMVP & Few Hands" : "Delivery Model: GoMVP & Few Hands Tandem"}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === "ru"
                  ? "Четкое разделение ответственности между глубокой инженерией и заботливой поддержкой"
                  : "Clear division between technical execution and ongoing client support"}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GoMVP Role */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-sky-400">
                    {lang === "ru" ? "Техническая инженерия" : "Engineering Execution"}
                  </span>
                  <a
                    href="https://gomvp.dev/en/migrate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-sky-400 font-mono"
                  >
                    <span>gomvp.dev</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === "ru" ? "Наш партнёр GoMVP" : "Our Partner GoMVP"}
                </h3>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                  <li>• Глубокий аудит старой архитектуры и перенос баз данных</li>
                  <li>• Разработка кастомного бэкенда на Go и микросервисов</li>
                  <li>• Верстка и интеграция на React / Next.js</li>
                  <li>• Настройка серверной инфраструктуры и бесперебойного развертывания</li>
                </ul>
              </div>
            </div>

            {/* Few Hands Role */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-400">
                    {lang === "ru" ? "Обучение & Сопровождение" : "Training & Retainer Support"}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Few Hands</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === "ru" ? "Студия Few Hands" : "Few Hands Studio"}
                </h3>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                  <li>• Первичный консалтинг, сбор требований и контроль ТЗ</li>
                  <li>• <strong>Обучение вашей команды</strong> работе с новой панелью и каталогом</li>
                  <li>• <strong>Ежемесячная техподдержка по абонплате</strong> (обновление контента, баннеров, страниц)</li>
                  <li>• 24/7 мониторинг доступности, резервные копии и медиа-сопровождение</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Matrix Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === "ru" ? "Выберите вашу платформу" : "Choose Your Current Platform"}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {lang === "ru"
                  ? "Детальный разбор проблем платформы и план переезда"
                  : "In-depth platform breakdown & migration blueprint"}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <Link
                key={p.slug}
                href={`/migrate/${p.slug}`}
                className="p-6 rounded-3xl border border-slate-800 bg-slate-900/80 hover:bg-slate-900 hover:border-sky-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold text-white px-2.5 py-1 rounded-lg ${p.badgeColor}`}>
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
                      {lang === "ru" ? "Подробнее →" : "Details →"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {p.painPoints[lang][0]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-400">
                  <span>{lang === "ru" ? "План миграции" : "Migration Blueprint"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Guarantees Strip */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">
                {lang === "ru" ? "100% Сохранение SEO" : "100% SEO Retention"}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Точный перенос URL, метатегов и настройка 301-редиректов без потери позиций."
                  : "Lossless migration of URL hierarchy, metadata, and 301 redirects."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">
                {lang === "ru" ? "Обучение персонала" : "Team Onboarding"}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Пошаговые видео-инструкции и консультации для ваших менеджеров от Few Hands."
                  : "Video guides and hands-on consulting for your content team."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
            <Headphones className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">
                {lang === "ru" ? "Ежемесячный Retainer" : "Monthly Retainer"}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Регулярная поддержка по абонплате: доработки, контент, бэкапы и мониторинг."
                  : "Continuous monthly support: feature tweaks, content updates, and monitoring."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
