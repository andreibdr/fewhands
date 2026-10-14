"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import {
  ArrowRight,
  Zap,
  Repeat,
  Headphones,
  Sparkles,
  ExternalLink,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

export default function HomePage() {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredCases = [
    {
      title: "Elena Stazhkova",
      tag: "Real Estate Broker",
      image: "/stazhkova.jpg",
      desc: {
        ru: "Персональный сайт и портфолио агента по элитной недвижимости.",
        en: "Flagship portfolio & website for an elite luxury real estate broker.",
      },
      url: "https://stazhkova.com",
    },
    {
      title: "Impact Windows & Doors",
      tag: "USA / Florida",
      image: "/windoor.jpg",
      desc: {
        ru: "Корпоративный сайт производителя ударопрочных окон и дверей.",
        en: "Corporate portal for impact-resistant window & door installations in Florida, US.",
      },
      url: "https://iwdsolutions.com",
    },
    {
      title: "MIPT Global",
      tag: "Alumni Network",
      image: "/mipt.jpg",
      desc: {
        ru: "Международный портал сообщества выпускников МФТИ.",
        en: "International portal for the global university alumni association.",
      },
      url: "https://miptglobal.com",
    },
  ];

  return (
    <div>
      {/* 1. Hero Portal Header */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-24 sm:pb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 text-indigo-600 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>
              {lang === "ru"
                ? "Веб-инженерия · Миграция CMS · AI Видеопродакшн"
                : "Web Engineering · CMS Migration · AI Video Production"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
            {lang === "ru" ? (
              <>
                Освобождаем сайты от{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800 bg-clip-text text-transparent">
                  устаревших CMS
                </span>{" "}
                и создаём конверсионные веб-продукты
              </>
            ) : (
              <>
                Freeing web platforms from{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-800 bg-clip-text text-transparent">
                  legacy CMS bloat
                </span>{" "}
                to engineer high-converting web products
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {lang === "ru"
              ? "Инженерная миграция с WordPress, Tilda, Webflow и Битрикс на чистый Next.js совместно с партнёром GoMVP. Обучение персонала, ежемесячная поддержка по абонплате и фотореалистичные AI-аватары."
              : "Engineering migrations from WordPress, Tilda, Webflow, and monolithic CMSs to Next.js in partnership with GoMVP. Staff onboarding, monthly retainer maintenance, and photorealistic AI avatars."}
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>{lang === "ru" ? "Оценить стоимость проекта" : "Estimate Project Budget"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/migrate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-slate-200 bg-white/90 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base shadow-sm hover:bg-white transition-all"
            >
              <span>{lang === "ru" ? "Хаб миграции CMS" : "CMS Migration Hub"}</span>
            </Link>
          </div>

          {/* Key Trust Metrics */}
          <div className="mt-14 pt-10 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {lang === "ru" ? "16+ лет" : "16+ Yrs"}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {lang === "ru" ? "Опыт разработки (с 2008 г.)" : "Engineering heritage (since 2008)"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">50+</div>
              <div className="text-xs text-slate-500 mt-1">
                {lang === "ru" ? "Проектов в США, ЕС и СНГ" : "Delivered in US, EU & worldwide"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-indigo-600">100/100</div>
              <div className="text-xs text-slate-500 mt-1">
                {lang === "ru" ? "Google PageSpeed рейтинг" : "Google PageSpeed benchmark"}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Four Doors Funnel (4 направления) */}
      <section className="py-16 sm:py-24 border-t border-slate-200/80 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {lang === "ru" ? "Выберите интересующее направление" : "Our Core Capabilities"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {lang === "ru"
                ? "Каждое направление решает конкретную бизнес-задачу без лишних компромиссов."
                : "Engineered solutions tailored to specific commercial milestones."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Door 1: Migration */}
            <div className="p-8 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold">
                    {lang === "ru" ? "GoMVP Партнёрство" : "GoMVP Partnership"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {lang === "ru" ? "Миграция с CMS на Next.js" : "CMS Migration to Next.js"}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === "ru"
                    ? "Перенос сайтов с WordPress, Tilda, Webflow, Битрикс, InSales на чистый современный код. Ускорение в 5 раз, избавление от уязвимостей плагинов и сохранение 100% SEO-позиций."
                    : "Migrate from WordPress, Tilda, Webflow, Bitrix, and Shopify to clean code. 5x faster speed, zero plugin vulnerabilities, and 100% preserved SEO rankings."}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/migrate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700"
                >
                  <span>{lang === "ru" ? "Перейти в хаб миграции" : "Explore Migration Hub"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">
                  {lang === "ru" ? "9 платформ" : "9 Platforms"}
                </span>
              </div>
            </div>

            {/* Door 2: Custom Development */}
            <div className="p-8 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/5 transition-all flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 font-bold">
                    Next.js 14
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {lang === "ru" ? "Создание сайтов с нуля" : "Bespoke Web Development"}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === "ru"
                    ? "Продающие лендинги, интернет-витрины и представительские корпоративные платформы. Адаптивная вёрстка под все устройства, интеграция почтовых форм/CRM и идеальный мобильный отклик."
                    : "High-converting landing pages, catalogs, and enterprise corporate hubs. Engineered for sub-second mobile response and seamless CRM/email workflows."}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/development"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700"
                >
                  <span>{lang === "ru" ? "Подробнее о разработке" : "Custom Development"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">100% PageSpeed</span>
              </div>
            </div>

            {/* Door 3: Retainer Maintenance */}
            <div className="p-8 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold">
                    {lang === "ru" ? "Retainer от $190/мес" : "Retainer from $190/mo"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {lang === "ru" ? "Поддержка & Обучение по абонплате" : "Support, Retainer & Staff Training"}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === "ru"
                    ? "Обучаем ваших сотрудников управлению сайтом (видеоуроки, Zoom-онбординг), регулярно обновляем контент, мониторим 24/7 и внедряем новые фичи по фиксированной ежемесячной подписке."
                    : "Hands-on team onboarding, continuous content rollouts, 24/7 uptime monitoring, and feature iteration backed by dedicated monthly retainer SLA."}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/maintenance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>{lang === "ru" ? "Тарифные планы поддержки" : "Retainer Support Plans"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">
                  {lang === "ru" ? "Саппорт 24/7" : "24/7 Support"}
                </span>
              </div>
            </div>

            {/* Door 4: AI Avatars & Video */}
            <div className="p-8 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5 transition-all flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-bold">
                    Neural Video
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  {lang === "ru" ? "AI-Видеоаватары & YouTube" : "AI Video Avatars & Production"}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === "ru"
                    ? "Говорящие цифровые персонажи для сайтов и рекламы (9:16 Shorts) на 30+ языках мира без студии и актеров. Профессиональный монтаж и оформление YouTube-выпусков."
                    : "Photorealistic AI presenters for websites and video ads (9:16 Shorts) across 30+ languages without film crews. Professional full-length YouTube editing."}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/ai-video"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700"
                >
                  <span>{lang === "ru" ? "Смотреть примеры аватаров" : "View AI Video Samples"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">Shorts & 16:9</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Featured Works Preview */}
      <section className="py-16 sm:py-24 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                {lang === "ru" ? "Избранные проекты" : "Selected Client Work"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                {lang === "ru" ? "Кейсы клиентов Few Hands" : "Few Hands Client Showcase"}
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 self-start sm:self-end"
            >
              <span>{lang === "ru" ? "Смотреть всё портфолио" : "View Full Portfolio"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {featuredCases.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md overflow-hidden hover:border-slate-300 transition-all hover:-translate-y-1 block shadow-sm hover:shadow-lg"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-mono text-indigo-600 font-semibold">{c.tag}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 flex items-center justify-between">
                    <span>{c.title}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{c.desc[lang]}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions (SEO Content Enrichment) */}
      <section className="py-16 sm:py-24 border-t border-slate-200/80 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Частые вопросы" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              {lang === "ru" ? "Ответы на ключевые вопросы о работе с нами" : "Frequently Asked Questions"}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {lang === "ru"
                ? "Всё, что важно знать о стеке Next.js, партнёрстве с GoMVP и сохранении поискового трафика."
                : "Key facts about our Next.js architecture, GoMVP tandem, and zero-loss SEO retention."}
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q:
                  lang === "ru"
                    ? "Зачем бизнесу переходить на Next.js с WordPress, Tilda или Битрикса?"
                    : "Why migrate a commercial website to Next.js from WordPress, Tilda, or Bitrix?",
                a:
                  lang === "ru"
                    ? "Монолитные CMS и no-code конструкторы неизбежно упираются в технологический потолок: уязвимости сторонних плагинов, регулярные падения серверов под рекламой, растущие ежемесячные сборы платформ и медленная загрузка мобильных страниц (Core Web Vitals в красной зоне). Next.js на глобальном Edge CDN загружается за 50 мс, выдаёт 100/100 в PageSpeed, не имеет открытых уязвимостей баз данных и не требует абонплаты сторонним платформам."
                    : "Monolithic CMSs and hosted builders quickly hit scaling limits: vulnerable plugin ecosystems, server crashes under traffic spikes, recurring builder subscription taxes, and degraded mobile Web Vitals. Next.js on a global Edge CDN loads in under 50ms, scores 100/100 on PageSpeed, eliminates database exploit vectors, and incurs zero recurring platform fees.",
              },
              {
                q:
                  lang === "ru"
                    ? "Как распределяются роли между студией Few Hands и партнёром GoMVP?"
                    : "How do Few Hands and engineering partner GoMVP split project delivery?",
                a:
                  lang === "ru"
                    ? "GoMVP выполняет глубокую техническую инженерию: проектирование масштабируемого бэкенда на Go, перенос баз данных, микросервисы и сборку фронтенда на React / Next.js. Студия Few Hands выступает вашим надёжным партнёром в бизнесе: проводит первичный аудит, онбординг и обучение ваших контент-менеджеров, а также обеспечивает непрерывную ежемесячную техподдержку по абонплате."
                    : "GoMVP delivers deep software engineering: high-throughput Go microservices, database extraction, and modular React/Next.js UI. Few Hands leads client operations: requirements discovery, hands-on team onboarding and CMS tutorials, plus dedicated monthly retainer support.",
              },
              {
                q:
                  lang === "ru"
                    ? "Сохранятся ли позиции сайта в Google и Яндекс при переносе?"
                    : "Will our organic Google search rankings be preserved during migration?",
                a:
                  lang === "ru"
                    ? "Да, 100%. Мы переносим всю структуру URL один к одному, сохраняем микроразметку Schema.org и настраиваем серверные 301-редиректы для всех изменённых страниц. За счёт кратного ускорения загрузки и идеальных Core Web Vitals сайт получает естественное преимущество в ранжировании поисковых систем."
                    : "Yes, 100%. We preserve full URL hierarchy, Schema.org metadata, and configure edge 301 redirect mappings for all modified endpoints. The dramatic boost in Core Web Vitals and TTFB gives your site a direct organic ranking advantage.",
              },
              {
                q:
                  lang === "ru"
                    ? "Что включает в себя ежемесячная техподдержка по тарифу Retainer?"
                    : "What is included in the monthly retainer support package?",
                a:
                  lang === "ru"
                    ? "В абонплату входит круглосуточный автоматический мониторинг Uptime, регулярные резервные копии, устранение уязвимостей, выделенные часы на верстку новых страниц, акций и баннеров, а также консультации и онбординг для ваших контент-менеджеров."
                    : "The retainer includes automated 24/7 uptime monitoring, scheduled backups, security patching, dedicated hours for rolling out campaign pages and banners, plus continuous consulting and training for your internal staff.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-indigo-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Box */}
      <section className="py-16 border-t border-slate-200/80 bg-gradient-to-b from-white/80 via-slate-50 to-slate-100/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {lang === "ru"
              ? "Готовы модернизировать ваш сайт или запустить новый?"
              : "Ready to modernize your platform or launch a new product?"}
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку на бесплатный аудит текущей платформы или отправьте нам запрос для быстрого старта."
              : "Request a free code audit of your existing platform or submit an estimate request."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-500/25 transition-all"
            >
              {lang === "ru" ? "Калькулятор стоимости" : "Project Cost Estimator"}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base shadow-sm hover:bg-slate-50 transition-all"
            >
              {lang === "ru" ? "Связаться с нами" : "Contact Studio"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
