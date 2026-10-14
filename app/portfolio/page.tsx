"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { portfolioItems } from "@/lib/data";
import { ExternalLink, Play, Layers } from "lucide-react";

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{lang === "ru" ? "Портфолио" : "Portfolio"}</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Реализованные кейсы" : "Client Work"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === "ru" ? "Портфолио проектов Few Hands" : "Few Hands Selected Works"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Реальные действующие сайты, интернет-магазины, порталы и видеоматериалы наших клиентов в США, Европе и СНГ."
                : "Live production websites, e-commerce storefronts, and video productions engineered for international and domestic clients."}
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center bg-slate-100 border border-slate-200 p-1.5 rounded-2xl shrink-0">
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
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Media Preview */}
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : item.youtubeId ? (
                    <div
                      onClick={() => setModalVideo(item.youtubeId || null)}
                      className="relative w-full h-full cursor-pointer group/media"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/media:bg-black/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover/media:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        </div>
                      </div>
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
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    {item.url && <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    <span>{lang === "ru" ? "Перейти на сайт" : "Visit Website"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : item.youtubeId ? (
                  <button
                    onClick={() => setModalVideo(item.youtubeId || null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    <span>{lang === "ru" ? "Смотреть ролик" : "Watch Video"}</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

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
  );
}
