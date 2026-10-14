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

export default function MigrationHubPage() {
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
          ? "Новый сайт собирается и полностью тестируется на изолированном staging-домене. Товары, остатки, категории и база клиентов синхронизируются в фоновом режиме. Переключение DNS на новый сайт происходит за несколько минут — пользователи даже не заметят паузы, а корзины и заказы продолжат работать непрерывно."
          : "The new platform is built and verified on an isolated staging environment. Products, inventory, customer accounts, and order history are synchronized in real-time. The final DNS cutover takes minutes with zero transaction downtime.",
    },
    {
      q:
        lang === "ru"
          ? "Смогут ли мои контент-менеджеры управлять сайтом без знания программирования?"
          : "Can our non-technical content team manage the site without coding skills?",
      a:
        lang === "ru"
          ? "Да! Мы настраиваем интуитивно понятную headless-панель управления или подключаем удобную CMS (Strapi, Sanity или собственную легкую панель от GoMVP). Few Hands записывает подробные видео-инструкции для ваших сотрудников и проводит персональный онбординг, чтобы добавление новостей, баннеров и товаров занимало считанные секунды."
          : "Absolutely. We integrate intuitive headless CMS interfaces (Strapi, Sanity, or tailored GoMVP dashboards). Few Hands records custom video tutorials and conducts interactive Zoom onboarding for your staff.",
    },
    {
      q:
        lang === "ru"
          ? "Сколько времени занимает стандартная миграция платформы?"
          : "How long does a standard platform migration take from kickoff to launch?",
      a:
        lang === "ru"
          ? "Сроки зависят от масштаба проекта: лендинги и промо-сайты переносятся за 3–7 рабочих дней; корпоративные порталы и каталоги — за 7–14 рабочих дней; масштабные e-commerce магазины со сложными интеграциями — за 2–4 недели. Все этапы и контрольные даты фиксируются до старта работ."
          : "Timeline depends on scope: landing pages and corporate sites migrate within 3–7 business days; mid-sized catalogs in 7–14 business days; complex e-commerce stores in 2–4 weeks. Exact milestones are locked prior to kickoff.",
    },
    {
      q:
        lang === "ru"
          ? "Что входит в ежемесячную абонентскую поддержку Few Hands?"
          : "What is included in Few Hands monthly retainer support packages?",
      a:
        lang === "ru"
          ? "Абонентская поддержка включает: 24/7 автоматический мониторинг доступности и скорости, еженедельные резервные копии, обновление библиотек безопасности, верстку новых страниц и промо-блоков, консультации сотрудников, а в тарифе Enterprise — до 25 часов выделенной технической веб-разработки, оптимизации конверсий и еженедельные спринты."
          : "Retainer maintenance includes 24/7 automated uptime and Web Vitals monitoring, scheduled backups, security dependency patching, new promotional page builds, team consulting, and in Enterprise tier — up to 25 dedicated engineering hours for feature sprints and performance tuning.",
    },
  ];

  const faqSchema = {
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
    <div className="py-12 sm:py-20">
      {/* Schema.org FAQ JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Хаб модернизации веб-платформ" : "Web Modernization Hub"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {lang === "ru"
              ? "Миграция сайтов и интернет-магазинов с устаревших CMS на Next.js"
              : "Migrate Websites & Stores from Legacy CMS to Modern Next.js"}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {lang === "ru"
              ? "Избавьтесь от плагинного ада WordPress, ограничений конструкторов Tilda/Webflow и неповоротливости Битрикса. Переносим проекты на сверхбыстрый стек Next.js со 100/100 по Google PageSpeed, гарантированным сохранением позиций в SEO и полной поддержкой вашей команды."
              : "Eliminate WordPress plugin vulnerabilities, constructor limitations, and monolithic database bottlenecks. Seamless migration to ultra-fast Next.js with preserved SEO equity, turnkey Go backend engineering, and ongoing retainer maintenance."}
          </p>
        </div>

        {/* Tandem Banner (GoMVP + Few Hands) */}
        <div className="mt-12 p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                {lang === "ru" ? "Как устроена работа: Тандем GoMVP & Few Hands" : "Execution Model: GoMVP & Few Hands Tandem"}
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
                  {lang === "ru" ? (
                    <>
                      <li>• Глубокий аудит старой архитектуры и перенос баз данных</li>
                      <li>• Разработка кастомного бэкенда на Go и микросервисов</li>
                      <li>• Верстка и интеграция на React / Next.js</li>
                      <li>• Настройка серверной инфраструктуры и бесперебойного развертывания</li>
                    </>
                  ) : (
                    <>
                      <li>• Full legacy architecture audit & lossless database extraction</li>
                      <li>• Custom Go backend engineering & microservices</li>
                      <li>• High-performance React / Next.js UI integration</li>
                      <li>• Production serverless infrastructure & zero-downtime deployment</li>
                    </>
                  )}
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
                  {lang === "ru" ? (
                    <>
                      <li>• Первичный консалтинг, сбор требований и контроль ТЗ</li>
                      <li>• <strong>Обучение вашей команды</strong> работе с новой панелью и каталогом</li>
                      <li>• <strong>Ежемесячная техподдержка по абонплате</strong> (обновление контента, баннеров, страниц)</li>
                      <li>• 24/7 мониторинг доступности, резервные копии и медиа-сопровождение</li>
                    </>
                  ) : (
                    <>
                      <li>• Discovery, technical specification & stakeholder consulting</li>
                      <li>• <strong>Comprehensive team onboarding</strong> & hands-on CMS training</li>
                      <li>• <strong>Monthly retainer maintenance</strong> (content updates, new page rollouts, banner refreshes)</li>
                      <li>• 24/7 uptime monitoring, automated backups & multimedia production</li>
                    </>
                  )}
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
                {lang === "ru" ? "Выберите вашу платформу для миграции" : "Select Your Current Platform"}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                {lang === "ru"
                  ? "Детальный разбор ограничений платформы и готовый пошаговый план переезда"
                  : "In-depth platform constraints & engineered transition blueprint"}
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
                      {p.category[lang]}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
                      {lang === "ru" ? "Подробнее →" : "Details →"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {p.title[lang]}
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

        {/* Detailed Technical Comparison Table (SEO Booster) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              {lang === "ru" ? "Инженерное сравнение" : "Technical Comparison"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === "ru"
                ? "Устаревшие CMS против современного стека Next.js"
                : "Monolithic CMS vs Modern Serverless Next.js"}
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              {lang === "ru"
                ? "Почему глобальные компании отказываются от неповоротливых монолитов в пользу модульной архитектуры."
                : "Why modern businesses migrate from heavy monolithic backends to headless edge architectures."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono text-xs uppercase">
                  <th className="py-4 px-4 font-semibold">{lang === "ru" ? "Параметр" : "Parameter"}</th>
                  <th className="py-4 px-4 font-semibold text-rose-400">
                    {lang === "ru" ? "WordPress / Tilda / Битрикс" : "Legacy CMS / Builders"}
                  </th>
                  <th className="py-4 px-4 font-semibold text-sky-400">
                    {lang === "ru" ? "Next.js + Go (GoMVP & Few Hands)" : "Next.js + Go Stack"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.metric}</td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sky-200 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.nextjs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5-Step SEO Retention Protocol (SEO Depth Booster) */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Гарантия поисковой видимости" : "Organic Search Guarantee"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === "ru"
                ? "Протокол 100% сохранения SEO-позиций при переезде"
                : "Lossless SEO Retention Protocol"}
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              {lang === "ru"
                ? "Пошаговый регламент сохранения органического трафика и ссылочной массы."
                : "Strict step-by-step methodology ensuring uninterrupted organic search equity and ranking momentum."}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {seoProtocols.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-mono font-black text-sky-500 mb-3">{step.step}</div>
                  <h3 className="font-bold text-sm text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section with Accordion (SEO & Schema.org) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/40">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              {lang === "ru" ? "Часто задаваемые вопросы" : "Frequently Asked Questions"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === "ru"
                ? "Ответы на ключевые вопросы по миграции сайтов"
                : "Everything You Need to Know About Platform Migration"}
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              {lang === "ru"
                ? "Подробно разбираем технические детали, риски, сроки и процесс поддержки."
                : "Transparent breakdown of technical mechanics, guarantees, turnaround, and retainer operations."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-sky-300 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-sky-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-3xl border border-slate-800 bg-slate-900 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white">
            {lang === "ru" ? "Хотите узнать точные сроки миграции вашего сайта?" : "Ready to Audit and Plan Your Migration?"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            {lang === "ru"
              ? "Оставьте адрес сайта для бесплатного предварительного аудита структуры и базы данных."
              : "Submit your existing website URL for a complimentary code & architecture evaluation."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimate"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md transition"
            >
              {lang === "ru" ? "Рассчитать стоимость" : "Calculate Estimate"}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-950 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition"
            >
              {lang === "ru" ? "Запросить аудит" : "Request Audit"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
