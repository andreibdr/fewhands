"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Layout, ShoppingBag, Cpu, Zap, Check, ArrowRight } from "lucide-react";

export default function DevelopmentPage() {
  const { lang } = useLanguage();

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

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{lang === "ru" ? "Разработка" : "Development"}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Кастомная веб-инженерия" : "Custom Web Engineering"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {lang === "ru"
              ? "Создание сайтов на современном стеке Next.js"
              : "Building High-Performance Websites on Next.js"}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {lang === "ru"
              ? "Разрабатываем сайты с чистого листа: от концепции и вёрстки до интеграции форм и выкатки на глобальный Edge CDN. Никаких шаблонных компромиссов — только чистый код, безопасность и максимальная конверсия."
              : "Engineering bespoke web applications from first principles: design systems, modular frontend architecture, payment pipelines, and global Edge CDN deployment. Clean code, hardened security, and commercial focus."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all"
            >
              <span>{lang === "ru" ? "Рассчитать стоимость сайта" : "Estimate Website Cost"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-sm transition-all"
            >
              <span>{lang === "ru" ? "Смотреть примеры работ" : "View Selected Works"}</span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2.5 border-t border-slate-100 pt-5">
                    {item.specs.map((spec, si) => (
                      <li key={si} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Next.js & Edge Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-md shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {lang === "ru"
              ? "Почему бизнес выбирает Next.js вместо устаревших CMS"
              : "Why Growing Businesses Choose Next.js Over Monolithic CMSs"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="text-2xl font-black text-indigo-600">100/100</div>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "Google PageSpeed" : "Google PageSpeed Target"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Поисковые роботы ставят быстрые сайты на первые позиции, а пользователи не закрывают страницу из-за долгой загрузки."
                  : "Search crawlers reward instant loading sites with higher organic rank, while visitors convert at significantly higher rates."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="text-2xl font-black text-emerald-600">$0</div>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "За хостинг и плагины" : "Zero Builder / Plugin Tax"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Сайты работают на бесплатной инфраструктуре Vercel/Cloudflare Edge, не требуя аренды серверов и платных модулей."
                  : "Deploy on global Edge CDN (Vercel/Cloudflare) with zero monthly builder licensing fees and no fragile rented plugins."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="text-2xl font-black text-purple-600">0</div>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "Уязвимостей базы данных" : "Exposed Database Vulnerabilities"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Нет открытых баз данных и уязвимых PHP-скриптов. Сайт невозможно взломать через классические инъекции."
                  : "Static and serverless edge delivery eliminates SQL injections and common WordPress bot exploit vectors."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
