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
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const MigrateHubView: React.FC = () => {
  const { lang } = useLanguage();
  const platforms = Object.values(platformsData);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const comparisonRows = [
    {
      metric: lang === "ru" ? "Время отклика (TTFB)" : lang === "sr" ? "Vreme odziva servera (TTFB)" : "Time to First Byte (TTFB)",
      legacy: lang === "ru" ? "600-2500 мс (задержка MySQL / PHP)" : lang === "sr" ? "600-2500 ms (PHP/MySQL kašnjenje upita)" : "600-2,500ms (PHP/MySQL query latency)",
      nextjs: lang === "ru" ? "20-50 мс (глобальный Edge CDN)" : lang === "sr" ? "20-50 ms (globalni Edge CDN keš)" : "20-50ms (Global Edge CDN caching)",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Google Core Web Vitals (LCP)" : lang === "sr" ? "Google Core Web Vitals (LCP)" : "Google Core Web Vitals (LCP)",
      legacy: lang === "ru" ? "Часто в красной / жёлтой зоне (3-6 сек)" : lang === "sr" ? "Često u žutoj/crvenoj zoni (3.5-6.0s)" : "Often red/yellow range (3.5-6.0s)",
      nextjs: lang === "ru" ? "95-100 / 100 зелёная зона (< 0.8 сек)" : lang === "sr" ? "95-100 / 100 zelena zona (< 0.8s)" : "95-100 / 100 green range (< 0.8s)",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Безопасность и уязвимости" : lang === "sr" ? "Bezbednost i površina napada" : "Security & Exploit Surface",
      legacy: lang === "ru" ? "Постоянный риск инъекций через плагины" : lang === "sr" ? "Visok rizik zbog zastarelih CMS dodataka" : "High risk via outdated plugin exploits",
      nextjs: lang === "ru" ? "100% защита: база данных скрыта от витрины" : lang === "sr" ? "100% zaštita: baza podataka je skrivena" : "Headless immunity: no exposed database",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Плата за лицензии и модули" : lang === "sr" ? "Naknade za platforme i dodatke" : "License & Builder Fees",
      legacy: lang === "ru" ? "Ежемесячные платежи за конструктор / модули" : lang === "sr" ? "Mesečne pretplate na platforme i aplikacije" : "Recurring platform tax & app subscriptions",
      nextjs: lang === "ru" ? "$0 - код и инфраструктура принадлежат вам" : lang === "sr" ? "$0 - 100% vlasništvo nad kodom" : "$0 - 100% proprietary code ownership",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Поведение при пиковых нагрузках" : lang === "sr" ? "Ponašanje pod vršnim opterećenjem" : "Peak Traffic Resilience",
      legacy: lang === "ru" ? "Падение сайта при наплыве из-за нехватки RAM" : lang === "sr" ? "Pad servera pri skoku poseta usled manjka RAM-a" : "Server crashes under campaign spikes",
      nextjs: lang === "ru" ? "Автоматическое масштабирование Serverless" : lang === "sr" ? "Automatsko skaliranje Serverless infrastrukture" : "Infinite elastic serverless scaling",
      status: "win",
    },
    {
      metric: lang === "ru" ? "Владение исходным кодом" : lang === "sr" ? "Vlasništvo nad izvornim kodom" : "Source Code Ownership",
      legacy: lang === "ru" ? "Зависимость от платформы (Vendor lock-in)" : lang === "sr" ? "Vezanost za zatvorenu platformu (Vendor lock-in)" : "Vendor lock-in on hosted builders",
      nextjs: lang === "ru" ? "Полный доступ к репозиторию GitHub" : lang === "sr" ? "Potpun pristup GitHub repozitorijumu" : "Full access to git repository",
      status: "win",
    },
  ];

  const seoProtocols = [
    {
      step: "01",
      title: lang === "ru" ? "Полный аудит структуры URL" : lang === "sr" ? "Kompletna analiza strukture URL-ova" : "Complete URL Structure Crawl",
      desc:
        lang === "ru"
          ? "Сканируем текущий сайт краулером, фиксируем каждый существующий URL, канонические адреса и вложенность разделов."
          : lang === "sr"
          ? "Skeniramo postojeći sajt veb-popisivačem, beležimo svaki postojeći URL, kanonske putanje i strukturu sekcija."
          : "Crawling current site hierarchy, mapping every existing indexable URL, canonical path, and taxonomy node.",
    },
    {
      step: "02",
      title: lang === "ru" ? "Матрица 301-редиректов" : lang === "sr" ? "Arhitektura 301 preusmeravanja" : "301 Redirect Architecture",
      desc:
        lang === "ru"
          ? "Все измененные адреса связываются строгими правилами 301-редиректов на уровне Edge CDN. Ни один входящий бэклинк не теряется."
          : lang === "sr"
          ? "Sve izmenjene adrese povezuju se striktnim pravilima 301 preusmeravanja na nivou Edge CDN-a. Nijedan povratni link se ne gubi."
          : "Every altered endpoint is mapped via serverless Edge 301 rules. Inbound backlinks and Google index remain fully intact.",
    },
    {
      step: "03",
      title: lang === "ru" ? "Перенос метаданных и Schema.org" : lang === "sr" ? "Sinhronizacija metapodataka i Schema.org" : "Metadata & Schema.org Sync",
      desc:
        lang === "ru"
          ? "Title, Description, заголовки H1-H3, OpenGraph-разметка и JSON-LD микроразметка переносятся байт-в-байт без искажений."
          : lang === "sr"
          ? "Title, Description, H1-H3 struktura, OpenGraph oznake i JSON-LD mikrooznačavanje prenose se bez ikakvih gubitaka."
          : "Title tags, meta descriptions, H1-H3 semantics, OpenGraph, and JSON-LD structured schemas preserved with 100% fidelity.",
    },
    {
      step: "04",
      title: lang === "ru" ? "Ускорение Core Web Vitals" : lang === "sr" ? "Maksimalno ubrzanje Core Web Vitals" : "Core Web Vitals Maximize",
      desc:
        lang === "ru"
          ? "Google официально ранжирует быстрые сайты выше. Достижение 95-100 по PageSpeed даёт естественный буст позиций в поисковой выдаче."
          : lang === "sr"
          ? "Google zvanično bolje pozicionira brze sajtove. Rezultat od 95-100 na PageSpeed-u donosi prirodan skok u pretrazi."
          : "Google search algorithm directly rewards sub-second mobile page loads, boosting organic ranking signals post-migration.",
    },
    {
      step: "05",
      title: lang === "ru" ? "Контроль Search Console" : lang === "sr" ? "Verifikacija u Google Search Console" : "Search Console Verification",
      desc:
        lang === "ru"
          ? "Отправляем свежие sitemap.xml, контролируем переобход страниц роботами и отсутствие ошибок 404 в течение первых 30 дней."
          : lang === "sr"
          ? "Šaljemo ažurirane sitemap.xml fajlove i pratimo indeksiranje u realnom vremenu kako ne bi bilo 404 grešaka tokom prvih 30 dana."
          : "Deploying updated XML sitemaps and monitoring real-time crawl indexing in Google Search Console for zero 404 errors.",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Не просядут ли позиции сайта в Google и Яндекс после миграции?"
          : lang === "sr"
          ? "Da li će organske Google pozicije opasti nakon migracije na Next.js?"
          : "Will our organic Google search rankings drop after migrating to Next.js?",
      a:
        lang === "ru"
          ? "При профессиональной миграции позиции не только сохраняются, но и вырастают. Мы проводим предварительный аудит, переносим всю структуру URL один к одному, настраиваем серверные 301-редиректы и выводим мобильную скорость в зеленую зону (LCP < 0.8с). Поисковые системы поощряют быстрый и доступный Next.js сайт более высокими позициями."
          : lang === "sr"
          ? "Uz profesionalnu migraciju pozicije ne opadaju - naprotiv, često rastu. Radimo kompletnu pripremnu reviziju, prenosimo sve URL adrese jedan prema jedan, konfigurišemo 301 preusmeravanja i dovodimo brzinu na mobilnim uređajima u zelenu zonu (LCP < 0.8s). Google pretraživač nagrađuje brze i pristupačne Next.js sajtove višim rangiranjem."
          : "With professional migration engineering, positions do not drop - they typically improve. We preserve identical URL slugs, deploy edge 301 redirect mappings, and elevate Core Web Vitals into the green zone (LCP < 0.8s). Search algorithms favor lightning-fast serverless architectures.",
    },
    {
      q:
        lang === "ru"
          ? "В чём преимущество тандема GoMVP + Few Hands перед обычной веб-студией?"
          : lang === "sr"
          ? "Koja je prednost tandema GoMVP + Few Hands u odnosu na klasične agencije?"
          : "What is the advantage of the GoMVP + Few Hands tandem over a traditional agency?",
      a:
        lang === "ru"
          ? "Большинство веб-студий пытаются делать всё сразу средними силами. В нашем тандеме действует строгое разделение специализаций: партнёр GoMVP - это высококлассная техническая инженерия (бэкенд на Go, масштабируемые API, чистый React/Next.js без мусора). Студия Few Hands - это забота о клиенте: аудит проекта, онбординг и обучение ваших менеджеров, а также ежемесячная поддержка сайта на тарифе Retainer."
          : lang === "sr"
          ? "Većina agencija pokušava da radi sve sa opštim kadrom. U našem modelu postoji jasna podela: GoMVP obezbeđuje vrhunski tehnički inženjering (Go mikroservisi, čist React/Next.js bez balasta), dok Few Hands pruža posvećenu podršku: uvodni audit, obuku vašeg tima i pouzdano mesečno održavanje u okviru Retainer modela."
          : "Traditional agencies often rely on overloaded generalists. Our model decouples deep technical execution from client operations: GoMVP delivers high-performance engineering (Go microservices, clean React/Next.js), while Few Hands provides discovery consulting, hands-on staff training, and reliable monthly retainer maintenance.",
    },
    {
      q:
        lang === "ru"
          ? "Как происходит перенос интернет-магазина без остановки продаж?"
          : lang === "sr"
          ? "Kako se migracija internet prodavnice odvija bez prekida narudžbina?"
          : "How do you migrate an e-commerce catalog without interrupting live orders?",
      a:
        lang === "ru"
          ? "Миграция интернет-магазина ведется на изолированном стейджинговом сервере. Ваш действующий магазин продолжает принимать заказы в обычном режиме. В день переключения домена (DNS switch) мы запускаем финальную дельта-синхронизацию актуальных заказов и клиентов. Переключение занимает считанные минуты без простоя в продажах."
          : lang === "sr"
          ? "Migracija se razvija u izolovanom radnom (staging) okruženju, dok vaša postojeća prodavnica nesmetano prima uplate i narudžbine. Na dan preusmeravanja domena (DNS switch) vršimo automatsku sinhronizaciju najnovijih narudžbina i kupaca. Ceo prelazak traje nekoliko minuta bez zastoja u prodaji."
          : "We engineer e-commerce migrations in an isolated staging environment while your existing store processes live transactions without interruption. During DNS switchover, an automated delta-sync bridges live orders and stock. Total cutover takes minutes with zero downtime.",
    },
    {
      q:
        lang === "ru"
          ? "Смогут ли наши контент-менеджеры редактировать тексты и товары?"
          : lang === "sr"
          ? "Da li će naši menadžeri sadržaja moći lako da menjaju tekstove i artikle?"
          : "Will our non-technical content managers be able to edit pages and products?",
      a:
        lang === "ru"
          ? "Да, абсолютно. Мы подключаем удобную Headless CMS (Strapi, Sanity или нативную админку). Ваши сотрудники получают чистый, быстрый интерфейс без технических сложностей. Кроме того, Few Hands записывает персонализированные скринкасты и обучает ваших сотрудников работе с новой системой."
          : lang === "sr"
          ? "Da, naravno. Povezujemo intuitivni Headless CMS (Strapi, Sanity ili prilagođeni administrativni panel). Vaši zaposleni dobijaju brz i pregledan interfejs. Pored toga, Few Hands snima personalizovane video-uputstva i organizuje obuku za vaš tim."
          : "Yes. We configure an intuitive Headless CMS (Strapi, Sanity, or lightweight bespoke dashboard). Content editors enjoy clean, instant visual editing. In addition, Few Hands produces custom video walkthroughs and provides onboarding support for your internal team.",
    },
    {
      q:
        lang === "ru"
          ? "Что входит в гарантию безопасности и отказоустойчивости?"
          : lang === "sr"
          ? "Šta obuhvataju garancije bezbednosti i stabilnosti rada?"
          : "What guarantees are provided regarding security and uptime?",
      a:
        lang === "ru"
          ? "Благодаря архитектуре Headless витрина Next.js полностью изолирована от базы данных и административной панели. Сайт физически неуязвим для традиционных SQL-инъекций и атак на плагины. Статические страницы кэшируются на глобальной сети Edge CDN, выдерживая любые пиковые нагрузки и DDoS-атаки."
          : lang === "sr"
          ? "Zahvaljujući Headless arhitekturi, Next.js prezentacioni sloj je u potpunosti odvojen od baze podataka i administrativnog panela. Sajt je fizički zaštićen od SQL napada i ranjivosti dodataka. Statičke stranice se keširaju na globalnoj Edge CDN mreži, otporne na bilo koje skokove poseta i DDoS napade."
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
          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <header className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf5f5] border border-[#386161]/25 text-[#386161] text-xs font-semibold mb-4">
                <Cpu className="w-3.5 h-3.5 text-[#386161]" />
                <span>{lang === "ru" ? "Безопасный перенос сайтов на современный стек" : lang === "sr" ? "Bezbedan prelazak na moderan veb стек" : "Zero-Downtime Jamstack Migration"}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
                {lang === "ru"
                  ? "Миграция с медленных CMS на Next.js под ключ"
                  : lang === "sr"
                  ? "Migracija sa sporih CMS platformi na Next.js po principu 'ključ u ruke'"
                  : "Enterprise CMS Migration to Next.js & Serverless"}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Переносим сайты с WordPress, Tilda, 1C-Битрикс, Webflow, InSales, Shopify и самописных систем на архитектуру Next.js 15. Гарантируем 100% сохранение SEO-позиций, ускорение загрузки до 0.8 секунд и нулевые платежи за конструкторы."
                  : lang === "sr"
                  ? "Migriramo sajtove sa WordPress-a, Tilde, Bitrix-a, Webflow-a, InSales-a, Shopify-a i monolitnih rešenja na Next.js 15 arhitekturu. Garantujemo 100% očuvanje SEO pozicija, učitavanje ispod 0.8 sekundi i nula troškova licenci za platforme."
                  : "Seamlessly migrate legacy websites from WordPress, Tilda, Bitrix, Webflow, InSales, and custom PHP monoliths to Next.js 15. Maintain 100% SEO rankings, achieve sub-second TTFB, and eliminate recurring builder fees forever."}
              </p>
            </header>

            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
              <CraftCard
                tag={lang === "ru" ? "ПРОТОКОЛ МИГРАЦИИ" : lang === "sr" ? "PROTOKOL MIGRACIJE" : "MIGRATION PROTOCOL"}
                question={
                  lang === "ru"
                    ? "Устали от ада с 40+ плагинами и конструкторами?"
                    : lang === "sr"
                    ? "Dosta vam je problema sa 40+ dodataka i platformama?"
                    : "Fatigued by CMS plugin hell & builder lock-in?"
                }
                reason={
                  lang === "ru"
                    ? "Плагины ломаются при обновлениях и тормозят сайт. Next.js 15 даёт чистый исходный код, TTFB < 50мс и нулевой риск взлома."
                    : lang === "sr"
                    ? "Dodaci se kvare pri ažuriranjima i usporavaju sajt. Next.js 15 pruža čist kod, TTFB < 50ms i nultu mogućnost kompromitovanja."
                    : "Plugins break on every update and degrade TTFB. Next.js 15 delivers static edge speed, 100% git code ownership, and zero exploit surface."
                }
                checked={true}
                rotate="rotate-1"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Strategic Alliance Banner */}
          <div className="mt-10 p-6 rounded-3xl border border-[#386161]/20 bg-gradient-to-r from-[#edf5f5] via-white to-[#f1f0f5] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#386161] text-white flex items-center justify-center shrink-0 shadow-md">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#386161]">
                    {lang === "ru" ? "Стратегический альянс" : lang === "sr" ? "Strateško partnerstvo" : "Strategic Engineering Partnership"}
                  </span>
                  <span className="text-[10px] bg-[#386161]/10 text-[#386161] font-mono px-2 py-0.5 rounded-full font-bold">
                    GoMVP × Few Hands
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#2d263b] mt-1">
                  {lang === "ru"
                    ? "GoMVP отвечает за технический инжиниринг, Few Hands - за аудит, обучение и сопровождение (Retainer)"
                    : lang === "sr"
                    ? "GoMVP je zadužen za tehnički inženjering, Few Hands za analizu, obuku i podršku (Retainer)"
                    : "GoMVP powers core engineering; Few Hands handles audits, staff onboarding, and ongoing retainer support"}
                </h2>
                <p className="text-xs sm:text-sm text-[#585068] mt-1 max-w-2xl leading-relaxed">
                  {lang === "ru"
                    ? "Вы получаете уровень разработки от senior-архитекторов GoMVP и заботливый сервис Few Hands: понятные консультации, видео-инструкции для контентщиков и надежное сопровождение 24/7."
                    : lang === "sr"
                    ? "Dobijate nivo razvoja vodećih senior arhitekata GoMVP-a i posvećenu brigu Few Hands-a: jasne konsultacije, video uputstva za administratore i pouzdano 24/7 održavanje."
                    : "Clients benefit from senior-level microservice engineering combined with hands-on human support, staff walkthroughs, and dependable monthly maintenance."}
                </p>
              </div>
            </div>
            <Link
              href="/estimate?service=migration"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] text-xs sm:text-sm font-semibold shadow-md shadow-[#2d263b]/20 shrink-0 transition"
            >
              <span>{lang === "ru" ? "Рассчитать смету" : lang === "sr" ? "Proračunajte budžet" : "Calculate Migration"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Platforms Grid */}
          <section className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {lang === "ru" ? "С каких платформ мы мигрируем" : lang === "sr" ? "Platforme sa kojih prenosimo sajtove" : "Supported Source Platforms"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {lang === "ru"
                    ? "Нажмите на платформу, чтобы изучить подробный план и преимущества переезда"
                    : lang === "sr"
                    ? "Kliknite na platformu da biste pregledali detaljan plan i prednosti prelaska"
                    : "Select a platform to review the dedicated migration roadmap and benchmarks"}
                </p>
              </div>

              <DoodlePointer
                text={lang === "ru" ? "выберите CMS для дорожной карты ↘" : lang === "sr" ? "izaberite CMS za plan migracije ↘" : "pick source CMS for roadmap ↘"}
                direction="curved-right"
                className="hidden lg:inline-flex shrink-0 self-end mb-1"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/migrate/${p.slug}`}
                  className="group p-6 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl hover:border-[#386161]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#f1f0f5] text-[#2d263b] group-hover:bg-[#edf5f5] group-hover:text-[#386161] transition">
                        {p.title[lang]} → Next.js
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#386161] group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="text-xl font-bold text-[#2d263b] group-hover:text-[#386161] transition-colors">
                      {p.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#585068] mt-2 line-clamp-3 leading-relaxed">
                      {p.metaDescription[lang]}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {lang === "ru" ? "Ключевые боли:" : lang === "sr" ? "Glavna uska grla:" : "Primary Bottlenecks:"}
                      </div>
                      {p.painPoints[lang].slice(0, 2).map((pain, pi) => (
                        <div key={pi} className="flex items-start gap-2 text-xs text-rose-600">
                          <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f1f0f5] flex items-center justify-between text-xs font-semibold text-[#386161]">
                    <span>{lang === "ru" ? "Читать разбор миграции" : lang === "sr" ? "Pogledajte analizu migracije" : "Explore Blueprint"}</span>
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
                <span>{lang === "ru" ? "Инженерное сравнение" : lang === "sr" ? "Inženjersko poređenje" : "Architectural Comparison"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "Монолитные CMS vs Архитектура Few Hands на Next.js"
                  : lang === "sr"
                  ? "Monolitni CMS vs Few Hands arhitektura na Next.js"
                  : "Legacy Monoliths vs Few Hands Headless Next.js"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                {lang === "ru"
                  ? "Почему современные цифровые компании отказываются от закрытых платформ в пользу чистого кода и Serverless-инфраструктуры."
                  : lang === "sr"
                  ? "Zašto savremene digitalne kompanije napuštaju zatvorene platforme u korist čistog koda i Serverless infrastrukture."
                  : "Why modern digital leaders move away from closed builders toward clean code and distributed Edge architectures."}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#2d263b]/10 bg-white shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#2d263b]/10 bg-[#faf9fb]">
                    <th className="p-4 sm:p-5 font-bold text-[#2d263b]">
                      {lang === "ru" ? "Критерий оценки" : lang === "sr" ? "Kriterijum procene" : "Evaluation Metric"}
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#585068]">
                      {lang === "ru" ? "Текущая CMS (WordPress / Tilda / Bitrix)" : lang === "sr" ? "Monolitni CMS / Platforma (WordPress / Tilda / Bitrix)" : "Legacy Monolithic CMS / Builder"}
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#386161] bg-[#edf5f5]/60">
                      {lang === "ru" ? "Few Hands (Next.js 15 + Edge CDN)" : "Few Hands (Next.js 15 + Edge CDN)"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2d263b]/5">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#faf9fb] transition">
                      <td className="p-4 sm:p-5 font-semibold text-[#2d263b]">
                        {row.metric}
                      </td>
                      <td className="p-4 sm:p-5 text-[#585068]">
                        {row.legacy}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-[#2d263b] bg-[#edf5f5]/40 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7ea368] shrink-0" />
                        <span>{row.nextjs}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hand-drawn craft annotation stamps & PS note */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <CustomStampBadge
                label={lang === "ru" ? "SEO ИММУНИТЕТ" : lang === "sr" ? "SEO IMUNITET" : "SEO RETENTION"}
                caption={
                  lang === "ru"
                    ? "100% 301-редиректов • 0 потерянных URL"
                    : lang === "sr"
                    ? "100% 301 preusmeravanja • 0 izgubljenih URL-ova"
                    : "100% 301 redirects • Zero dropped index"
                }
                starsCount={5}
                className="-rotate-1 max-w-xs shrink-0"
              />

              <CustomPSCard
                noteTitle={lang === "ru" ? "P.S. Экономика владения:" : lang === "sr" ? "P.S. Ekonomija vlasništva:" : "P.S. TCO Note:"}
                text={
                  lang === "ru"
                    ? "Конструкторы берут ежемесячную аренду годами. Собственный Next.js сайт на Edge CDN сокращает инфраструктурные расходы почти до нуля."
                    : lang === "sr"
                    ? "Platforme godinama naplaćuju mesečnu licencu. Sopstveni Next.js sajt na globalnom Edge CDN-u smanjuje troškove infrastrukture skoro na nulu."
                    : "Hosted platforms tax your growth month after month. A bespoke Next.js site on global Edge reduces infrastructure upkeep close to zero."
                }
                className="rotate-1 flex-1 w-full"
              />
            </div>
          </section>

          {/* 5-Step SEO Retention Protocol */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Защита поискового трафика" : lang === "sr" ? "Zaštita organskog saobraćaja" : "Organic Traffic Defense"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === "ru"
                  ? "5-шаговый протокол сохранения SEO-позиций при миграции"
                  : lang === "sr"
                  ? "Protokol u 5 koraka za očuvanje SEO pozicija pri migraciji"
                  : "5-Step SEO Retention Protocol: Zero Traffic Drop Guarantee"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                {lang === "ru"
                  ? "Никаких потерь трафика или позиций. Мы сохраняем каждый байт поисковой репутации вашего домена."
                  : lang === "sr"
                  ? "Bez gubitka poseta i pozicija. Čuvamo svaki segment stečenog autoriteta vašeg domena."
                  : "Preserve every drop of organic search equity. We crawl, map, and redirect with mathematical accuracy."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {seoProtocols.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-[#2d263b]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-[#386161] bg-[#edf5f5] px-2 py-0.5 rounded-md inline-block mb-3">
                      STEP {step.step}
                    </div>
                    <h3 className="font-bold text-sm text-[#2d263b]">{step.title}</h3>
                    <p className="text-xs text-[#585068] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Retainer & Support Pillars */}
          <section className="mt-24 pt-16 border-t border-[#2d263b]/10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-[#2d263b] text-xs font-semibold mb-4">
                <Headphones className="w-3.5 h-3.5 text-[#386161]" />
                <span>{lang === "ru" ? "После релиза" : lang === "sr" ? "Nakon objave" : "Post-Launch Care"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] tracking-tight">
                {lang === "ru"
                  ? "Мы не бросаем проект после релиза: обучение и сопровождение (Retainer)"
                  : lang === "sr"
                  ? "Ne ostavljamo projekat nakon puštanja u rad: obuka i podrška (Retainer)"
                  : "End-to-End Handover: Team Training & Monthly Retainers"}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-[#2d263b]/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#edf5f5] text-[#386161] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#2d263b]">
                    {lang === "ru" ? "Обучение сотрудников" : lang === "sr" ? "Obuka zaposlenih" : "Staff Onboarding"}
                  </h3>
                  <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Записываем пошаговые видео-инструкции по управлению контентом и проводим персональные онлайн-сессии для менеджеров."
                      : lang === "sr"
                      ? "Snimamo video-uputstva korak po korak za uređivanje sadržaja i držimo radionice za menadžere."
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
                    {lang === "ru" ? "Ежемесячный Retainer" : lang === "sr" ? "Mesečni Retainer" : "Monthly Retainers"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Регулярная техническая поддержка: доработки функционала, мониторинг доступности, бэкапы и консультации без найма штатного веб-мастера."
                      : lang === "sr"
                      ? "Redovno tehničko održavanje: nove funkcije, praćenje dostupnosti, rezervne kopije i savetovanje bez zapošljavanja internog programera."
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
                    {lang === "ru" ? "SLA и Гарантия" : lang === "sr" ? "SLA i garancije" : "SLA & Guarantees"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lang === "ru"
                      ? "Четко зафиксированное время реакции на инциденты и прямая связь с ведущими разработчиками."
                      : lang === "sr"
                      ? "Jasno definisano vreme odziva u hitnim situacijama i direktna komunikacija sa vodećim inženjerima."
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
                {lang === "ru" ? "Частые вопросы о миграции сайтов" : lang === "sr" ? "Česta pitanja o migraciji sajtova" : "Frequently Asked Questions"}
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
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#2d263b] text-sm sm:text-base hover:text-[#386161] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#585068]/50 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-[#386161]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-[#2d263b]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <footer className="mt-20 p-8 sm:p-12 rounded-3xl border border-[#2d263b]/10 bg-gradient-to-b from-white/90 to-[#f1f0f5]/90 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru" ? "Хотите узнать точные сроки миграции вашего сайта?" : lang === "sr" ? "Želite da saznate tačan rok i budžet za migraciju vašeg sajta?" : "Ready to Audit and Plan Your Migration?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto">
              {lang === "ru"
                ? "Воспользуйтесь нашим интерактивным калькулятором или свяжитесь с нами для бесплатного экспресс-аудита структуры сайта."
                : lang === "sr"
                ? "Iskoristite naš interaktivni kalkulator ili nam pošaljite upit za besplatnu brzu analizu strukture vašeg sajta."
                : "Submit your existing website URL for a complimentary code & architecture evaluation or calculate estimate instantly."}
            </p>
            <div className="mt-6 flex flex-col items-center">
              <DoodlePointer
                text={lang === "ru" ? "экспресс-расчет стоимости за 1 мин ↘" : lang === "sr" ? "brzi proračun cene za 1 min ↘" : "express cost calculation in 1 min ↘"}
                direction="curved-down-right"
                className="mb-2"
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/estimate?service=migration"
                  className="px-6 py-3.5 rounded-2xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-md shadow-[#2d263b]/20 transition"
                >
                  {lang === "ru" ? "Рассчитать стоимость миграции" : lang === "sr" ? "Proračunajte cenu migracije" : "Calculate Migration Estimate"}
                </Link>
                <a
                  href="mailto:web@fewhands.com"
                  className="px-6 py-3.5 rounded-2xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-xs sm:text-sm shadow-sm transition"
                >
                  {lang === "ru" ? "Написать на web@fewhands.com" : lang === "sr" ? "Pišite na web@fewhands.com" : "Email web@fewhands.com"}
                </a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
};
