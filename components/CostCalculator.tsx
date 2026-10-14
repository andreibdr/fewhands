"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Calculator, Clock, DollarSign, Send } from "lucide-react";

export const CostCalculator: React.FC = () => {
  const { lang, t } = useLanguage();

  const [projectType, setProjectType] = useState<string>("migration");
  const [scope, setScope] = useState<string>("medium");
  const [urgency, setUrgency] = useState<string>("standard");

  const estimates: Record<string, { priceRu: string; priceEn: string; timeRu: string; timeEn: string }> = {
    "migration-small": { priceRu: "от $400", priceEn: "from $400", timeRu: "3–6 дней", timeEn: "3–6 days" },
    "migration-medium": { priceRu: "от $750", priceEn: "from $750", timeRu: "7–12 дней", timeEn: "7–12 days" },
    "migration-large": { priceRu: "от $1,400", priceEn: "from $1,400", timeRu: "2–3 недели", timeEn: "2–3 weeks" },

    "dev-small": { priceRu: "от $500", priceEn: "from $500", timeRu: "4–7 дней", timeEn: "4–7 days" },
    "dev-medium": { priceRu: "от $950", priceEn: "from $950", timeRu: "1–2 недели", timeEn: "1–2 weeks" },
    "dev-large": { priceRu: "от $1,800", priceEn: "from $1,800", timeRu: "3–4 недели", timeEn: "3–4 weeks" },

    "avatar-small": { priceRu: "от $250", priceEn: "from $250", timeRu: "2–3 дня", timeEn: "2–3 days" },
    "avatar-medium": { priceRu: "от $550", priceEn: "from $550", timeRu: "4–6 дней", timeEn: "4–6 days" },
    "avatar-large": { priceRu: "от $900", priceEn: "from $900", timeRu: "1–2 недели", timeEn: "1–2 weeks" },

    "video-small": { priceRu: "от $200", priceEn: "from $200", timeRu: "2–4 дня", timeEn: "2–4 days" },
    "video-medium": { priceRu: "от $450", priceEn: "from $450", timeRu: "5–8 дней", timeEn: "5–8 days" },
    "video-large": { priceRu: "от $850", priceEn: "from $850", timeRu: "1–2 недели", timeEn: "1–2 weeks" },
  };

  const key = `${projectType}-${scope}`;
  const currentEstimate = estimates[key] || estimates["migration-medium"];

  const tgMessage = encodeURIComponent(
    `Привет! Рассчитал проект на сайте Few Hands:\n- Тип: ${projectType}\n- Объем: ${scope}\n- Срочность: ${urgency}\nОриентир: ${currentEstimate.priceRu}, ${currentEstimate.timeRu}. Хочу обсудить детали!`
  );

  return (
    <section id="calculator" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-8">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
              1. {t.calculator.typeLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "migration", labelRu: "Миграция с CMS", labelEn: "CMS Migration" },
                { id: "dev", labelRu: "Сайт с нуля", labelEn: "New Website" },
                { id: "avatar", labelRu: "AI Видео-аватар", labelEn: "AI Video Avatar" },
                { id: "video", labelRu: "YouTube монтаж", labelEn: "YouTube Editing" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    projectType === item.id
                      ? "border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
              2. {t.calculator.scopeLabel}
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { id: "small", labelRu: "Базовый (до 3 секций / 1 ролик)", labelEn: "Basic (up to 3 sections / 1 video)" },
                { id: "medium", labelRu: "Стандарт (полный лендинг / пакет)", labelEn: "Standard (full landing / pack)" },
                { id: "large", labelRu: "Сложный (многостраничник / каталог)", labelEn: "Complex (multi-page / catalog)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScope(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    scope === item.id
                      ? "border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timing */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3">
              3. {t.calculator.timingLabel}
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { id: "urgent", labelRu: "Срочно (в приоритете)", labelEn: "Urgent (rush priority)" },
                { id: "standard", labelRu: "Стандартные сроки", labelEn: "Standard timeline" },
                { id: "relaxed", labelRu: "Планомерный запуск", labelEn: "Flexible schedule" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUrgency(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    urgency === item.id
                      ? "border-sky-500 bg-sky-50/50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Calculation Summary Bar */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/70 dark:bg-slate-950/50 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">
                {t.calculator.estimateLabel}
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-500" />
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {lang === "ru" ? currentEstimate.priceRu : currentEstimate.priceEn}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-500" />
                  <span className="text-base sm:text-lg font-bold text-slate-700 dark:text-slate-300">
                    {lang === "ru" ? currentEstimate.timeRu : currentEstimate.timeEn}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] shrink-0"
            >
              <span>{t.calculator.cta}</span>
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
