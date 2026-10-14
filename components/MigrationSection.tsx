"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, AlertTriangle, CheckCircle2, Handshake, ExternalLink } from "lucide-react";

export const MigrationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="migration" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <span>{t.migration.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.migration.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.migration.subtitle}
          </p>
        </div>

        {/* GoMVP Tech Partnership Card */}
        <div className="mt-8 p-6 sm:p-7 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 rounded-2xl bg-sky-500 text-white shadow-md shadow-sky-500/20 shrink-0">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {t.migration.partnerBadge}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-300 font-mono font-semibold">
                  gomvp.dev
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {t.migration.partnerNote}
              </p>
            </div>
          </div>
          <a
            href="https://gomvp.dev/en/migrate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sky-500/40 bg-white/80 dark:bg-slate-900/80 text-sky-600 dark:text-sky-400 font-semibold text-xs sm:text-sm hover:bg-sky-500 hover:text-white transition-all shrink-0 self-start md:self-center"
          >
            <span>Platform Hub (gomvp.dev)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Platforms Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.migration.platforms.map((p) => (
            <div
              key={p.id}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-mono font-bold text-white px-2.5 py-1 rounded-lg ${p.badgeColor}`}>
                    {p.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Next.js Edge</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {p.title}
                </h3>

                {/* Problem Statement */}
                <div className="mt-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs sm:text-sm text-rose-800 dark:text-rose-300 leading-relaxed flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{p.problem}</span>
                </div>

                {/* Solution Statement */}
                <div className="mt-3.5 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{p.solution}</span>
                </div>
              </div>

              {/* Action Link to Calculator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>Рассчитать миграцию проекта</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEO preservation assurance note */}
        <div className="mt-10 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          🔒 <strong>100% гарантия сохранения SEO:</strong> При миграции мы аккуратно переносим мета-теги, структуру адресов страниц и настраиваем 301-редиректы, чтобы ваш поисковый трафик не просел ни на один процент.
        </div>

      </div>
    </section>
  );
};
