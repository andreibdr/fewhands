"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Calculator, DollarSign, Clock, Send, ShieldCheck, Check, Mail } from "lucide-react";

export default function EstimatePage() {
  const { lang } = useLanguage();
  const [projectType, setProjectType] = useState<string>("migration");
  const [scope, setScope] = useState<string>("medium");
  const [urgency, setUrgency] = useState<string>("standard");

  // Inline form state
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const estimates: Record<
    string,
    { priceRu: string; priceEn: string; timeRu: string; timeEn: string; labelRu: string; labelEn: string }
  > = {
    "migration-small": {
      priceRu: "от $400",
      priceEn: "from $400",
      timeRu: "3–6 дней",
      timeEn: "3–6 days",
      labelRu: "Миграция базового сайта",
      labelEn: "Basic site migration",
    },
    "migration-medium": {
      priceRu: "от $750",
      priceEn: "from $750",
      timeRu: "7–12 дней",
      timeEn: "7–12 days",
      labelRu: "Миграция стандартного сайта/каталога",
      labelEn: "Standard site/catalog migration",
    },
    "migration-large": {
      priceRu: "от $1,400",
      priceEn: "from $1,400",
      timeRu: "2–3 недели",
      timeEn: "2–3 weeks",
      labelRu: "Миграция крупного магазина/портала",
      labelEn: "Large portal/e-commerce migration",
    },

    "dev-small": {
      priceRu: "от $500",
      priceEn: "from $500",
      timeRu: "4–7 дней",
      timeEn: "4–7 days",
      labelRu: "Создание мини-лендинга",
      labelEn: "Micro landing page",
    },
    "dev-medium": {
      priceRu: "от $950",
      priceEn: "from $950",
      timeRu: "1–2 недели",
      timeEn: "1–2 weeks",
      labelRu: "Создание полного продающего лендинга",
      labelEn: "High-converting landing page",
    },
    "dev-large": {
      priceRu: "от $1,800",
      priceEn: "from $1,800",
      timeRu: "3–4 недели",
      timeEn: "3–4 weeks",
      labelRu: "Создание каталога / платформы",
      labelEn: "Custom catalog / web platform",
    },

    "maintenance-small": {
      priceRu: "$190 / мес",
      priceEn: "$190 / mo",
      timeRu: "старт за 24 ч",
      timeEn: "launch in 24h",
      labelRu: "Техподдержка: тариф Старт",
      labelEn: "Starter Retainer",
    },
    "maintenance-medium": {
      priceRu: "$450 / мес",
      priceEn: "$450 / mo",
      timeRu: "старт за 24 ч",
      timeEn: "launch in 24h",
      labelRu: "Техподдержка: тариф Бизнес Retainer",
      labelEn: "Business Retainer",
    },
    "maintenance-large": {
      priceRu: "$950 / мес",
      priceEn: "$950 / mo",
      timeRu: "старт за 24 ч",
      timeEn: "launch in 24h",
      labelRu: "Техподдержка: тариф Pro & Media",
      labelEn: "Pro & Media Retainer",
    },

    "avatar-small": {
      priceRu: "от $250",
      priceEn: "from $250",
      timeRu: "2–3 дня",
      timeEn: "2–3 days",
      labelRu: "1 AI Видео-аватар под ключ",
      labelEn: "1 Turnkey AI Video Avatar",
    },
    "avatar-medium": {
      priceRu: "от $550",
      priceEn: "from $550",
      timeRu: "4–6 дней",
      timeEn: "4–6 days",
      labelRu: "Пакет 3 AI Видео-аватаров",
      labelEn: "Pack of 3 AI Video Avatars",
    },
    "avatar-large": {
      priceRu: "от $900",
      priceEn: "from $900",
      timeRu: "1–2 недели",
      timeEn: "1–2 weeks",
      labelRu: "Пакет 6 AI аватаров + озвучка на 3 языках",
      labelEn: "Pack of 6 AI Avatars + Multilingual Voiceover",
    },
  };

  const key = `${projectType}-${scope}`;
  const currentEstimate = estimates[key] || estimates["migration-medium"];

  const handleSendEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `Project Estimate Request:\n- Category: ${projectType}\n- Scope: ${scope}\n- Urgency: ${urgency}\n- Estimate: ${
      lang === "ru" ? currentEstimate.priceRu : currentEstimate.priceEn
    }, ${lang === "ru" ? currentEstimate.timeRu : currentEstimate.timeEn} (${
      lang === "ru" ? currentEstimate.labelRu : currentEstimate.labelEn
    })`;

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
          `Name: ${name}\nContact: ${contact}\n\n${message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:web@fewhands.com?subject=Project Estimate Request&body=${encodeURIComponent(
        `Name: ${name}\nContact: ${contact}\n\n${message}`
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
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-sky-400">{lang === "ru" ? "Калькулятор проекта" : "Project Estimator"}</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Интерактивная оценка" : "Interactive Estimation"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {lang === "ru" ? "Калькулятор стоимости и сроков" : "Project Cost & Timeline Estimator"}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            {lang === "ru"
              ? "Выберите параметры проекта для ориентировочного расчёта бюджета."
              : "Select your project parameters to get an instant preliminary budget & timeline."}
          </p>
        </div>

        {/* Calculator Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl space-y-8">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              {lang === "ru" ? "1. Направление задачи" : "1. Project Category"}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "migration", labelRu: "Миграция CMS", labelEn: "CMS Migration" },
                { id: "dev", labelRu: "Сайт с нуля", labelEn: "Custom Development" },
                { id: "maintenance", labelRu: "Техподдержка", labelEn: "Retainer Support" },
                { id: "avatar", labelRu: "AI Видео-аватар", labelEn: "AI Video Avatar" },
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
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              {lang === "ru" ? "2. Объем и сложность" : "2. Scope & Complexity"}
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  id: "small",
                  labelRu: "Базовый (до 3 экранов / 1 ролик)",
                  labelEn: "Basic (up to 3 screens / 1 video)",
                },
                {
                  id: "medium",
                  labelRu: "Стандарт (полный сайт / пакет)",
                  labelEn: "Standard (full site / complete package)",
                },
                {
                  id: "large",
                  labelRu: "Сложный (многостраничник / каталог)",
                  labelEn: "Complex (multi-page / custom portal)",
                },
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
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timing */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              {lang === "ru" ? "3. Срочность" : "3. Timeline & Priority"}
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  id: "urgent",
                  labelRu: "Срочно (приоритетный спринт)",
                  labelEn: "Urgent (priority sprint)",
                },
                {
                  id: "standard",
                  labelRu: "Стандартные сроки",
                  labelEn: "Standard schedule",
                },
                {
                  id: "relaxed",
                  labelRu: "Планомерный запуск",
                  labelEn: "Flexible / planned release",
                },
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
                  {lang === "ru" ? item.labelRu : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Results Bar */}
          <div className="pt-6 border-t border-slate-800 bg-slate-950/80 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {lang === "ru" ? "Предварительная оценка:" : "Preliminary Estimate:"}
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {lang === "ru" ? currentEstimate.priceRu : currentEstimate.priceEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sky-400" />
                    <span className="text-base sm:text-lg font-bold text-slate-300">
                      {lang === "ru" ? currentEstimate.timeRu : currentEstimate.timeEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Email inquiry alternate */}
              <a
                href="mailto:web@fewhands.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>web@fewhands.com</span>
              </a>
            </div>

            {/* Direct Form Submission without Telegram */}
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  {lang === "ru"
                    ? "Заявка на расчет успешно отправлена! Мы свяжемся с вами в течение 1 рабочего дня."
                    : "Estimate inquiry sent successfully! We will contact you within 1 business day."}
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
                    placeholder={lang === "ru" ? "Ваше имя" : "Your Name"}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={lang === "ru" ? "Email или телефон для связи" : "Work email or phone"}
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
                      <span>{lang === "ru" ? "Отправка..." : "Submitting..."}</span>
                    ) : (
                      <>
                        <span>{lang === "ru" ? "Получить смету" : "Get Detailed Estimate"}</span>
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
          <span>
            {lang === "ru"
              ? "Техническое задание, сроки и бюджет фиксируются до старта работ."
              : "Project scope, milestones, and budget are strictly confirmed before kickoff."}
          </span>
        </div>

      </div>
    </div>
  );
}
