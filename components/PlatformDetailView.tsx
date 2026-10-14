"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import { platformsData } from "@/lib/platforms";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Handshake,
  ExternalLink,
  ShieldCheck,
  Zap,
  Repeat,
  Layers,
  GraduationCap,
  Headphones,
} from "lucide-react";

interface PlatformDetailViewProps {
  platformSlug: string;
}

export const PlatformDetailView: React.FC<PlatformDetailViewProps> = ({ platformSlug }) => {
  const { lang } = useLanguage();
  const platform = platformsData[platformSlug];

  if (!platform) {
    notFound();
  }

  const allPlatforms = Object.values(platformsData);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: platform.metaTitle.ru,
    description: platform.metaDescription.ru,
    provider: {
      "@type": "Organization",
      name: "Few Hands & GoMVP",
      url: "https://fewhands.com",
    },
    serviceType: "Website Migration",
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              {lang === "ru" ? "Главная" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/migrate" className="hover:text-slate-900 transition-colors">
              {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
            </Link>
            <span>/</span>
            <span className="text-indigo-600 font-semibold">{platform.title[lang]}</span>
          </nav>

          {/* Hero Section */}
          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold mb-4">
              <span className={`w-2 h-2 rounded-full ${platform.badgeColor}`} />
              <span className="text-slate-700">{platform.category[lang]}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === "ru"
                ? `Миграция с ${platform.title[lang]} на чистый Next.js 15`
                : `Migrate from ${platform.title[lang]} to Modern Next.js 15`}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              {platform.metaDescription[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/estimate?service=migration"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all"
              >
                <span>{lang === "ru" ? "Оценить стоимость миграции" : "Estimate Migration Cost"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-sm transition-all"
              >
                <span>{lang === "ru" ? "Запросить аудит проекта" : "Request Code Audit"}</span>
              </Link>
            </div>
          </header>

          {/* Platform Pain Points & Solutions */}
          <section className="mt-16 grid lg:grid-cols-2 gap-8">
            
            {/* Pain Points */}
            <div className="p-8 rounded-3xl border border-rose-200/80 bg-rose-50/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-rose-100 text-rose-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === "ru"
                    ? `С чем сталкиваются владельцы ${platform.title[lang]}`
                    : `Core Bottlenecks on ${platform.title[lang]}`}
                </h2>
              </div>
              <ul className="space-y-4">
                {platform.painPoints[lang].map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions / What You Get */}
            <div className="p-8 rounded-3xl border border-emerald-200/80 bg-emerald-50/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === "ru"
                    ? "Что вы получаете после миграции на Next.js"
                    : "What You Gain After Next.js Migration"}
                </h2>
              </div>
              <ul className="space-y-4">
                {platform.solutions[lang].map((sol, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* GoMVP & Few Hands Delivery Process */}
          <section className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {lang === "ru"
                  ? "Как выполняется проект: Инженерия GoMVP + Поддержка Few Hands"
                  : "Execution Model: GoMVP Engineering + Few Hands Retainer Support"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GoMVP Part */}
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-indigo-600 font-bold">
                      {lang === "ru" ? "1. Техническая разработка" : "1. Engineering Execution"}
                    </span>
                    <a
                      href="https://gomvp.dev/en/migrate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-indigo-600 inline-flex items-center gap-1 font-mono transition"
                    >
                      <span>GoMVP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {lang === "ru" ? "Перенос и инженерия (GoMVP)" : "Migration & Engineering (GoMVP)"}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {platform.whyGoMvp[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
                  {lang === "ru"
                    ? "Стек: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."
                    : "Stack: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."}
                </div>
              </div>

              {/* Few Hands Part */}
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-emerald-600 font-bold">
                      {lang === "ru" ? "2. Сопровождение & Обучение" : "2. Training & Retainer Support"}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Few Hands</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {lang === "ru"
                      ? "Обучение и абонентская поддержка (Few Hands)"
                      : "Staff Onboarding & Retainer Support (Few Hands)"}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {platform.fewHandsRole[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
                  {lang === "ru"
                    ? "Формат: ежемесячный Retainer (абонплата), персональный менеджер, мониторинг 24/7."
                    : "Model: monthly retainer subscription, dedicated account manager, 24/7 monitoring."}
                </div>
              </div>
            </div>
          </section>

          {/* Guarantees Box */}
          <div className="mt-12 p-6 rounded-3xl bg-white/90 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm text-slate-700">
                {lang === "ru"
                  ? "Полный перенос базы данных, статей, каталогов и 100% гарантия сохранения органических позиций в Google и Яндекс."
                  : "Zero-loss transfer of databases, media, and articles with 100% search ranking equity protection."}
              </span>
            </div>
            <Link
              href="/estimate?service=migration"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 shrink-0"
            >
              <span>{lang === "ru" ? "Рассчитать сроки и смету" : "Calculate Timeline"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Other Platforms Navigation */}
          <nav aria-label="Other migration platforms" className="mt-20 pt-10 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              {lang === "ru" ? "Миграция с других систем и CMS" : "Explore Other Platform Migrations"}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {allPlatforms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/migrate/${p.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    p.slug === platform.slug
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-bold"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {p.title[lang]}
                </Link>
              ))}
            </div>
          </nav>

        </div>
      </div>
    </>
  );
};
