"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { platformsData } from "@/lib/platforms";
import {
  ArrowRight,
  Handshake,
  ExternalLink,
  ShieldCheck,
  Headphones,
  GraduationCap,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Search,
  FileCheck2,
  Cpu,
} from "lucide-react";

export const MigrateHubView: React.FC = () => {
  const { lang } = useLanguage();
  const platforms = Object.values(platformsData);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const comparisonRows = [
    {
      metric: lang === "ru" ? "Время отклика (TTFB)" : "Time to First Byte (TTFB)",
      legacy: lang === "ru" ? "600–2500 мс (задержка MySQL / PHP)" : "600–2,500ms (PHP/MySQL query latency)",
      nextjs: lang === "ru" ? "20–50 мс (глобальный Edge CDN)" : "20–50ms (Global Edge CDN caching)",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Google Core Web Vitals (LCP)" : "Google Core Web Vitals (LCP)",
      legacy: lang === "ru" ? "Часто в красной / жёлтой зоне (3–6 сек)" : "Often red/yellow range (3.5–6.0s)",
      nextjs: lang === "ru" ? "95–100 / 100 зелёная зона (< 0.8 сек)" : "95–100 / 100 green range (< 0.8s)",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Безопасность и уязвимости" : "Security & Exploit Surface",
      legacy: lang === "ru" ? "Постоянный риск инъекций через плагины" : "High risk via outdated plugin exploits",
      nextjs: lang === "ru" ? "100% защита: база данных скрыта от витрины" : "Headless immunity: no exposed database",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Плата за лицензии и модули" : "License & Builder Fees",
      legacy: lang === "ru" ? "Ежемесячная абонплата за конструктор / модули" : "Recurring platform tax & app subscriptions",
      nextjs: lang === "ru" ? "$0 — код и инфраструктура принадлежат вам" : "$0 — 100% proprietary code ownership",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Поведение при пиковых нагрузках" : "Peak Traffic Resilience",
      legacy: lang === "ru" ? "Падение сайта при наплыве из-за нехватки RAM" : "Server crashes under campaign spikes",
      nextjs: lang === "ru" ? "Автоматическое масштабирование Serverless" : "Infinite elastic serverless scaling",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Владение исходным кодом" : "Source Code Ownership",
      legacy: lang === "ru" ? "Зависимость от платформы (Vendor lock-in)" : "Vendor lock-in on hosted builders",
      nextjs: lang === "ru" ? "Полный доступ к репозиторию GitHub" : "Full access to git repository",
      status: "win",
    },
  ];

  const seoProtocols = [
    {
      step: "01",
      title: lang === "ru" ? "Полный аудит структуры URL" : "Complete URL Structure Crawl",
      desc:
        lang === "ru"
          ? "Сканируем текущий сайт краулером, фиксируем каждый существующий URL, канонические адреса и вложенность разделов."
          : "Crawling current site hierarchy, mapping every existing indexable URL, canonical path, and taxonomy node.",
    },
    {
      step: "02",
      title: lang === "ru" ? "Матрица 301-редиректов" : "301 Redirect Architecture",
      desc:
        lang === "ru"
          ? "Все измененные адреса связываются строгими правилами 301-редиректов на уровне Edge CDN. Ни один входящий бэклинк не теряется."
          : "Every altered endpoint is mapped via serverless Edge 301 rules. Inbound backlinks and Google index remain fully intact.",
    },
    {
      step: "03",
      title: lang === "ru" ? "Перенос метаданных и Schema.org" : "Metadata & Schema.org Sync",
      desc:
        lang === "ru"
          ? "Title, Description, заголовки H1–H3, OpenGraph-разметка и JSON-LD микроразметка переносятся байт-в-байт без искажений."
          : "Title tags, meta descriptions, H1-H3 semantics, OpenGraph, and JSON-LD structured schemas preserved with 100% fidelity.",
    },
    {
      step: "04",
      title: lang === "ru" ? "Ускорение Core Web Vitals" : "Core Web Vitals Maximize",
      desc:
        lang === "ru"
          ? "Google официально ранжирует быстрые сайты выше. Достижение 95–100 по PageSpeed даёт естественный буст позиций в поисковой выдаче."
          : "Google search algorithm directly rewards sub-second mobile page loads, boosting organic ranking signals post-migration.",
    },
    {
      step: "05",
      title: lang === "ru" ? "Контроль Search Console" : "Search Console Verification",
      desc:
        lang === "ru"
          ? "Отправляем свежие sitemap.xml, контролируем переобход страниц роботами и отсутствие ошибок 404 в течение первых 30 дней."
          : "Deploying updated XML sitemaps and monitoring real-time crawl indexing in Google Search Console for zero 404 errors.",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Не просядут ли позиции сайта в Google и Яндекс после миграции?"
          : "Will our organic Google search rankings drop after migrating to Next.js?",
      a:
        lang === "ru"
          ? "При профессиональной миграции позиции не только сохраняются, но и вырастают. Мы проводим предварительный аудит, переносим всю структуру URL один к одному, настраиваем серверные 301-редиректы и выводим мобильную скорость в зеленую зону (LCP < 0.8с). Поисковые системы поощряют быстрый и доступный Next.js сайт более высокими позициями."
          : "With professional migration engineering, positions do not drop — they typically improve. We preserve identical URL slugs, deploy edge 301 redirect mappings, and elevate Core Web Vitals into the green zone (LCP < 0.8s). Search algorithms favor lightning-fast serverless architectures.",
    },
    {
      q:
        lang === "ru"
          ? "В чём преимущество тандема GoMVP + Few Hands перед обычной веб-студией?"
          : "What is the advantage of the GoMVP + Few Hands tandem over a traditional agency?",
      a:
        lang === "ru"
          ? "Большинство веб-студий пытаются делать всё сразу средними силами. В нашем тандеме действует строгое разделение специализаций: партнёр GoMVP — это высококлассная техническая инженерия (бэкенд на Go, масштабируемые API, чистый React/Next.js без мусора). Студия Few Hands — это забота о клиенте: аудит проекта, онбординг и обучение ваших менеджеров, а также ежемесячная поддержка сайта по абонплате."
          : "Traditional agencies often rely on overloaded generalists. Our model decouples deep technical execution from client operations: GoMVP delivers high-performance engineering (Go microservices, clean React/Next.js), while Few Hands provides discovery consulting, hands-on staff training, and reliable monthly retainer maintenance.",
    },
    {
      q:
        lang === "ru"
          ? "Как происходит перенос интернет-магазина без остановки продаж?"
          : "How do you migrate an e-commerce catalog without interrupting live orders?",
      a:
        lang === "ru"
          ? "Миграция интернет-магазина ведется на изолированном стейджинговом сервере. Ваш действующий магазин продолжает принимать заказы в обычном режиме. В день переключения домена (DNS switch) мы запускаем финальную дельта-синхронизацию актуальных заказов и клиентов. Переключение занимает считанные минуты без простоя в продажах."
          : "We engineer e-commerce migrations in an isolated staging environment while your existing store processes live transactions without interruption. During DNS switchover, an automated delta-sync bridges live orders and stock. Total cutover takes minutes with zero downtime.",
    },
    {
      q:
        lang === "ru"
          ? "Смогут ли наши контент-менеджеры редактировать тексты и товары?"
          : "Will our non-technical content managers be able to edit pages and products?",
      a:
        lang === "ru"
          ? "Да, абсолютно. Мы подключаем удобную Headless CMS (Strapi, Sanity или нативную админку). Ваши сотрудники получают чистый, быстрый интерфейс без технических сложностей. Кроме того, Few Hands записывает персонализированные скринкасты и обучает ваших сотрудников работе с новой системой."
          : "Yes. We configure an intuitive Headless CMS (Strapi, Sanity, or lightweight bespoke dashboard). Content editors enjoy clean, instant visual editing. In addition, Few Hands produces custom video walkthroughs and provides onboarding support for your internal team.",
    },
    {
      q:
        lang === "ru"
          ? "Что входит в гарантию безопасности и отказоустойчивости?"
          : "What guarantees are provided regarding security and uptime?",
      a:
        lang === "ru"
          ? "Благодаря архитектуре Headless витрина Next.js полностью изолирована от базы данных и административной панели. Сайт физически неуязвим для традиционных SQL-инъекций и атак на плагины. Статические страницы кэшируются на глобальной сети Edge CDN, выдерживая любые пиковые нагрузки и DDoS-атаки."
          : "Because the frontend is headless and pre-rendered on Edge CDN, databases and admin panels are entirely obscured from public access. The site is impervious to common SQL injection, cross-site scripting, and CMS plugin vulnerabilities while withstanding massive traffic spikes.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              {lang === "ru" ? "Главная" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-indigo-600 font-semibold">{lang === "ru" ? "Миграция CMS" : "CMS Migration Hub"}</span>
          </nav>

          {/* Hero Section */}
          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Безопасный перенос сайтов на современный стек" : "Zero-Downtime Jamstack Migration"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === "ru"
                ? "Миграция с медленных CMS на Next.js под ключ"
                : "Enterprise CMS Migration to Next.js & Serverless"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Переносим сайты с WordPress, Tilda, 1C-Битрикс, Webflow, InSales, Shopify и самописных систем на архитектуру Next.js 15. Гарантируем 100% сохранение SEO-позиций, ускорение загрузки до 0.8 секунд и нулевую абонплату за конструкторы."
                : "Seamlessly migrate legacy websites from WordPress, Tilda, Bitrix, Webflow, InSales, and custom PHP monoliths to Next.js 15. Maintain 100% SEO rankings, achieve sub-second TTFB, and eliminate recurring builder fees forever."}
            </p>
          </header>

          {/* Strategic Alliance Banner */}
          <div className="mt-10 p-6 rounded-3xl border border-indigo-200/80 bg-gradient-to-r from-indigo-50/70 via-white to-slate-50/70 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    {lang === "ru" ? "Стратегический альянс" : "Strategic Engineering Partnership"}
                  </span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 font-mono px-2 py-0.5 rounded-full font-bold">
                    GoMVP × Few Hands
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  {lang === "ru"
                    ? "GoMVP отвечает за технический инжиниринг, Few Hands — за аудит, обучение и абонентскую поддержку"
                    : "GoMVP powers core engineering; Few Hands handles audits, staff onboarding, and ongoing retainer support"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {lang === "ru"
                    ? "Вы получаете уровень разработки от senior-архитекторов GoMVP и заботливый сервис Few Hands: понятные консультации, видео-инструкции для контентщиков и надежное сопровождение 24/7."
                    : "Clients benefit from senior-level microservice engineering combined with hands-on human support, staff walkthroughs, and dependable monthly maintenance."}
                </p>
              </div>
            </div>
            <Link
              href="/estimate?service=migration"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/20 shrink-0 transition"
            >
              <span>{lang === "ru" ? "Рассчитать смету" : "Calculate Migration"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Platforms Grid */}
          <section className="mt-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {lang === "ru" ? "С каких платформ мы мигрируем" : "Supported Source Platforms"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {lang === "ru"
                    ? "Нажмите на платформу, чтобы изучить подробный план и преимущества переезда"
                    : "Select a platform to review the dedicated migration roadmap and benchmarks"}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/migrate/${p.slug}`}
                  className="group p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                        {p.title[lang]} → Next.js
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {p.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {p.metaDescription[lang]}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {lang === "ru" ? "Ключевые боли:" : "Primary Bottlenecks:"}
                      </div>
                      {p.painPoints[lang].slice(0, 2).map((pain, pi) => (
                        <div key={pi} className="flex items-start gap-2 text-xs text-rose-600">
                          <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                    <span>{lang === "ru" ? "Читать разбор миграции" : "Explore Blueprint"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Deep Architectural Comparison Table */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-4">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Инженерное сравнение" : "Architectural Comparison"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "Монолитные CMS vs Архитектура Few Hands на Next.js"
                  : "Legacy Monoliths vs Few Hands Headless Next.js"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                {lang === "ru"
                  ? "Почему современные цифровые компании отказываются от закрытых платформ в пользу чистого кода и Serverless-инфраструктуры."
                  : "Why modern digital leaders move away from closed builders toward clean code and distributed Edge architectures."}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 sm:p-5 font-bold text-slate-900">
                      {lang === "ru" ? "Критерий оценки" : "Evaluation Metric"}
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-slate-500">
                      {lang === "ru" ? "Текущая CMS (WordPress / Tilda / Bitrix)" : "Legacy Monolithic CMS / Builder"}
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-indigo-600 bg-indigo-50/40">
                      {lang === "ru" ? "Few Hands (Next.js 15 + Edge CDN)" : "Few Hands (Next.js 15 + Edge CDN)"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">
                        {row.metric}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        {row.legacy}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-indigo-900 bg-indigo-50/30 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.nextjs}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5-Step SEO Retention Protocol */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Защита поискового трафика" : "Organic Traffic Defense"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "5-шаговый протокол сохранения SEO-позиций при миграции"
                  : "5-Step SEO Retention Protocol: Zero Traffic Drop Guarantee"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                {lang === "ru"
                  ? "Никаких потерь трафика или позиций. Мы сохраняем каждый байт поисковой репутации вашего домена."
                  : "Preserve every drop of organic search equity. We crawl, map, and redirect with mathematical accuracy."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {seoProtocols.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md inline-block mb-3">
                      STEP {step.step}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Retainer & Support Pillars */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
                <Headphones className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "После релиза" : "Post-Launch Care"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "Мы не бросаем проект после релиза: обучение и абонентская поддержка"
                  : "End-to-End Handover: Team Training & Monthly Retainers"}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {lang === "ru" ? "Обучение сотрудников" : "Staff Onboarding"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Записываем пошаговые видео-инструкции по управлению контентом и проводим персональные онлайн-сессии для менеджеров."
                      : "We record bespoke Loom screencasts for your content editors and conduct interactive walkthrough sessions."}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {lang === "ru" ? "Ежемесячный Retainer" : "Monthly Retainers"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Регулярная техническая поддержка: доработки функционала, мониторинг доступности, бэкапы и консультации без найма штатного веб-мастера."
                      : "Ongoing technical maintenance: proactive uptime monitoring, automated backups, and developer hours without in-house overhead."}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {lang === "ru" ? "SLA и Гарантия" : "SLA & Guarantees"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Четко зафиксированное время реакции на инциденты и прямая связь с ведущими разработчиками."
                      : "Strict response time SLAs and direct engineer communication via your dedicated management channel."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Migration FAQ Accordion */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru" ? "Частые вопросы о миграции сайтов" : "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-indigo-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <footer className="mt-20 p-8 sm:p-12 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white/90 to-slate-100/90 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === "ru" ? "Хотите узнать точные сроки миграции вашего сайта?" : "Ready to Audit and Plan Your Migration?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              {lang === "ru"
                ? "Воспользуйтесь нашим интерактивным калькулятором или свяжитесь с нами для бесплатного экспресс-аудита структуры сайта."
                : "Submit your existing website URL for a complimentary code & architecture evaluation or calculate estimate instantly."}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate?service=migration"
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition"
              >
                {lang === "ru" ? "Рассчитать стоимость миграции" : "Calculate Migration Estimate"}
              </Link>
              <a
                href="mailto:web@fewhands.com"
                className="px-6 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                {lang === "ru" ? "Написать на web@fewhands.com" : "Email web@fewhands.com"}
              </a>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
};
