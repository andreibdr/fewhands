"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { portfolioItems, PortfolioItem } from "@/lib/data";
import {
  ExternalLink,
  Play,
  Layers,
  Zap,
  TrendingUp,
  CheckCircle2,
  Award,
  BarChart3,
  Cpu,
  ArrowRight,
  Eye,
  X,
  Archive,
  Globe,
  Sparkles,
  Smartphone,
} from "lucide-react";
import {
  AuditMetricsCard,
  CustomStampBadge,
  CustomPSCard,
  CraftCard,
  DoodlePointer,
} from "./HandDrawnDecorations";

export const PortfolioView: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "live" | "archived">("all");
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalVideo(null);
        setModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    // Category filter
    if (activeTab !== "all" && item.category !== activeTab) {
      return false;
    }
    // Status filter (only applies to web projects)
    if (statusFilter !== "all" && item.category === "web") {
      if (statusFilter === "live" && item.status !== "live") return false;
      if (statusFilter === "archived" && item.status !== "archived") return false;
    }
    return true;
  });

  const standardItems = filteredItems.filter((item) => !item.isShort);
  const verticalShorts = filteredItems.filter((item) => item.isShort);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        description: item.description[lang],
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
          {/* Hero Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f0f5] border border-[#e5e1eb] text-[#386161] text-xs font-semibold mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Реализованные кейсы" : lang === "sr" ? "Realizovani projekti" : "Client Work & Case Studies"}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
                {lang === "ru"
                  ? "Портфолио веб-проектов, миграций и AI-видео"
                  : lang === "sr"
                  ? "Few Hands portfolio: veb projekti, migracije i AI video"
                  : "Few Hands Selected Works: Web, Migrations & AI Video"}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Реальные действующие цифровые продукты, скоростные интернет-магазины, корпоративные порталы и видеоматериалы для бизнеса в США, Европе и СНГ. Действующие сайты в эфире и архивные авторские концепции."
                  : lang === "sr"
                  ? "Aktivni digitalni proizvodi, brze internet prodavnice, korporativni portali i video materijali za poslovanje u SAD, Evropi i širom sveta. Aktivni sajtovi u produkciji i arhivski autorski koncepti."
                  : "Live production websites, e-commerce storefronts, high-traffic portals, and AI video productions engineered for international brands. Live active domains and authentic design archive cases."}
              </p>
            </div>

            {/* Main Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <DoodlePointer
                text={lang === "ru" ? "выберите категорию кейсов ↘" : lang === "sr" ? "izaberite kategoriju projekata ↘" : "filter projects by type ↘"}
                direction="curved-right"
                className="hidden lg:inline-flex shrink-0 self-end mb-1"
              />
              <div className="flex items-center bg-[#f1f0f5] border border-[#e5e1eb] p-1.5 rounded-2xl shrink-0">
                {[
                  { id: "all", label: lang === "ru" ? "Все кейсы" : lang === "sr" ? "Svi projekti" : "All Projects" },
                  { id: "web", label: lang === "ru" ? "Сайты & Миграция" : lang === "sr" ? "Sajtovi & Migracija" : "Web & Migration" },
                  { id: "video", label: lang === "ru" ? "Видео & AI" : lang === "sr" ? "Video & AI" : "Video & AI" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id === "video") setStatusFilter("all");
                    }}
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
            </div>
          </header>

          {/* Sub-filter for Web Projects: Live vs Archived */}
          {activeTab !== "video" && (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-3 px-4 rounded-2xl bg-[#faf9fb] border border-[#e5e1eb]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#585068]">
                <span>{lang === "ru" ? "Статус проекта:" : lang === "sr" ? "Status projekta:" : "Project status:"}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStatusFilter("all")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    statusFilter === "all"
                      ? "bg-[#2d263b] text-white shadow-sm"
                      : "bg-white text-[#585068] hover:text-[#2d263b] border border-[#e5e1eb]"
                  }`}
                >
                  {lang === "ru" ? "Все веб-кейсы" : lang === "sr" ? "Svi veb projekti" : "All Web Projects"}
                </button>
                <button
                  onClick={() => setStatusFilter("live")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    statusFilter === "live"
                      ? "bg-[#7ea368] text-white shadow-sm"
                      : "bg-white text-[#585068] hover:text-[#7ea368] border border-[#e5e1eb]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === "ru" ? "В эфире (Live)" : lang === "sr" ? "Uživo (Live)" : "Live Sites"}</span>
                </button>
                <button
                  onClick={() => setStatusFilter("archived")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    statusFilter === "archived"
                      ? "bg-[#9c386d] text-white shadow-sm"
                      : "bg-white text-[#585068] hover:text-[#9c386d] border border-[#e5e1eb]"
                  }`}
                >
                  <Archive className="w-3.5 h-3.5" />
                  <span>{lang === "ru" ? "Архив макетов" : lang === "sr" ? "Arhiva dizajna" : "Design Archive"}</span>
                </button>
              </div>
            </div>
          )}

          {/* Portfolio Grid */}
          <main className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  {/* Media Preview */}
                  {item.youtubeId ? (
                    <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                      <div
                        onClick={() => setModalVideo(item.youtubeId || null)}
                        className="relative w-full h-full cursor-pointer group/media flex items-center justify-center"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            item.image ||
                            `https://i.ytimg.com/vi/${item.youtubeId}/maxresdefault.jpg`
                          }
                          alt={lang === "ru" ? `${item.title} - видео Few Hands` : `${item.title} - Few Hands Video`}
                          className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500 object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover/media:opacity-90 transition-opacity" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#9c386d]/95 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform backdrop-blur-xs border border-white/20">
                            <Play className="w-4 h-4 fill-white translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.image ? (
                    <div className="w-full bg-[#f1f0f5] border-b border-[#e5e1eb] overflow-hidden">
                      {/* Browser Bar with Status Badge */}
                      <div className="px-3.5 py-2 bg-[#f1f0f5] border-b border-[#e5e1eb] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ba5d60]/80" />
                          <span className="w-2 h-2 rounded-full bg-[#c6814b]/80" />
                          <span className="w-2 h-2 rounded-full bg-[#7ea368]/80" />
                        </div>
                        
                        <div className="text-[10px] font-mono text-[#585068] truncate max-w-[180px] bg-white px-2 py-0.5 rounded border border-[#e5e1eb]">
                          {item.url ? item.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : item.title}
                        </div>

                        {/* Status pill */}
                        {item.status === "live" ? (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                            <Archive className="w-2.5 h-2.5" />
                            {lang === "ru" ? "Архив" : lang === "sr" ? "Arhiva" : "Archive"}
                          </span>
                        )}
                      </div>

                      {/* Screenshot Container - Clickable to open Lightbox */}
                      <div
                        onClick={() => setModalItem(item)}
                        className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden cursor-pointer group/screen"
                      >
                        <Image
                          src={item.image}
                          alt={lang === "ru" ? `${item.title} - кейс студии Few Hands` : lang === "sr" ? `${item.title} - Few Hands portfolio` : `${item.title} - Few Hands Case Study`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top group-hover/screen:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/screen:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/screen:opacity-100">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2d263b] text-xs font-bold shadow-lg backdrop-blur-sm">
                            <Eye className="w-3.5 h-3.5 text-[#386161]" />
                            <span>{lang === "ru" ? "Открыть макет" : lang === "sr" ? "Pogledajte dizajn" : "View Screenshot"}</span>
                          </span>
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

                    <h2
                      onClick={() => {
                        if (item.youtubeId) {
                          setModalVideo(item.youtubeId);
                        } else if (item.image) {
                          setModalItem(item);
                        }
                      }}
                      className="text-lg font-bold text-[#2d263b] group-hover:text-[#386161] transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{item.title}</span>
                      {item.url && <ExternalLink className="w-4 h-4 text-[#8c829c] group-hover:text-[#386161]" />}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-[#585068] leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Action Links */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  {item.youtubeId ? (
                    <button
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9c386d] hover:text-[#7f2856] transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {lang === "ru"
                          ? "Смотреть ролик"
                          : lang === "sr"
                          ? "Gledajte video"
                          : "Watch Full Video"}
                      </span>
                    </button>
                  ) : item.status === "live" && item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#386161] hover:text-[#2a4949] transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{lang === "ru" ? "Перейти на сайт" : lang === "sr" ? "Posetite sajt" : "Visit Live Website"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : item.status === "archived" ? (
                    <button
                      onClick={() => setModalItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9c386d] hover:text-[#7a2552] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === "ru" ? "Посмотреть макет в архиве" : lang === "sr" ? "Pogledajte arhivirani dizajn" : "View Archived Design"}</span>
                    </button>
                  ) : null}

                  {!item.youtubeId && item.image && (
                    <button
                      onClick={() => setModalItem(item)}
                      title={lang === "ru" ? "Увеличить скриншот" : lang === "sr" ? "Povećajte snimak ekrana" : "Zoom Screenshot"}
                      className="p-1.5 rounded-lg text-[#8c829c] hover:text-[#2d263b] hover:bg-[#f1f0f5] transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </main>

          {/* Vertical 9:16 Shorts Grid directly following */}
          {verticalShorts.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {verticalShorts.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-3xl border border-[#e5e1eb] bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
                >
                  <div>
                    {/* 9:16 Media Preview */}
                    <div
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden cursor-pointer group/media"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image || `https://i.ytimg.com/vi/${item.youtubeId}/oar2.jpg`}
                        alt={lang === "ru" ? `${item.title} - Few Hands Shorts` : `${item.title} - Few Hands Shorts`}
                        className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 group-hover/media:opacity-90 transition-opacity" />

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                          9:16 Shorts
                        </span>
                      </div>

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="w-12 h-12 rounded-full bg-[#9c386d]/95 text-white flex items-center justify-center shadow-xl group-hover/media:scale-110 transition-transform backdrop-blur-xs border border-white/25">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {item.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#f1f0f5] text-[#585068]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3
                        onClick={() => setModalVideo(item.youtubeId || null)}
                        className="text-sm sm:text-base font-bold text-[#2d263b] group-hover:text-[#9c386d] transition-colors cursor-pointer line-clamp-2 leading-snug"
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-[#585068] leading-relaxed line-clamp-3">
                        {item.description[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9c386d] hover:text-[#7f2856] transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>
                        {lang === "ru"
                          ? "Смотреть Shorts"
                          : lang === "sr"
                          ? "Gledajte Shorts"
                          : "Watch Shorts"}
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Deep SEO Section 1: Performance Benchmarks & Business Results */}
          <section className="mt-24 pt-16 border-t border-[#e5e1eb]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f5ec] border border-[#7ea368]/30 text-[#7ea368] text-xs font-semibold mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{lang === "ru" ? "Измеримый результат" : lang === "sr" ? "Merljivi rezultati" : "Measurable Results"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2d263b] tracking-tight">
                {lang === "ru"
                  ? "Стандарты производительности и бизнес-метрики проектов"
                  : lang === "sr"
                  ? "Standardi performansi i poslovne metrike projekata"
                  : "Performance Benchmarks & Architecture Standards"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#585068] leading-relaxed">
                {lang === "ru"
                  ? "Мы не создаем шаблонные страницы. Каждый проект проходит строгий аудит производительности Google Lighthouse, оптимизацию мобильного First Input Delay и тонкую настройку конверсионных путей."
                  : lang === "sr"
                  ? "Ne pravimo šablonska rešenja. Svaki projekat prolazi rigoroznu reviziju performansi Google Lighthouse, optimizaciju mobilnog odziva i precizno podešavanje konverzija."
                  : "Every deployment undergoes strict Google Lighthouse auditing, sub-second Core Web Vitals optimization, and robust multi-region caching."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-[#e5e1eb] shadow-sm relative overflow-hidden">
                <AuditMetricsCard
                  title={lang === "ru" ? "Аудит Core Web Vitals" : lang === "sr" ? "Core Web Vitals revizija" : "Core Web Vitals Audit"}
                  metrics={[
                    { label: "Performance", value: "99/100", color: "text-[#7ea368]" },
                    { label: "Accessibility", value: "100/100", color: "text-[#7ea368]" },
                    { label: "Best Practices", value: "100/100", color: "text-[#7ea368]" },
                    { label: "SEO Rating", value: "100/100", color: "text-[#7ea368]" },
                  ]}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                  {lang === "ru" ? "Core Web Vitals в зеленой зоне" : lang === "sr" ? "Core Web Vitals u zelenoj zoni" : "Green-Zone Core Web Vitals"}
                </h3>
                <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                  {lang === "ru"
                    ? "Мгновенный LCP до 0.8s, нулевой сдвиг макета (CLS 0.00) и отзывчивый INP. Повышает поисковое ранжирование и снижает стоимость клика в контекстной рекламе."
                    : lang === "sr"
                    ? "Trenutni LCP ispod 0.8s, nula pomeranja prikaza (CLS 0.00) i brz INP. Povećava SEO rangiranje i smanjuje cenu po kliku u oglasima."
                    : "Instant LCP under 0.8s, zero Cumulative Layout Shift, and rapid INP for superior search rankings and lower advertising CPC."}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#e5e1eb] shadow-sm relative overflow-hidden">
                <CustomStampBadge
                  label={lang === "ru" ? "100% ВАЛИДАЦИЯ" : lang === "sr" ? "100% VALIDACIJA" : "100% VALIDATED"}
                  caption={lang === "ru" ? "Чистая верстка без мусора" : lang === "sr" ? "Čist kod bez balasta" : "Zero bloat clean markup"}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                  {lang === "ru" ? "Адаптивность и чистый код" : lang === "sr" ? "Prilagodljivost i čist kod" : "Clean Component Architecture"}
                </h3>
                <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                  {lang === "ru"
                    ? "Разработка по принципу Mobile-First. Полная доступность WCAG 2.1 AA, семантическая разметка Schema.org и поддержка темного/светлого режима."
                    : lang === "sr"
                    ? "Razvoj po principu Mobile-First. Potpuna usklađenost sa WCAG 2.1 AA pristupačnošću, Schema.org semantičko označavanje i optimizacija za sve uređaje."
                    : "Mobile-first responsive layouts, strict WCAG 2.1 AA accessibility compliance, rich Schema.org JSON-LD microdata, and edge optimization."}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#e5e1eb] shadow-sm relative overflow-hidden">
                <CraftCard
                  tag={lang === "ru" ? "БЕЗОПАСНОСТЬ ДАННЫХ" : lang === "sr" ? "BEZBEDNOST PODATAKA" : "DATA SECURITY"}
                  issueNo="GRADE A+"
                  question={lang === "ru" ? "Уязвимости CMS и баз данных?" : lang === "sr" ? "Ranjivosti CMS-a i baza podataka?" : "Vulnerable to SQL/CMS exploits?"}
                  yesLabel={lang === "ru" ? "ДА" : lang === "sr" ? "DA" : "YES"}
                  noLabel={lang === "ru" ? "НЕТ" : lang === "sr" ? "NE" : "NO"}
                  isYesChecked={false}
                  whyText={
                    lang === "ru"
                      ? "Статический код: баз данных нет на сервере, нечего взламывать."
                      : lang === "sr"
                      ? "Statički kod: bez baze podataka na serveru, nema šta da se hakuje."
                      : "Static architecture: zero exposed databases, immune to CMS exploits."
                  }
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-[#2d263b] mb-2">
                  {lang === "ru" ? "Безопасность и автономность" : lang === "sr" ? "Bezbednost i autonomija" : "Enterprise Grade Security"}
                </h3>
                <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                  {lang === "ru"
                    ? "Статический рендеринг Next.js исключает уязвимости баз данных и спам-ботов через формы. Надежная изоляция API-ключей и SSL/TLS высшего класса A+."
                    : lang === "sr"
                    ? "Next.js statički rendering eliminiše ranjivosti baza podataka i spam botove kroz forme. Pouzdana zaštita API ključeva i najviši A+ nivo enkripcije."
                    : "Static export architecture eradicates SQL injection attack surfaces, secures confidential client data, and achieves A+ TLS encryption rating."}
                </p>
              </div>
            </div>
          </section>

          {/* Deep SEO Section 2: Transparent Deliverables & FAQ */}
          <section className="mt-20 pt-16 border-t border-[#e5e1eb]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <CustomStampBadge
                  label={lang === "ru" ? "НАШ СТАНДАРТ" : lang === "sr" ? "NAŠ STANDARD" : "OUR BENCHMARK"}
                  caption={lang === "ru" ? "100% ручная калибровка" : lang === "sr" ? "100% ručno fino podešeno" : "100% handcrafted quality"}
                  className="mb-4"
                />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2d263b]">
                  {lang === "ru"
                    ? "Что входит в каждый сданный кейс студии"
                    : lang === "sr"
                    ? "Šta obuhvata svaki isporučeni projekat studija"
                    : "Standard Deliverables in Every Completed Case"}
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      ru: "Исходный код передается заказчику в приватный репозиторий GitHub/GitLab с подробной документацией по развертыванию.",
                      en: "Complete source code handed over to client's private GitHub/GitLab with automated CI/CD and deployment documentation.",
                      sr: "Kompletan izvorni kod se predaje klijentu u privatni GitHub/GitLab repozitorijum sa detaljnom dokumentacijom za puštanje u rad.",
                    },
                    {
                      ru: "Настройка аналитики (GA4, Google Tag Manager, Яндекс.Метрика, цели конверсий и пиксели рекламы).",
                      en: "Production analytics integration (Google Analytics 4, Tag Manager, custom conversion events, and ad pixels).",
                      sr: "Podešavanje analitike (Google Analytics 4, Tag Manager, prilagođeni ciljevi konverzija i reklamni pikseli).",
                    },
                    {
                      ru: "Интерактивные микроанимации интерфейса, адаптивные векторные SVG-иконки и сжатие графики в WebP/AVIF нового поколения.",
                      en: "Polished micro-interactions, responsive SVG graphics, and next-gen WebP/AVIF asset optimization.",
                      sr: "Uglađene mikroanimacije interfejsa, responzivne vektorske SVG ikonice i optimizacija slika u modernim WebP/AVIF formatima.",
                    },
                    {
                      ru: "30 дней гарантийной технической поддержки и оперативных правок после релиза в эфир.",
                      en: "30 days of complimentary post-launch warranty, monitoring, and priority technical assistance.",
                      sr: "30 dana garantne tehničke podrške, praćenja rada i operativnih izmena nakon puštanja u rad.",
                    },
                  ].map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#7ea368] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#585068] leading-relaxed">
                        {feat[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-white p-8 rounded-3xl border border-[#e5e1eb] shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#2d263b]">
                    {lang === "ru" ? "Нужен расчет вашего проекта?" : lang === "sr" ? "Potrebna vam je procena vašeg projekta?" : "Need an Exact Estimate for Your Project?"}
                  </h3>
                  <p className="mt-3 text-sm text-[#585068] leading-relaxed">
                    {lang === "ru"
                      ? "Воспользуйтесь нашим интерактивным калькулятором с прозрачным расчетом стоимости миграции, разработки с нуля или AI-видеопродакшна."
                      : lang === "sr"
                      ? "Iskoristite naš transparentni interaktivni kalkulator za proračun cene migracije, namenskog razvoja ili AI video produkcije."
                      : "Use our transparent 3-in-1 interactive calculator to calculate precise timelines and budget for CMS migration, custom development, or AI video production."}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-col items-start">
                  <DoodlePointer
                    text={lang === "ru" ? "точный расчет сметы за 60 сек ↘" : lang === "sr" ? "tačan proračun budžeta za 60s ↘" : "precise calculation in 60s ↘"}
                    direction="curved-down-right"
                    className="mb-2"
                  />
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link
                      href="/estimate"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#2d263b] hover:bg-[#1a1622] text-[#faf9fb] font-semibold text-sm transition-all shadow-md shadow-[#2d263b]/15"
                    >
                      <span>{lang === "ru" ? "Открыть калькулятор сметы" : lang === "sr" ? "Otvorite kalkulator budžeta" : "Open Project Calculator"}</span>
                      <ArrowRight className="w-4 h-4 text-[#e5e1eb]" />
                    </Link>
                    <Link
                      href="/migrate"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#f1f0f5] hover:bg-[#e5e1eb] text-[#2d263b] font-semibold text-sm transition-all"
                    >
                      <span>{lang === "ru" ? "Узнать о миграции" : lang === "sr" ? "Saznajte o migraciji" : "Explore CMS Migration"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screenshot Lightbox Modal */}
          {modalItem && (
            <div
              onClick={() => setModalItem(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e5e1eb] my-auto"
              >
                {/* Header */}
                <div className="px-6 py-4 bg-[#fbfafc] border-b border-[#e5e1eb] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#2d263b]">
                      {modalItem.title}
                    </h3>
                    {modalItem.status === "live" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        <Archive className="w-3 h-3" />
                        {lang === "ru" ? "Архивный макет" : lang === "sr" ? "Arhivski dizajn" : "Design Archive"}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setModalItem(null)}
                    className="w-9 h-9 rounded-full bg-[#f1f0f5] hover:bg-[#e5e1eb] text-[#2d263b] flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Screenshot Preview */}
                <div className="max-h-[65vh] overflow-y-auto bg-slate-100 p-2 sm:p-4 flex items-center justify-center">
                  {modalItem.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={modalItem.image}
                      alt={modalItem.title}
                      className="max-w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-md border border-[#e5e1eb]"
                    />
                  )}
                </div>

                {/* Footer Info & Actions */}
                <div className="p-6 bg-white border-t border-[#e5e1eb]">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {modalItem.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f1f0f5] text-[#585068]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#585068] leading-relaxed mb-4">
                    {modalItem.description[lang]}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#e5e1eb]">
                    {modalItem.status === "live" && modalItem.url ? (
                      <div className="flex items-center gap-3">
                        <a
                          href={modalItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2d263b] text-white hover:bg-[#1a1622] text-xs font-bold transition-all shadow-md"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{lang === "ru" ? "Перейти на живой сайт" : lang === "sr" ? "Posetite sajt uživo" : "Open Live Website"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-xs font-mono text-[#8c829c]">
                          {modalItem.url.replace(/^https?:\/\//, "")}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-[#8c829c]">
                        <Archive className="w-4 h-4 text-[#9c386d]" />
                        <span>
                          {lang === "ru"
                            ? "Аутентичный макет из портфолио Few Hands. Внешняя ссылка отключена (сайт был обновлен заказчиком или выведен из эксплуатации)."
                            : lang === "sr"
                            ? "Autentičan rad iz Few Hands portfolija. Spoljni link je isključen (sajt je izmenio klijent ili je povučen iz upotrebe)."
                            : "Authentic showcase from Few Hands portfolio. External link is disabled (site was updated by client or retired)."}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => setModalItem(null)}
                      className="px-4 py-2 rounded-xl bg-[#f1f0f5] hover:bg-[#e5e1eb] text-[#2d263b] text-xs font-semibold transition-colors self-end"
                    >
                      {lang === "ru" ? "Закрыть окно" : lang === "sr" ? "Zatvori" : "Close"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Lightbox Modal */}
          {modalVideo && (() => {
            const isModalShort = portfolioItems.find((p) => p.youtubeId === modalVideo)?.isShort;
            return (
              <div
                onClick={() => setModalVideo(null)}
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`relative w-full ${
                    isModalShort ? "max-w-xs sm:max-w-sm aspect-[9/16]" : "max-w-4xl aspect-video"
                  } bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800`}
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
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </>
  );
};
