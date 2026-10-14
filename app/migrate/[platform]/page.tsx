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
} from "lucide-react";

interface Props {
  params: { platform: string };
}

export default function PlatformMigrationPage({ params }: Props) {
  const { lang } = useLanguage();
  const platform = platformsData[params.platform];

  if (!platform) {
    notFound();
  }

  const allPlatforms = Object.values(platformsData);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <Link href="/migrate" className="hover:text-white transition-colors">
            {lang === "ru" ? "Миграция CMS" : "CMS Migration"}
          </Link>
          <span>/</span>
          <span className="text-sky-400">{platform.title[lang]}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold mb-4">
            <span className={`w-2 h-2 rounded-full ${platform.badgeColor}`} />
            <span className="text-slate-300">{platform.category[lang]}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {lang === "ru"
              ? `Миграция с ${platform.title[lang]} на чистый Next.js`
              : `Migrate from ${platform.title[lang]} to Modern Next.js`}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            {platform.metaDescription[lang]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>{lang === "ru" ? "Оценить стоимость миграции" : "Estimate Migration Cost"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white font-semibold text-sm transition-all"
            >
              <span>{lang === "ru" ? "Запросить аудит проекта" : "Request Code Audit"}</span>
            </Link>
          </div>
        </div>

        {/* Platform Pain Points & Solutions */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          
          {/* Pain Points */}
          <div className="p-8 rounded-3xl border border-rose-900/40 bg-rose-950/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                {lang === "ru"
                  ? `С чем сталкиваются владельцы ${platform.title[lang]}`
                  : `Core Challenges on ${platform.title[lang]}`}
              </h2>
            </div>
            <ul className="space-y-4">
              {platform.painPoints[lang].map((pain, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / What You Get */}
          <div className="p-8 rounded-3xl border border-emerald-900/40 bg-emerald-950/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                {lang === "ru"
                  ? "Что вы получаете после миграции на Next.js"
                  : "What You Gain After Next.js Migration"}
              </h2>
            </div>
            <ul className="space-y-4">
              {platform.solutions[lang].map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* GoMVP & Few Hands Delivery Process */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-bold text-white">
              {lang === "ru"
                ? "Как выполняется проект: Инженерия GoMVP + Поддержка Few Hands"
                : "Execution Model: GoMVP Engineering + Few Hands Retainer Support"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GoMVP Part */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-sky-400 font-bold">
                  {lang === "ru" ? "1. Техническая разработка" : "1. Engineering Execution"}
                </span>
                <a
                  href="https://gomvp.dev/en/migrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-sky-400 inline-flex items-center gap-1 font-mono"
                >
                  <span>GoMVP</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {lang === "ru" ? "Перенос и инженерия (GoMVP)" : "Migration & Engineering (GoMVP)"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {platform.whyGoMvp[lang]}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                {lang === "ru"
                  ? "Стек: Next.js 14, React, Go microservices, Edge CDN, PostgreSQL."
                  : "Stack: Next.js 14, React, Go microservices, Edge CDN, PostgreSQL."}
              </div>
            </div>

            {/* Few Hands Part */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                  {lang === "ru" ? "2. Сопровождение & Обучение" : "2. Training & Retainer Support"}
                </span>
                <span className="text-xs text-slate-400 font-mono">Few Hands</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {lang === "ru"
                  ? "Обучение и абонентская поддержка (Few Hands)"
                  : "Staff Onboarding & Retainer Support (Few Hands)"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {platform.fewHandsRole[lang]}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                {lang === "ru"
                  ? "Формат: ежемесячный Retainer (абонплата), персональный менеджер, мониторинг 24/7."
                  : "Model: monthly retainer subscription, dedicated account manager, 24/7 monitoring."}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-sm text-slate-300">
              {lang === "ru"
                ? "Полный перенос базы данных, статей, товаров и 100% гарантия сохранения позиций в SEO."
                : "Lossless migration of articles, products, database, and 100% SEO position retention."}
            </span>
          </div>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 shrink-0"
          >
            <span>{lang === "ru" ? "Рассчитать сроки" : "Calculate Timeline"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Other Platforms Navigation */}
        <div className="mt-20 pt-10 border-t border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">
            {lang === "ru" ? "Миграция с других систем" : "Explore Other Platform Migrations"}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {allPlatforms.map((p) => (
              <Link
                key={p.slug}
                href={`/migrate/${p.slug}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors ${
                  p.slug === platform.slug
                    ? "border-sky-500 bg-sky-500/20 text-sky-300 font-bold"
                    : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700"
                }`}
              >
                {p.title[lang]}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
