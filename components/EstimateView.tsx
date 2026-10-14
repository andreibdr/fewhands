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
  HelpCircle,
  ChevronDown,
  Layers,
  Cpu,
  FileCheck2,
  Zap,
} from "lucide-react";

function EstimatorInner() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();

  // Active calculator mode: 'migration' | 'development' | 'video'
  const [activeTab, setActiveTab] = useState<"migration" | "development" | "video">("migration");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
  const [name, setName] = useState<string>("" );
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
      supportLabelRu = "+ Enterprise Retainer $950/мес";
      supportLabelEn = "+ $950/mo Enterprise retainer";
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

    if (devMultiLang) {
      basePrice += 200;
      daysMax += 2;
    }

    if (devPayment) {
      basePrice += 250;
      daysMax += 3;
    }

    return {
      priceRu: `от $${basePrice}`,
      priceEn: `from $${basePrice}`,
      timeRu: `${daysMin}–${daysMax} раб. дней`,
      timeEn: `${daysMin}–${daysMax} business days`,
      detailsRu: `Разработка ${devType.toUpperCase()} (${devDesign}${devMultiLang ? " + i18n" : ""}${devPayment ? " + Checkout" : ""})`,
      detailsEn: `Custom ${devType.toUpperCase()} (${devDesign}${devMultiLang ? " + i18n" : ""}${devPayment ? " + Checkout" : ""})`,
    };
  };

  // Dynamic Calculation: AI Video & YouTube Production
  const calcVideo = () => {
    let basePrice = 280;
    let daysMin = 2;
    let daysMax = 4;

    if (vidFormat === "shorts") {
      if (vidCount === "single") {
        basePrice = 120;
        daysMin = 1;
        daysMax = 2;
      } else if (vidCount === "pack3") {
        basePrice = 290;
        daysMin = 2;
        daysMax = 4;
      } else if (vidCount === "pack10") {
        basePrice = 750;
        daysMin = 4;
        daysMax = 7;
      }
    } else if (vidFormat === "youtube") {
      if (vidCount === "single") {
        basePrice = 220;
        daysMin = 2;
        daysMax = 3;
      } else if (vidCount === "pack3") {
        basePrice = 550;
        daysMin = 3;
        daysMax = 6;
      } else if (vidCount === "pack10") {
        basePrice = 1450;
        daysMin = 6;
        daysMax = 12;
      }
    } else if (vidFormat === "avatar") {
      if (vidCount === "single") {
        basePrice = 180;
        daysMin = 1;
        daysMax = 3;
      } else if (vidCount === "pack3") {
        basePrice = 420;
        daysMin = 2;
        daysMax = 5;
      } else if (vidCount === "pack10") {
        basePrice = 1100;
        daysMin = 5;
        daysMax = 9;
      }
    }

    if (vidLanguages === "multilingual") {
      basePrice = Math.round(basePrice * 1.4);
      daysMax += 2;
    }

    if (vidScript === "turnkey") {
      basePrice += 80;
      daysMax += 1;
    }

    return {
      priceRu: `от $${basePrice}`,
      priceEn: `from $${basePrice}`,
      timeRu: `${daysMin}–${daysMax} раб. дней`,
      timeEn: `${daysMin}–${daysMax} business days`,
      detailsRu: `Видео: ${vidFormat.toUpperCase()} (${vidCount}, ${vidLanguages === "multilingual" ? "мультиязычный" : "1 язык"}, ${vidScript})`,
      detailsEn: `Video: ${vidFormat.toUpperCase()} (${vidCount}, ${vidLanguages === "multilingual" ? "multilingual" : "single lang"}, ${vidScript})`,
    };
  };

  const currentResult =
    activeTab === "migration"
      ? calcMigration()
      : activeTab === "development"
      ? calcDevelopment()
      : calcVideo();

  const handleSendEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const estimateData = {
      calculator: activeTab,
      result: currentResult,
      clientName: name,
      contact: contact,
    };

    try {
      fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(estimateData),
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const faqItems = [
    {
      qRu: "Что входит в итоговую фиксированную смету (Fixed Price)?",
      qEn: "What is included in the fixed-price estimate?",
      aRu: "В смету включен полный цикл инжиниринга: архитектурное проектирование, разработка фронтенда на Next.js, настройка бэкенда/CMS, адаптивная верстка, тестирование Core Web Vitals, базовая SEO-разметка (OpenGraph, Schema.org) и перенос контента. Никаких скрытых платежей за хостинг или дополнительные плагины.",
      aEn: "The estimate includes the full engineering lifecycle: architecture design, Next.js frontend development, headless CMS/backend setup, responsive UI styling, Core Web Vitals testing, baseline SEO markup (OpenGraph, Schema.org), and content migration. No hidden hosting or plugin fees.",
    },
    {
      qRu: "Как фиксируются сроки и стоимость до старта работ?",
      qEn: "How are timelines and budgets locked before project kickoff?",
      aRu: "Перед стартом мы составляем подробное техническое задание (Scope of Work) с перечнем всех экранов, интеграций и функционала. Стоимость и сроки фиксируются в договоре. Если в процессе у вас возникают новые пожелания, они выносятся в отдельный этап, не сдвигая релиз базового функционала.",
      aEn: "Before kickoff, we formulate a granular Scope of Work detailing every screen, integration, and API contract. Budget and timeline milestones are legally bound in the contract. Any subsequent change requests are scoped into separate post-launch phases without delaying the core launch.",
    },
    {
      qRu: "Каков порядок оплаты проекта?",
      qEn: "What is the payment schedule and accepted payment methods?",
      aRu: "Стандартная схема оплаты разбивается на этапы: 50% предоплата при запуске проекта, 50% после успешного тестирования на стейджинге и сдачи проекта перед переносом на ваш продакшн-домен. Для крупных проектов возможна разбивка на 3–4 этапа (по спринтам).",
      aEn: "Standard billing follows a milestone model: 50% upfront deposit upon contract signing, and 50% upon final acceptance on staging before production DNS switchover. For enterprise-scale applications, milestones can be divided into 3-4 iterative sprint installments.",
    },
    {
      qRu: "Передаются ли заказчику права на исходный код и доступы?",
      qEn: "Does the client receive 100% intellectual property rights and repository access?",
      aRu: "Да, абсолютно. В отличие от закрытых конструкторов или агентств на проприетарных CMS, мы передаем вам приватный репозиторий GitHub с чистым кодом на TypeScript/Next.js, доступы к CDN Vercel/Cloudflare и подробную документацию. Вы являетесь единственным полноправным владельцем своего цифрового продукта.",
      aEn: "Yes, 100%. Unlike proprietary CMS vendors or agency lock-in traps, we hand over complete GitHub repository ownership with clean TypeScript/Next.js code, cloud CDN credentials, and developer documentation. You retain unencumbered intellectual property ownership.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.qRu,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.aRu,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              {lang === "ru" ? "Главная" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-indigo-600 font-semibold">{lang === "ru" ? "Калькулятор сметы" : "Project Estimator"}</span>
          </nav>

          {/* Hero Header */}
          <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Интерактивный расчет сметы" : "Transparent Pricing Matrix"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === "ru"
                ? "Калькулятор стоимости и сроков проекта"
                : "Calculate Accurate Project Cost & Timelines"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Выберите услугу, стек и параметры проекта. Получите прозрачный предварительный расчет стоимости и сроков до старта переговоров."
                : "Select service domain, tech stack, and scope. Receive an immediate transparent cost and turnaround estimate before discovery kickoff."}
            </p>
          </header>

          {/* Service Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 mb-10 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab("migration")}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "migration"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Repeat className="w-4 h-4 shrink-0" />
              <span className="truncate">{lang === "ru" ? "1. Миграция сайта" : "1. CMS Migration"}</span>
            </button>
            <button
              onClick={() => setActiveTab("development")}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "development"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code2 className="w-4 h-4 shrink-0" />
              <span className="truncate">{lang === "ru" ? "2. Разработка с нуля" : "2. Custom Web"}</span>
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "video"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Video className="w-4 h-4 shrink-0" />
              <span className="truncate">{lang === "ru" ? "3. AI Видео" : "3. AI Video"}</span>
            </button>
          </div>

          {/* Main Calculator Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden p-6 sm:p-10">
            
            {/* TAB 1: MIGRATION & MAINTENANCE */}
            {activeTab === "migration" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-indigo-600" />
                    <span>{lang === "ru" ? "Миграция CMS на Next.js + Поддержка" : "CMS Migration to Next.js + Support"}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {lang === "ru"
                      ? "Перенос любого сайта на ультрабыстрый стек с сохранением 100% SEO-позиций и трафика."
                      : "Zero-downtime transition to headless Next.js preserving all URL structures and search equity."}
                  </p>
                </div>

                {/* Step 1: Source Platform */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Текущая CMS или платформа:" : "Current Platform:"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "wordpress", label: "WordPress" },
                      { id: "tilda", label: "Tilda" },
                      { id: "bitrix", label: "1C-Битрикс" },
                      { id: "webflow", label: "Webflow" },
                      { id: "shopify", label: "Shopify" },
                      { id: "insales", label: "InSales" },
                      { id: "opencart", label: "OpenCart" },
                      { id: "legacy-php", label: "Самопис / PHP" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setMigPlatform(item.id)}
                        className={`p-3 rounded-2xl text-xs sm:text-sm font-semibold border text-left transition-all ${
                          migPlatform === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Scale */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Масштаб и тип сайта:" : "Website Scale & Complexity:"}
                  </label>
                  <div className="grid sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "landing", label: lang === "ru" ? "Лендинг (1–3 стр)" : "Landing (1–3 pages)", desc: "до 5 блоков" },
                      { id: "corporate", label: lang === "ru" ? "Корпоративный" : "Corporate Website", desc: "до 15 страниц" },
                      { id: "catalog", label: lang === "ru" ? "Каталог / Магазин" : "E-Commerce Catalog", desc: "до 500 товаров" },
                      { id: "portal", label: lang === "ru" ? "Портал / Highload" : "Enterprise Portal", desc: "1000+ страниц" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setMigScale(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          migScale === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Retainer Plan */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Тариф технической поддержки (опционально):" : "Maintenance Retainer (Optional):"}
                  </label>
                  <div className="grid sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "none", label: lang === "ru" ? "Без абонплаты" : "No Retainer", price: "$0" },
                      { id: "start", label: lang === "ru" ? "Старт (10 ч/мес)" : "Start (10 hrs/mo)", price: "$190/mo" },
                      { id: "business", label: lang === "ru" ? "Бизнес (25 ч/мес)" : "Business (25 hrs/mo)", price: "$450/mo" },
                      { id: "pro", label: lang === "ru" ? "Enterprise (60 ч/мес)" : "Enterprise (60 hrs/mo)", price: "$950/mo" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setMigSupport(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          migSupport === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] font-mono text-indigo-600 mt-0.5">{item.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CUSTOM DEVELOPMENT */}
            {activeTab === "development" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-indigo-600" />
                    <span>{lang === "ru" ? "Индивидуальная веб-разработка с нуля" : "Custom Web Engineering from Scratch"}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {lang === "ru"
                      ? "Разработка цифровых продуктов на React 19, Next.js 15, TypeScript и Tailwind CSS."
                      : "State-of-the-art web products engineered on Next.js 15, TypeScript, and modern headless APIs."}
                  </p>
                </div>

                {/* Step 1: Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Тип создаваемого продукта:" : "Product Category:"}
                  </label>
                  <div className="grid sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "landing", label: lang === "ru" ? "Промо / Landing" : "High-Convert Landing", desc: "Конверсионная посадочная" },
                      { id: "corporate", label: lang === "ru" ? "Корпоративный сайт" : "Corporate Portal", desc: "Услуги, кейсы, блог" },
                      { id: "catalog", label: lang === "ru" ? "Интернет-магазин" : "E-Commerce App", desc: "Каталог, корзина, фильтры" },
                      { id: "webapp", label: lang === "ru" ? "Веб-сервис / SaaS" : "Web Application", desc: "Личные кабинеты, логика" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDevType(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          devType === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Design */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Дизайн и UI/UX концепция:" : "Design & Prototyping:"}
                  </label>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "turnkey", label: lang === "ru" ? "Дизайн под ключ (Figma)" : "Turnkey Custom Design", desc: "Уникальный стиль" },
                      { id: "ready", label: lang === "ru" ? "Есть готовый макет" : "Ready Figma Assets", desc: "Точная верстка пиксель-в-пиксель" },
                      { id: "scratch", label: lang === "ru" ? "Редизайн текущего сайта" : "Modern Redesign", desc: "Обновление эстетики" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDevDesign(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          devDesign === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Addons */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Дополнительные опции:" : "Engineered Capabilities:"}
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setDevMultiLang(!devMultiLang)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        devMultiLang
                          ? "border-indigo-600 bg-indigo-50/70 text-indigo-900"
                          : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">
                          {lang === "ru" ? "Мультиязычность (i18n)" : "Internationalization (i18n)"}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {lang === "ru" ? "2+ языка с SEO-альтивеями" : "Multi-region routing & canonical tags"}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${devMultiLang ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300"}`}>
                        {devMultiLang && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </label>

                    <label
                      onClick={() => setDevPayment(!devPayment)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        devPayment
                          ? "border-indigo-600 bg-indigo-50/70 text-indigo-900"
                          : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">
                          {lang === "ru" ? "Платежные шлюзы (Stripe / Эквайринг)" : "Payment Gateways (Stripe / Local)"}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {lang === "ru" ? "Прием платежей и вебхуки" : "Secure checkout, webhooks & receipts"}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${devPayment ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300"}`}>
                        {devPayment && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: AI VIDEO & YOUTUBE */}
            {activeTab === "video" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    <span>{lang === "ru" ? "AI Видеопродакшн и Цифровые Аватары" : "AI Video Production & Avatar Presenters"}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {lang === "ru"
                      ? "Генерация продающих видео для сайта, YouTube и Shorts без съемочной группы и камер."
                      : "Commercial videos, AI avatar presenters, and high-CTR social assets generated in 24-48 hours."}
                  </p>
                </div>

                {/* Step 1: Format */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Формат контента:" : "Video Format:"}
                  </label>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "shorts", label: "Shorts / Reels (9:16)", desc: "Вертикальные ролики до 60 сек" },
                      { id: "youtube", label: "YouTube Production (16:9)", desc: "Горизонтальный видеомонтаж" },
                      { id: "avatar", label: "AI Аватар Спикер для Сайта", desc: "Виртуальный ведущий в плеере" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setVidFormat(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          vidFormat === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Volume */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Количество роликов:" : "Production Volume:"}
                  </label>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "single", label: lang === "ru" ? "1 видео (Тестовый ролик)" : "Single Video (Pilot)" },
                      { id: "pack3", label: lang === "ru" ? "Пакет 3 видео (Оптимально)" : "Batch of 3 (Most Popular)" },
                      { id: "pack10", label: lang === "ru" ? "Серия 10 роликов (Контент-план)" : "Full Series of 10 Videos" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setVidCount(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          vidCount === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Localization */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {lang === "ru" ? "Языковая адаптация:" : "Language & Voice:"}
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {[
                      { id: "single", label: lang === "ru" ? "Один язык (RU или EN)" : "Single Language (RU or EN)" },
                      { id: "multilingual", label: lang === "ru" ? "Мультиязычная локализация (RU + EN + EU)" : "Multilingual Suite (RU + EN + EU)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setVidLanguages(item.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all ${
                          vidLanguages === item.id
                            ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm"
                            : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ESTIMATE CALCULATION SUMMARY & LOCK-IN */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  {lang === "ru" ? "Предварительный расчет сметы:" : "Calculated Estimate:"}
                </div>
                <div className="flex items-baseline gap-4 mt-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {lang === "ru" ? currentResult.priceRu : currentResult.priceEn}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                    <Clock className="w-4 h-4" />
                    <span>{lang === "ru" ? currentResult.timeRu : currentResult.timeEn}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500 mt-1.5 font-mono">
                  {lang === "ru" ? currentResult.detailsRu : currentResult.detailsEn}
                </div>
              </div>

              {/* Direct corporate email link */}
              <a
                href="mailto:web@fewhands.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>web@fewhands.com</span>
              </a>
            </div>

            {/* Direct Form Submission */}
            <div className="mt-6">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={lang === "ru" ? "Email или телефон для связи" : "Work email or phone"}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
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
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {lang === "ru"
                ? "Техническое задание, сроки и бюджет фиксируются в договоре до старта работ."
                : "Project scope, delivery milestones, and budget are strictly locked before kickoff."}
            </span>
          </div>

          {/* Deep SEO Guide: How Pricing is Formed */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-4">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Прозрачное ценообразование" : "Cost Breakdown Architecture"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "Как формируется смета веб-проекта: 4 ключевых фактора"
                  : "How Web Engineering Costs Are Formed: 4 Key Drivers"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === "ru"
                  ? "В отличие от шаблонных студий с размытыми почасовыми ставками, Few Hands использует прозрачную матричную модель. Цена складывается из четких инженерных блоков:"
                  : "Unlike opaque agencies that inflate hourly retainers, Few Hands uses a modular pricing model grounded in transparent engineering deliverables:"}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: lang === "ru" ? "1. Архитектура и технический стек" : "1. System Architecture & Modern Stack",
                  desc:
                    lang === "ru"
                      ? "Использование Next.js 15 с серверными компонентами (RSC), Edge CDN-кэшированием и типизацией TypeScript. Чистая архитектура без медленных плагинов требует высокой квалификации инженеров, но окупается нулевыми расходами на обслуживание и молниеносной скоростью."
                      : "Leveraging Next.js 15 React Server Components, Edge CDN caching, and strict TypeScript. Building clean architectures without bulky monolithic plugins demands senior engineers, but eliminates technical debt.",
                  icon: Cpu,
                },
                {
                  title: lang === "ru" ? "2. Объем структуры и сохранение SEO" : "2. Information Architecture & SEO Preservation",
                  desc:
                    lang === "ru"
                      ? "При миграции с CMS критически важен аудит каждого существующего URL: настройка 301-редиректов, перенос мета-тегов, микроразметки Schema.org и канонических ссылок. Это защищает ваш органический поисковый трафик от любых просадок."
                      : "During CMS migration, preserving existing URL equity via exact 301 redirect mappings, canonical tags, and structured JSON-LD data prevents traffic loss and positions pages higher in search.",
                  icon: Layers,
                },
                {
                  title: lang === "ru" ? "3. Внешние интеграции и API" : "3. API Contracts & External Integrations",
                  desc:
                    lang === "ru"
                      ? "Подключение платежных систем (Stripe, CloudPayments), синхронизация с ERP (1C, МойСклад), CRM-системами (Bitrix24, amoCRM) и AI-сервисами (OpenAI, HeyGen). Каждая интеграция проектируется с надежной обработкой ошибок и вебхуков."
                      : "Connecting payment gateways, ERP inventories, CRM webhooks, and generative AI APIs. Each endpoint is hardened with retry routines, payload validation, and asynchronous webhooks.",
                  icon: Zap,
                },
                {
                  title: lang === "ru" ? "4. Адаптивность и интерактивный UI/UX" : "4. Responsive Layouts & High-CTR Motion",
                  desc:
                    lang === "ru"
                      ? "Отрисовка в Figma, адаптация под все разрешения мобильных экранов, плавные микроанимации и оптимизация Core Web Vitals (LCP < 0.8s, CLS 0.00). Сайт выглядит премиально и конвертирует посетителей на любом устройстве."
                      : "Figma design systems, fluid mobile viewport adaptation, subtle GPU micro-animations, and strict Core Web Vitals optimization to guarantee maximum conversion lift.",
                  icon: ShieldCheck,
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/60 text-indigo-600 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deep SEO Guide: FAQ Accordion */}
          <section className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Частые вопросы о сметах" : "Estimation FAQ"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru" ? "Вопросы и ответы по стоимости и условиям" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-indigo-600 transition-colors"
                  >
                    <span>{lang === "ru" ? item.qRu : item.qEn}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {lang === "ru" ? item.aRu : item.aEn}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export const EstimateView: React.FC = () => {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading calculator...</div>}>
      <EstimatorInner />
    </Suspense>
  );
};
