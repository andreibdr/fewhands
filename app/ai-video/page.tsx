"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Play, Video, ArrowRight, Check } from "lucide-react";

export default function AiVideoPage() {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const shorts = [
    { id: "M8g2gJlwH7M", title: "AI Avatar Presenter — Презентация продукта" },
    { id: "9_jdjXBknOw", title: "AI Avatar Presenter — Рекламный ролик" },
    { id: "-UE0CTWQwD4", title: "AI Avatar Presenter — Лид-магнит" },
  ];

  const youtubeVideos = [
    { id: "KjhW0NmL2v0", title: "YouTube Production — Полный монтаж выпуска" },
    { id: "wm9bt16QY_Q", title: "YouTube Production — Экспертное интервью" },
    { id: "_9Z-gfKJRBU", title: "YouTube Production — Коммерческий шоукейс" },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-sky-400">AI & Видео</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Production & Video Editing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Цифровые AI-аватары и профессиональный монтаж видео
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Создаём говорящих фотореалистичных аватаров для сайтов, рекламы и соцсетей. Любой язык, безупречная дикция и идеальная синхронизация губ — без затрат на студию и актеров. А также комплексный монтаж YouTube-выпусков под ключ.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>Заказать видео-аватар</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://t.me/Strashilamudry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 hover:text-white font-semibold text-sm transition-all"
            >
              <span>Обсудить задачу в Telegram</span>
            </a>
          </div>
        </div>

        {/* AI Avatars Section */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
              Формат 9:16 (Shorts, Reels, Сайты)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Примеры видео с цифровыми аватарами
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Нажмите на видео, чтобы запустить интерактивный просмотр.
            </p>
          </div>

          {/* Grid of Shorts */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                      src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-medium text-white line-clamp-2">{item.title}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 border-t border-slate-800 pt-8">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-sky-400">01. Сценарий</span>
              <h4 className="font-bold text-white mt-1">Хук и продающий текст</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Составляем лаконичный сценарий, цепляющий зрителя в первые 3 секунды.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-violet-400">02. Синтез</span>
              <h4 className="font-bold text-white mt-1">Озвучка и мимика</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Генерируем реалистичный аватар с нейронным голосом на любом языке мира.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-emerald-400">03. Монтаж</span>
              <h4 className="font-bold text-white mt-1">Субтитры и графика</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Добавляем динамичные титры, саунд-дизайн, плашки и встраиваем в сайт.
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Production Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-red-500/10 text-red-500">
              <Video className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Монтаж длинных YouTube-выпусков (16:9)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtubeVideos.map((yt) => (
              <div
                key={yt.id}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-black group border border-slate-800"
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
                      src={`https://i.ytimg.com/vi/${yt.id}/hqdefault.jpg`}
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
    </div>
  );
}
