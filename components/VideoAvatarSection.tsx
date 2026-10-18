"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Play, Sparkles, Video, ArrowRight } from "lucide-react";

export const VideoAvatarSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const shorts = [
    { id: "nMmu9whtzZs", title: "San Francisco Buyer Goes $150K Over Asking and Still Loses", thumbnail: "/portfolio/short-sf-buyer.webp" },
    { id: "XNY-zo4ZoUk", title: "A whole generation of abandoned avatars 👾", thumbnail: "/portfolio/short-abandoned-avatars.webp" },
    { id: "ZIfLdTPtJzg", title: "Script 3 - Thank you to partners", thumbnail: "/portfolio/short-partner-pitch.webp" },
    { id: "e7CKuwVvGrs", title: "We aren't just funding deep tech - we are raising angel investors", thumbnail: "/portfolio/short-deeptech-angels.webp" },
  ];

  const youtubeVideos = [
    { id: "_YHj2zE5i-0", title: "Eureka Valley San Francisco | Neighborhood Guide", thumbnail: "/portfolio/yt-sf-eureka.webp" },
    { id: "lhWRookt06g", title: "Parque Towers Sunny Isles | Investment Breakdown", thumbnail: "/portfolio/yt-parque-towers.webp" },
    { id: "_DdbQeit5po", title: "San Francisco Buyer's Guide | Market Strategy", thumbnail: "/portfolio/yt-sf-buyers-guide.webp" },
  ];

  return (
    <section id="video" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.video.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.video.title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.video.subtitle}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md shadow-sky-500/20 shrink-0 self-start md:self-end"
          >
            <span>Заказать видео / AI аватар</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* AI Video Avatars Highlight */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono uppercase mb-2">
              {t.video.aiBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {t.video.aiTitle}
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.video.aiDesc}
            </p>
          </div>

          {/* 9:16 Shorts Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {shorts.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-black group border border-slate-800"
              >
                {activeIframe === item.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setActiveIframe(item.id)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail || `https://i.ytimg.com/vi/${item.id}/oar2.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                      <span className="text-xs font-medium text-white line-clamp-1">{item.title}</span>
                    </div>
                    {/* Play button positioned in lower third to avoid covering face */}
                    <div className="absolute bottom-20 inset-x-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
            {t.video.steps.map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs font-mono font-bold text-sky-500">{st.num}</div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mt-1.5">{st.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Production Samples (16:9) */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-red-500/10 text-red-500">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.video.youtubeTitle}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtubeVideos.map((yt) => (
              <div
                key={yt.id}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-black group border border-slate-200 dark:border-slate-800"
              >
                {activeIframe === yt.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${yt.id}?autoplay=1`}
                    title={yt.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setActiveIframe(yt.id)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={yt.thumbnail || `https://i.ytimg.com/vi/${yt.id}/maxresdefault.jpg`}
                      alt={yt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
