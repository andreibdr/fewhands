"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import {
  CraftCard,
  AuditMetricsCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";
import {
  Code2,
  GitBranch,
  ShieldCheck,
  Zap,
  Users,
  Terminal,
  ArrowRight,
  ExternalLink,
  Lock,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Briefcase,
} from "lucide-react";

export const AboutView: React.FC = () => {
  const { lang } = useLanguage();
  const [activeEra, setActiveEra] = useState<number>(0);

  // Structured Data (JSON-LD) for Schema.org SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name:
      lang === "ru"
        ? "О студии Few Hands - Манифест бутиковой веб-инженерии"
        : lang === "sr"
        ? "O studiju Few Hands - Manifest butičkog veb inženjeringa"
        : "About Few Hands - Boutique Web Engineering Manifesto",
    description:
      lang === "ru"
        ? "История, философия и инженерный манифест студии Few Hands (Est. 2008). Почему компактная senior-команда побеждает агентский конвейер."
        : lang === "sr"
        ? "Istorija, filozofija i inženjerski manifest studija Few Hands (Est. 2008). Zašto kompaktan senior tim pobeđuje agencijski kontejner."
        : "History, core philosophy, and engineering manifesto of Few Hands (Est. 2008). Why a senior boutique beats the agency assembly line.",
    publisher: {
      "@type": "Organization",
      name: "Few Hands Studio",
      url: "https://fewhands.com",
      foundingDate: "2008",
      founder: {
        "@type": "Person",
        name: "Andrei Ryzhenko",
        jobTitle: "Founder & Lead Architect",
      },
      sameAs: ["https://gomvp.dev/en/migrate"],
    },
  };

  // Evolution eras from 1998 to present
  const eras = [
    {
      year: "1998-2007",
      badge: lang === "ru" ? "Истоки & Блокнот" : lang === "sr" ? "Koreni & Notepad" : "Notepad Era & Passion",
      title: lang === "ru" ? "HTML в блокноте, работа в студиях и ремесло" : lang === "sr" ? "HTML u Notepad-u, rad u studijima i zanat" : "Raw HTML in Notepad & The Studio Years",
      summary:
        lang === "ru"
          ? "Путь начался в 1998 году: вёрстка первых сайтов на чистом HTML в стандартном блокноте Windows на заре коммерческого веба. Работа в нескольких веб-студиях, совмещение инженерной практики с увлечённым хобби и накопление глубокого опыта, который в 2008 году привёл к решению основать собственный независимый бутик Few Hands."
          : lang === "sr"
          ? "Put je počeo 1998. godine: izrada prvih sajtova na čistom HTML-u u običnom Notepad-u u osvit komercijalnog interneta. Rad u nekoliko veb agencija, spajanje inženjerske prakse sa strastvenim hobijem i sticanje iskustva koje je 2008. godine dovelo do odluke o osnivanju sopstvenog butika Few Hands."
          : "The journey started in 1998: hand-coding first websites in raw HTML inside Windows Notepad during the internet's infancy. Years spent across digital studios balancing passion hobby with engineering rigor, culminating in the decision to establish Few Hands in 2008.",
      highlights: [
        lang === "ru" ? "Вёрстка в блокноте: фундаментальное знание стандартов W3C" : lang === "sr" ? "Pisanje koda u Notepad-u: fundamentalno znanje W3C standarda" : "Notepad hand-coding: foundational mastery of W3C web standards",
        lang === "ru" ? "Опыт работы изнутри в нескольких классических веб-студиях" : lang === "sr" ? "Radno iskustvo iznutra u nekoliko klasičnih veb agencija" : "Hands-on studio tenure: witnessing early agency workflows firsthand",
        lang === "ru" ? "Осознание потребности в независимом бутиковом подходе" : lang === "sr" ? "Prepoznavanje potrebe za nezavisnim butičkim pristupom" : "Recognizing the vital need for an authentic boutique model",
      ],
    },
    {
      year: "2008-2012",
      badge: lang === "ru" ? "Основание студии" : lang === "sr" ? "Osnivanje studija" : "Studio Founded",
      title: lang === "ru" ? "Рождение Few Hands & Эпоха нативного веба" : lang === "sr" ? "Osnivanje Few Hands i era izvornog veba" : "Birth of Few Hands & The Native Web Era",
      summary:
        lang === "ru"
          ? "Мы начинали в эпоху PHP 4/5, MySQL и верстки на чистом HTML/CSS без тяжелых фреймворков. Это научило нас ценить каждый килобайт памяти и понимать устройство браузерного движка до винтика."
          : lang === "sr"
          ? "Počeli smo u eri PHP 4/5, MySQL-a i čistog HTML/CSS-a bez teških biblioteka. To nas je naučilo da cenimo svaki kilobajt memorije i razumemo rad pretraživača do najsitnijih detalja."
          : "We started in the era of PHP 4/5, MySQL, and clean handwritten HTML/CSS before modern frameworks. This forged our respect for every kilobyte and mechanical empathy for browser rendering engines.",
      highlights: [
        lang === "ru" ? "Разработка кастомных движков без стороннего мусора" : lang === "sr" ? "Razvoj namenskih sistema bez tuđeg balasta" : "Custom bespoke engines without external bloat",
        lang === "ru" ? "Первые коммерческие интернет-магазины и порталы" : lang === "sr" ? "Prve komercijalne e-prodavnice i portali" : "First high-traffic storefronts and portals",
        lang === "ru" ? "Принцип: полный контроль над каждой строкой кода" : lang === "sr" ? "Princip: potpuna kontrola nad svakom linijom koda" : "Core rule: total mastery over every line of code",
      ],
    },
    {
      year: "2013-2018",
      badge: lang === "ru" ? "Кризис монолитов" : lang === "sr" ? "Kriza monolita" : "Monolith CMS Era",
      title: lang === "ru" ? "Бум CMS и наблюдение за деградацией платформ" : lang === "sr" ? "Ekspanzija CMS-a i posmatranje njihove degradacije" : "The CMS Boom & Observing Platform Rot",
      summary:
        lang === "ru"
          ? "Мы реализовали сотни проектов на WordPress, Bitrix, MODX и конструкторах. Именно тогда мы изнутри увидели главный порок массового рынка: ад из 40+ конфликтующих плагинов, дыры в безопасности и медлительность монолитов."
          : lang === "sr"
          ? "Realizovali smo stotine projekata na platformama WordPress, Bitrix, MODX i vizuelnim graditeljima. Tada smo iznutra uvideli glavnu manu masovnog tržišta: konflikt desetina dodataka, sigurnosne rupe i usporen rad monolita."
          : "We built hundreds of projects across WordPress, Bitrix, MODX, and early builders. That is where we witnessed firsthand the fatal flaws of mass-market CMSs: conflicting plugin bloat, security exploits, and crippling database load.",
      highlights: [
        lang === "ru" ? "Глубокое понимание архитектуры всех популярных CMS" : lang === "sr" ? "Duboko razumevanje unutrašnje arhitekture svih CMS-ova" : "Exhaustive architectural grasp of all legacy CMS internals",
        lang === "ru" ? "Лечение чужих взломанных сайтов и утечек памяти" : lang === "sr" ? "Saniranje tuđih hakovanih sajtova i curenja memorije" : "Remediating external exploits, memory leaks, and broken updates",
        lang === "ru" ? "Формирование решения: будущему вебу нужен чистый фронтенд" : lang === "sr" ? "Donošenje odluke: budućnosti veba je potreban čist frontend" : "Formulating our direction: the modern web requires clean decoupled frontends",
      ],
    },
    {
      year: "2019-2022",
      badge: lang === "ru" ? "Поворот к Jamstack" : lang === "sr" ? "Preokret ka Jamstack-u" : "The Jamstack Pivot",
      title: lang === "ru" ? "Отказ от тяжелых CMS и переход на Next.js" : lang === "sr" ? "Napuštanje teških CMS-ova i prelazak na Next.js" : "Retiring Heavy CMSs & Committing to Next.js",
      summary:
        lang === "ru"
          ? "Мы приняли стратегическое решение: навсегда прекратить создание сайтов на монолитных движках. Весь фокус студии был направлен на React, Next.js, строгий TypeScript и распределенный статический рендеринг на Edge CDN."
          : lang === "sr"
          ? "Doneli smo stratešku odluku: trajno obustaviti izradu novih sajtova na monolitnim sistemima. Sav fokus usmerili smo na React, Next.js, striktni TypeScript i distribuirani statički rendering na Edge CDN-u."
          : "We made a permanent strategic pivot: stop creating sites on monolithic engines. Our studio dedicated 100% of engineering bandwidth to React, Next.js, strict TypeScript, and edge-rendered architectures.",
      highlights: [
        lang === "ru" ? "Показатели Google PageSpeed 98-100/100 стали стандартом" : lang === "sr" ? "Standardizacija Google PageSpeed rezultata na 98-100/100" : "Standardized 98-100/100 Google PageSpeed benchmarks",
        lang === "ru" ? "Нулевая уязвимость для SQL-инъекций и взлома БД" : lang === "sr" ? "Nulta izloženost SQL napadima i hakovanju baza" : "Zero attack surfaces against SQL injections and database attacks",
        lang === "ru" ? "Автономные клиенты: код хранится в личном GitHub заказчика" : lang === "sr" ? "Potpuna autonomija: kod pripada ličnom GitHub nalogu klijenta" : "Total client autonomy: code hosted in client-owned private repositories",
      ],
    },
    {
      year: "2023-2024",
      badge: lang === "ru" ? "Альянс с GoMVP" : lang === "sr" ? "Alijansa sa GoMVP" : "Alliance with GoMVP",
      title: lang === "ru" ? "Инженерный альянс & Безупречные миграции" : lang === "sr" ? "Inženjerski savez i besprekorne migracije" : "Engineering Alliance & Zero-Downtime Migrations",
      summary:
        lang === "ru"
          ? "Few Hands заключила технологическое партнёрство с GoMVP (gomvp.dev). Мы разработали собственный 5-этапный протокол миграции, гарантирующий сохранение 100% поискового трафика и бесшовный переезд данных."
          : lang === "sr"
          ? "Few Hands je sklopio tehnološko partnerstvo sa GoMVP (gomvp.dev). Razvili smo sopstveni petofazni protokol migracije koji garantuje očuvanje 100% organskih SEO pozicija i prenos baze bez prekida rada."
          : "Few Hands established a dedicated engineering partnership with GoMVP (gomvp.dev). We developed our proprietary 5-phase migration protocol, guaranteeing zero SEO traffic loss and seamless transition of complex backends.",
      highlights: [
        lang === "ru" ? "Миграции сотен страниц с WordPress, Tilda, Webflow и Битрикс" : lang === "sr" ? "Migracije stotina stranica sa platformi WordPress, Tilda, Webflow i Bitrix" : "Migrated deep taxonomies from WordPress, Tilda, Webflow, and Bitrix",
        lang === "ru" ? "Запуск абонентского сопровождения Retainer без штатных затрат" : lang === "sr" ? "Pokretanje mesečnih Retainer paketa bez fiksnih in-house troškova" : "Launched engineering retainer maintenance eliminating in-house hiring overhead",
        lang === "ru" ? "Клиенты в США, Великобритании, ЕС, ОАЭ и СНГ" : lang === "sr" ? "Klijenti u SAD, Velikoj Britaniji, EU, UAE i širom sveta" : "Serving international clients across the US, UK, EU, UAE, and beyond",
      ],
    },
    {
      year: "2025-2026",
      badge: lang === "ru" ? "AI & Скорость" : lang === "sr" ? "AI & Brzina" : "AI & Next-Gen Edge",
      title: lang === "ru" ? "AI-аватары, Next.js 15/16 & Бутиковое будущее" : lang === "sr" ? "AI avatari, Next.js 15/16 i butička budućnost" : "AI Video Avatars, Next.js 15/16 & The Boutique Edge",
      summary:
        lang === "ru"
          ? "Сегодня Few Hands объединяет бескомпромиссную веб-инженерию с передовыми генеративными технологиями. Мы создаем цифровых аватаров с синхронной артикуляцией на 30+ языках и держим сайт клиента в зеленой зоне Core Web Vitals."
          : lang === "sr"
          ? "Danas Few Hands kombinuje beskompromisni veb inženjering sa najnovijim generativnim tehnologijama. Kreiramo digitalne video avatare sa neuralnom artikulacijom na 30+ jezika i održavamo sajtove klijenata u zelenoj Core Web Vitals zoni."
          : "Today Few Hands pairs uncompromising web engineering with next-generation generative media. We deploy photorealistic neural avatars speaking 30+ languages alongside flawless sub-second Next.js web applications.",
      highlights: [
        lang === "ru" ? "Интеграция фотореалистичных аватаров в конверсионные воронки" : lang === "sr" ? "Integracija fotorealističnih avatara u prodajne levke" : "Integrating photorealistic avatars into commercial landing funnels",
        lang === "ru" ? "Молниеносный TTFB на Edge CDN с нулевым серверным простоем" : lang === "sr" ? "Munjevit TTFB na Edge CDN-u sa nula neplaniranih prekida" : "Blazing edge TTFB with 99.99% infrastructure uptime",
        lang === "ru" ? "Осознанный бутиковый формат: прямое участие ведущих инженеров" : lang === "sr" ? "Svesni butički format: direktan rad vodećih inženjera" : "Deliberately boutique: direct engagement from lead engineers on every build",
      ],
    },
  ];

  // 6 Non-negotiable principles
  const principles = [
    {
      icon: Users,
      num: "01",
      title: lang === "ru" ? "Прямая связь без испорченного телефона" : lang === "sr" ? "Direktna veza bez posrednika" : "Zero Telephone, Direct Engineer Access",
      desc:
        lang === "ru"
          ? "В больших агентствах над вами ставят сейлза, аккаунта и джуниора-стажёра. В Few Hands вы общаетесь напрямую в Telegram или Slack с инженером, который лично пишет архитектуру вашего сайта."
          : lang === "sr"
          ? "U velikim agencijama stavljaju vas u lanac komunikacije: prodaja, akaund, pa tek onda pripravnik. U Few Hands-u razgovarate direktno u Telegramu ili Slacku sa inženjerom koji lično piše vaš kod."
          : "No account manager gatekeepers or junior relays. You collaborate directly with the lead engineer architecting and writing your application in real time.",
    },
    {
      icon: GitBranch,
      num: "02",
      title: lang === "ru" ? "100% автономия и нулевой вендор-лок" : lang === "sr" ? "100% autonomija i nula zavisnosti" : "Zero Vendor Lock-in & Full Ownership",
      desc:
        lang === "ru"
          ? "Мы никогда не держим клиентов «в заложниках». Ваш репозиторий на GitHub/GitLab, все серверные ключи, домены и базы данных оформляются на вас с первого дня."
          : lang === "sr"
          ? "Nikada ne držimo klijente u zavisnosti. Vaš repozitorijum na GitHub-u, svi API ključevi i hosting nalozi glase isključivo na vas od prvog dana saradnje."
          : "We never hold clients hostage. Your GitHub repository, deployment webhooks, and third-party API credentials belong to you from day one with zero proprietary traps.",
    },
    {
      icon: Zap,
      num: "03",
      title: lang === "ru" ? "Скорость загрузки как бизнес-фактор" : lang === "sr" ? "Brzina učitavanja kao poslovni faktor" : "Sub-Second Performance as a KPI",
      desc:
        lang === "ru"
          ? "Если страница открывается дольше 1 секунды, бизнес теряет до 40% конверсии в рекламе. Мы гарантируем показатели PageSpeed 98-100/100 и мгновенный LCP до 0.8s."
          : lang === "sr"
          ? "Ako se stranica otvara duže od 1 sekunde, gubi se do 40% konverzije u plaćenom oglašavanju. Mi garantujemo Core Web Vitals 98-100/100 i trenutni LCP ispod 0.8s."
          : "If a webpage takes longer than 1 second to render, up to 40% of advertising clicks bounce. We architect for guaranteed 98-100 PageSpeed scores and sub-0.8s LCP.",
    },
    {
      icon: ShieldCheck,
      num: "04",
      title: lang === "ru" ? "Строгий TypeScript и чистая архитектура" : lang === "sr" ? "Strogi TypeScript i čista arhitektura" : "Strict TypeScript & Modular Codebases",
      desc:
        lang === "ru"
          ? "Никаких хаков, скрытых костылей и устаревших библиотек. Код Few Hands задокументирован, типизирован и легко расширяется любым сеньор-разработчиком в будущем."
          : lang === "sr"
          ? "Bez prečica, zastarelih biblioteka i neurednog koda. Baza koda Few Hands-a je dokumentovana, strogo tipizirana i lako proširiva od strane bilo kog senior inženjera."
          : "No brittle hacks or unmaintained dependencies. Our codebases are strictly typed, modularized, documented, and effortless for any senior developer to scale.",
    },
    {
      icon: Lock,
      num: "05",
      title: lang === "ru" ? "NDA и строгая конфиденциальность" : lang === "sr" ? "NDA i potpuna poverljivost" : "Strict NDA & Data Confidentiality",
      desc:
        lang === "ru"
          ? "Мы подписываем NDA до передачи любых доступов. Данные ваших клиентов, коммерческие показатели и архитектурные решения защищены высшим стандартом безопасности."
          : lang === "sr"
          ? "Potpisujemo sporazum o poverljivosti (NDA) pre preuzimanja bilo kakvih pristupnih podataka. Vaša baza korisnika i poslovne metrike maksimalno su zaštićeni."
          : "We execute formal NDAs prior to repository or infrastructure handoff. Your customer databases, proprietary logic, and analytics remain strictly confidential.",
    },
    {
      icon: Terminal,
      num: "06",
      title: lang === "ru" ? "Фиксированная прозрачная смета" : lang === "sr" ? "Fiksni transparentan budžet" : "Fixed Scope, Predictable Budgets",
      desc:
        lang === "ru"
          ? "Никаких скрытых доплат посреди процесса. Вы получаете детально расписанную смету по этапам с чёткими сроками сдачи и зафиксированной стоимостью."
          : lang === "sr"
          ? "Nema neočekivanih doplata u toku rada. Dobijate precizno strukturisanu procenu po fazama sa tačnim rokovima isporuke i fiksiranim budžetom."
          : "No surprise hourly billings or scope creep traps. You receive an itemized, milestone-based engineering scope with fixed timelines and transparent deliverables.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. HERO SECTION */}
          <header className="relative max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#2d263b] text-xs font-semibold mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7ea368] animate-pulse" />
              <span>Boutique Web Engineering · Est. 2008 · Studio Manifesto</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2d263b] leading-[1.14]">
              {lang === "ru" ? (
                <>
                  Почему Few Hands?{" "}
                  <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                    Манифест бутиковой инженерии
                  </span>{" "}
                  против конвейера
                </>
              ) : lang === "sr" ? (
                <>
                  Zašto Few Hands?{" "}
                  <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                    Manifest butičkog inženjeringa
                  </span>{" "}
                  protiv kontejnera
                </>
              ) : (
                <>
                  Why Few Hands?{" "}
                  <span className="text-[#386161] decoration-[#7ea368]/50 underline decoration-2 underline-offset-8">
                    The Boutique Engineering Manifesto
                  </span>{" "}
                  vs The Assembly Line
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#585068] leading-relaxed max-w-3xl mx-auto">
              {lang === "ru"
                ? "Мы осознанно остаёмся компактной сеньорной студией с 2008 года. Без раздутого штата менеджеров, без субподряда на стажёров и без компромиссов в качестве кода. Прямой диалог с ведущим инженером и личная ответственность за каждый запущенный продукт."
                : lang === "sr"
                ? "Svesno ostajemo kompaktan senior studio od 2008. godine. Bez preglomaznog menadžmenta, bez prebacivanja posla na juniore i bez kompromisa u kvalitetu koda. Direktan kontakt sa vodećim inženjerom i lična odgovornost za svaki isporučeni projekat."
                : "We intentionally remain a compact senior-only engineering boutique since 2008. No bloated account management overhead, no outsourced junior labor, and zero code compromises. Direct engineer collaboration and complete architectural accountability."}
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-bold text-sm sm:text-base shadow-lg shadow-[#2d263b]/15 transition-all hover:-translate-y-0.5"
              >
                <span>{lang === "ru" ? "Рассчитать смету проекта" : lang === "sr" ? "Procenite budžet projekta" : "Estimate Project Budget"}</span>
                <ArrowRight className="w-4 h-4 text-[#e5e1eb]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-[#e5e1eb] bg-white text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-bold text-sm sm:text-base shadow-sm hover:bg-[#faf9fb] transition-all"
              >
                <span>{lang === "ru" ? "Обсудить задачу с инженером" : lang === "sr" ? "Razgovarajte sa inženjerom" : "Talk to Lead Engineer"}</span>
              </Link>
            </div>
          </header>

          {/* 1.5. FOUNDER'S NOTE: Andrei Ryzhenko (Андрей Рыженко) */}
          <section className="mb-20 max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-9 lg:p-10 bg-[#faf6ed] border border-[#2d263b]/30 rounded-3xl shadow-[4px_6px_0px_rgba(45,38,59,0.12)]">
              {/* Tape strip illusion at top */}
              <div className="absolute -top-3 left-10 sm:left-14 w-20 h-5 bg-[#e8dec8]/90 backdrop-blur-[1px] border border-[#2d263b]/15 -rotate-1 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Photo Column: Polaroid / analog photo card */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:col-span-4 shrink-0 mx-auto md:mx-0">
                  <div className="relative group">
                    {/* Washi tape strip pinned on top right */}
                    <div className="absolute -top-2.5 right-4 w-14 h-4 bg-[#e8dec8]/95 border border-[#2d263b]/20 rotate-3 z-10 shadow-xs pointer-events-none" />

                    <div className="bg-white p-3 sm:p-3.5 pb-4 sm:pb-5 rounded-2xl border border-[#2d263b]/20 shadow-[3px_4px_0px_rgba(45,38,59,0.1)] -rotate-1 group-hover:rotate-0 transition-all duration-300">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#2d263b]/5 border border-[#2d263b]/10">
                        <Image
                          src="/andrei-ryzhenko.webp"
                          alt={lang === "ru" ? "Андрей Рыженко - основатель Few Hands Studio" : lang === "sr" ? "Andrei Ryzhenko - osnivač Few Hands Studio" : "Andrei Ryzhenko - Founder of Few Hands Studio"}
                          width={819}
                          height={1024}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                          priority
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <div className="font-bold text-sm text-[#2d263b]">
                          {lang === "ru" ? "Андрей Рыженко" : lang === "sr" ? "Andrej Riženko" : "Andrei Ryzhenko"}
                        </div>
                        <div className="text-[11px] font-mono text-[#585068] mt-0.5">
                          {lang === "ru" ? "в вебе с 1998 года" : lang === "sr" ? "u vebu od 1998." : "in web since 1998"}
                        </div>
                        <div className="mt-2.5 pt-2.5 border-t border-[#2d263b]/10 flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#386161] font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{lang === "ru" ? "Личная ответственность" : lang === "sr" ? "Lična odgovornost" : "Personal Guarantee"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column: Editorial letter & signature */}
                <div className="md:col-span-8 flex flex-col justify-between h-full">
                  {/* Header row: Stamp badge & Author label */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#2d263b]/15">
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#2d263b] leading-tight">
                        {lang === "ru" ? "Андрей Рыженко (Andrei Ryzhenko)" : lang === "sr" ? "Andrei Ryzhenko (Andrej Riženko)" : "Andrei Ryzhenko"}
                      </div>
                      <div className="text-xs text-[#585068] font-mono mt-0.5">
                        {lang === "ru"
                          ? "Основатель и ведущий инженер Few Hands Studio"
                          : lang === "sr"
                          ? "Osnivač i vodeći inženjer Few Hands Studio"
                          : "Founder & Lead Architect, Few Hands Studio"}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/15 text-[11px] font-mono font-bold text-[#386161]">
                      <span>★</span>
                      <span>{lang === "ru" ? "КОЛОНКА ОСНОВАТЕЛЯ" : lang === "sr" ? "REČ OSNIVAČA" : "FOUNDER'S NOTE"}</span>
                    </div>
                  </div>

                  {/* Body text in authentic editorial voice */}
                  <div className="space-y-4 text-sm sm:text-base text-[#2d263b] leading-relaxed">
                    <p>
                      {lang === "ru"
                        ? "«Мой путь в веб-инженерии начался ещё в 1998 году - с вёрстки на чистом HTML в обычном блокноте Windows, когда интернет только зарождался. Долгие годы я работал в различных веб-студиях, совмещая это как увлечённое хобби и инженерную практику, изучая изнутри все скрытые болезни заказной разработки. Со временем я увидел, как индустрия свернула на опасный путь конвейера: агентства превратились в фабрики, где проект вам продаёт харизматичный сейлз, а пилят уставшие стажёры на субподряде. Клиент платит за раздутый офис и цепочку из пяти менеджеров, получая на выходе медленный монолит, набитый чужими плагинами»."
                        : lang === "sr"
                        ? "«Moj put u veb inženjeringu počeo je još 1998. godine - pisanjem čistog HTML-a u običnom Notepad-u, u vreme kada je moderni internet tek nastajao. Godinama sam radio u različitim veb studijima, spajajući strastveni hobi i inženjersku praksu, i iznutra upoznao sve slabosti agencijskog razvoja. Vremenom sam video kako je industrija skrenula na fabričku traku: agencije su postale mašine gde projekat prodaje harizmatični prodavac, a stvarni kod pišu preopterećeni pripravnici. Klijent plaća ogroman kancelarijski aparat i lanac menadžera, a zauzvrat dobija spor monolit pun nasumičnih dodataka»."
                        : "«My journey in web engineering started back in 1998 - hand-coding raw HTML in Windows Notepad during the dawn of the commercial web. For years, I worked across various digital studios, treating it as both an intense hobby and a dedicated craft, learning every internal dysfunction of agency production. Over time, I watched the industry degenerate into an impersonal assembly line: digital agencies turned into factories where smooth sales reps close deals, but overworked junior contractors write the actual code. Clients pay for sprawling office overhead and five management layers, only to receive a sluggish monolith choked with third-party plugins»."}
                    </p>

                    <p>
                      {lang === "ru"
                        ? "«В 2008 году я принял осознанное решение основать собственную независимую студию - Few Hands - с принципиально другим подходом: оставаться инженерным бутиком. Название Few Hands - это наше профессиональное кредо: мало рук, но каждая рука - сеньорного уровня. Я лично отвечаю за архитектуру каждого проекта, общаюсь с клиентами напрямую без секретарей и посредников и гарантирую, что ваш веб-продукт будет открываться за доли секунды, не сломается от обновлений и навсегда останется вашим личным активом с безупречной кодовой базой»."
                        : lang === "sr"
                        ? "«Zato sam 2008. godine doneo svesnu odluku da osnujem sopstveni nezavisni studio - Few Hands - sa suštinski drugačijim pristupom: da ostanemo inženjerski butik. Ime Few Hands je naš kredo: malo ruku, ali svaka ruka je seniorskog ranga. Lično odgovaram za arhitekturu svakog projekta, komuniciram sa klijentima direktno bez posrednika i garantujem da će se vaš sajt otvarati u deliću sekunde, bez rušenja pri ažuriranjima i sa 100% čistim vlasništvom nad bazom koda»."
                        : "«In 2008, I made the conscious decision to establish my own independent studio - Few Hands - built on a fundamentally different standard: an uncompromising engineering boutique. The name Few Hands is our operational creed: few hands, but every single hand is senior-grade. I personally architect every platform, collaborate with clients directly without account gatekeepers, and guarantee your web product renders in sub-second speed, withstands breaking updates, and remains your enduring unencumbered asset with a pristine codebase»."}
                    </p>
                  </div>

                  {/* Signature footer */}
                  <div className="mt-6 pt-5 border-t border-[#2d263b]/15 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="font-handwriting text-2xl sm:text-3xl text-[#2d263b] font-bold -rotate-2">
                        Andrei Ryzhenko
                      </div>
                      <span className="text-xs font-mono text-[#8c829c]">
                        / Few Hands Lead Architect
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:web@fewhands.com"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#2d263b]/15 text-xs font-semibold text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 shadow-sm transition"
                      >
                        <span>web@fewhands.com</span>
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2d263b] text-[#faf9fb] hover:bg-[#1a1622] text-xs font-semibold shadow-sm transition"
                      >
                        <span>{lang === "ru" ? "Написать напрямую" : lang === "sr" ? "Direktan kontakt" : "Direct Message"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. THE PHILOSOPHY OF "FEW HANDS" (Contrast Grid) */}
          <section className="mb-20 pt-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#386161] font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{lang === "ru" ? "ФИЛОСОФИЯ НАЗВАНИЯ" : lang === "sr" ? "FILOZOFIJA IMENA" : "OUR CORE IDENTITY"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru"
                  ? "Почему «Few Hands» (Мало рук)? Разница между агентством и бутиком"
                  : lang === "sr"
                  ? "Zašto «Few Hands» (Malo ruku)? Razlika između agencije i butika"
                  : "Why «Few Hands»? The Boutique Difference"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "В индустрии принято хвастаться штатом в 100 человек. Мы гордимся обратным: компактный состав мастеров решает задачи быстрее, глубже и без наценки за бюрократию."
                  : lang === "sr"
                  ? "U industriji je uobičajeno hvaliti se sa 100 zaposlenih. Mi se ponosimo suprotnim: kompaktan tim eksperata rešava probleme brže, temeljnije i bez naplate menadžerske birokratije."
                  : "Most agencies brag about team headcounts. We pride ourselves on the opposite: a lean collective of senior engineers operates faster, cleaner, and without corporate tax."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: Standard Agency Factory */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#e5e1eb] shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e1eb]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ba5d60]" />
                    <h3 className="font-bold text-base sm:text-lg text-[#2d263b]">
                      {lang === "ru" ? "Типичное конвейерное агентство" : lang === "sr" ? "Tipična kontejnerska agencija" : "Typical Agency Assembly Line"}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#ba5d60] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ba5d60]/10">
                    {lang === "ru" ? "Испорченный телефон" : lang === "sr" ? "Gubitak u prenosu" : "Broken Telephone"}
                  </span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#585068]">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ba5d60] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "5-7 промежуточных звеньев: сейлз-менеджер, аккаунт, проджект, тимлид. Ваши мысли теряются при передаче."
                        : lang === "sr"
                        ? "5-7 posrednika: prodavac, akaund menadžer, vođa projekta. Vaši zahtevi se gube u prenosu informacija."
                        : "5-7 bureaucratic layers between you and the codebase. Context is lost at every handoff."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ba5d60] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "До 70% вашего бюджета уходит на оплату офиса, корпоративных вечеринок и комиссионных менеджерам по продажам."
                        : lang === "sr"
                        ? "Do 70% vašeg budžeta odlazi na troškove kancelarije, korporativne bonuse i provizije prodavaca."
                        : "Up to 70% of your budget pays for agency overhead, office rent, and executive margins."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ba5d60] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "Проект продаёт опытный директор, а реальный код пишут сменяющиеся стажёры или дешёвый субподряд."
                        : lang === "sr"
                        ? "Ugovor potpisuje iskusni direktor, a stvarni kod pišu pripravnici ili jeftini spoljni saradnici."
                        : "The pitch is made by a senior partner, but implementation is delegated to overworked interns."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ba5d60] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "Размытая ответственность: в случае сбоев и багов виноват «другой отдел» или хостинг."
                        : lang === "sr"
                        ? "Podeljena odgovornost: u slučaju problema, krivica se prebacuje na drugi tim ili hosting."
                        : "Diffused responsibility: when bugs emerge, departments blame each other."}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Few Hands Boutique Engineering */}
              <div className="p-7 sm:p-9 rounded-3xl bg-[#fbf8f1] border-2 border-[#386161]/50 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#386161]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#7ea368]" />
                    <h3 className="font-bold text-base sm:text-lg text-[#2d263b]">
                      {lang === "ru" ? "Бутик инженерии Few Hands" : lang === "sr" ? "Inženjerski butik Few Hands" : "Few Hands Engineering Boutique"}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#386161] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#386161]/10">
                    {lang === "ru" ? "Senior-Only" : lang === "sr" ? "Samo Seniori" : "Senior-Only"}
                  </span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#2d263b]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "Прямой диалог: закрытый канал в Telegram/Slack напрямую с ведущим инженером, знающим каждую строчку вашего проекта."
                        : lang === "sr"
                        ? "Direktan dijalog: privatni kanal u Telegramu ili Slacku direktno sa vodećim inženjerom koji piše vaš kod."
                        : "Direct communication: a dedicated Slack/Telegram channel directly with the lead engineer writing your codebase."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "100% инвестиций - в ваш продукт: никаких лишних надстроек, только чистый код, идеальная верстка и реальные метрики."
                        : lang === "sr"
                        ? "100% budžeta ulaže se u vaš proizvod: bez nepotrebnih posrednika, samo čist kod, savršen prikaz i merljivi rezultati."
                        : "100% of your investment funds raw engineering, hardened architecture, and measurable commercial speed."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "Сеньорный опыт с 2008 года: мы застали всю эволюцию веба и сразу закладываем масштабируемую архитектуру."
                        : lang === "sr"
                        ? "Senior iskustvo od 2008. godine: prošli smo kroz sve etape veba i od starta kreiramo stabilnu arhitekturu."
                        : "17+ years of continuous web engineering: battle-tested experience designing resilient, future-proof systems."}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
                    <span>
                      {lang === "ru"
                        ? "Персональная репутация: каждый релиз - наша визитная карточка, поэтому мы не выпускаем сырые компромиссы."
                        : lang === "sr"
                        ? "Lična reputacija: svako lansiranje je naša preporuka, zato nikada ne isporučujemo polovična rešenja."
                        : "Boutique accountability: our reputation is staked on every launch, ensuring uncompromising quality."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. 17+ YEARS TIMELINE (Est. 2008) */}
          <section className="mb-20 pt-10 border-t border-[#e5e1eb]">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c6814b] font-bold mb-2">
                <Clock className="w-4 h-4" />
                <span>{lang === "ru" ? "ХРОНИКА ЭВОЛЮЦИИ" : lang === "sr" ? "HRONIKA EVOLUCIJE" : "TIMELINE & HERITAGE"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru"
                  ? "В вебе с 1998 года: от HTML в блокноте до AI-аватаров"
                  : lang === "sr"
                  ? "U vebu od 1998. godine: od HTML-a u Notepad-u do AI avatara"
                  : "Web Engineering Since 1998: From Notepad HTML to Generative AI"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "Мы знаем болезни и грабли монолитных CMS не из теоретических статей, а потому что видели их рождение, расцвет и кризис своими глазами."
                  : lang === "sr"
                  ? "Ne znamo probleme monolitnih CMS-ova iz teorijskih članaka, već zato što smo lično iskusili njihovo nastajanje, vrhunac i tehnički pad."
                  : "We understand legacy CMS bottlenecks intimately because we engineered systems through their rise, dominance, and modern decline."}
              </p>
            </div>

            {/* Interactive Era Selector */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {eras.map((era, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEra(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all ${
                    activeEra === idx
                      ? "bg-[#2d263b] text-[#faf9fb] shadow-md shadow-[#2d263b]/15 scale-105"
                      : "bg-[#f1f0f5] text-[#585068] hover:bg-[#e5e1eb] hover:text-[#2d263b]"
                  }`}
                >
                  <span>{era.year}</span>
                </button>
              ))}
            </div>

            {/* Active Era Detail Card */}
            <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#e5e1eb] shadow-sm relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#e5e1eb]">
                <div>
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#386161] bg-[#386161]/10 px-3 py-1 rounded-md mb-2">
                    {eras[activeEra].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2d263b]">
                    {eras[activeEra].title}
                  </h3>
                </div>
                <div className="font-mono text-lg font-bold text-[#c6814b] self-start sm:self-auto">
                  {eras[activeEra].year}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#585068] leading-relaxed mb-6">
                {eras[activeEra].summary}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#e5e1eb]/60">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#2d263b]">
                  {lang === "ru" ? "Ключевые инженерные уроки этапа:" : lang === "sr" ? "Ključne inženjerske lekcije ove faze:" : "Key Architectural Takeaways:"}
                </div>
                <ul className="grid sm:grid-cols-3 gap-3 pt-1">
                  {eras[activeEra].highlights.map((h, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-xl bg-[#faf9fb] border border-[#e5e1eb] text-xs text-[#2d263b] font-medium leading-snug flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#7ea368] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. THE 6 NON-NEGOTIABLES (Engineering Principles) */}
          <section className="mb-20 pt-10 border-t border-[#e5e1eb]">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7ea368] font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === "ru" ? "ПРИНЦИПЫ & СТАНДАРТЫ" : lang === "sr" ? "PRINCIPI I STANDARDI" : "THE FEW HANDS CODE"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru"
                  ? "Инженерный кодекс: 6 правил, которыми мы не жертвуем"
                  : lang === "sr"
                  ? "Inženjerski kodeks: 6 pravila oko kojih nema kompromisa"
                  : "Our 6 Non-Negotiable Engineering Principles"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "Мы дорожим чистой репутацией и спокойным сном клиентов. Вот правила, по которым работает Few Hands в каждом проекте."
                  : lang === "sr"
                  ? "Cenimo čistu reputaciju i miran san naših klijenata. Ovo su principi po kojima Few Hands realizuje svaki projekat."
                  : "We protect our reputation and our clients' peace of mind. Here is the operational code behind every Few Hands deployment."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {principles.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e5e1eb] shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#f1f0f5] flex items-center justify-center text-[#2d263b]">
                        <IconComponent className="w-5 h-5 text-[#386161]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#8c829c]">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2d263b] mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. WITH WHOM WE WORK & WITH WHOM WE DON'T (Client Filter) */}
          <section className="mb-20 pt-10 border-t border-[#e5e1eb]">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9c386d] font-bold mb-2">
                <Briefcase className="w-4 h-4" />
                <span>{lang === "ru" ? "СОВМЕСТИМОСТЬ" : lang === "sr" ? "KOMPATIBILNOST" : "CLIENT ALIGNMENT"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b]">
                {lang === "ru"
                  ? "С кем мы сработаемся идеально (и кому мы откажем)"
                  : lang === "sr"
                  ? "Sa kim sarađujemo idealno (i koga ćemo odbiti)"
                  : "Who We Are Built For (and Who We Turn Down)"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "Бутиковый подход означает честность: мы беремся только за те проекты, где можем принести максимальную коммерческую и техническую пользу."
                  : lang === "sr"
                  ? "Butički pristup podrazumeva potpunu iskrenost: prihvatamo isključivo projekte kojima možemo doneti maksimalnu komercijalnu i tehničku vrednost."
                  : "A boutique studio operates on strict alignment. We only take on engagements where we can deliver decisive competitive leverage."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Green Box: Ideal Match */}
              <div className="p-7 sm:p-9 rounded-3xl bg-[#fbf8f1] border border-[#7ea368]/40 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#7ea368]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#7ea368]" />
                  <h3 className="font-bold text-lg text-[#2d263b]">
                    {lang === "ru" ? "Идеальные клиенты Few Hands:" : lang === "sr" ? "Idealni klijenti Few Hands-a:" : "Ideal Few Hands Engagements:"}
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#2d263b]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#7ea368] font-bold">✔</span>
                    <span>
                      {lang === "ru"
                        ? "Бизнес, уставший от тормозящих CMS (WordPress, Bitrix, Tilda) и готовый переехать на чистый быстрый Next.js."
                        : lang === "sr"
                        ? "Biznisi umorni od sporih CMS-ova (WordPress, Bitrix, Tilda) koji žele prelazak na čist, brz Next.js."
                        : "Businesses fed up with sluggish monolithic CMSs who want a clean, decoupled Next.js platform."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#7ea368] font-bold">✔</span>
                    <span>
                      {lang === "ru"
                        ? "Компании, которым нужно надежное ежемесячное плечо (Retainer) без затрат на штатного программиста."
                        : lang === "sr"
                        ? "Kompanije kojima je potrebna pouzdana mesečna tehnička podrška (Retainer) bez troškova zapošljavanja in-house programera."
                        : "Companies seeking reliable monthly retainer support without full-time recruitment friction."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#7ea368] font-bold">✔</span>
                    <span>
                      {lang === "ru"
                        ? "Фаундеры и бренды, внедряющие AI-видеоаватаров на 30+ языках для масштабирования рекламы и воронки."
                        : lang === "sr"
                        ? "Osnivači i brendovi koji uvode AI video avatare na 30+ jezika radi skaliranja marketinga i prodajnih levaka."
                        : "Brands deploying photorealistic multilingual AI video presenters to scale conversion funnels."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#7ea368] font-bold">✔</span>
                    <span>
                      {lang === "ru"
                        ? "Заказчики, которые ценят прямой диалог с инженером и уважают правила чистой архитектуры."
                        : lang === "sr"
                        ? "Naručioci koji cene direktnu komunikaciju sa inženjerom i poštuju standarde čistog koda."
                        : "Teams that value direct dialogue with senior engineers and respect clean code standards."}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Red Box: Who We Turn Down */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#ba5d60]/30 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#ba5d60]/20">
                  <XCircle className="w-5 h-5 text-[#ba5d60]" />
                  <h3 className="font-bold text-lg text-[#2d263b]">
                    {lang === "ru" ? "Кому мы вынуждены отказать:" : lang === "sr" ? "Kome smo prinuđeni da se zahvalimo:" : "Projects We Respectfully Turn Down:"}
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#585068]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ba5d60] font-bold">✕</span>
                    <span>
                      {lang === "ru"
                        ? "«Сделайте сайт за 2 дня на бесплатном шаблоне с 50 готовыми плагинами за три копейки»."
                        : lang === "sr"
                        ? "«Napravite sajt za dva dana na besplatnom šablonu sa 50 dodataka za simboličan iznos»."
                        : "Requests to slap together pre-made free themes stuffed with 50 unvetted plugins in 48 hours."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ba5d60] font-bold">✕</span>
                    <span>
                      {lang === "ru"
                        ? "Проекты, требующие вендор-лока или закрытых проприетарных систем без доступа к исходному коду."
                        : lang === "sr"
                        ? "Projekti koji zahtevaju vlasničke sisteme bez punog uvida u izvorni kod."
                        : "Closed-ecosystem projects seeking proprietary lock-in where the client does not own the code."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ba5d60] font-bold">✕</span>
                    <span>
                      {lang === "ru"
                        ? "Спам-сетки, сомнительные серые тематики или проекты без архитектурного и коммерческого смысла."
                        : lang === "sr"
                        ? "Spam mreže, netransparentni sajtovi ili projekti bez jasnog poslovnog i inženjerskog smisla."
                        : "Spam networks, unverified grey-hat schemes, or products with no architectural integrity."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#ba5d60] font-bold">✕</span>
                    <span>
                      {lang === "ru"
                        ? "Заказчикам, которые предпочитают многонедельные бюрократические согласования вместо реального деплоя."
                        : lang === "sr"
                        ? "Klijentima koji daju prednost višenedeljnim sastancima umesto stvarnoj isporuci koda u produkciju."
                        : "Environments prioritizing endless corporate committee meetings over shipping verified code."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. GOMVP ALLIANCE BANNER */}
          <section className="mb-20 max-w-4xl mx-auto p-7 sm:p-9 rounded-3xl bg-[#f1f0f5] border border-[#2d263b]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#386161] font-bold mb-1.5">
                <span>GoMVP Partner Alliance</span>
              </div>
              <h3 className="text-xl font-bold text-[#2d263b]">
                {lang === "ru"
                  ? "Бутиковый инжиниринг + Enterprise-масштаб GoMVP"
                  : lang === "sr"
                  ? "Butički inženjering + Enterprise razmere GoMVP-a"
                  : "Boutique Craft + Enterprise Scale with GoMVP"}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#585068] leading-relaxed max-w-xl">
                {lang === "ru"
                  ? "Для комплексных корпоративных порталов, высоконагруженных API и миграций уровня Enterprise мы объединяем экспертизу с нашим партнером gomvp.dev (React + Go). Вы получаете личное внимание бутика и техническую мощь продуктовой платформы."
                  : lang === "sr"
                  ? "Za kompleksne korporativne portale, opterećene API servise i migracije Enterprise nivoa udružujemo snage sa partnerom gomvp.dev (React + Go). Dobijate posvećenost butika i infrastrukturnu snagu partnerske platforme."
                  : "For complex enterprise backends, high-throughput APIs, and deep database migrations, we partner directly with gomvp.dev (React + Go), uniting boutique precision with enterprise muscle."}
              </p>
            </div>
            <a
              href="https://gomvp.dev/en/migrate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#2d263b]/15 text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-bold text-xs sm:text-sm shadow-sm transition shrink-0"
            >
              <span>{lang === "ru" ? "О партнёре GoMVP" : lang === "sr" ? "O partneru GoMVP" : "Explore GoMVP"}</span>
              <ExternalLink className="w-4 h-4 text-[#8c829c]" />
            </a>
          </section>

          {/* 7. FINAL CTA */}
          <section className="text-center max-w-3xl mx-auto py-10 px-6 sm:px-10 rounded-3xl bg-[#2d263b] text-[#faf9fb] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#7ea368] font-bold mb-2">
                {lang === "ru" ? "НАЧАТЬ СОТРУДНИЧЕСТВО" : lang === "sr" ? "ZAPOČNITE SARADNJU" : "GET STARTED TODAY"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                {lang === "ru"
                  ? "Готовы построить чистый веб-продукт без компромиссов?"
                  : lang === "sr"
                  ? "Spremni za čist veb proizvod bez kompromisa?"
                  : "Ready for High-Performance Engineering Without Compromise?"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#e5e1eb]/80 max-w-xl mx-auto">
                {lang === "ru"
                  ? "Воспользуйтесь нашим интерактивным калькулятором с прозрачным расчетом сметы или напишите нам напрямую для экспресс-аудита."
                  : lang === "sr"
                  ? "Iskoristite naš transparentni interaktivni kalkulator cene ili nam pošaljite link sajta za brzu besplatnu analizu."
                  : "Use our transparent 3-in-1 calculator for instant itemized pricing or reach out for a complimentary code audit."}
              </p>

              <div className="mt-6 flex flex-col items-center">
                <DoodlePointer
                  text={
                    lang === "ru"
                      ? "точный расчет сметы за 60 сек ↘"
                      : lang === "sr"
                      ? "tačna procena budžeta za 60 sek ↘"
                      : "itemized estimate in 60s ↘"
                  }
                  direction="curved-down-right"
                  className="mb-2 text-[#7ea368]"
                />
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/estimate"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#faf9fb] hover:bg-white text-[#2d263b] font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    <span>{lang === "ru" ? "Рассчитать стоимость в калькуляторе" : lang === "sr" ? "Proračunajte cenu u kalkulatoru" : "Open Project Calculator"}</span>
                    <ArrowRight className="w-4 h-4 text-[#2d263b]" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-[#faf9fb] font-semibold text-xs sm:text-sm transition"
                  >
                    <span>{lang === "ru" ? "Связаться с инженером" : lang === "sr" ? "Kontaktirajte inženjera" : "Contact Lead Engineer"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
