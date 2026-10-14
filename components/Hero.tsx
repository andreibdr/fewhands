"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background gradients and subtle mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-50/80 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {t.hero.titleStart}
              <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Description */}
            <p className="mt-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base transition-all"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {t.hero.metric1Val}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {t.hero.metric1Label}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {t.hero.metric2Val}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {t.hero.metric2Label}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-sky-500">
                  {t.hero.metric3Val}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {t.hero.metric3Label}
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Feature Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800 overflow-hidden">
              {/* Glow orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Production Stack
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Next.js 14 · Edge</span>
                </div>

                {/* Card 1: Migration */}
                <a
                  href="#migration"
                  className="block p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-sky-400 transition-colors">
                          CMS & Builder Migration
                        </div>
                        <div className="text-xs text-slate-400">
                          WordPress, Tilda, Webflow → Clean Next.js
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                </a>

                {/* Card 2: AI Video */}
                <a
                  href="#video"
                  className="block p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-violet-400 transition-colors">
                          AI Video & Avatars
                        </div>
                        <div className="text-xs text-slate-400">
                          Turnkey digital presenters & YouTube editing
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                </a>

                {/* Card 3: Performance & Security */}
                <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Zero Maintenance Stress</div>
                      <div className="text-xs text-slate-400">No plugin crashes, automatic global CDN</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    100%
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Client Logos Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center font-semibold mb-6">
            Доверие клиентов и география проектов (США, Европа, СНГ)
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Stazhkova Broker", url: "https://stazhkova.com" },
              { name: "IWD Solutions US", url: "https://iwdsolutions.com" },
              { name: "MIPT Global Alumni", url: "https://miptglobal.com" },
              { name: "AMT-G Robotics", url: "https://amt-g.net" },
              { name: "Big Data Realty", url: "https://bigdatarealty.com" },
              { name: "Vivasan USA", url: "https://vivasan.us" },
            ].map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 text-center font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:border-sky-500 hover:text-sky-500 dark:hover:text-sky-400 transition-all shadow-sm"
              >
                {client.name} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
