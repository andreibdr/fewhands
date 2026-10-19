"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { portfolioItems, PortfolioItem } from "@/lib/data";
import { ExternalLink, Play, Eye, X, Archive, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export const PortfolioSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.portfolio.title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 rounded-2xl shrink-0 self-start md:self-end">
            {t.portfolio.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.slice(0, 9).map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Media Preview */}
                <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  {item.image ? (
                    <div
                      onClick={() => setModalItem(item)}
                      className="relative w-full h-full cursor-pointer group/media"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top group-hover/media:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/media:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/media:opacity-100">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-sky-500" />
                          <span>{lang === "ru" ? "Открыть макет" : "View Design"}</span>
                        </span>
                      </div>
                      {/* Status badge in top right */}
                      <div className="absolute top-2.5 right-2.5 z-10">
                        {item.status === "live" ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-amber-700 dark:text-amber-400 shadow-sm border border-amber-200 dark:border-amber-800 backdrop-blur-sm">
                            <Archive className="w-2.5 h-2.5" />
                            {lang === "ru" ? "Архив" : "Archive"}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : item.youtubeId ? (
                    <div
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="relative w-full h-full cursor-pointer group/media flex items-center justify-center bg-slate-950 overflow-hidden"
                    >
                      {item.isShort ? (
                        <>
                          {/* Ambient blurred backdrop */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image || `https://i.ytimg.com/vi/${item.youtubeId}/oar2.jpg`}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover blur-xl scale-125 opacity-35 brightness-75"
                          />
                          {/* Centered vertical 9:16 smartphone frame */}
                          <div className="relative h-full aspect-[9/16] shadow-2xl rounded-sm overflow-hidden z-10 border-x border-white/10 group-hover/media:scale-105 transition-transform duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.image || `https://i.ytimg.com/vi/${item.youtubeId}/oar2.jpg`}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                              <span className="px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono font-bold text-white border border-white/20">
                                9:16
                              </span>
                            </div>
                            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center pointer-events-none">
                              <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform">
                                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Horizontal 16:9 Video */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image || `https://i.ytimg.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/media:bg-black/10 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-white translate-x-0.5" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    onClick={() => item.image && setModalItem(item)}
                    className={`text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center justify-between ${
                      item.image ? "cursor-pointer" : ""
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.url && <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500" />}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="p-6 pt-0 flex items-center justify-between">
                {item.status === "live" && item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{lang === "ru" ? "Перейти на сайт" : "Visit Live Website"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : item.status === "archived" ? (
                  <button
                    onClick={() => setModalItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === "ru" ? "Посмотреть макет" : "View Design"}</span>
                  </button>
                ) : item.youtubeId ? (
                  <button
                    onClick={() => setModalVideo(item.youtubeId || null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{lang === "ru" ? "Смотреть видео" : "Watch Video"}</span>
                  </button>
                ) : null}

                {item.image && (
                  <button
                    onClick={() => setModalItem(item)}
                    title={lang === "ru" ? "Увеличить" : "Zoom"}
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Portfolio */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all shadow-md hover:shadow-xl"
          >
            <span>
              {lang === "ru"
                ? `Смотреть все ${portfolioItems.length} проектов в полном каталоге`
                : `Explore All ${portfolioItems.length} Projects in Full Portfolio`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Screenshot Lightbox Modal */}
        {modalItem && (
          <div
            onClick={() => setModalItem(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 my-auto"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {modalItem.title}
                  </h3>
                  {modalItem.status === "live" ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      <Archive className="w-3 h-3" />
                      {lang === "ru" ? "Архивный макет" : "Design Archive"}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Screenshot Preview */}
              <div className="max-h-[65vh] overflow-y-auto bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 flex items-center justify-center">
                {modalItem.image && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={modalItem.image}
                    alt={modalItem.title}
                    className="max-w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-md border border-slate-200 dark:border-slate-800"
                  />
                )}
              </div>

              {/* Footer Info & Actions */}
              <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {modalItem.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {modalItem.description[lang]}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {modalItem.status === "live" && modalItem.url ? (
                    <div className="flex items-center gap-3">
                      <a
                        href={modalItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{lang === "ru" ? "Перейти на живой сайт" : "Open Live Website"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-xs font-mono text-slate-400">
                        {modalItem.url.replace(/^https?:\/\//, "")}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Archive className="w-4 h-4 text-amber-500" />
                      <span>
                        {lang === "ru"
                          ? "Аутентичный макет из архива Few Hands. Ссылка отключена (сайт обновлен клиентом или выведен из эксплуатации)."
                          : "Authentic showcase from Few Hands archive. External link is disabled (site was updated or retired)."}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setModalItem(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors self-end"
                  >
                    {lang === "ru" ? "Закрыть окно" : "Close"}
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
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
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
    </section>
  );
};
