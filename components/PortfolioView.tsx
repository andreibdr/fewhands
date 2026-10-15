"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { portfolioItems } from "@/lib/data";
import {
  ExternalLink,
  Play,
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Award,
  BarChart3,
  Cpu,
  ArrowRight,
} from "lucide-react";

export const PortfolioView: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        description: item.description.ru,
        url: item.url || `https://fewhands.com/portfolio#${item.id}`,
        creator: {
          "@type": "Organization",
          name: "Few Hands",
        },
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
          <nav aria-label="Breadcrumb" className="text-xs text-[#8c829c] mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#2d263b] transition-colors">
              {lang === "ru" ? "Главная" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-[#386161] font-semibold">{lang === "ru" ? "Портфолио" : "Portfolio"}</span>
          </nav>

          {/* Hero Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Реализованные кейсы" : "Client Work & Case Studies"}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
                {lang === "ru"
                  ? "Портфолио веб-проектов, миграций и AI-видео"
                  : "Few Hands Selected Works: Web, Migrations & AI Video"}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Реальные действующие цифровые продукты, скоростные интернет-магазины, корпоративные порталы и видеоматериалы для бизнеса в США, Европе и СНГ. Скорость Core Web Vitals 95–100, чистая архитектура и прозрачный код."
                  : "Live production websites, e-commerce storefronts, high-traffic portals, and AI video productions engineered for international brands. PageSpeed 95-100, zero legacy debt, and verifiable ROI."}
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center bg-[#f1f0f5] border border-[#e5e1eb] p-1.5 rounded-2xl shrink-0">
              {[
                { id: "all", label: lang === "ru" ? "Все кейсы" : "All Projects" },
                { id: "web", label: lang === "ru" ? "Сайты & Миграция" : "Web & Migration" },
                { id: "video", label: lang === "ru" ? "Видео & AI" : "Video & AI" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-[#2d263b] shadow-sm font-bold"
                      : "text-[#585068] hover:text-[#2d263b]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </header>

          {/* Portfolio Grid */}
          <main className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Media Preview */}
                  {item.image ? (
                    <div className="w-full bg-[#f1f0f5] border-b border-[#e5e1eb] overflow-hidden">
                      {/* Browser Bar with Hand Colors */}
                      <div className="px-3.5 py-2 bg-[#f1f0f5] border-b border-[#e5e1eb] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ba5d60]/80" />
                          <span className="w-2 h-2 rounded-full bg-[#c6814b]/80" />
                          <span className="w-2 h-2 rounded-full bg-[#7ea368]/80" />
                        </div>
                        <div className="text-[10px] font-mono text-[#585068] truncate max-w-[200px] bg-white px-2 py-0.5 rounded border border-[#e5e1eb]">
                          {item.url ? item.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : item.title}
                        </div>
                        <div className="w-6" />
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} — кейс агентства Few Hands`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ) : item.youtubeId ? (
                    <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                      <div
                        onClick={() => setModalVideo(item.youtubeId || null)}
                        className="relative w-full h-full cursor-pointer group/media"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                          alt={`${item.title} — видео продакшн Few Hands`}
                          className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/media:bg-black/10 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#2d263b] text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-white translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#f1f0f5] text-[#585068]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-lg font-bold text-[#2d263b] group-hover:text-[#386161] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      {item.url && <ExternalLink className="w-4 h-4 text-[#8c829c] group-hover:text-[#386161]" />}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-[#585068] leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="p-6 pt-0">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#386161] hover:text-[#2a4949]"
                    >
                      <span>{lang === "ru" ? "Перейти на сайт проекта" : "Visit Live Website"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : item.youtubeId ? (
                    <button
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9c386d] hover:text-[#7f2856]"
                    >
                      <span>{lang === "ru" ? "Смотреть ролик" : "Watch Full Video"}</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </main>

          {/* Deep SEO Section 1: Performance Benchmarks & Business Results */}
          <section className="mt-24 pt-16 border-t border-[#e5e1eb]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f5ec] border border-[#7ea368]/30 text-[#7ea368] text-xs font-semibold mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Измеримый результат" : "Measurable Results"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] tracking-tight">
                {lang === "ru"
                  ? "Стандарты производительности и бизнес-метрики проектов"
                  : "Performance Benchmarks & Client Conversion Metrics"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#585068]">
                {lang === "ru"
                  ? "Каждый сайт и сервис, созданный Few Hands, проходит многоэтапное стресс-тестирование Google Lighthouse, валидацию W3C и оптимизацию Core Web Vitals перед релизом."
                  : "Every web application engineered by Few Hands passes stringent Google Lighthouse audits, W3C standards compliance, and real-user Core Web Vitals tuning before production rollout."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "95–100",
                  label: lang === "ru" ? "Google PageSpeed Score" : "Google PageSpeed Score",
                  sub: lang === "ru" ? "Зеленая зона для мобильных и десктопных устройств" : "Green zone across both mobile and desktop viewports",
                  icon: Zap,
                  accent: "text-[#7ea368] bg-[#f0f5ec] border-[#7ea368]/30",
                },
                {
                  metric: "< 0.8s",
                  label: lang === "ru" ? "LCP (Скорость отрисовки)" : "LCP (Render Speed)",
                  sub: lang === "ru" ? "Мгновенное отображение первого экрана контента" : "Instant above-the-fold content rendering globally via Edge CDN",
                  icon: TrendingUp,
                  accent: "text-[#386161] bg-[#edf5f5] border-[#386161]/30",
                },
                {
                  metric: "0.00",
                  label: lang === "ru" ? "CLS (Сдвиг макета)" : "CLS (Cumulative Layout Shift)",
                  sub: lang === "ru" ? "Абсолютная стабильность элементов при подгрузке медиа" : "Zero layout shifting during asynchronous media hydration",
                  icon: ShieldCheck,
                  accent: "text-[#4b6c8c] bg-[#edf3f8] border-[#4b6c8c]/30",
                },
                {
                  metric: "+35%",
                  label: lang === "ru" ? "Средний рост конверсии" : "Average Conversion Lift",
                  sub: lang === "ru" ? "Благодаря отсутствию задержек и быстрой навигации" : "Achieved via zero latency and instant client-side routing",
                  icon: Award,
                  accent: "text-[#9c386d] bg-[#fcf0f6] border-[#9c386d]/30",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-[#e5e1eb] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${item.accent} mb-4`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-extrabold text-[#2d263b] tracking-tight">{item.metric}</div>
                    <div className="mt-1 font-semibold text-sm text-[#2d263b]">{item.label}</div>
                  </div>
                  <p className="mt-3 text-xs text-[#585068] leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deep SEO Section 2: Industry Expertise & Architecture */}
          <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#faf9fb] border border-[#e5e1eb]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-4">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{lang === "ru" ? "Отраслевая экспертиза" : "Sector Expertise"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b] tracking-tight">
                  {lang === "ru"
                    ? "16+ лет инженерного опыта в разработке и масштабировании"
                    : "16+ Years of Battle-Tested Engineering Across Verticals"}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#585068] leading-relaxed">
                  {lang === "ru"
                    ? "Мы не используем шаблонные конструкторы или перегруженные чужие темы. Каждый проект в нашем портфолио построен на строгом модульном коде с использованием Next.js, React, TypeScript и Tailwind CSS. Это исключает зависимость от закрытых проприетарных систем и дает заказчику 100% владение исходным кодом."
                    : "We deliberately avoid bloated theme ecosystems and rigid closed-source builders. Every project in our showcase is crafted with clean modular TypeScript, Next.js, and headless backends. This delivers zero vendor lock-in, effortless enterprise scalability, and full intellectual property ownership."}
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    lang === "ru"
                      ? "B2B и Производство: каталоги с тысячами SKU, фильтры без перезагрузки, закрытые клиентские порталы"
                      : "B2B & Industrial: high-SKU catalogs, instant parametric filters, secure wholesale partner portals",
                    lang === "ru"
                      ? "E-Commerce и Ритейл: сверхбыстрый чекаут, синхронизация с ERP/CRM и платежными шлюзами"
                      : "E-Commerce & Retail: lightning-fast checkout flows, bi-directional ERP/CRM & multi-currency payment sync",
                    lang === "ru"
                      ? "SaaS и Стартапы: современные интерфейсы, интеграция AI-моделей, мультиязычность и адаптивность"
                      : "SaaS & High-Growth Tech: modern reactive UIs, generative AI integration, global i18n localization",
                    lang === "ru"
                      ? "Медиа и Видеопродакшн: AI-аватары, автогенерация контента для YouTube и социальных сетей"
                      : "Digital Media & Video: AI-driven presenter videos, YouTube production pipelines, dynamic social hooks",
                  ].map((bullet, bi) => (
                    <div key={bi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#386161] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#2d263b] leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-white p-8 rounded-3xl border border-[#e5e1eb] shadow-md">
                <h3 className="text-xl font-bold text-[#2d263b]">
                  {lang === "ru" ? "Нужен расчет вашего проекта?" : "Need an Exact Estimate for Your Project?"}
                </h3>
                <p className="mt-3 text-sm text-[#585068] leading-relaxed">
                  {lang === "ru"
                    ? "Воспользуйтесь нашим интерактивным калькулятором с прозрачным расчетом стоимости миграции, разработки с нуля или AI-видеопродакшна."
                    : "Use our transparent 3-in-1 interactive calculator to calculate precise timelines and budget for CMS migration, custom development, or AI video production."}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/estimate"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-semibold text-sm transition-all shadow-md shadow-[#2d263b]/15"
                  >
                    <span>{lang === "ru" ? "Открыть калькулятор сметы" : "Open Project Calculator"}</span>
                    <ArrowRight className="w-4 h-4 text-[#e5e1eb]" />
                  </Link>
                  <Link
                    href="/migrate"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#f1f0f5] hover:bg-[#e5e1eb] text-[#2d263b] font-semibold text-sm transition-all"
                  >
                    <span>{lang === "ru" ? "Узнать о миграции" : "Explore CMS Migration"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Video Lightbox Modal */}
          {modalVideo && (
            <div
              onClick={() => setModalVideo(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${modalVideo}?autoplay=1`}
                  title="Video Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
                <button
                  onClick={() => setModalVideo(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
