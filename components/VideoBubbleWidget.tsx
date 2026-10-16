"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Play,
  Volume2,
  VolumeX,
  X,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface VideoBubbleWidgetProps {
  videoId?: string; // YouTube Shorts or video ID
  videoSrc?: string; // Optional direct MP4/WebM URL
  avatarImage?: string; // Portrait image for circle bubble (defaults to /andrei-ryzhenko.webp)
  telegramUrl?: string; // Direct Telegram link (defaults to https://t.me/Strashilamudry)
  titleRu?: string;
  titleEn?: string;
  titleSr?: string;
  ctaTextRu?: string;
  ctaTextEn?: string;
  ctaTextSr?: string;
  ctaHref?: string;
  startOpened?: boolean;
}

export const VideoBubbleWidget: React.FC<VideoBubbleWidgetProps> = ({
  videoId = "M8g2gJlwH7M",
  videoSrc,
  avatarImage = "/andrei-ryzhenko.webp",
  telegramUrl = "https://t.me/Strashilamudry",
  titleRu = "Привет! Я цифровой двойник FewHands",
  titleEn = "Hi! I am the FewHands digital twin",
  titleSr = "Zdravo! Ja sam FewHands digitalni dvojnik",
  ctaTextRu = "Рассчитать смету двойника",
  ctaTextEn = "Estimate your digital twin",
  ctaTextSr = "Izračunajte cenu dvojnika",
  ctaHref = "/estimate?service=video",
  startOpened = false,
}) => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(startOpened);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [bubbleHover, setBubbleHover] = useState(false);

  // Auto-delay appearance so it does NOT affect Initial LCP / Core Web Vitals
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || isDismissed) {
    return null;
  }

  const title = lang === "ru" ? titleRu : lang === "sr" ? titleSr : titleEn;
  const ctaText = lang === "ru" ? ctaTextRu : lang === "sr" ? ctaTextSr : ctaTextEn;

  return (
    <aside
      aria-label="Interactive digital twin presenter"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end select-none pointer-events-auto"
    >
      {/* EXPANDED MODAL / STORIES-STYLE CARD */}
      {isOpen ? (
        <div className="relative w-[310px] sm:w-[340px] rounded-3xl overflow-hidden bg-[#2d263b] text-white shadow-2xl border-2 border-[#9c386d]/40 animate-in fade-in zoom-in-95 duration-200">
          {/* Header Bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-3.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="leading-tight">
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>FewHands Twin</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#9c386d] font-mono">AI</span>
                </div>
                <div className="text-[10px] text-slate-300">
                  {lang === "ru" ? "Цифровой двойник" : lang === "sr" ? "Digitalni dvojnik" : "Digital Twin"}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Close video player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Container (9:16 Aspect) */}
          <div className="relative aspect-[9/14] w-full bg-black flex items-center justify-center overflow-hidden">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                title="AI Digital Twin Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>

          {/* Footer Card Controls & CTA */}
          <div className="p-3.5 bg-[#2d263b] border-t border-white/10 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-[11px] text-[#9c386d] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {lang === "ru"
                    ? "Верифицированное согласие"
                    : lang === "sr"
                    ? "Verifikovana saglasnost"
                    : "Verified consent avatar"}
                </span>
              </span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isMuted ? "Включить звук" : "Выключить звук"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-xs text-slate-200 line-clamp-2 leading-snug">
              {title}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href={ctaHref}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#9c386d] to-[#6d244c] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all text-center"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-all text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#229ED9]" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* COLLAPSED FLOATING BUBBLE */
        <div className="flex items-center gap-2">
          {/* Tooltip speech bubble */}
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            onMouseEnter={() => setBubbleHover(true)}
            onMouseLeave={() => setBubbleHover(false)}
            className="cursor-pointer hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white text-[#2d263b] shadow-xl border border-[#2d263b]/15 text-xs font-semibold hover:border-[#9c386d] transition-all hover:scale-105 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9c386d] animate-pulse" />
            <span className="max-w-[200px] truncate">
              {lang === "ru"
                ? "Посмотреть живого двойника 🎙"
                : lang === "sr"
                ? "Pogledajte AI dvojnika 🎙"
                : "Watch live digital twin 🎙"}
            </span>
          </div>

          {/* Video Bubble Circle */}
          <div className="relative group">
            {/* Dismiss button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="absolute -top-1 -left-1 z-20 w-5 h-5 rounded-full bg-slate-800/80 hover:bg-slate-900 text-white text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              title="Закрыть виджет"
              aria-label="Dismiss widget"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Glowing animated halo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#9c386d] via-[#386161] to-[#9c386d] opacity-75 blur-[3px] group-hover:opacity-100 animate-spin-slow transition-opacity" />

            {/* Main Interactive Circle Button */}
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              aria-label="Open interactive video presenter"
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-2xl bg-slate-900 cursor-pointer transform group-hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
            >
              {/* Perfectly Centered Portrait - No black sidebars */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarImage}
                alt="Digital Twin Video Presenter"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />

              {/* Play Badge Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9c386d]/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Online Indicator */}
              <span className="absolute bottom-1 right-2 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
              </span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
