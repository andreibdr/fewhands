"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  Sparkles,
  Play,
  Video,
  ArrowRight,
  DollarSign,
  Globe2,
  TrendingUp,
  HelpCircle,
  ChevronDown,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";

export const AiVideoView: React.FC = () => {
  const { lang } = useLanguage();
  const [activeIframe, setActiveIframe] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const shorts = [
    {
      id: "M8g2gJlwH7M",
      title: lang === "ru" ? "AI Avatar Presenter — Презентация продукта" : "AI Avatar Presenter — Product Explainer",
    },
    {
      id: "9_jdjXBknOw",
      title: lang === "ru" ? "AI Avatar Presenter — Рекламный ролик" : "AI Avatar Presenter — Commercial Ad",
    },
    {
      id: "-UE0CTWQwD4",
      title: lang === "ru" ? "AI Avatar Presenter — Лид-магнит" : "AI Avatar Presenter — Social Lead Hook",
    },
  ];

  const youtubeVideos = [
    {
      id: "KjhW0NmL2v0",
      title: lang === "ru" ? "YouTube Production — Полный монтаж выпуска" : "YouTube Production — Full Episode Edit",
    },
    {
      id: "wm9bt16QY_Q",
      title: lang === "ru" ? "YouTube Production — Экспертное интервью" : "YouTube Production — In-Depth Interview",
    },
    {
      id: "_9Z-gfKJRBU",
      title: lang === "ru" ? "YouTube Production — Коммерческий шоукейс" : "YouTube Production — Commercial Showcase",
    },
  ];

  const costComparison = [
    {
      item: lang === "ru" ? "Аренда видеостудии и света" : "Studio & Equipment Rental",
      traditional: lang === "ru" ? "$500 – $1,200 за смену" : "$500 – $1,200 per shoot",
      ai: lang === "ru" ? "$0 — виртуальное нейропространство" : "$0 — purely digital neural pipeline",
    },
    {
      item: lang === "ru" ? "Гонорар профессионального диктора / актера" : "Professional Actor / Voiceover Talent",
      traditional: lang === "ru" ? "$300 – $800 за ролик (доплаты за дубли)" : "$300 – $800 per session + retake fees",
      ai: lang === "ru" ? "Включено в стоимость — неограниченное число дублей" : "Included — unlimited synthetic regeneration",
    },
    {
      item: lang === "ru" ? "Локализация на другие языки мира" : "Multilingual Translation & Re-recording",
      traditional: lang === "ru" ? "Повторный кастинг и оплата новых актеров" : "Full recasting and secondary voice talent fees",
      ai: lang === "ru" ? "Нейродубляж с сохранением мимики на 30+ языках" : "Single-click neural articulation in 30+ languages",
    },
    {
      item: lang === "ru" ? "Сроки производства от текста до видео" : "Turnaround Time (Script to Master)",
      traditional: lang === "ru" ? "10–20 рабочих дней (согласование графика съемок)" : "10–20 business days across booking schedules",
      ai: lang === "ru" ? "24–48 часов до готового ролика с графикой" : "24–48 hours for complete polished video",
    },
  ];

  const faqs = [
    {
      q:
        lang === "ru"
          ? "Насколько естественно и фотореалистично выглядит цифровой аватар?"
          : "How natural and photorealistic do AI presenters look and sound?",
      a:
        lang === "ru"
          ? "Современные нейросети генерируют фотореалистичных цифровых людей с естественной микромимикой, морганием, интонациями и безупречным липсинком (синхронизацией движения губ со звуковой дорожкой). Зрители воспринимают персонажа как реального живого эксперта или ведущего."
          : "State-of-the-art neural engines render photorealistic digital humans featuring realistic micro-expressions, eye blinks, natural vocal inflections, and pixel-precise lip synchronization. Viewers perceive them as professional real-world presenters.",
    },
    {
      q:
        lang === "ru"
          ? "Можно ли создать цифрового аватара на основе реального человека (владельца бизнеса)?"
          : "Can you create a custom AI avatar based on a real company founder?",
      a:
        lang === "ru"
          ? "Да! Мы можем клонировать внешность и тембр голоса руководителя или амбассадора бренда по короткому исходному видео (2-3 минуты). После этого ваш персонаж сможет озвучивать любые сценарии на 30+ языках без вашего личного присутствия на съёмках."
          : "Yes. By submitting a brief 2-3 minute training video, we can clone the exact visual likeness and vocal cadence of your CEO or brand ambassador, empowering them to deliver scripts in 30+ languages without ongoing studio appearances.",
    },
    {
      q:
        lang === "ru"
          ? "Кому принадлежат коммерческие права на созданные видеоролики?"
          : "Who owns the commercial rights and intellectual property for produced videos?",
      a:
        lang === "ru"
          ? "100% коммерческих прав на видео, сценарии, озвучку и монтаж передаются заказчику. Вы можете свободно использовать материалы в рекламе Facebook, Google, TikTok, на сайтах, в email-рассылках и на ТВ без ограничений по срокам и географии."
          : "You retain 100% full commercial rights across all produced media, master video files, audio tracks, and scripts. Freely deploy assets across Meta Ads, Google Video, TikTok, landing pages, and broadcast with zero royalty restrictions.",
    },
    {
      q:
        lang === "ru"
          ? "Что включает в себя профессиональный монтаж YouTube-выпусков под ключ?"
          : "What does turnkey full-length YouTube production include?",
      a:
        lang === "ru"
          ? "Монтаж включает: отбор лучших дублей, динамическую нарезку (удаление пауз и слов-паразитов), цветокоррекцию, наложение B-roll кадров и иллюстраций, динамичные субтитры, саунд-дизайн, плашки с цитатами и создание привлекательной обложки (клипарт/превью)."
          : "Our production includes multi-camera cutdowns, pacing optimization, sound design and audio mastering, motion graphics, animated lower thirds, dynamic captions, B-roll sourcing, and high-CTR thumbnail creation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-20">
      {/* Schema.org FAQ JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#585068] mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d263b] transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-[#9c386d] font-semibold">{lang === "ru" ? "AI & Видео" : "AI & Video"}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8edf3] border border-[#9c386d]/25 text-[#9c386d] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9c386d]" />
            <span>{lang === "ru" ? "AI Продакшн & Видеомонтаж" : "AI Production & Video Editing"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2d263b] leading-tight">
            {lang === "ru"
              ? "Цифровые AI-видеоаватары и профессиональный YouTube-монтаж под ключ"
              : "Turnkey AI Video Avatars & High-Impact YouTube Production"}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#585068] leading-relaxed max-w-3xl">
            {lang === "ru"
              ? "Создаём говорящих фотореалистичных аватаров для сайтов, таргетированной рекламы и социальных сетей. Свободное владение 30+ языками мира, безупречная дикция и синхронная артикуляция — без расходов на студию, свет и актеров. А также комплексный монтаж экспертных YouTube-выпусков с высоким удержанием внимания."
              : "We engineer photorealistic digital presenters for landing pages, commercials, and social funnels. Fluent in 30+ languages with synchronized neural articulation — eliminating studio rental and actor costs. Plus complete full-length YouTube video editing."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate?service=video"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-semibold text-sm shadow-lg shadow-[#2d263b]/20 transition-all"
            >
              <span>{lang === "ru" ? "Заказать видео-аватар" : "Order AI Video Avatar"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2d263b]/15 bg-white text-[#2d263b] hover:bg-[#f1f0f5] font-semibold text-sm shadow-sm transition-all"
            >
              <span>{lang === "ru" ? "Связаться с нами" : "Contact Studio"}</span>
            </Link>
          </div>
        </div>

        {/* AI Avatars Showcase Section */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">
              {lang === "ru" ? "Формат 9:16 (Shorts, Reels, Сайты)" : "9:16 Vertical Format (Shorts, Reels, Web)"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {lang === "ru" ? "Примеры видео с цифровыми аватарами Few Hands" : "Interactive AI Avatar Showcases"}
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              {lang === "ru"
                ? "Нажмите на видео, чтобы запустить интерактивный просмотр."
                : "Click any preview card below to play interactive sample."}
            </p>
          </div>

          {/* Grid of Shorts */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {shorts.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-black group border border-slate-200"
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
                      <div className="w-14 h-14 rounded-full bg-[#9c386d] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#9c386d]">
                {lang === "ru" ? "01. Сценарий" : "01. Script & Angle"}
              </span>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "Хук и продающий текст" : "Hook & Core Narrative"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Составляем лаконичный сценарий, цепляющий зрителя в первые 3 секунды просмотра."
                  : "Crafting sharp hook-driven copy engineered to retain viewer attention in the first 3 seconds."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-mono font-bold text-purple-600">
                {lang === "ru" ? "02. Синтез" : "02. Synthesis & Voice"}
              </span>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "Озвучка и мимика" : "Neural Articulation"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Генерируем реалистичный аватар с нейронным голосом на любом языке мира."
                  : "Generating high-definition visual avatars paired with studio-grade neural voice synthesis."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-mono font-bold text-emerald-600">
                {lang === "ru" ? "03. Монтаж" : "03. Dynamic Polish"}
              </span>
              <h4 className="font-bold text-slate-900 mt-1">
                {lang === "ru" ? "Субтитры и графика" : "Captions & Delivery"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {lang === "ru"
                  ? "Добавляем динамичные титры, саунд-дизайн, плашки и встраиваем в сайт."
                  : "Animated kinetic typography, sound effects, motion B-roll, and web embed ready."}
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Production Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-red-50 text-red-600">
              <Video className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === "ru" ? "Монтаж длинных YouTube-выпусков (16:9)" : "Full-Length YouTube Video Production (16:9)"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtubeVideos.map((yt) => (
              <div
                key={yt.id}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-sm bg-black group border border-slate-200"
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

        {/* SEO Comparison: Traditional Studio vs AI Video Pipeline */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">
              {lang === "ru" ? "Экономика продакшна" : "Production Economics"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {lang === "ru"
                ? "Классическая видеосъемка против нейросетевого продакшна"
                : "Traditional Film Shoots vs Generative AI Production"}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {lang === "ru"
                ? "Как бизнес экономит до 90% бюджета и сокращает время запуска рекламы с недель до 24 часов."
                : "How modern commercial brands cut video turnaround by 80% while scaling ad variations exponentially."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-xs uppercase">
                  <th className="py-3 px-3 font-semibold">{lang === "ru" ? "Статья расходов" : "Cost Factor"}</th>
                  <th className="py-3 px-3 font-semibold text-slate-500">{lang === "ru" ? "Съемка в студии с актером" : "Traditional Studio"}</th>
                  <th className="py-3 px-3 font-semibold text-purple-600">Few Hands AI Video</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {costComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-slate-900">{row.item}</td>
                    <td className="py-3.5 px-3 text-slate-500">{row.traditional}</td>
                    <td className="py-3.5 px-3 text-purple-900 font-semibold">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Value Pillars for E-commerce & SaaS */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === "ru" ? "+40% к конверсии сайта" : "+40% Landing Page Lift"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Интерактивный говорящий аватар в правом нижнем углу или в первом экране удерживает внимание и ведет клиента к форме заявки."
                : "Vertical video presenters immediately capture dwell time, guiding incoming traffic to high-converting actions."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#f8edf3] text-[#9c386d] flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === "ru" ? "Глобальная экспансия" : "Frictionless Global Reach"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Тестируйте рынки США, Европы, ОАЭ и Латинской Америки. Один сценарий мгновенно дублируется на 30+ языков с нативным произношением."
                : "Test international markets without local voice casting. Seamless neural dubbing in English, Spanish, German, French, and Arabic."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === "ru" ? "Снижение CPA в рекламе" : "Lower Cost Per Acquisition"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === "ru"
                ? "Динамичные форматы 9:16 дают высокий CTR в TikTok, Instagram Reels и YouTube Shorts при существенно меньшей стоимости клика."
                : "High-contrast kinetic captions and native mobile framing drive superior click-through metrics across paid social ads."}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-md shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{lang === "ru" ? "Частые вопросы" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {lang === "ru"
                ? "Ответы на ключевые вопросы по видеопроизводству"
                : "Frequently Asked Questions About AI Video Production"}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {lang === "ru"
                ? "Реалистичность аватаров, коммерческие права, сроки монтажа и технические требования к исходникам."
                : "Everything you need to know about neural presenters, licensing, editing workflows, and delivery."}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-purple-600 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-purple-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white/90 to-slate-100/90 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            {lang === "ru" ? "Хотите протестировать AI-аватар для вашего бизнеса?" : "Ready to Prototype Your First AI Video Presenter?"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {lang === "ru"
              ? "Оставьте заявку с описанием продукта, и мы подготовим тестовый образец ролика со сценарием."
              : "Submit your product overview and our team will craft a customized pilot sample and script."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimate?service=video"
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-md transition"
            >
              {lang === "ru" ? "Рассчитать стоимость ролика" : "Calculate Video Production Cost"}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm shadow-sm transition"
            >
              {lang === "ru" ? "Связаться со студией" : "Direct Studio Inquiry"}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
