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
  Code2,
  Video,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  DoodleArrowCTA,
  EditorialStyleCard,
  ScientificAuditCard,
  SpeedRatingStamp,
  PSFootnoteCard,
} from "./HandDrawnDecorations";

export const HomeView: React.FC = () => {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredCases = [
    {
      title: "Big Data Realty",
      tag: "USA / Proptech",
      image: "/portfolio/bigdatarealty.webp",
      desc: {
        ru: "Аналитический портал и блог о трендах на рынке недвижимости США.",
        en: "Analytics portal & research platform tracking US real estate market data.",
        sr: "Analitički portal i istraživačka platforma za tržište nekretnina u SAD.",
      },
      url: "https://bigdatarealty.com",
    },
    {
      title: "American Med Travel",
      tag: "USA / Healthcare",
      image: "/portfolio/americanmedtravel.jpg",
      desc: {
        ru: "Премиальный портал медицинского туризма и каталог ведущих клиник США.",
        en: "Curated directory & portal connecting international patients with top-ranked US hospitals.",
        sr: "Premijum portal medicinskog turizma i katalog vodećih bolnica u SAD.",
      },
      url: "https://www.americanmedtravel.com/",
    },
    {
      title: "Elena Stazhkova",
      tag: "Real Estate Broker",
      image: "/portfolio/stazhkova.png",
      desc: {
        ru: "Персональный сайт и портфолио агента по элитной недвижимости.",
        en: "Flagship portfolio & website for an elite luxury real estate broker.",
        sr: "Vodeći portfolio i sajt agenta za luksuzne nekretnine.",
      },
      url: "https://stazhkova.com",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Зачем бизнесу переходить на Next.js с WordPress, Tilda или Битрикса?"
          : lang === "sr"
          ? "Zašto preći na Next.js sa WordPress-a, Tilde ili Bitrix-a?"
          : "Why migrate a commercial website to Next.js from WordPress, Tilda, or Bitrix?",
      a:
        lang === "ru"
          ? "Монолитные CMS и no-code конструкторы неизбежно упираются в технологический потолок: уязвимости сторонних плагинов, регулярные падения серверов под рекламой, растущие ежемесячные сборы платформ и медленная загрузка мобильных страниц (Core Web Vitals в красной зоне). Next.js на глобальном Edge CDN загружается за 50 мс, выдаёт 100/100 в PageSpeed, не имеет открытых уязвимостей баз данных и не требует подписок на сторонние платформы."
          : lang === "sr"
          ? "Monolitni CMS sistemi i no-code bilderi brzo dostižu granice: bezbednosni propusti dodataka, padovi servera pri skoku poseta, mesečne pretplate i sporo učitavanje na mobilnim telefonima. Next.js na globalnoj Edge CDN mreži učitava se za 50 ms, ostvaruje 100/100 na PageSpeed testu, eliminiše rizik od napada na bazu i ne zahteva mesečne naknade platformi."
          : "Monolithic CMSs and hosted builders quickly hit scaling limits: vulnerable plugin ecosystems, server crashes under traffic spikes, recurring builder subscription taxes, and degraded mobile Web Vitals. Next.js on a global Edge CDN loads in under 50ms, scores 100/100 on PageSpeed, eliminates database exploit vectors, and incurs zero recurring platform fees.",
    },
    {
      q:
        lang === "ru"
          ? "Как распределяются роли между студией Few Hands и партнёром GoMVP?"
          : lang === "sr"
          ? "Kako se dele uloge između studija Few Hands i partnera GoMVP?"
          : "How do Few Hands and engineering partner GoMVP split project delivery?",
      a:
        lang === "ru"
          ? "GoMVP выполняет глубокую техническую инженерию: проектирование масштабируемого бэкенда на Go, перенос баз данных, микросервисы и сборку фронтенда на React / Next.js. Студия Few Hands выступает вашим надёжным партнёром в бизнесе: проводит первичный аудит, онбординг и обучение ваших контент-менеджеров, а также обеспечивает непрерывную ежемесячную техподдержку по тарифу Retainer."
          : lang === "sr"
          ? "GoMVP vrši duboki softverski inženjering: projektovanje skalabilnog bekenda u Go jeziku, migraciju baza podataka i izradu modularnog React / Next.js korisničkog interfejsa. Few Hands vodi klijentsku saradnju: analizu zahteva, obuku vašeg tima i posvećeno mesečno održavanje po Retainer modelu."
          : "GoMVP delivers deep software engineering: high-throughput Go microservices, database extraction, and modular React/Next.js UI. Few Hands leads client operations: requirements discovery, hands-on team onboarding and CMS tutorials, plus dedicated monthly retainer support.",
    },
    {
      q:
        lang === "ru"
          ? "Сохранятся ли позиции сайта в Google и Яндекс при переносе?"
          : lang === "sr"
          ? "Da li će se sačuvati pozicije sajta na Google-u prilikom migracije?"
          : "Will our organic Google search rankings be preserved during migration?",
      a:
        lang === "ru"
          ? "Да, 100%. Мы переносим всю структуру URL один к одному, сохраняем микроразметку Schema.org и настраиваем серверные 301-редиректы для всех изменённых страниц. За счёт кратного ускорения загрузки и идеальных Core Web Vitals сайт получает естественное преимущество в ранжировании поисковых систем."
          : lang === "sr"
          ? "Da, 100%. Prenosimo kompletnu URL hijerarhiju jedan na jedan, čuvamo Schema.org mikrooznake i postavljamo serverska 301 preusmeravanja za sve izmenjene stranice. Zbog višestrukog ubrzanja i odličnih Core Web Vitals rezultata, sajt dobija direktnu prednost u organskom rangiranju."
          : "Yes, 100%. We preserve full URL hierarchy, Schema.org metadata, and configure edge 301 redirect mappings for all modified endpoints. The dramatic boost in Core Web Vitals and TTFB gives your site a direct organic ranking advantage.",
    },
    {
      q:
        lang === "ru"
          ? "Что включает в себя ежемесячная техподдержка по тарифу Retainer?"
          : lang === "sr"
          ? "Šta obuhvata paket mesečnog tehničkog održavanja (Retainer)?"
          : "What is included in the monthly retainer support package?",
      a:
        lang === "ru"
          ? "В тариф Retainer входит круглосуточный автоматический мониторинг Uptime, регулярные резервные копии, устранение уязвимостей, выделенные часы на верстку новых страниц, акций и баннеров, а также консультации и онбординг для ваших контент-менеджеров."
          : lang === "sr"
          ? "Retainer paket obuhvata 24/7 monitoring dostupnosti, redovne rezervne kopije, bezbednosna ažuriranja, rezervisane sate za izradu novih stranica i banera, kao i stalnu podršku i obuku vaših zaposlenih."
          : "The retainer includes automated 24/7 uptime monitoring, scheduled backups, security patching, dedicated hours for rolling out campaign pages and banners, plus continuous consulting and training for your internal staff.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fewhands.com/#organization",
        name: "Few Hands",
        url: "https://fewhands.com",
        logo: "https://fewhands.com/favicon.svg",
        email: "web@fewhands.com",
        sameAs: ["https://github.com/andreibdr/fewhands"],
      },
      {
        "@type": "WebSite",
        "@id": "https://fewhands.com/#website",
        url: "https://fewhands.com",
        name: "Few Hands Web Engineering Studio",
        publisher: {
          "@id": "https://fewhands.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://fewhands.com/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div>
        {/* 1. Hero Portal Header */}
        <section className="relative overflow-hidden pt-8 pb-10 sm:pt-14 sm:pb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#7ea368]/10 via-[#9c386d]/5 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
            {/* Desktop Left Hand-drawn card: Empirical Audit (Visible on 2XL wide screens) */}
            <div className="hidden 2xl:block absolute -left-6 top-16 w-60 z-20">
              <ScientificAuditCard />
            </div>

            {/* Desktop Right Hand-drawn card: Style & Clean Code (Visible on 2XL wide screens) */}
            <div className="hidden 2xl:block absolute -right-6 top-10 w-60 z-20">
              <EditorialStyleCard />
            </div>

            <div className="text-center max-w-4xl mx-auto">
              
              {/* Studio Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e5e1eb] text-[#2d263b] text-xs font-semibold mb-5 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#7ea368] animate-pulse" />
                <span>Boutique Web Engineering · Est. 2008</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2d263b] leading-[1.12] max-w-4xl mx-auto">
                {lang === "ru" ? (
                  <>
                    Освобождаем сайты от{" "}
                    <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                      устаревших CMS
                    </span>{" "}
                    и создаём чистые веб-продукты
                  </>
                ) : lang === "sr" ? (
                  <>
                    Oslobađamo veb platforme od{" "}
                    <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                      zastarelih CMS-ova
                    </span>{" "}
                    i kreiramo čiste veb proizvode
                  </>
                ) : (
                  <>
                    Freeing web platforms from{" "}
                    <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                      legacy CMS bloat
                    </span>{" "}
                    to engineer pure web products
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#585068] leading-relaxed max-w-3xl mx-auto">
                {lang === "ru"
                  ? "Инженерная миграция с WordPress, Tilda, Webflow и Битрикс на чистый Next.js совместно с партнёром GoMVP. Онбординг персонала, регулярное сопровождение (Retainer) и фотореалистичные AI-аватары."
                  : lang === "sr"
                  ? "Inženjerska migracija sa platformi WordPress, Tilda, Webflow i monolitnih CMS-ova na čist Next.js u partnerstvu sa GoMVP. Obuka tima, mesečno održavanje (Retainer) i fotorealistični AI avatari."
                  : "Engineering migrations from WordPress, Tilda, Webflow, and monolithic CMSs to Next.js in partnership with GoMVP. Staff onboarding, monthly retainer maintenance, and photorealistic AI avatars."}
              </p>

              {/* Quick Action CTAs with Hand-drawn Doodle Arrow */}
              <div className="mt-7 flex flex-col items-center">
                <div className="relative inline-flex flex-wrap justify-center items-center gap-4">
                  {/* Hand-drawn arrow pointing to button (Desktop) */}
                  <div className="hidden lg:block absolute right-full mr-4 top-2 pointer-events-none">
                    <DoodleArrowCTA />
                  </div>

                  <Link
                    href="/estimate"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-bold text-sm sm:text-base shadow-lg shadow-[#2d263b]/15 transition-all hover:-translate-y-0.5"
                  >
                    <span>{lang === "ru" ? "Оценить стоимость проекта" : lang === "sr" ? "Procenite budžet projekta" : "Estimate Project Budget"}</span>
                    <ArrowRight className="w-4 h-4 text-[#e5e1eb]" />
                  </Link>
                  <Link
                    href="/migrate"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-[#e5e1eb] bg-white/90 text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-bold text-sm sm:text-base shadow-sm hover:bg-white transition-all"
                  >
                    <span>{lang === "ru" ? "Хаб миграции CMS" : lang === "sr" ? "Centar za CMS migracije" : "CMS Migration Hub"}</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. Four Doors Funnel (4 направления в палитре рук) */}
        <section className="py-10 sm:py-14 border-t border-[#e5e1eb] bg-white/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru" ? "Ключевые направления студии" : lang === "sr" ? "Ključne delatnosti studija" : "Our Core Capabilities"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "Каждое направление решает конкретную бизнес-задачу без компромиссов и CMS-балласта."
                  : lang === "sr"
                  ? "Svako usmerenje rešava konkretan poslovni cilj bez kompromisa i CMS balasta."
                  : "Engineered solutions tailored to specific commercial milestones."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* DOOR 1: MIGRATION (Petrol / Sage) */}
              <div className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#edf5f5] border border-[#386161]/25 text-[#386161] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Repeat className="w-6 h-6" />
                    </div>
                    {/* Hand-drawn craft tag */}
                    <span className="font-handwriting text-sm text-[#386161] font-bold px-2 py-0.5 rounded border border-[#386161]/30 bg-[#edf5f5] rotate-2">
                      {lang === "ru" ? "100% SEO гарантия" : lang === "sr" ? "100% SEO garancija" : "100% SEO saved"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#386161] font-bold">
                    {lang === "ru" ? "01. Перенос CMS" : lang === "sr" ? "01. Migracija CMS-a" : "01. CMS Migration"}
                  </span>
                  <h3 className="text-xl font-bold text-[#2d263b] mt-1">
                    {lang === "ru" ? "Миграция сайтов на Next.js" : lang === "sr" ? "Migracija sajtova na Next.js" : "Legacy CMS to Next.js"}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#585068] leading-relaxed">
                    {lang === "ru"
                      ? "Переезд с WordPress, Tilda, Bitrix на чистый код. 100% сохранение SEO, TTFB 50мс, нулевые платежи за конструкторы."
                      : lang === "sr"
                      ? "Prelazak sa WordPress-a, Tilde, Bitrix-a na čist kod. 100% očuvan SEO, TTFB 50ms, nula troškova licenci za platforme."
                      : "Escape WordPress, Tilda, Bitrix. 100% SEO preserved, 50ms TTFB, zero monthly builder license fees."}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#f1f0f5] flex items-center justify-between">
                  <Link
                    href="/migrate"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#386161] group-hover:text-[#2a4949]"
                  >
                    <span>{lang === "ru" ? "Подробнее о миграции" : lang === "sr" ? "Saznajte više o migraciji" : "Explore Migrations"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* DOOR 2: CUSTOM DEVELOPMENT (Slate Denim) */}
              <div className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#edf3f8] border border-[#4b6c8c]/25 text-[#4b6c8c] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6" />
                    </div>
                    {/* Hand-drawn craft tag */}
                    <span className="font-handwriting text-sm text-[#4b6c8c] font-bold px-2 py-0.5 rounded border border-[#4b6c8c]/30 bg-[#edf3f8] -rotate-1">
                      {lang === "ru" ? "React 19 + TypeScript" : "React 19 + TypeScript"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4b6c8c] font-bold">
                    {lang === "ru" ? "02. Разработка с нуля" : lang === "sr" ? "02. Namenski veb" : "02. Custom Web"}
                  </span>
                  <h3 className="text-xl font-bold text-[#2d263b] mt-1">
                    {lang === "ru" ? "Веб-разработка с нуля" : lang === "sr" ? "Namenski veb inženjering" : "Custom Web Engineering"}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#585068] leading-relaxed">
                    {lang === "ru"
                      ? "Лендинги, корпоративные порталы и веб-приложения на Next.js 15, React 19, TypeScript и Tailwind CSS. PageSpeed 95-100."
                      : lang === "sr"
                      ? "Landing stranice vrhunskih performansi, korporativni portali i veb aplikacije na Next.js 15, React 19, TypeScript i Tailwind CSS."
                      : "High-performance landing pages, corporate portals, and SaaS apps engineered on React 19, Next.js 15, and Tailwind CSS."}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#f1f0f5] flex items-center justify-between">
                  <Link
                    href="/development"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4b6c8c] group-hover:text-[#38536e]"
                  >
                    <span>{lang === "ru" ? "Подробнее о разработке" : lang === "sr" ? "Saznajte više o razvoju" : "Explore Web Dev"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* DOOR 3: MAINTENANCE RETAINER (Warm Ochre) */}
              <div className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#fef7f0] border border-[#c6814b]/25 text-[#c6814b] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Headphones className="w-6 h-6" />
                    </div>
                    {/* Hand-drawn craft tag */}
                    <span className="font-handwriting text-sm text-[#c6814b] font-bold px-2 py-0.5 rounded border border-[#c6814b]/30 bg-[#fef7f0] rotate-2">
                      {lang === "ru" ? "SLA 1 час · без штата" : lang === "sr" ? "SLA 1h · bez internog tima" : "1h SLA · dedicated lead"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#c6814b] font-bold">
                    {lang === "ru" ? "03. Поддержка сайтов" : lang === "sr" ? "03. Retainer podrška" : "03. Retainer Care"}
                  </span>
                  <h3 className="text-xl font-bold text-[#2d263b] mt-1">
                    {lang === "ru" ? "Сопровождение Retainer" : lang === "sr" ? "Mesečni Retainer paketi" : "Monthly Retainer Plans"}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#585068] leading-relaxed">
                    {lang === "ru"
                      ? "Сопровождение сайтов по фиксированному тарифу: доработки, верстка, обучение команды и мониторинг 24/7 без затрат на штатного разработчика."
                      : lang === "sr"
                      ? "Održavanje sajtova po fiksnoj mesečnoj tarifi: dorade, optimizacija, obuka tima i 24/7 nadzor bez troškova stalno zaposlenog programera."
                      : "Fractional web engineering team on monthly retainer: feature rollouts, content updates, staff video tutorials, and SLA monitoring."}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#f1f0f5] flex items-center justify-between">
                  <Link
                    href="/maintenance"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#c6814b] group-hover:text-[#a66838]"
                  >
                    <span>{lang === "ru" ? "Тарифы поддержки" : lang === "sr" ? "Pogledajte pakete" : "Explore Retainers"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* DOOR 4: AI VIDEO & AVATARS (Plum Magenta) */}
              <div className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#fcf0f6] border border-[#9c386d]/25 text-[#9c386d] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    {/* Hand-drawn craft tag */}
                    <span className="font-handwriting text-sm text-[#9c386d] font-bold px-2 py-0.5 rounded border border-[#9c386d]/30 bg-[#fcf0f6] -rotate-2">
                      {lang === "ru" ? "Ролики за 24-48 ч" : lang === "sr" ? "Video za 24-48h" : "Ready in 24-48h"}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9c386d] font-bold">
                    {lang === "ru" ? "04. AI Видеопродакшн" : lang === "sr" ? "04. AI Video produkcija" : "04. AI Video"}
                  </span>
                  <h3 className="text-xl font-bold text-[#2d263b] mt-1">
                    {lang === "ru" ? "AI Видео и Цифровые Аватары" : lang === "sr" ? "AI Video i digitalni avatari" : "AI Avatars & Presenters"}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#585068] leading-relaxed">
                    {lang === "ru"
                      ? "Генерация виртуальных спикеров и видеороликов для сайтов, YouTube и Shorts на десятках языков без студий и операторов."
                      : lang === "sr"
                      ? "Kreiranje fotorealističnih virtualnih prezentera i promotivnih videa za sajtove, YouTube i oglase bez kamera i studija."
                      : "Photorealistic AI presenters and viral video reels generated for websites, YouTube, and ads in 24 hours without studios."}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#f1f0f5] flex items-center justify-between">
                  <Link
                    href="/ai-video"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#9c386d] group-hover:text-[#7f2856]"
                  >
                    <span>{lang === "ru" ? "Смотреть шоукейс" : lang === "sr" ? "Pogledajte primere" : "Watch Showcase"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2.5 Trust Metrics & Engineering Standards */}
        <section className="py-8 sm:py-12 border-t border-[#e5e1eb] bg-[#faf9fb]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Key Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-2xl sm:text-4xl font-black text-[#2d263b]">
                  {lang === "ru" ? "16+ лет" : lang === "sr" ? "16+ god" : "16+ Yrs"}
                </div>
                <div className="text-xs sm:text-sm text-[#585068] mt-1">
                  {lang === "ru" ? "Опыт разработки (с 2008 г.)" : lang === "sr" ? "Inženjersko iskustvo (od 2008.)" : "Engineering heritage (since 2008)"}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black text-[#2d263b]">150+</div>
                <div className="text-xs sm:text-sm text-[#585068] mt-1">
                  {lang === "ru" ? "Проектов в США, ЕС и СНГ" : lang === "sr" ? "Projekata u SAD, EU i svetu" : "Delivered in US, EU & worldwide"}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black text-[#7ea368]">100/100</div>
                <div className="text-xs sm:text-sm text-[#585068] mt-1">
                  {lang === "ru" ? "Google PageSpeed рейтинг" : lang === "sr" ? "Google PageSpeed standard" : "Google PageSpeed benchmark"}
                </div>
              </div>
            </div>

            {/* Editorial Stamp & P.S. Engineering Callout */}
            <div className="mt-6 sm:mt-8 max-w-3xl mx-auto grid sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-5 flex justify-center sm:justify-start">
                <SpeedRatingStamp className="w-full" />
              </div>
              <div className="sm:col-span-7">
                <PSFootnoteCard className="w-full" />
              </div>
            </div>

            {/* Responsive Cards Row for screens where hero side cards are hidden */}
            <div className="2xl:hidden mt-6 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <ScientificAuditCard className="rotate-0 hover:rotate-1" />
              <EditorialStyleCard className="rotate-0 hover:-rotate-1" />
            </div>

          </div>
        </section>

        {/* 3. Featured Portfolio Preview */}
        <section className="py-10 sm:py-14 border-t border-[#e5e1eb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#386161] font-bold">
                  {lang === "ru" ? "Избранные работы" : lang === "sr" ? "Izabrani radovi" : "Selected Client Works"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] mt-1">
                  {lang === "ru" ? "Реализованные проекты" : lang === "sr" ? "Studije slučaja" : "Case Studies"}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#386161] hover:text-[#2a4949] transition"
              >
                <span>{lang === "ru" ? "Смотреть все кейсы (30+)" : lang === "sr" ? "Pogledajte sve projekte (30+)" : "View all projects (30+)"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredCases.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="w-full bg-[#f1f0f5] border-b border-[#e5e1eb] overflow-hidden">
                    {/* Browser Bar with Hand Colors */}
                    <div className="px-3.5 py-2 bg-[#f1f0f5] border-b border-[#e5e1eb] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ba5d60]/80" />
                        <span className="w-2 h-2 rounded-full bg-[#c6814b]/80" />
                        <span className="w-2 h-2 rounded-full bg-[#7ea368]/80" />
                      </div>
                      <div className="text-[10px] font-mono text-[#585068] truncate max-w-[180px] bg-white px-2 py-0.5 rounded border border-[#e5e1eb]">
                        {c.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#386161] font-semibold">{c.tag}</span>
                    <h3 className="text-lg font-bold text-[#2d263b] mt-1 flex items-center justify-between">
                      <span>{c.title}</span>
                      <ExternalLink className="w-4 h-4 text-[#8c829c] group-hover:text-[#386161]" />
                    </h3>
                    <p className="text-xs text-[#585068] mt-2 leading-relaxed">{c.desc[lang]}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Frequently Asked Questions (SEO Content Enrichment) */}
        <section className="py-10 sm:py-14 border-t border-[#e5e1eb] bg-white/60 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Частые вопросы" : lang === "sr" ? "Česta pitanja" : "FAQ"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru" ? "Ответы на ключевые вопросы о работе с нами" : lang === "sr" ? "Odgovori na ključna pitanja o radu sa nama" : "Frequently Asked Questions"}
              </h2>
              <p className="mt-3 text-sm text-[#585068]">
                {lang === "ru"
                  ? "Всё, что важно знать о стеке Next.js, партнёрстве с GoMVP и сохранении поискового трафика."
                  : lang === "sr"
                  ? "Sve što je važno znati o Next.js tehnologiji, partnerstvu sa GoMVP i očuvanju SEO pozicija."
                  : "Key facts about our Next.js architecture, GoMVP tandem, and zero-loss SEO retention."}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2d263b] hover:text-[#386161] transition-colors"
                    >
                      <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8c829c] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#386161]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-[#f1f0f5] pt-4">
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
        <section className="py-10 sm:py-14 border-t border-[#e5e1eb] bg-gradient-to-b from-white/80 via-[#faf9fb] to-[#f1f0f5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Готовы модернизировать ваш сайт или запустить новый?"
                : lang === "sr"
                ? "Spremni ste da modernizujete sajt ili pokrenete novi proizvod?"
                : "Ready to modernize your platform or launch a new product?"}
            </h2>
            <p className="mt-4 text-base text-[#585068] max-w-2xl mx-auto">
              {lang === "ru"
                ? "Оставьте заявку на бесплатный аудит текущей платформы или отправьте нам запрос для быстрого старта."
                : lang === "sr"
                ? "Pošaljite upit za besplatnu analizu postojeće platforme ili zatražite procenu za brzi početak."
                : "Request a free code audit of your existing platform or submit an estimate request."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/estimate"
                className="px-8 py-4 rounded-2xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-bold text-sm sm:text-base shadow-lg shadow-[#2d263b]/15 transition-all"
              >
                {lang === "ru" ? "Калькулятор стоимости" : lang === "sr" ? "Kalkulator budžeta" : "Project Cost Estimator"}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl border border-[#e5e1eb] bg-white text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-bold text-sm sm:text-base shadow-sm hover:bg-[#faf9fb] transition-all"
              >
                {lang === "ru" ? "Связаться с нами" : lang === "sr" ? "Kontaktirajte studio" : "Contact Studio"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
