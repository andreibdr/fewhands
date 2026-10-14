"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, DollarSign, Clock, Send, ShieldCheck, Check, Mail, MessageSquare } from "lucide-react";

export default function EstimatePage() {
  const [projectType, setProjectType] = useState<string>("migration");
  const [scope, setScope] = useState<string>("medium");
  const [urgency, setUrgency] = useState<string>("standard");

  // Inline form state
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const estimates: Record<string, { price: string; time: string; label: string }> = {
    "migration-small": { price: "от $400", time: "3–6 дней", label: "Миграция базового сайта" },
    "migration-medium": { price: "от $750", time: "7–12 дней", label: "Миграция стандартного сайта/каталога" },
    "migration-large": { price: "от $1,400", time: "2–3 недели", label: "Миграция крупного магазина/портала" },

    "dev-small": { price: "от $500", time: "4–7 дней", label: "Создание мини-лендинга" },
    "dev-medium": { price: "от $950", time: "1–2 недели", label: "Создание полного продающего лендинга" },
    "dev-large": { price: "от $1,800", time: "3–4 недели", label: "Создание каталога / платформы" },

    "maintenance-small": { price: "$190 / мес", time: "старт за 24 ч", label: "Техподдержка: тариф Старт" },
    "maintenance-medium": { price: "$450 / мес", time: "старт за 24 ч", label: "Техподдержка: тариф Бизнес Retainer" },
    "maintenance-large": { price: "$950 / мес", time: "старт за 24 ч", label: "Техподдержка: тариф Pro & Media" },

    "avatar-small": { price: "от $250", time: "2–3 дня", label: "1 AI Видео-аватар под ключ" },
    "avatar-medium": { price: "от $550", time: "4–6 дней", label: "Пакет 3 AI Видео-аватаров" },
    "avatar-large": { price: "от $900", time: "1–2 недели", label: "Пакет 6 AI аватаров + озвучка на 3 языках" },
  };

  const key = `${projectType}-${scope}`;
  const currentEstimate = estimates[key] || estimates["migration-medium"];

  const handleSendEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `Расчет с калькулятора Few Hands:\n- Направление: ${projectType}\n- Объем: ${scope}\n- Срочность: ${urgency}\n- Оценка: ${currentEstimate.price}, ${currentEstimate.time} (${currentEstimate.label})`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:web@fewhands.com?subject=Project Estimate Request&body=${encodeURIComponent(
          `Имя: ${name}\nКонтакты: ${contact}\n\n${message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:web@fewhands.com?subject=Project Estimate Request&body=${encodeURIComponent(
        `Имя: ${name}\nКонтакты: ${contact}\n\n${message}`
      )}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Интерактивная оценка</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Калькулятор стоимости и сроков
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Выберите параметры проекта для ориентировочного расчёта бюджета.
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
          <div className="pt-6 border-t border-slate-800 bg-slate-950/80 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Предварительная оценка:
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

              {/* Direct WhatsApp alternate */}
              <a
                href={`https://wa.me/+79611809004?text=${encodeURIComponent(
                  `Здравствуйте! Рассчитал проект на сайте Few Hands: ${projectType}, ${scope}, ${urgency}. Оценка: ${currentEstimate.price}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Обсудить в WhatsApp</span>
              </a>
            </div>

            {/* Direct Form Submission without Telegram */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Заявка на расчет успешно отправлена! Мы свяжемся с вами по указанным контактам в течение 1–2 часов.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSendEstimate} className="grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Email или телефон для связи"
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Отправка...</span>
                    ) : (
                      <>
                        <span>Получить смету</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Техническое задание, сроки и бюджет фиксируются до старта работ.</span>
        </div>

      </div>
    </div>
  );
}
