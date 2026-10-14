"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Headphones, GraduationCap, Clock, ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function MaintenancePage() {
  const { lang } = useLanguage();

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

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">
            {lang === "ru" ? "Поддержка & Обучение" : "Support & Training"}
          </span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Ежемесячный Retainer" : "Monthly Retainer SLA"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {lang === "ru"
              ? "Техподдержка сайтов и обучение персонала по абонплате"
              : "Ongoing Website Maintenance & Staff Training"}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {lang === "ru"
              ? "После миграции или разработки сайта самое важное — не бросать бизнес на произвол судьбы. Few Hands берёт на себя обучение вашей команды, регулярное обновление контента, защиту и доработку новых фич по фиксированной ежемесячной подписке."
              : "We don't abandon your team post-migration. Few Hands provides hands-on staff onboarding, scheduled content rollouts, uptime monitoring, and proactive engineering under a predictable monthly subscription."}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              {lang === "ru" ? "Обучение персонала" : "Staff Onboarding"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {lang === "ru"
                ? "Записываем наглядные видео-инструкции для ваших контент-менеджеров и проводим Zoom-онбординг."
                : "Tailored video walkthroughs and live Zoom consulting for your marketing and content team."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              {lang === "ru" ? "Быстрые доработки" : "Fast Turnaround"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {lang === "ru"
                ? "Нужно добавить новый блок, форму, акционный баннер или страницу? Вносим правки в течение 24 часов."
                : "Need a new promotional banner, lead form, or campaign page? Executed swiftly within 24 hours."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              {lang === "ru" ? "24/7 Мониторинг" : "24/7 Monitoring"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {lang === "ru"
                ? "Автоматический мониторинг доступности и скорости, еженедельные бэкапы и обновление системных модулей."
                : "Automated uptime alarms, performance tracking, regular backups, and dependency maintenance."}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              {lang === "ru" ? "Прямой канал связи" : "Direct Channels"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {lang === "ru"
                ? "Оперативная связь по корпоративной почте или в удобном для вашей команды мессенджере без бюрократии."
                : "Direct access via corporate email or your preferred team channel with no ticket-system bureaucracy."}
            </p>
          </div>
        </div>

        {/* Retainer Pricing Cards */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === "ru" ? "Тарифные планы сопровождения" : "Retainer Support Packages"}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
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
                    ? "border-2 border-indigo-600 bg-white shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-600"
                    : "border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg"
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold mb-4 inline-block">
                      {lang === "ru" ? "Рекомендуемый выбор" : "Most Popular"}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-sm text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25"
                        : "border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
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

      </div>
    </div>
  );
}
