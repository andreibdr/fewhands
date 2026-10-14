"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";
import {
  Calculator,
  DollarSign,
  Clock,
  Send,
  ShieldCheck,
  Check,
  Mail,
  Repeat,
  Code2,
  Video,
  Sparkles,
  Headphones,
} from "lucide-react";

function EstimatorInner() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();

  // Active calculator mode: 'migration' | 'development' | 'video'
  const [activeTab, setActiveTab] = useState<"migration" | "development" | "video">("migration");

  useEffect(() => {
    const service = searchParams.get("service");
    if (service === "development" || service === "dev") {
      setActiveTab("development");
    } else if (service === "video" || service === "ai-video" || service === "avatar") {
      setActiveTab("video");
    } else if (service === "migration" || service === "migrate" || service === "maintenance") {
      setActiveTab("migration");
    }
  }, [searchParams]);

  // Form states
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // --- Calculator 1: Migration & Maintenance States ---
  const [migPlatform, setMigPlatform] = useState<string>("wordpress");
  const [migScale, setMigScale] = useState<string>("catalog");
  const [migSupport, setMigSupport] = useState<string>("business");

  // --- Calculator 2: Custom Development States ---
  const [devType, setDevType] = useState<string>("landing");
  const [devDesign, setDevDesign] = useState<string>("turnkey");
  const [devMultiLang, setDevMultiLang] = useState<boolean>(false);
  const [devPayment, setDevPayment] = useState<boolean>(false);

  // --- Calculator 3: AI Video & YouTube States ---
  const [vidFormat, setVidFormat] = useState<string>("shorts");
  const [vidCount, setVidCount] = useState<string>("pack3");
  const [vidLanguages, setVidLanguages] = useState<string>("single");
  const [vidScript, setVidScript] = useState<string>("studio");

  // Dynamic Calculation: Migration & Maintenance
  const calcMigration = () => {
    let basePrice = 500;
    let daysMin = 5;
    let daysMax = 9;

    if (migScale === "landing") {
      basePrice = 400;
      daysMin = 3;
      daysMax = 6;
    } else if (migScale === "corporate") {
      basePrice = 750;
      daysMin = 7;
      daysMax = 12;
    } else if (migScale === "catalog") {
      basePrice = 1100;
      daysMin = 10;
      daysMax = 16;
    } else if (migScale === "portal") {
      basePrice = 1800;
      daysMin = 14;
      daysMax = 25;
    }

    if (migPlatform === "bitrix" || migPlatform === "legacy-php") {
      basePrice += 300;
      daysMax += 4;
    }

    let supportLabelRu = "без абонплаты";
    let supportLabelEn = "no retainer";
    let supportPrice = "";

    if (migSupport === "start") {
      supportLabelRu = "+ поддержка $190/мес";
      supportLabelEn = "+ $190/mo retainer";
      supportPrice = " + $190 / mo";
    } else if (migSupport === "business") {
      supportLabelRu = "+ поддержка $450/мес";
      supportLabelEn = "+ $450/mo retainer";
      supportPrice = " + $450 / mo";
    } else if (migSupport === "pro") {
      supportLabelRu = "+ Pro Retainer $950/мес";
      supportLabelEn = "+ $950/mo retainer";
      supportPrice = " + $950 / mo";
    }

    return {
      priceRu: `от $${basePrice}${supportPrice}`,
      priceEn: `from $${basePrice}${supportPrice}`,
      timeRu: `${daysMin}–${daysMax} раб. дней`,
      timeEn: `${daysMin}–${daysMax} business days`,
      detailsRu: `Миграция с ${migPlatform.toUpperCase()} (${migScale}) ${supportLabelRu}`,
      detailsEn: `Migration from ${migPlatform.toUpperCase()} (${migScale}) with ${supportLabelEn}`,
    };
  };

  // Dynamic Calculation: Custom Web Development
  const calcDevelopment = () => {
    let basePrice = 700;
    let daysMin = 6;
    let daysMax = 12;

    if (devType === "landing") {
      basePrice = 650;
      daysMin = 5;
      daysMax = 9;
    } else if (devType === "corporate") {
      basePrice = 1200;
      daysMin = 10;
      daysMax = 18;
    } else if (devType === "catalog") {
      basePrice = 1600;
      daysMin = 14;
      daysMax = 22;
    } else if (devType === "webapp") {
      basePrice = 2400;
      daysMin = 18;
      daysMax = 30;
    }

    if (devDesign === "turnkey") {
      basePrice += 250;
      daysMax += 3;
    } else if (devDesign === "scratch") {
      basePrice += 150;
      daysMax += 2;
    }

    if (devMultiLang) basePrice += 200;
    if (devPayment) basePrice += 250;

    return {
      priceRu: `от $${basePrice}`,
      priceEn: `from $${basePrice}`,
      timeRu: `${daysMin}–${daysMax} раб. дней`,
      timeEn: `${daysMin}–${daysMax} business days`,
      detailsRu: `Сайт с нуля (${devType}), дизайн: ${devDesign}, i18n: ${devMultiLang ? "Да" : "Нет"}`,
      detailsEn: `Custom web dev (${devType}), design: ${devDesign}, i18n: ${devMultiLang ? "Yes" : "No"}`,
    };
  };

  // Dynamic Calculation: AI Video & YouTube Production
  const calcVideo = () => {
    let basePrice = 250;
    let daysMin = 2;
    let daysMax = 4;

    if (vidCount === "single") {
      basePrice = vidFormat === "youtube" ? 350 : 250;
      daysMin = 2;
      daysMax = 4;
    } else if (vidCount === "pack3") {
      basePrice = vidFormat === "youtube" ? 850 : 590;
      daysMin = 4;
      daysMax = 7;
    } else if (vidCount === "pack10") {
      basePrice = vidFormat === "youtube" ? 2200 : 1450;
      daysMin = 8;
      daysMax = 14;
    }

    if (vidLanguages === "dual") basePrice += 150;
    if (vidLanguages === "multi") basePrice += 350;
    if (vidScript === "studio") basePrice += 100;

    return {
      priceRu: `от $${basePrice}`,
      priceEn: `from $${basePrice}`,
      timeRu: `${daysMin}–${daysMax} раб. дней`,
      timeEn: `${daysMin}–${daysMax} business days`,
      detailsRu: `Видеопродакшн: ${vidFormat}, объём: ${vidCount}, языки: ${vidLanguages}, сценарий: ${vidScript}`,
      detailsEn: `Video production: ${vidFormat}, count: ${vidCount}, languages: ${vidLanguages}, script: ${vidScript}`,
    };
  };

  const currentResult =
    activeTab === "migration"
      ? calcMigration()
      : activeTab === "development"
      ? calcDevelopment()
      : calcVideo();

  const handleSendEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `[Калькулятор: ${activeTab.toUpperCase()}]\n${
      lang === "ru" ? currentResult.detailsRu : currentResult.detailsEn
    }\nОценка: ${lang === "ru" ? currentResult.priceRu : currentResult.priceEn}, срок: ${
      lang === "ru" ? currentResult.timeRu : currentResult.timeEn
    }`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:web@fewhands.com?subject=Project Estimate (${activeTab})&body=${encodeURIComponent(
          `Имя: ${name}\nКонтакты: ${contact}\n\n${message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:web@fewhands.com?subject=Project Estimate (${activeTab})&body=${encodeURIComponent(
        `Имя: ${name}\nКонтакты: ${contact}\n\n${message}`
      )}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-sky-400">{lang === "ru" ? "Калькулятор проекта" : "Project Estimator"}</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Специализированная оценка" : "Specialized Project Estimator"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "ru" ? "Калькулятор стоимости и сроков" : "Project Cost & Timeline Estimator"}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {lang === "ru"
              ? "Выберите нужное направление — каждый калькулятор учитывает специфику конкретной задачи."
              : "Select the specific service category — each calculator features tailored parameters and pricing."}
          </p>
        </div>

        {/* 3 Dedicated Service Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {/* Tab 1: Migration */}
          <button
            type="button"
            onClick={() => setActiveTab("migration")}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
              activeTab === "migration"
                ? "border-sky-500 bg-sky-950/40 text-white shadow-lg shadow-sky-500/10 ring-1 ring-sky-500"
                : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === "migration" ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}`}>
              <Repeat className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">
                {lang === "ru" ? "Миграция & Поддержка" : "CMS Migration & Retainer"}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {lang === "ru" ? "Перенос с CMS + абонплата" : "Platform transfer & support"}
              </div>
            </div>
          </button>

          {/* Tab 2: Development */}
          <button
            type="button"
            onClick={() => setActiveTab("development")}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
              activeTab === "development"
                ? "border-indigo-500 bg-indigo-950/40 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500"
                : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === "development" ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-400"}`}>
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">
                {lang === "ru" ? "Разработка с нуля" : "Bespoke Web Development"}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {lang === "ru" ? "Чистый Next.js проект" : "Clean Next.js architecture"}
              </div>
            </div>
          </button>

          {/* Tab 3: Video */}
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
              activeTab === "video"
                ? "border-violet-500 bg-violet-950/40 text-white shadow-lg shadow-violet-500/10 ring-1 ring-violet-500"
                : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === "video" ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-400"}`}>
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">
                {lang === "ru" ? "AI Видео & YouTube" : "AI Avatars & Video"}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {lang === "ru" ? "9:16 Shorts & 16:9 монтаж" : "Turnkey media & avatar clips"}
              </div>
            </div>
          </button>
        </div>

        {/* Dynamic Calculator Container */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl space-y-8">
          
          {/* ======================================================== */}
          {/* CALCULATOR 1: CMS MIGRATION & RETAINER SUPPORT           */}
          {/* ======================================================== */}
          {activeTab === "migration" && (
            <div className="space-y-6">
              
              {/* Step 1: Source Platform */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "1. Исходная платформа (откуда переезжаем)" : "1. Source Platform (Current CMS)"}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "wordpress", label: "WordPress" },
                    { id: "tilda", label: "Tilda" },
                    { id: "webflow", label: "Webflow" },
                    { id: "bitrix", label: "1C-Битрикс" },
                    { id: "insales", label: "InSales / OpenCart" },
                    { id: "shopify", label: "Shopify" },
                    { id: "modx", label: "MODX" },
                    { id: "legacy-php", label: "Самописный PHP" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setMigPlatform(p.id)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-center ${
                        migPlatform === p.id
                          ? "border-sky-500 bg-sky-950/40 text-sky-300 shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Site Scale */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "2. Масштаб и структура сайта" : "2. Website Scope & Hierarchy"}
                </label>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      id: "landing",
                      titleRu: "Лендинг / Промо",
                      titleEn: "Landing / Promo",
                      descRu: "1–5 экранов, формы лидогенерации",
                      descEn: "1–5 sections, conversion forms",
                    },
                    {
                      id: "corporate",
                      titleRu: "Корпоративный сайт",
                      titleEn: "Corporate Site",
                      descRu: "До 25 страниц, статьи, кейсы",
                      descEn: "Up to 25 pages, blog, cases",
                    },
                    {
                      id: "catalog",
                      titleRu: "Каталог / Магазин",
                      titleEn: "Catalog / E-Commerce",
                      descRu: "Категории, фильтры, корзина",
                      descEn: "Faceted search, cart & checkout",
                    },
                    {
                      id: "portal",
                      titleRu: "Крупный портал",
                      titleEn: "Complex Web Portal",
                      descRu: "Базы данных, личный кабинет",
                      descEn: "High-volume database & portal",
                    },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setMigScale(s.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        migScale === s.id
                          ? "border-sky-500 bg-sky-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? s.titleRu : s.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? s.descRu : s.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Retainer Maintenance Package */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "3. Абонентская техподдержка и обучение (Few Hands)" : "3. Ongoing Retainer & Training (Few Hands)"}
                </label>
                <div className="grid sm:grid-cols-4 gap-3">
                  {[
                    {
                      id: "none",
                      nameRu: "Без абонплаты",
                      nameEn: "No Retainer",
                      price: "$0",
                      descRu: "Только разовая сдача проекта",
                      descEn: "One-off turnkey delivery",
                    },
                    {
                      id: "start",
                      nameRu: "Тариф Старт",
                      nameEn: "Starter Retainer",
                      price: "$190/mo",
                      descRu: "Мониторинг 24/7, бэкапы, 3ч правок",
                      descEn: "24/7 Uptime, backups, 3h tweaks",
                    },
                    {
                      id: "business",
                      nameRu: "Бизнес Retainer",
                      nameEn: "Business Retainer",
                      price: "$450/mo",
                      descRu: "Обучение персонала, 10ч доработок",
                      descEn: "Team onboarding, 10h sections",
                    },
                    {
                      id: "pro",
                      nameRu: "Pro & Media",
                      nameEn: "Pro & Media",
                      price: "$950/mo",
                      descRu: "25ч разработки + видеомонтаж",
                      descEn: "25h engineering + video production",
                    },
                  ].map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setMigSupport(plan.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        migSupport === plan.id
                          ? "border-emerald-500 bg-emerald-950/30 text-white shadow-sm ring-1 ring-emerald-500/50"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-white">
                          {lang === "ru" ? plan.nameRu : plan.nameEn}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">{plan.price}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? plan.descRu : plan.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* CALCULATOR 2: CUSTOM NEXT.JS WEB DEVELOPMENT             */}
          {/* ======================================================== */}
          {activeTab === "development" && (
            <div className="space-y-6">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "1. Формат и тип сайта с нуля" : "1. Website Concept & Type"}
                </label>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      id: "landing",
                      titleRu: "Конверсионный лендинг",
                      titleEn: "High-Converting Landing",
                      descRu: "Идеально под контекст и таргетинг",
                      descEn: "Designed for ads & lead capture",
                    },
                    {
                      id: "corporate",
                      titleRu: "Корпоративный сайт",
                      titleEn: "Corporate Hub",
                      descRu: "Услуги, команда, кейсы, блог",
                      descEn: "Multi-page brand authority",
                    },
                    {
                      id: "catalog",
                      titleRu: "Каталог / Магазин",
                      titleEn: "E-Commerce Catalog",
                      descRu: "Быстрая витрина без тяжёлой CMS",
                      descEn: "Sub-second product browsing",
                    },
                    {
                      id: "webapp",
                      titleRu: "Веб-сервис / Личный кабинет",
                      titleEn: "Custom Web App / Portal",
                      descRu: "Интерактивная логика, авторизация",
                      descEn: "Interactive UI & client auth",
                    },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setDevType(t.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        devType === t.id
                          ? "border-indigo-500 bg-indigo-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? t.titleRu : t.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? t.descRu : t.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Design Readiness */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "2. Состояние дизайна и макетов" : "2. Design Readiness"}
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "figma",
                      titleRu: "Есть готовый макет в Figma",
                      titleEn: "Figma design ready",
                      descRu: "Только чистая вёрстка и Next.js код",
                      descEn: "Strictly frontend code & integration",
                    },
                    {
                      id: "scratch",
                      titleRu: "Требуется веб-дизайн",
                      titleEn: "UI/UX design needed",
                      descRu: "Проектирование прототипа и UI",
                      descEn: "Wireframing & custom UI concept",
                    },
                    {
                      id: "turnkey",
                      titleRu: "Полный цикл «под ключ»",
                      titleEn: "Full Turnkey Delivery",
                      descRu: "Дизайн, продающий текст и анимации",
                      descEn: "Copywriting, design & animations",
                    },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDevDesign(d.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        devDesign === d.id
                          ? "border-indigo-500 bg-indigo-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? d.titleRu : d.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? d.descRu : d.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Features */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "3. Дополнительные опции" : "3. Technical Extensions"}
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDevMultiLang(!devMultiLang)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      devMultiLang
                        ? "border-indigo-500 bg-indigo-950/30 text-white"
                        : "border-slate-800 bg-slate-950 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? "Мультиязычность (RU / EN)" : "Full i18n Localization"}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {lang === "ru" ? "Раздельные локали и переключатель" : "Language switcher & dual routing"}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">+$200</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDevPayment(!devPayment)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      devPayment
                        ? "border-indigo-500 bg-indigo-950/30 text-white"
                        : "border-slate-800 bg-slate-950 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? "Эквайринг и онлайн-оплата" : "Online Payment Integration"}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {lang === "ru" ? "Stripe, СБП или банковский шлюз" : "Stripe, bank gateways & checkout"}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">+$250</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* CALCULATOR 3: AI VIDEO AVATARS & YOUTUBE PRODUCTION      */}
          {/* ======================================================== */}
          {activeTab === "video" && (
            <div className="space-y-6">
              
              {/* Step 1: Video Format */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "1. Формат видеоматериалов" : "1. Video Production Format"}
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "shorts",
                      titleRu: "AI-Аватары 9:16 (Shorts / Reels)",
                      titleEn: "AI Avatars 9:16 (Shorts / Reels)",
                      descRu: "Вертикальный формат под соцсети и сайты",
                      descEn: "Vertical mobile format with neural lip-sync",
                    },
                    {
                      id: "youtube",
                      titleRu: "YouTube-выпуски 16:9",
                      titleEn: "YouTube Episodes 16:9",
                      descRu: "Полный монтаж экспертных видео, интро",
                      descEn: "Full editing, dynamic B-roll & sound FX",
                    },
                    {
                      id: "hybrid",
                      titleRu: "Комплекс (Shorts + YouTube)",
                      titleEn: "Hybrid (Shorts + 16:9 Master)",
                      descRu: "Большой ролик + нарезка на вертикалки",
                      descEn: "Long-form master sliced into Shorts clips",
                    },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setVidFormat(f.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        vidFormat === f.id
                          ? "border-violet-500 bg-violet-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? f.titleRu : f.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? f.descRu : f.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Volume / Quantity */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "2. Количество роликов" : "2. Video Batch Quantity"}
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "single",
                      titleRu: "1 ролик (Пилотный выпуск)",
                      titleEn: "1 Video (Pilot Episode)",
                      descRu: "Для тестирования отклика и формата",
                      descEn: "Testing campaign traction",
                    },
                    {
                      id: "pack3",
                      titleRu: "Пакет из 3 роликов",
                      titleEn: "Pack of 3 Videos",
                      descRu: "Оптимально для воронки продаж и рекламы",
                      descEn: "Recommended for sales funnels",
                    },
                    {
                      id: "pack10",
                      titleRu: "Пакет из 10 роликов",
                      titleEn: "Pack of 10 Videos",
                      descRu: "Месячный контент-план под ключ",
                      descEn: "Full monthly editorial pipeline",
                    },
                  ].map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setVidCount(q.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        vidCount === q.id
                          ? "border-violet-500 bg-violet-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? q.titleRu : q.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? q.descRu : q.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Languages & Voiceover */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === "ru" ? "3. Языки озвучки" : "3. Languages & Synthesis"}
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "single",
                      titleRu: "1 язык",
                      titleEn: "Single Language",
                      descRu: "Русский или Английский",
                      descEn: "English or target primary language",
                    },
                    {
                      id: "dual",
                      titleRu: "2 языка (+150$)",
                      titleEn: "Dual Language (+$150)",
                      descRu: "Нейродубляж с сохранением мимики",
                      descEn: "Bilingual sync with matched lip-sync",
                    },
                    {
                      id: "multi",
                      titleRu: "Мультиязычный (+350$)",
                      titleEn: "Global Multi (+$350)",
                      descRu: "3+ мировых языка для экспансии",
                      descEn: "3+ languages for international reach",
                    },
                  ].map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setVidLanguages(l.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        vidLanguages === l.id
                          ? "border-violet-500 bg-violet-950/40 text-white shadow-sm"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-200">
                        {lang === "ru" ? l.titleRu : l.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === "ru" ? l.descRu : l.descEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* COMMON RESULTS & SUBMISSION BAR                          */}
          {/* ======================================================== */}
          <div className="pt-6 border-t border-slate-800 bg-slate-950/80 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {lang === "ru" ? "Предварительный расчёт:" : "Calculated Estimate:"}
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {lang === "ru" ? currentResult.priceRu : currentResult.priceEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sky-400" />
                    <span className="text-base sm:text-lg font-bold text-slate-300">
                      {lang === "ru" ? currentResult.timeRu : currentResult.timeEn}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-mono">
                  {lang === "ru" ? currentResult.detailsRu : currentResult.detailsEn}
                </div>
              </div>

              {/* Direct corporate email link */}
              <a
                href="mailto:web@fewhands.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>web@fewhands.com</span>
              </a>
            </div>

            {/* Direct Form Submission */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {lang === "ru"
                    ? "Заявка на расчет успешно отправлена! Мы свяжемся с вами в течение 1 рабочего дня."
                    : "Estimate inquiry sent successfully! We will contact you within 1 business day."}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSendEstimate} className="grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === "ru" ? "Ваше имя" : "Your Name"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={lang === "ru" ? "Email или телефон для связи" : "Work email or phone"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>{lang === "ru" ? "Отправка..." : "Submitting..."}</span>
                    ) : (
                      <>
                        <span>{lang === "ru" ? "Зафиксировать смету" : "Lock in Estimate"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            {lang === "ru"
              ? "Техническое задание, сроки и бюджет фиксируются до старта работ."
              : "Project scope, delivery milestones, and budget are strictly locked before kickoff."}
          </span>
        </div>

      </div>
    </div>
  );
}

export default function EstimatePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading calculator...</div>}>
      <EstimatorInner />
    </Suspense>
  );
}
