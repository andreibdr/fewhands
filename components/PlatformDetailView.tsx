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
import {
  AuditMetricsCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

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
    name: platform.metaTitle[lang] || platform.metaTitle.en,
    description: platform.metaDescription[lang] || platform.metaDescription.en,
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
          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <header className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-xs font-semibold mb-4">
                <span className={`w-2 h-2 rounded-full ${platform.badgeColor}`} />
                <span className="text-[#2d263b]">{platform.category[lang]}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
                {lang === "ru"
                  ? `Миграция с ${platform.title[lang]} на чистый Next.js 15`
                  : lang === "sr"
                  ? `Migracija sa ${platform.title[lang]} na čist Next.js 15`
                  : `Migrate from ${platform.title[lang]} to Modern Next.js 15`}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed">
                {platform.metaDescription[lang]}
              </p>

              <div className="mt-8 flex flex-col items-start gap-2">
                <DoodlePointer
                  text={lang === "ru" ? "быстрый расчет проекта ↘" : lang === "sr" ? "brza procena projekta ↘" : "instant project estimate ↘"}
                  direction="curved-down-right"
                  className="mb-1"
                />
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/estimate?service=migration"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-sm shadow-lg shadow-[#2d263b]/20 transition-all"
                  >
                    <span>{lang === "ru" ? "Оценить стоимость миграции" : lang === "sr" ? "Procenite cenu migracije" : "Estimate Migration Cost"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
                  >
                    <span>{lang === "ru" ? "Запросить аудит проекта" : lang === "sr" ? "Zatražite analizu koda" : "Request Code Audit"}</span>
                  </Link>
                </div>
              </div>
            </header>

            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
              <AuditMetricsCard
                title={lang === "ru" ? "ИНЖЕНЕРНЫЙ АУДИТ СТЕКА" : lang === "sr" ? "INŽENJERSKA REVIZIJA STEKA" : "ENGINEERING BENCHMARK"}
                subtitle={`${platform.title[lang]} → Next.js 15`}
                metrics={[
                  {
                    label: lang === "ru" ? "Время отклика TTFB" : lang === "sr" ? "Vreme odziva TTFB" : "Edge TTFB",
                    value: "< 45ms",
                    color: "text-[#386161]",
                  },
                  {
                    label: lang === "ru" ? "Google Core Web Vitals" : "Core Web Vitals",
                    value: "98–100",
                    color: "text-[#7ea368]",
                  },
                  {
                    label: lang === "ru" ? "Уязвимости плагинов" : lang === "sr" ? "Ranjivosti dodataka" : "Plugin Vulnerabilities",
                    value: "0%",
                    color: "text-[#386161]",
                  },
                  {
                    label: lang === "ru" ? "Абонентская плата CMS" : lang === "sr" ? "Mesečna licenca za CMS" : "Platform Rent Fee",
                    value: "$0/mo",
                    color: "text-[#2d263b]",
                  },
                ]}
                marginError={lang === "ru" ? "±0.00% (чистый код)" : lang === "sr" ? "±0.00% (čist kod)" : "±0.00% (clean code)"}
                rotate="rotate-1"
                className="w-full max-w-sm"
              />
            </div>
          </div>

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
                    : lang === "sr"
                    ? `Sa čime se suočavaju vlasnici ${platform.title[lang]}`
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
                    : lang === "sr"
                    ? "Šta dobijate nakon migracije na Next.js"
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

          {/* Hand-drawn editorial annotations */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <CustomStampBadge
              label={lang === "ru" ? "ЭТАЛОН СКОРОСТИ" : lang === "sr" ? "ETALON BRZINE" : "PERFORMANCE INDEX"}
              caption={
                lang === "ru"
                  ? "Статический пререндеринг и Edge CDN"
                  : lang === "sr"
                  ? "Statički prerendering i Edge CDN"
                  : "Static pre-rendering & Edge CDN"
              }
              starsCount={5}
              className="-rotate-1 max-w-xs shrink-0"
            />

            <CustomPSCard
              noteTitle={lang === "ru" ? "P.S. Архитектурная гарантия:" : lang === "sr" ? "P.S. Arhitektonska garancija:" : "P.S. Migration Guarantee:"}
              text={
                lang === "ru"
                  ? "Ни одна ссылка и ни один байт контента не теряется. 301-редиректы прописываются на уровне Edge-маршрутизации без падения позиций."
                  : lang === "sr"
                  ? "Nijedan link i nijedan bajt sadržaja se ne gubi. Pravila 301 preusmeravanja se podešavaju na Edge nivou bez pada pozicija."
                  : "Every inbound backlink and asset is preserved byte-for-byte. Edge 301 redirect maps ensure zero organic rank loss."
              }
              className="rotate-1 flex-1 w-full"
            />
          </div>

          {/* GoMVP & Few Hands Delivery Process */}
          <section className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="w-6 h-6 text-[#386161]" />
              <h2 className="text-2xl font-bold text-[#2d263b]">
                {lang === "ru"
                  ? "Как выполняется проект: Инженерия GoMVP + Поддержка Few Hands"
                  : lang === "sr"
                  ? "Model realizacije: GoMVP inženjering + Few Hands Retainer podrška"
                  : "Execution Model: GoMVP Engineering + Few Hands Retainer Support"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GoMVP Part */}
              <div className="p-6 rounded-2xl bg-[#faf9fb] border border-[#2d263b]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-[#386161] font-bold">
                      {lang === "ru" ? "1. Техническая разработка" : lang === "sr" ? "1. Tehnički inženjering" : "1. Engineering Execution"}
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
                    {lang === "ru" ? "Перенос и инженерия (GoMVP)" : lang === "sr" ? "Migracija i inženjering (GoMVP)" : "Migration & Engineering (GoMVP)"}
                  </h3>
                  <p className="text-sm text-[#585068] leading-relaxed">
                    {platform.whyGoMvp[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2d263b]/10 text-xs text-[#585068] font-mono">
                  {lang === "ru"
                    ? "Стек: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."
                    : lang === "sr"
                    ? "Stek: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."
                    : "Stack: Next.js 15, React 19, TypeScript, Edge CDN, PostgreSQL."}
                </div>
              </div>

              {/* Few Hands Part */}
              <div className="p-6 rounded-2xl bg-[#faf9fb] border border-[#2d263b]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-[#7ea368] font-bold">
                      {lang === "ru" ? "2. Техподдержка & Сопровождение" : lang === "sr" ? "2. Retainer podrška i održavanje" : "2. Retainer Support & Care"}
                    </span>
                    <span className="text-xs text-[#585068] font-mono">Few Hands</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                    {lang === "ru"
                      ? "Техническая поддержка и сопровождение (Few Hands)"
                      : lang === "sr"
                      ? "Tehnička podrška i održavanje (Few Hands)"
                      : "Ongoing Maintenance & Retainer Support (Few Hands)"}
                  </h3>
                  <p className="text-sm text-[#585068] leading-relaxed">
                    {platform.fewHandsRole[lang]}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2d263b]/10 text-xs text-[#585068] font-mono">
                  {lang === "ru"
                    ? "Формат: ежемесячный Retainer (фиксированный тариф), персональный менеджер, мониторинг 24/7 и онбординг команды."
                    : lang === "sr"
                    ? "Format: predvidljiv mesečni Retainer (fiksna tarifa), posvećeni menadžer, 24/7 nadzor i obuka tima."
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
                  : lang === "sr"
                  ? "Potpun prenos baze podataka, članaka, kataloga i 100% garancija očuvanja organskih pozicija u Google pretrazi."
                  : "Zero-loss transfer of databases, media, and articles with 100% search ranking equity protection."}
              </span>
            </div>
            <Link
              href="/estimate?service=migration"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#386161] hover:text-[#2d263b] shrink-0"
            >
              <span>{lang === "ru" ? "Рассчитать сроки и смету" : lang === "sr" ? "Proračunajte rokove i budžet" : "Calculate Timeline"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Other Platforms Navigation */}
          <nav aria-label="Other migration platforms" className="mt-20 pt-10 border-t border-[#2d263b]/10">
            <h3 className="text-lg font-bold text-[#2d263b] mb-6">
              {lang === "ru" ? "Миграция с других систем и CMS" : lang === "sr" ? "Migracija sa drugih platformi i CMS-ova" : "Explore Other Platform Migrations"}
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
