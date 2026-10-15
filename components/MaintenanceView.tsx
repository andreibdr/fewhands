"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Headphones,
  GraduationCap,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const MaintenanceView: React.FC = () => {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      id: "start",
      name: lang === "ru" ? "Старт (Контроль & Бэкапы)" : "Essentials (Care & Backups)",
      price: "$190",
      period: lang === "ru" ? "/ месяц" : "/ month",
      desc:
        lang === "ru"
          ? "Для сайтов-визиток и небольших проектов, которым нужен постоянный контроль без сюрпризов."
          : "For landing pages and corporate websites needing steady reliability, continuous uptime, and automated backups.",
      features:
        lang === "ru"
          ? [
              "Мониторинг доступности сайта 24/7 (Uptime)",
              "Регулярные резервные копии и аудит безопасности",
              "Обновление пакетов и серверных зависимостей",
              "До 3 часов мелких контентных правок в месяц",
              "Поддержка по Email и в рабочем чате (ответ в течение рабочего дня)",
            ]
          : [
              "24/7 Uptime & Core Web Vitals monitoring",
              "Automated scheduled backups & security audits",
              "Dependency and package version maintenance",
              "Up to 3 hours of content and text adjustments monthly",
              "Corporate email & team chat support (next business day response)",
            ],
      popular: false,
    },
    {
      id: "business",
      name: lang === "ru" ? "Бизнес Retainer" : "Business Retainer",
      price: "$450",
      period: lang === "ru" ? "/ месяц" : "/ month",
      desc:
        lang === "ru"
          ? "Оптимально для перенесённых сайтов и растущего бизнеса, где постоянно обновляется контент и витрина."
          : "Ideal for migrated platforms and active businesses requiring regular page rollouts and team guidance.",
      features:
        lang === "ru"
          ? [
              "Всё из тарифа «Старт»",
              "Обучение и онбординг сотрудников (видео-инструкции)",
              "До 10 часов верстки, доработок и новых блоков",
              "Публикация контента, акций, товаров и баннеров",
              "Приоритетный ответ в рабочие часы (Mon–Fri)",
              "Контроль скорости Google PageSpeed (держим 95-100)",
            ]
          : [
              "All features included in Essentials",
              "Team onboarding & step-by-step video tutorials",
              "Up to 10 engineering hours for new sections and UI tweaks",
              "Continuous publication of articles, banners, and products",
              "Priority response during business hours (Mon–Fri)",
              "Continuous Core Web Vitals audits (target 95–100)",
            ],
      popular: true,
    },
    {
      id: "enterprise",
      name: lang === "ru" ? "Enterprise Retainer" : "Enterprise Retainer",
      price: "$950",
      period: lang === "ru" ? "/ месяц" : "/ month",
      desc:
        lang === "ru"
          ? "Максимальный приоритет для высоконагруженных проектов и масштабных платформ, требующих непрерывных спринтов разработки."
          : "Maximum priority for high-traffic platforms requiring continuous engineering sprints, architectural tuning, and strict SLA.",
      features:
        lang === "ru"
          ? [
              "Всё из тарифа «Бизнес»",
              "До 25 часов глубокой веб-разработки и новых разделов",
              "Выделенный Senior-инженер и персональный тимлид",
              "Приоритетный SLA (время реакции до 1 часа в рабочее время)",
              "Еженедельные спринты и синхронизация по дорожной карте",
              "Непрерывный аудит конверсий, скорости и нагрузочное тестирование",
            ]
          : [
              "All features included in Business",
              "Up to 25 dedicated senior engineering hours monthly",
              "Dedicated technical lead & account manager",
              "Priority SLA (response under 1 hour during business hours)",
              "Weekly roadmap sprints & architecture reviews",
              "Continuous conversion rate optimization & load testing",
            ],
      popular: false,
    },
  ];

  const inhouseComparison = [
    {
      metric: lang === "ru" ? "Ежемесячные затраты бизнеса" : "Monthly Financial Cost",
      inhouse: lang === "ru" ? "$2,500 – $4,500/мес (оклад, налоги, рабочее место)" : "$2,500 – $4,500/mo (Salary, taxes, benefits)",
      fewhands: lang === "ru" ? "От $190/мес — фиксированный Retainer без налогов и найма" : "From $190/mo — flat predictable retainer, zero overhead",
    },
    {
      metric: lang === "ru" ? "Набор компетенций" : "Skillset Diversity",
      inhouse: lang === "ru" ? "Один специалист (знает либо бэкенд, либо верстку)" : "Single developer with limited narrow skill scope",
      fewhands: lang === "ru" ? "Целая команда: инженер, верстальщик, DevOps, контентщик" : "Multi-disciplinary team: Senior Dev, UI designer, DevOps",
    },
    {
      metric: lang === "ru" ? "Непрерывность работы" : "Availability & Coverage",
      inhouse: lang === "ru" ? "Риск отпуска, больничных и внезапного увольнения" : "Vacation downtime, sick leaves, turnover friction",
      fewhands: lang === "ru" ? "100% гарантия по договору и SLA, непрерывный мониторинг" : "365-day SLA guarantee with automated failover monitoring",
    },
    {
      metric: lang === "ru" ? "Обучение сотрудников компании" : "Staff Onboarding & Training",
      inhouse: lang === "ru" ? "Редко документирует код и неохотно учит менеджеров" : "Rarely produces structured video walkthroughs",
      fewhands: lang === "ru" ? "Записываем пошаговые видеоуроки и проводим Zoom-сессии" : "Bespoke video training library & live onboarding calls",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Что произойдет, если в текущем месяце мы не использовали все часы?"
          : "What happens if we do not use all allocated support hours in a month?",
      a:
        lang === "ru"
          ? "Неиспользованные часы частично переносятся на следующий расчётный период (до 50% объема тарифа) или могут быть направлены на плановую оптимизацию скорости, проверку безопасности и аудит конверсий сайта."
          : "Up to 50% of unused engineering hours can roll over into the following billing cycle or be allocated toward automated speed audits, security patching, and SEO technical reviews.",
    },
    {
      q:
        lang === "ru"
          ? "Как происходит постановка задач и контроль выполнения?"
          : "How are maintenance tasks submitted and tracked?",
      a:
        lang === "ru"
          ? "Без громоздких и неудобных тикет-систем: задачи ставятся через корпоративную почту web@fewhands.com или в выделенном рабочем чате вашей команды. Каждый запрос регистрируется, оценивается по времени и выполняется в рамках SLA."
          : "We bypass bureaucratic ticketing friction: tasks are submitted directly via dedicated team channels or corporate email. Every request is timestamped, estimated, and fulfilled according to your plan SLA.",
    },
    {
      q:
        lang === "ru"
          ? "Берёте ли вы на поддержку сайты, созданные другими студиями?"
          : "Do you accept platforms built by other agencies for ongoing maintenance?",
      a:
        lang === "ru"
          ? "Да! Перед началом абонентской поддержки мы проводим обязательный технический аудит: проверяем чистоту кода, стек, зависимости и наличие уязвимостей, после чего предлагаем оптимальный план сопровождения или модернизации."
          : "Yes. Prior to initiating retainer coverage, our engineering team performs an initial code audit to evaluate dependency hygiene, security posture, and runtime health, then recommends an optimal maintenance plan.",
    },
    {
      q:
        lang === "ru"
          ? "Как проходит обучение наших контент-менеджеров?"
          : "How is staff onboarding and CMS training delivered?",
      a:
        lang === "ru"
          ? "Мы записываем персонализированные видео-скринкасты по каждому разделу вашего сайта (добавление новостей, акций, баннеров, товаров) и проводим интерактивную сессию в Zoom. У вашей команды остаётся постоянный доступ к видеотеке инструкций."
          : "We produce tailored video screencasts covering every workflow in your panel (publishing articles, updating catalogs, modifying promotional banners) and host live onboarding sessions. Your team retains permanent access to the guides.",
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
        <div className="text-xs text-[#8c829c] mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d263b] transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-[#c6814b] font-semibold">
            {lang === "ru" ? "Поддержка сайтов (Retainer)" : "Support & Retainer"}
          </span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef7f0] border border-[#c6814b]/30 text-[#c6814b] text-xs font-semibold mb-4">
              <Headphones className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Ежемесячный Retainer SLA" : "Monthly Retainer SLA"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
              {lang === "ru"
                ? "Техническая поддержка и сопровождение сайтов (Retainer)"
                : "Ongoing Website Maintenance, Retainer SLA & Support"}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-3xl">
              {lang === "ru"
                ? "После релиза или миграции сайта самое главное — надежное техническое плечо. Команда инженеров Few Hands берет на себя регулярное обновление контента, защиту от сбоев, круглосуточный мониторинг, онбординг персонала и доработку новых фич по фиксированному тарифу без затрат на штатного разработчика."
                : "We ensure your digital platform stays fast, secure, and always operational. Few Hands delivers proactive maintenance, scheduled content rollouts, 24/7 uptime monitoring, and engineering iterations under a predictable monthly retainer."}
            </p>

            <div className="mt-6">
              <DoodlePointer
                text={lang === "ru" ? "прозрачные фиксированные тарифы ↘" : "predictable flat retainers ↘"}
                direction="curved-down-right"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-2">
            <CraftCard
              tag={lang === "ru" ? "ИНЦИДЕНТНЫЙ ИММУНИТЕТ" : "INCIDENT IMMUNITY"}
              question={
                lang === "ru"
                  ? "Нужен штатный веб-мастер? НЕТ [X]"
                  : "Hire in-house webmaster? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Штатный сотрудник стоит $3,000+ плюс налоги и отпуска. Retainer Few Hands даёт Senior-команду и гарантированный SLA от $190/мес."
                  : "An in-house dev costs $3,000+ plus taxes and sick leaves. A Few Hands retainer delivers an entire senior team with SLA from $190/mo."
              }
              checked={false}
              rotate="rotate-1"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#fcf0f6] text-[#9c386d] flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru" ? "Обучение персонала" : "Staff Onboarding"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Записываем наглядные видео-инструкции для ваших контент-менеджеров и проводим Zoom-онбординг."
                : "Tailored video walkthroughs and live Zoom consulting for your marketing and content team."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#f0f5ec] text-[#7ea368] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru" ? "Быстрые доработки" : "Fast Turnaround"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Нужно добавить новый блок, форму, акционный баннер или страницу? Вносим правки в течение 24 часов."
                : "Need a new promotional banner, lead form, or campaign page? Executed swiftly within 24 hours."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#edf5f5] text-[#386161] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru" ? "24/7 Мониторинг" : "24/7 Monitoring"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Автоматический мониторинг доступности и скорости, еженедельные бэкапы и обновление системных модулей."
                : "Automated uptime alarms, performance tracking, regular backups, and dependency maintenance."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#fef7f0] text-[#c6814b] flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#2d263b]">
              {lang === "ru" ? "Прямой канал связи" : "Direct Channels"}
            </h3>
            <p className="text-xs sm:text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Оперативная связь по корпоративной почте или в удобном для вашей команды мессенджере без бюрократии."
                : "Direct access via corporate email or your preferred team channel with no ticket-system bureaucracy."}
            </p>
          </div>
        </div>

        {/* Retainer Pricing Cards */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru" ? "Тарифные планы сопровождения" : "Retainer Support Packages"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Прозрачные условия без скрытых доплат. Возможность менять тариф в зависимости от сезонной нагрузки."
                : "Predictable monthly pricing with no hidden surcharges. Easily adjust tiers as your business scales."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  plan.popular
                    ? "border-2 border-[#2d263b] bg-white shadow-xl ring-1 ring-[#2d263b]/10"
                    : "border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg"
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2d263b] text-[#faf9fb] font-bold mb-4 inline-block">
                      {lang === "ru" ? "Рекомендуемый выбор" : "Most Popular"}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#2d263b]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#2d263b]">{plan.price}</span>
                    <span className="text-sm text-[#585068]">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#585068] mt-3 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="mt-6 pt-6 border-t border-[#f1f0f5] space-y-3">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2d263b]">
                        <Check className="w-4 h-4 text-[#7ea368] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition ${
                      plan.popular
                        ? "bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] shadow-md shadow-[#2d263b]/15"
                        : "border border-[#e5e1eb] bg-white text-[#2d263b] hover:bg-[#f1f0f5] shadow-sm"
                    }`}
                  >
                    <span>{lang === "ru" ? "Выбрать тариф" : "Select Package"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Comparison: In-House vs Few Hands Retainer */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-[#386161] uppercase tracking-wider">
              {lang === "ru" ? "Экономика бизнеса" : "Commercial Rationale"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Штатный программист против абонентского тарифа Retainer"
                : "In-House Developer vs Retainer Support Model"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Почему средний и растущий бизнес выбирает внешнее сопровождение вместо найма дорогих узких специалистов в штат."
                : "Why forward-looking organizations choose agile retainer partnerships over fixed payroll overhead and hiring bottlenecks."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#e5e1eb] text-[#8c829c] font-mono text-xs uppercase">
                  <th className="py-3 px-3 font-semibold">{lang === "ru" ? "Критерий" : "Parameter"}</th>
                  <th className="py-3 px-3 font-semibold text-[#8c829c]">{lang === "ru" ? "Штатный сотрудник" : "In-House Staff"}</th>
                  <th className="py-3 px-3 font-semibold text-[#386161]">Few Hands Retainer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f0f5]">
                {inhouseComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf9fb] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#2d263b]">{row.metric}</td>
                    <td className="py-3.5 px-3 text-[#585068]">{row.inhouse}</td>
                    <td className="py-3.5 px-3 text-[#386161] font-semibold">{row.fewhands}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Craft Annotations: Stamp & PS */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <CustomStampBadge
              label={lang === "ru" ? "РЕАКЦИЯ ПО SLA" : "RESPONSE SLA"}
              caption={
                lang === "ru"
                  ? "До 1 часа на инциденты • 24/7 Uptime"
                  : "Under 1 hr incident SLA • 24/7 Uptime"
              }
              starsCount={5}
              className="-rotate-1 max-w-xs shrink-0"
            />

            <CustomPSCard
              noteTitle={lang === "ru" ? "P.S. Прозрачность часов:" : "P.S. Retainer Transparency:"}
              text={
                lang === "ru"
                  ? "До 50% неиспользованных часов переносятся на следующий месяц или инвестируются в плановое ускорение и SEO-аудиты."
                  : "Up to 50% of unused hours roll over or get invested into proactive performance and technical security audits."
              }
              className="rotate-1 flex-1 w-full"
            />
          </div>
        </div>

        {/* Staff Training Details Section (SEO Depth) */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Обучающая программа" : "Onboarding Protocol"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
              {lang === "ru"
                ? "Как устроено обучение сотрудников вашей компании"
                : "How Few Hands Onboards and Empowers Your Team"}
            </h2>
            <p className="text-sm text-[#585068] mt-2 leading-relaxed">
              {lang === "ru"
                ? "Мы не оставляем клиентов с непонятной системой. Передаём знания так, чтобы рядовой менеджер управлял витриной сайта за пару минут."
                : "We eliminate interface confusion with structured video knowledge transfers and live mentoring sessions."}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#edf5f5] text-[#386161] flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru" ? "Персональная видеотека" : "Custom Video Library"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Короткие наглядные ролики (3-5 мин) под каждую операцию: добавление товара, редактирование баннера, публикация статьи."
                  : "Concise 3-minute screen recordings tailored to your specific UI for catalog, banner, and text management."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#f0f5ec] text-[#7ea368] flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru" ? "Интерактивный Zoom-онбординг" : "Interactive Live Sessions"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Живая демонстрация работы с сайтом в режиме реального времени. Ответы на любые вопросы ваших маркетологов и контентщиков."
                  : "Live interactive walkthroughs demonstrating real-time workflows and resolving specific operational questions."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#fcf0f6] text-[#9c386d] flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-[#2d263b] text-base mb-2">
                {lang === "ru" ? "Постоянная линия помощи" : "Continuous Support Line"}
              </h3>
              <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Если новый сотрудник забыл инструкцию или запутался — оперативно подскажем и поможем решить вопрос в рабочем чате."
                  : "Whenever new staff joins or edge cases arise, our engineers provide fast, friendly guidance in your dedicated chat."}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-white/70 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Частые вопросы" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] mt-1">
              {lang === "ru"
                ? "Вопросы и ответы по абонентской поддержке"
                : "Frequently Asked Questions About Retainer Support"}
            </h2>
            <p className="text-sm text-[#585068] mt-2">
              {lang === "ru"
                ? "Регламент работы, условия переноса часов, реакция на срочные инциденты и гибкость тарифов."
                : "Turnaround guidelines, task estimation, roll-over mechanics, and SLA guarantees."}
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

        {/* CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#e5e1eb] bg-gradient-to-b from-white/95 to-[#f1f0f5] text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-[#2d263b]">
            {lang === "ru" ? "Нужна надежная поддержка для вашего сайта?" : "Looking for Reliable Retainer Tech Support?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#585068] mt-2 max-w-xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку с адресом вашего сайта. Мы проведем экспресс-аудит проекта и предложим оптимальный план сопровождения."
              : "Submit your website URL for a complimentary code audit and personalized retainer proposal."}
          </p>
          <div className="mt-6 flex flex-col items-center">
            <DoodlePointer
              text={lang === "ru" ? "быстрый расчет сметы за 1 мин ↘" : "instant retainer estimate in 1 min ↘"}
              direction="curved-down-right"
              className="mb-2"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/estimate?service=migration"
                className="px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-semibold text-xs sm:text-sm shadow-md transition"
              >
                {lang === "ru" ? "Рассчитать стоимость поддержки" : "Calculate Retainer Budget"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-[#e5e1eb] bg-white text-[#2d263b] hover:text-[#386161] hover:border-[#386161]/40 font-semibold text-xs sm:text-sm shadow-sm transition"
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
