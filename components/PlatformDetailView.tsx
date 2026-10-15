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
            <Link href="/migrate" className="hover:text-[#2d263b] transition-colors">
              {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
            </Link>
            <span>/</span>
            <span className="text-[#386161] font-semibold">{platform.title[lang]}</span>
          </nav>

          {/* Hero Section */}
          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-xs font-semibold mb-4">
              <span className={`w-2 h-2 rounded-full ${platform.badgeColor}`} />
              <span className="text-[#2d263b]">{platform.category[lang]}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
              {lang === "ru"
                ? `Миграция с ${platform.title[lang]} на чистый Next.js 15`
                : `Migrate from ${platform.title[lang]} to Modern Next.js 15`}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed">
              {platform.metaDescription[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/estimate?service=migration"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-sm shadow-lg shadow-[#2d263b]/20 transition-all"
              >
                <span>{lang === "ru" ? "Оценить стоимость миграции" : "Estimate Migration Cost"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
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
          <section className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="w-6 h-6 text-[#386161]" />
              <h2 className="text-2xl font-bold text-[#2d263b]">
                {lang === "ru"
                  ? "Как выполняется проект: Инженерия GoMVP + Поддержка Few Hands"
                  : "Execution Model: GoMVP Engineering + Few Hands Retainer Support"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GoMVP Part */}
              <div className="p-6 rounded-2xl bg-[#faf9fb] border border-[#2d263b]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-[#386161] font-bold">
                      {lang === "ru" ? "1. Техническая разработка" : "1. Engineering Execution"}
                    </span>
                    <a
                      href="https://gomvp.dev/en/migrate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#585068] hover:text-[#386161] inline-flex items-center gap-1 font-mono transition"
                    >
                      <span>GoMVP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                    {lang === "ru" ? "Перенос и инженерия (GoMVP)" : "Migration & Engineering (GoMVP)"}
                  </h3>
                  <p className="text-sm text-[#585068] leading-relaxed">
                    {platform.whyGoMvp[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2d263b]/10 text-xs text-[#585068] font-mono">
                  {lang === "ru"
                    ? "Стек: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."
                    : "Stack: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."}
                </div>
              </div>

              {/* Few Hands Part */}
              <div className="p-6 rounded-2xl bg-[#faf9fb] border border-[#2d263b]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-[#7ea368] font-bold">
                      {lang === "ru" ? "2. Техподдержка & Сопровождение" : "2. Retainer Support & Care"}
                    </span>
                    <span className="text-xs text-[#585068] font-mono">Few Hands</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                    {lang === "ru"
                      ? "Техническая поддержка и сопровождение (Few Hands)"
                      : "Ongoing Maintenance & Retainer Support (Few Hands)"}
                  </h3>
                  <p className="text-sm text-[#585068] leading-relaxed">
                    {platform.fewHandsRole[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2d263b]/10 text-xs text-[#585068] font-mono">
                  {lang === "ru"
                    ? "Формат: ежемесячный Retainer (фиксированный тариф), персональный менеджер, мониторинг 24/7 и онбординг команды."
                    : "Model: predictable monthly retainer, dedicated technical account manager, 24/7 monitoring, and staff onboarding."}
                </div>
              </div>
            </div>
          </section>

          {/* Guarantees Box */}
          <div className="mt-12 p-6 rounded-3xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#7ea368] shrink-0" />
              <span className="text-sm text-[#2d263b]">
                {lang === "ru"
                  ? "Полный перенос базы данных, статей, каталогов и 100% гарантия сохранения органических позиций в Google и Яндекс."
                  : "Zero-loss transfer of databases, media, and articles with 100% search ranking equity protection."}
              </span>
            </div>
            <Link
              href="/estimate?service=migration"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#386161] hover:text-[#2d263b] shrink-0"
            >
              <span>{lang === "ru" ? "Рассчитать сроки и смету" : "Calculate Timeline"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Other Platforms Navigation */}
          <nav aria-label="Other migration platforms" className="mt-20 pt-10 border-t border-[#2d263b]/10">
            <h3 className="text-lg font-bold text-[#2d263b] mb-6">
              {lang === "ru" ? "Миграция с других систем и CMS" : "Explore Other Platform Migrations"}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {allPlatforms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/migrate/${p.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    p.slug === platform.slug
                      ? "border-[#2d263b] bg-[#f1f0f5] text-[#2d263b] font-bold"
                      : "border-[#2d263b]/10 bg-white text-[#585068] hover:border-[#2d263b]/30 shadow-sm"
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
