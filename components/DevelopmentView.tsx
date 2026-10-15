"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Layout,
  ShoppingBag,
  Cpu,
  Zap,
  Check,
  ArrowRight,
  ShieldCheck,
  Code2,
  ChevronDown,
  Layers,
  Sparkles,
  HelpCircle,
  Globe2,
} from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const DevelopmentView: React.FC = () => {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Layout,
      title: lang === "ru" ? "Продающие лендинги" : "High-Converting Landings",
      desc:
        lang === "ru"
          ? "Идеально выверенная структура блоков, акцент на УТП, триггеры доверия и мгновенная отправка лидов на почту и в CRM."
          : "Laser-focused narrative structure, crisp value propositions, social proof triggers, and instant CRM lead dispatch.",
      specs:
        lang === "ru"
          ? ["Загрузка < 0.8 сек", "Идеальный мобильный UX", "A/B тестирование"]
          : ["Sub-second TTFB", "Flawless mobile UX", "Conversion-focused analytics"],
    },
    {
      icon: ShoppingBag,
      title: lang === "ru" ? "Каталоги и витрины" : "E-Commerce & Digital Catalogs",
      desc:
        lang === "ru"
          ? "Быстрые интернет-магазины без тяжелых неповоротливых CMS. Мгновенная фильтрация и покупка в 1 клик."
          : "Lightweight digital storefronts free from CMS bloat. Instant faceted search and streamlined one-page checkout.",
      specs:
        lang === "ru"
          ? ["Поиск без перезагрузки", "Любые эквайринги", "Оптимизация под SEO"]
          : ["Zero-reload filtering", "Custom payment gateways", "Technical SEO built-in"],
    },
    {
      icon: Cpu,
      title: lang === "ru" ? "Корпоративные порталы" : "Corporate & Enterprise Hubs",
      desc:
        lang === "ru"
          ? "Представительские сайты для международных и технологических брендов. Высочайший инженерный уровень и безопасность."
          : "Flagship platforms for international brands, delivering technical excellence, strict compliance, and global Edge delivery.",
      specs:
        lang === "ru"
          ? ["Мультиязычность (i18n)", "Edge CDN доставка", "Чистый TypeScript"]
          : ["Full i18n localization", "Global Edge CDN routing", "Type-safe architecture"],
    },
  ];

  const devPhases = [
    {
      step: "01",
      title: lang === "ru" ? "Бизнес-анализ и проектирование" : "Discovery & Specification",
      desc:
        lang === "ru"
          ? "Детально изучаем продукт, целевую аудиторию и конкурентную среду. Формируем подробное ТЗ, информационную архитектуру и карту экранов."
          : "Deep dive into your market, buyer personas, and competitors. Developing technical specifications, site maps, and wireframe blueprints.",
    },
    {
      step: "02",
      title: lang === "ru" ? "UI/UX дизайн и прототипирование" : "UI/UX Design & Prototyping",
      desc:
        lang === "ru"
          ? "Создаём лаконичный эстетичный интерфейс в Figma. Продумываем адаптивность под смартфоны, планшеты и десктопы, визуальную иерархию и акценты."
          : "Designing pixel-perfect, high-contrast layouts in Figma. Mobile-first ergonomics, micro-interactions, and conversion-focused typography.",
    },
    {
      step: "03",
      title: lang === "ru" ? "Фронтенд-инженерия на Next.js" : "Next.js Frontend Engineering",
      desc:
        lang === "ru"
          ? "Пишем чистый, строго типизированный код на React / Next.js и Tailwind CSS. Используем React Server Components для максимальной скорости рендеринга."
          : "Writing clean, type-safe code with React, Next.js App Router, and Tailwind CSS. Leveraging Server Components for instantaneous edge delivery.",
    },
    {
      step: "04",
      title: lang === "ru" ? "Интеграции, формы и безопасность" : "APIs, Forms & Hardening",
      desc:
        lang === "ru"
          ? "Подключаем приём заявок в CRM (amoCRM, Bitrix24), корпоративную почту, платежные шлюзы (Stripe, СБП) и настраиваем защиту от спама."
          : "Hooking up webhook pipelines to your CRM, corporate email routing, multi-currency payment checkouts, and zero-compromise security.",
    },
    {
      step: "05",
      title: lang === "ru" ? "SEO-оптимизация и релиз на Edge CDN" : "Technical SEO & Edge Deploy",
      desc:
        lang === "ru"
          ? "Внедряем метаданные, OpenGraph, Schema.org разметку и sitemap.xml. Разворачиваем проект в глобальной сети доставки контента с PageSpeed 100/100."
          : "Implementing structured JSON-LD schemas, canonical routing, and dynamic XML sitemaps. Deploying onto global Edge CDN with 100/100 Core Web Vitals.",
    },
  ];

  const comparisonPoints = [
    {
      feature: lang === "ru" ? "Время отклика первого байта (TTFB)" : "Time to First Byte (TTFB)",
      nextjs: lang === "ru" ? "20–50 мс (глобальный Edge CDN)" : "20–50ms (Global Edge CDN)",
      builders: lang === "ru" ? "400–1800 мс (ожидание сервера)" : "400–1,800ms (Heavy server lag)",
    },
    {
      feature: lang === "ru" ? "Оценка Google Core Web Vitals" : "Google Core Web Vitals",
      nextjs: lang === "ru" ? "95–100 / 100 (зелёная зона)" : "95–100 / 100 (Green benchmark)",
      builders: lang === "ru" ? "Часто 35–65 / 100 (красная зона)" : "Often 35–65 / 100 (Red/Yellow)",
    },
    {
      feature: lang === "ru" ? "Уязвимость к атакам и взломам" : "Vulnerability Surface",
      nextjs: lang === "ru" ? "Нулевая (нет открытой базы данных и PHP)" : "Zero (No exposed SQL or PHP scripts)",
      builders: lang === "ru" ? "Высокая (уязвимости чужих плагинов)" : "High (Third-party plugin exploit surface)",
    },
    {
      feature: lang === "ru" ? "Ежемесячные сборы платформ" : "Recurring Platform Taxes",
      nextjs: lang === "ru" ? "$0 (код принадлежит вам на 100%)" : "$0 (100% proprietary code ownership)",
      builders: lang === "ru" ? "Постоянно растущие подписки" : "Compounding builder subscriptions",
    },
    {
      feature: lang === "ru" ? "Отказоустойчивость под рекламой" : "High-Traffic Resilience",
      nextjs: lang === "ru" ? "Бесконечное Serverless-масштабирование" : "Elastic serverless auto-scaling",
      builders: lang === "ru" ? "Падение при наплыве трафика" : "Server 502/504 downtime under ad bursts",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Кому принадлежат права на исходный код созданного сайта?"
          : "Who owns the intellectual property and source code of the website?",
      a:
        lang === "ru"
          ? "Все права на исходный код, дизайн и базу данных полностью принадлежат заказчику. Проект передаётся через приватный Git-репозиторий (GitHub/GitLab) без скрытых привязок и vendor lock-in. Вы можете разместить его на любом хостинге или доверить дальнейшую поддержку нам."
          : "You maintain 100% intellectual property ownership of the source code, assets, and design files. The project is delivered via your private GitHub repository with zero vendor lock-in or proprietary runtime handcuffs.",
    },
    {
      q:
        lang === "ru"
          ? "Как заказчик сможет редактировать контент сайта после запуска?"
          : "How will our marketing team update content after launch?",
      a:
        lang === "ru"
          ? "Мы подключаем удобную Headless CMS (Strapi, Sanity или индивидуальную панель управления), где контент-менеджеры могут легко менять тексты, цены, загружать фотографии и публиковать статьи без программиста. Студия Few Hands записывает подробные видеоинструкции и проводит обучающий Zoom-онбординг."
          : "We integrate intuitive headless CMS architectures (Strapi, Sanity, or lightweight bespoke dashboards) allowing your team to update text, prices, and assets seamlessly. Few Hands records personalized video guides and conducts live onboarding.",
    },
    {
      q:
        lang === "ru"
          ? "Сколько времени занимает разработка сайта под ключ?"
          : "What is the typical delivery timeline for custom web development?",
      a:
        lang === "ru"
          ? "Сроки зависят от масштаба: продающий лендинг разрабатывается за 5–9 рабочих дней; корпоративный сайт на 15–25 разделов — за 10–18 рабочих дней; интернет-магазин с каталогом и интеграцией платежей — за 14–24 рабочих дня. Все этапы строго фиксируются в календарном плане."
          : "Turnaround depends on project scope: high-converting landing pages take 5–9 business days; corporate hubs take 10–18 business days; e-commerce catalogs with checkouts take 14–24 business days. Milestone dates are contractually fixed prior to kickoff.",
    },
    {
      q:
        lang === "ru"
          ? "Нужно ли платить за дорогой серверный хостинг для Next.js сайта?"
          : "Is expensive server hosting required to run a Next.js web application?",
      a:
        lang === "ru"
          ? "Нет! Сайты на Next.js компилируются в оптимизированный статический код и бессерверные Edge-функции. Они прекрасно работают на бесплатных тарифах глобальных сетей Vercel и Cloudflare, выдерживая миллионы просмотров без необходимости арендовать дорогостоящие VPS."
          : "No. Next.js applications leverage static pre-rendering and serverless edge functions. They operate flawlessly on free or minimal tiers of Vercel and Cloudflare, handling millions of requests without costly dedicated server infrastructure.",
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
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf2f7] border border-[#4b6c8c]/25 text-[#4b6c8c] text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Кастомная веб-инженерия" : "Custom Web Engineering"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
              {lang === "ru"
                ? "Создание сайтов и веб-сервисов на современном стеке Next.js"
                : "Bespoke Web Development & High-Velocity Next.js Platforms"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-3xl">
              {lang === "ru"
                ? "Разрабатываем высоконагруженные сайты с чистого листа: от концепции, UX-прототипирования и продающего текста до интеграции API, CRM и глобального деплоя на Edge CDN. Никаких шаблонных компромиссов — только чистый TypeScript, непревзойдённая скорость загрузки и максимальная конверсия посетителей в клиентов."
                : "Engineering bespoke web applications from first principles: design systems, modular React architecture, payment pipelines, and global Edge CDN deployment. Clean code, hardened security, and commercial focus."}
            </p>

            <div className="mt-8 flex flex-col items-start gap-2">
              <DoodlePointer
                text={lang === "ru" ? "прозрачный расчет бюджета ↘" : "transparent budget estimate ↘"}
                direction="curved-down-right"
                className="mb-1"
              />
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-sm shadow-lg shadow-[#2d263b]/20 transition-all"
                >
                  <span>{lang === "ru" ? "Рассчитать стоимость сайта" : "Estimate Website Cost"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
                >
                  <span>{lang === "ru" ? "Смотреть примеры работ" : "View Selected Works"}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
            <CraftCard
              tag={lang === "ru" ? "МАНИФЕСТ РАЗРАБОТКИ" : "ARCHITECTURE MANIFESTO"}
              question={
                lang === "ru"
                  ? "Готовые шаблонные темы? НЕТ [X]"
                  : "Heavy pre-made themes? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Шаблоны тянут 4 МБ мусорного JavaScript и ломаются при пиках. Мы пишем модульный Next.js с бандлом < 90 КБ и мгновенным откликом."
                  : "Bloated themes drag 4MB of JS and crash under peak load. Clean Next.js delivers sub-90kB bundles and sub-second edge response."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-[#4b6c8c]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#edf2f7] text-[#4b6c8c] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d263b] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#585068] leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2.5 border-t border-[#f1f0f5] pt-5">
                    {item.specs.map((spec, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs sm:text-sm text-[#2d263b]">
                        <Check className="w-4 h-4 text-[#7ea368] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Next.js Over Monoliths Box */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#4b6c8c] uppercase tracking-wider">
              {lang === "ru" ? "Технологическое превосходство" : "Engineering Advantage"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Почему современный бизнес выбирает Next.js вместо устаревших CMS"
                : "Why Growing Businesses Choose Next.js Over Monolithic CMSs"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Монолитные системы (WordPress, Битрикс, конструкторы) страдают от перегруженного кода, тяжелых плагинов и регулярных сбоев при росте посещаемости. Стек Next.js устраняет узкие места архитектуры на фундаментальном уровне."
                : "Monolithic CMS platforms struggle under code bloat, fragile plugin dependencies, and traffic volatility. Next.js eliminates architectural bottlenecks by decoupling presentation from state."}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#4b6c8c]">100/100</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Google PageSpeed Target" : "Google PageSpeed Target"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Сайт загружается мгновенно (LCP < 0.8с). Поисковые роботы вознаграждают такую скорость топовыми позициями в органической выдаче."
                  : "Instantaneous rendering (LCP < 0.8s). Search crawlers reward sub-second page loads with superior organic ranking signals."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#7ea368]">$0</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Сборов за плагины и платформы" : "Zero Builder Subscriptions"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Бессерверное развёртывание на Vercel/Cloudflare Edge исключает ежемесячные платежи конструкторам и расходы на тяжелые серверы."
                  : "Serverless edge architecture eliminates compounding builder licensing taxes and expensive managed VPS maintenance fees."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#2d263b]/10 shadow-sm">
              <div className="text-3xl font-black text-[#9c386d]">0</div>
              <h4 className="font-bold text-[#2d263b] mt-2 text-base">
                {lang === "ru" ? "Уязвимостей базы данных" : "Exposed Database Vectors"}
              </h4>
              <p className="text-xs text-[#585068] mt-2 leading-relaxed">
                {lang === "ru"
                  ? "База данных скрыта за закрытым API. У хакеров и спам-ботов нет точек входа для SQL-инъекций и взлома через плагины."
                  : "Databases are completely isolated behind private microservices, eliminating traditional SQL injection exploits."}
              </p>
            </div>
          </div>

          {/* Deep Architectural Comparison Table */}
          <div className="overflow-x-auto mt-6 pt-6 border-t border-[#2d263b]/10">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2d263b]/10 text-[#585068] font-mono text-xs uppercase">
                  <th className="py-3 px-3 font-semibold">{lang === "ru" ? "Критерий оценки" : "Benchmark Metric"}</th>
                  <th className="py-3 px-3 font-semibold text-[#4b6c8c]">Next.js + Edge CDN</th>
                  <th className="py-3 px-3 font-semibold text-[#585068]">WordPress / Tilda / Bitrix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d263b]/5">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf9fb] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#2d263b]">{row.feature}</td>
                    <td className="py-3.5 px-3 text-[#2d263b] font-semibold">{row.nextjs}</td>
                    <td className="py-3.5 px-3 text-[#585068]">{row.builders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Craft Annotations: Stamp & PS */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <CustomStampBadge
              label={lang === "ru" ? "ЧИСТЫЙ ИСХОДНЫЙ КОД" : "100% PROPRIETARY GIT"}
              caption={
                lang === "ru"
                  ? "Приватный репозиторий GitHub • 0 привязок"
                  : "Private GitHub repo • Zero vendor lock-in"
              }
              starsCount={5}
              className="-rotate-1 max-w-xs shrink-0"
            />

            <CustomPSCard
              noteTitle={lang === "ru" ? "P.S. Архитектурный стандарт:" : "P.S. Architectural Principle:"}
              text={
                lang === "ru"
                  ? "Никаких 'веб-мастеров на зарплате'. Чистый React и строгий TypeScript позволяют любому квалифицированному инженеру масштабировать проект."
                  : "Zero developer handcuffs. Clean React & TypeScript ensure any senior engineer can maintain and scale your platform effortlessly."
              }
              className="rotate-1 flex-1 w-full"
            />
          </div>
        </div>

        {/* 5-Step Engineering Workflow (SEO Depth Section) */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-[#2d263b] text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Регламент разработки" : "Engineering Process"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Пошаговый процесс создания веб-продукта Few Hands"
                : "Step-by-Step Web Product Delivery Pipeline"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Прозрачная пятиэтапная методология: от сбора требований и проектирования прототипа до комплексного тестирования и релиза на глобальном CDN."
                : "Transparent 5-stage agile pipeline ensuring on-time delivery, pixel-perfect accuracy, and zero technical debt."}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {devPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-mono font-black text-[#4b6c8c] mb-3">{phase.step}</div>
                  <h3 className="font-bold text-sm text-[#2d263b] mb-2 leading-snug">{phase.title}</h3>
                  <p className="text-xs text-[#585068] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Pills */}
        <div className="mt-16 p-8 rounded-3xl border border-[#2d263b]/10 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#2d263b]">
                {lang === "ru" ? "Современный технологический стек проекта" : "Production Technology Stack"}
              </h3>
              <p className="text-xs text-[#585068] mt-1">
                {lang === "ru"
                  ? "Только актуальные промышленные инструменты без устаревших библиотек."
                  : "Industrial-grade modern tooling with zero legacy baggage."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "Cloudflare", "PostgreSQL", "Sanity / Strapi", "Schema.org"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-[#f1f0f5] text-[#2d263b] font-mono text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section (SEO Authority & Schema.org) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#2d263b]/10 text-[#2d263b] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#4b6c8c]" />
              <span>{lang === "ru" ? "Частые вопросы" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Ответы на вопросы о создании сайтов"
                : "Frequently Asked Questions About Custom Web Development"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Всё о правах на исходный код, редактировании контента, сроках и гарантиях студии."
                : "Clear facts on code ownership, content workflows, delivery schedules, and guarantees."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#2d263b] hover:text-[#4b6c8c] transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#585068]/50 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#4b6c8c]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#585068] leading-relaxed border-t border-[#2d263b]/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees Box */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "100% Владение кодом" : "Full Code Ownership"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Репозиторий передаётся заказчику, отсутствие vendor lock-in и скрытых платежей."
                  : "Private repository transfer with zero platform dependencies or lock-in."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-[#4b6c8c] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "Глобальный Edge CDN" : "Global Edge CDN"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Молниеносная загрузка для пользователей в США, Европе, Азии и странах СНГ."
                  : "Sub-second responsiveness across North America, Europe, Asia, and worldwide."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-[#2d263b]/10 shadow-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#9c386d] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#2d263b]">
                {lang === "ru" ? "Google PageSpeed 95-100" : "Guaranteed Web Vitals"}
              </h4>
              <p className="text-xs text-[#585068] mt-1 leading-relaxed">
                {lang === "ru"
                  ? "Строгий контроль показателей Core Web Vitals и соответствие стандартам ранжирования."
                  : "Strict adherence to Core Web Vitals targets for maximum organic SEO advantage."}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-gradient-to-b from-white/90 to-[#f1f0f5]/90 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#2d263b]">
            {lang === "ru" ? "Готовы обсудить концепцию вашего нового сайта?" : "Ready to Engineer Your Next-Gen Platform?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку на бесплатную консультацию и предварительную смету или воспользуйтесь нашим калькулятором стоимости."
              : "Submit your requirements for an architectural consultation and fixed budget proposal."}
          </p>
          <div className="mt-6 flex flex-col items-center">
            <DoodlePointer
              text={lang === "ru" ? "калькулятор с прозрачной сметой ↘" : "transparent itemized calculator ↘"}
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate?service=dev"
                className="px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-md transition"
              >
                {lang === "ru" ? "Рассчитать стоимость в калькуляторе" : "Calculate Development Cost"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-xs sm:text-sm shadow-sm transition"
              >
                {lang === "ru" ? "Связаться со студией" : "Direct Studio Inquiry"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
