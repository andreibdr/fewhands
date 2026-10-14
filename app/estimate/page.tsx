"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, DollarSign, Clock, Send, ShieldCheck } from "lucide-react";

export default function EstimatePage() {
  const [projectType, setProjectType] = useState<string>("migration");
  const [scope, setScope] = useState<string>("medium");
  const [urgency, setUrgency] = useState<string>("standard");

  const estimates: Record<string, { price: string; time: string }> = {
    "migration-small": { price: "от $400", time: "3–6 дней" },
    "migration-medium": { price: "от $750", time: "7–12 дней" },
    "migration-large": { price: "от $1,400", time: "2–3 недели" },

    "dev-small": { price: "от $500", time: "4–7 дней" },
    "dev-medium": { price: "от $950", time: "1–2 недели" },
    "dev-large": { price: "от $1,800", time: "3–4 недели" },

    "maintenance-small": { price: "$190 / мес", time: "старт за 24 ч" },
    "maintenance-medium": { price: "$450 / мес", time: "старт за 24 ч" },
    "maintenance-large": { price: "$950 / мес", time: "старт за 24 ч" },

    "avatar-small": { price: "от $250", time: "2–3 дня" },
    "avatar-medium": { price: "от $550", time: "4–6 дней" },
    "avatar-large": { price: "от $900", time: "1–2 недели" },
  };

  const key = `${projectType}-${scope}`;
  const currentEstimate = estimates[key] || estimates["migration-medium"];

  const tgMessage = encodeURIComponent(
    `Здравствуйте! Рассчитал проект на Few Hands:\n- Задача: ${projectType}\n- Объем: ${scope}\n- Сроки: ${urgency}\nОриентир: ${currentEstimate.price}, ${currentEstimate.time}. Хочу обсудить детали!`
  );

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-sky-400">Калькулятор проекта</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Интерактивный расчёт</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Оцените бюджет и сроки проекта
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Выберите параметры вашей задачи, чтобы мгновенно получить ориентировочную смету и обсудить её с нами.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl space-y-8">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              1. Направление задачи
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "migration", label: "Миграция CMS" },
                { id: "dev", label: "Сайт с нуля" },
                { id: "maintenance", label: "Техподдержка" },
                { id: "avatar", label: "AI Видео-аватар" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    projectType === item.id
                      ? "border-sky-500 bg-sky-950/40 text-sky-300 shadow-sm"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              2. Объем и сложность
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { id: "small", label: "Базовый (до 3 экранов / 1 ролик)" },
                { id: "medium", label: "Стандарт (полный сайт / пакет)" },
                { id: "large", label: "Сложный (многостраничник / каталог)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScope(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    scope === item.id
                      ? "border-sky-500 bg-sky-950/40 text-sky-300 shadow-sm"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timing */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              3. Срочность
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { id: "urgent", label: "Срочно (приоритетный спринт)" },
                { id: "standard", label: "Стандартные сроки" },
                { id: "relaxed", label: "Планомерный запуск" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUrgency(item.id)}
                  className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    urgency === item.id
                      ? "border-sky-500 bg-sky-950/40 text-sky-300 shadow-sm"
                      : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Bar */}
          <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-950/80 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Ориентировочная смета:
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {currentEstimate.price}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-400" />
                  <span className="text-base sm:text-lg font-bold text-slate-300">
                    {currentEstimate.time}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={`https://t.me/Strashilamudry?text=${tgMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] shrink-0"
            >
              <span>Зафиксировать смету в Telegram</span>
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Фиксируем техническое задание и бюджет в договоре до начала работ.</span>
        </div>

      </div>
    </div>
  );
}
