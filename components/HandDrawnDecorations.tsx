"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

/**
 * Hand-drawn SVG doodle arrow curving from left to right or right to left
 */
export const DoodleArrowCTA: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  return (
    <div className={`flex items-center gap-2 select-none pointer-events-none whitespace-nowrap ${className}`}>
      <span className="font-handwriting text-lg sm:text-xl text-[#386161] font-bold tracking-wide -rotate-3 leading-tight">
        {lang === "ru" ? "точный расчет за 60 сек" : lang === "sr" ? "tačna procena za 60 sek" : "instant estimate in 60s"}
      </span>
      {/* Hand-sketched arrow curving towards CTA */}
      <svg
        className="w-10 h-7 text-[#386161] -rotate-6 shrink-0"
        viewBox="0 0 60 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 5 28 C 22 28, 38 24, 52 8" />
        <path d="M 40 7 L 53 7 L 51 20" />
      </svg>
    </div>
  );
};

/**
 * Hand-drawn style badge inspired by top-right editorial card
 * ("МОДА, СТИЛЬ, АБСУРД № 42 / всегда")
 */
export const EditorialStyleCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  return (
    <div
      className={`relative p-4 sm:p-5 bg-[#fbf8f1] border border-[#2d263b]/40 rounded-xl shadow-[3px_4px_0px_rgba(45,38,59,0.18)] rotate-[1.5deg] hover:rotate-0 transition-transform ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(45,38,59,0.04) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Tape strip illusion at top */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#e8dec8]/80 backdrop-blur-[1px] border border-[#2d263b]/15 -rotate-2 pointer-events-none" />

      {/* Header */}
      <div className="border-b border-[#2d263b]/25 pb-2 mb-2.5 text-center">
        <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#585068] font-bold">
          {lang === "ru" ? "ЧИСТЫЙ КОД VS ПЛАГИНЫ" : lang === "sr" ? "ČIST KOD VS CMS BALAST" : "CLEAN CODE VS CMS BLOAT"}
        </div>
        <div className="text-[9px] font-mono text-[#8c829c]">
          {lang === "ru" ? "№ 42 / НАВСЕГДА" : lang === "sr" ? "BROJ 42 / ZAUVEK" : "ISSUE № 42 / FOREVER"}
        </div>
      </div>

      {/* Body: Question with sketch checkbox */}
      <div className="text-left space-y-1.5">
        <div className="text-xs font-bold text-[#2d263b]">
          {lang === "ru" ? "Сайт летает?" : lang === "sr" ? "Sajt leti?" : "Website lightning fast?"}
        </div>
        <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#2d263b]">
          <span className="inline-flex items-center gap-1.5">
            {lang === "ru" ? "ДА" : lang === "sr" ? "DA" : "YES"}
            <span className="w-4 h-4 border border-[#2d263b] rounded flex items-center justify-center text-[10px] bg-white font-black text-[#386161]">
              ✕
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#585068]/60">
            {lang === "ru" ? "НЕТ" : lang === "sr" ? "NE" : "NO"}
            <span className="w-4 h-4 border border-[#2d263b]/40 rounded inline-block bg-white" />
          </span>
        </div>

        {/* Humorous Reason in Handwriting */}
        <div className="pt-2 border-t border-[#2d263b]/15 text-[#2d263b]">
          <div className="text-[10px] font-semibold text-[#585068]">
            {lang === "ru" ? "Почему?" : lang === "sr" ? "Zašto?" : "Why?"}
          </div>
          <div className="font-handwriting text-base sm:text-lg text-[#2d263b] leading-tight mt-0.5">
            {lang === "ru"
              ? "Потому что Next.js 16 — это скорость, остальное — костыли."
              : lang === "sr"
              ? "Zato što je Next.js 16 stvarna brzina, ostalo su kompromisi."
              : "Next.js 16 is engineered speed. The rest is just fragile tape."}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Scientific / Empirical Analysis Card (inspired by "Научный анализ")
 */
export const ScientificAuditCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  return (
    <div
      className={`relative p-4 sm:p-5 bg-[#faf6ed] border border-[#2d263b]/40 rounded-xl shadow-[3px_4px_0px_rgba(45,38,59,0.18)] -rotate-[1.5deg] hover:rotate-0 transition-transform ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(45,38,59,0.04) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Tape strip illusion at top */}
      <div className="absolute -top-2.5 right-6 w-12 h-4 bg-[#e8dec8]/80 backdrop-blur-[1px] border border-[#2d263b]/15 rotate-3 pointer-events-none" />

      {/* Title */}
      <div className="text-left border-b border-[#2d263b]/25 pb-2 mb-2.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2d263b]">
          <span className="text-[#c6814b]">★</span>
          <span>{lang === "ru" ? "НАУЧНЫЙ АНАЛИЗ" : lang === "sr" ? "EMPIRIJSKI REZULTATI" : "EMPIRICAL BENCHMARKS"}</span>
        </div>
        <div className="text-[10px] text-[#585068] font-handwriting text-sm">
          {lang === "ru" ? "(очень точный, без домыслов)" : lang === "sr" ? "(čiste metrike, bez nagađanja)" : "(pure metrics, zero fluff)"}
        </div>
      </div>

      {/* Metric List with hand bullets */}
      <ul className="text-left space-y-1 text-xs text-[#2d263b] font-mono leading-tight">
        <li className="flex items-center justify-between gap-3">
          <span>• {lang === "ru" ? "Скорость PageSpeed" : lang === "sr" ? "PageSpeed brzina" : "PageSpeed Score"}</span>
          <span className="font-bold text-[#7ea368]">98–100</span>
        </li>
        <li className="flex items-center justify-between gap-3">
          <span>• {lang === "ru" ? "Потеря SEO-позиций" : lang === "sr" ? "Gubitak SEO pozicija" : "SEO Ranking Loss"}</span>
          <span className="font-bold text-[#386161]">0.0%</span>
        </li>
        <li className="flex items-center justify-between gap-3">
          <span>• {lang === "ru" ? "Дырявые плагины" : lang === "sr" ? "Ranjivi dodaci" : "Vulnerable Plugins"}</span>
          <span className="font-bold text-[#ba5d60]">0%</span>
        </li>
        <li className="flex items-center justify-between gap-3">
          <span>• {lang === "ru" ? "Инженерный фокус" : lang === "sr" ? "Inženjerski fokus" : "Engineering Focus"}</span>
          <span className="font-bold text-[#2d263b]">100%</span>
        </li>
      </ul>

      {/* Error margin */}
      <div className="mt-3 pt-2 border-t border-[#2d263b]/15 flex items-center justify-between text-[10px] text-[#585068]">
        <span className="font-mono">{lang === "ru" ? "Погрешность:" : lang === "sr" ? "Margina greške:" : "Margin of error:"}</span>
        <span className="font-handwriting text-sm text-[#2d263b] font-bold">
          {lang === "ru" ? "0% (строгий TypeScript)" : lang === "sr" ? "0% (striktni TypeScript)" : "0% (strict TypeScript)"}
        </span>
      </div>
    </div>
  );
};

/**
 * Hand-drawn Rating Stamp (inspired by "РЕЙТИНГ АБСУРДНОСТИ: ★★★★★")
 */
export const SpeedRatingStamp: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-dashed border-[#2d263b]/35 bg-[#fbf8f1] rounded-2xl text-center select-none ${className}`}
    >
      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#585068] font-bold">
        {lang === "ru" ? "РЕЙТИНГ СКОРОСТИ:" : lang === "sr" ? "OCENA BRZINE:" : "SPEED RATING:"}
      </div>
      <div className="flex items-center gap-1 text-[#c6814b] text-base sm:text-lg my-1">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="font-handwriting text-sm sm:text-base text-[#2d263b] leading-tight">
        {lang === "ru"
          ? "Google PageSpeed 98–100. Легенда. Без тормозов."
          : lang === "sr"
          ? "Core Web Vitals 98–100. Brzo. Bez usporavanja."
          : "Core Web Vitals 98–100. Fast. No bloat."}
      </div>
    </div>
  );
};

/**
 * P.S. Editorial Footnote Card (inspired by "P.S. С ним спорить бесполезно...")
 */
export const PSFootnoteCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  return (
    <div
      className={`p-3.5 sm:p-4 bg-[#fbf8f1] border border-[#2d263b]/30 rounded-xl shadow-sm text-left ${className}`}
    >
      <div className="font-mono text-[10px] text-[#8c829c] font-bold uppercase tracking-wider mb-1">
        {lang === "ru" ? "P.S. Инженерная заметка:" : lang === "sr" ? "P.S. Inženjerska beleška:" : "P.S. Engineering Note:"}
      </div>
      <p className="font-handwriting text-base sm:text-lg text-[#2d263b] leading-tight">
        {lang === "ru"
          ? "Спорить со скоростью бесполезно: сайт либо открывается за 0.8с, либо клиент уходит. Мы делаем так, чтобы оставались."
          : lang === "sr"
          ? "Rasprava sa brzinom je besmislena: sajt se ili otvara za 0.8s, ili posetilac odlazi. Mi pravimo sajtove na kojima ostaju."
          : "Arguing with speed is futile: either the page renders in 0.8s, or the visitor leaves. We engineer sites that retain."}
      </p>
    </div>
  );
};

/**
 * Flexible General-Purpose Craft Card (styled like "Мода, Стиль, Абсурд № 42")
 */
export const CraftCard: React.FC<{
  tag: string;
  issueNo?: string;
  question: string;
  yesLabel?: string;
  noLabel?: string;
  isYesChecked?: boolean;
  checked?: boolean;
  whyText?: string;
  reason?: string;
  rotation?: string;
  rotate?: string;
  className?: string;
}> = ({
  tag,
  issueNo = "№ 42",
  question,
  yesLabel,
  noLabel,
  isYesChecked,
  checked,
  whyText,
  reason,
  rotation,
  rotate,
  className = "",
}) => {
  const { lang } = useLanguage();
  const yes = yesLabel || (lang === "ru" ? "ДА" : lang === "sr" ? "DA" : "YES");
  const no = noLabel || (lang === "ru" ? "НЕТ" : lang === "sr" ? "NE" : "NO");
  const finalChecked = isYesChecked !== undefined ? isYesChecked : (checked !== undefined ? checked : true);
  const finalWhyText = whyText || reason || "";
  const finalRotation = rotation || rotate || "rotate-[1.5deg]";

  return (
    <div
      className={`relative p-4 sm:p-5 bg-[#fbf8f1] border border-[#2d263b]/40 rounded-xl shadow-[3px_4px_0px_rgba(45,38,59,0.18)] ${finalRotation} hover:rotate-0 transition-transform ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(45,38,59,0.04) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Tape strip illusion at top */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#e8dec8]/80 backdrop-blur-[1px] border border-[#2d263b]/15 -rotate-2 pointer-events-none" />

      {/* Header */}
      <div className="border-b border-[#2d263b]/25 pb-2 mb-2.5 text-center">
        <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#585068] font-bold">
          {tag}
        </div>
        <div className="text-[9px] font-mono text-[#8c829c]">{issueNo}</div>
      </div>

      {/* Body */}
      <div className="text-left space-y-1.5">
        <div className="text-xs font-bold text-[#2d263b]">{question}</div>
        <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#2d263b]">
          <span className="inline-flex items-center gap-1.5">
            {yes}
            <span
              className={`w-4 h-4 border border-[#2d263b] rounded flex items-center justify-center text-[10px] bg-white font-black ${
                finalChecked ? "text-[#386161]" : "text-transparent"
              }`}
            >
              {finalChecked ? "✕" : ""}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#585068]/60">
            {no}
            <span
              className={`w-4 h-4 border border-[#2d263b] rounded flex items-center justify-center text-[10px] bg-white font-black ${
                !finalChecked ? "text-[#ba5d60]" : "text-transparent"
              }`}
            >
              {!finalChecked ? "✕" : ""}
            </span>
          </span>
        </div>

        <div className="pt-2 border-t border-[#2d263b]/15 text-[#2d263b]">
          <div className="text-[10px] font-semibold text-[#585068]">
            {lang === "ru" ? "Почему?" : lang === "sr" ? "Zašto?" : "Why?"}
          </div>
          <div className="font-handwriting text-base sm:text-lg text-[#2d263b] leading-tight mt-0.5">
            {finalWhyText}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Flexible Audit Metrics Card (styled like "Научный анализ")
 */
export const AuditMetricsCard: React.FC<{
  title: string;
  subtitle?: string;
  metrics: { label: string; value: string; color?: string }[];
  marginError?: string;
  rotation?: string;
  rotate?: string;
  className?: string;
}> = ({
  title,
  subtitle,
  metrics,
  marginError,
  rotation,
  rotate,
  className = "",
}) => {
  const { lang } = useLanguage();
  const finalRotation = rotation || rotate || "-rotate-[1.5deg]";

  return (
    <div
      className={`relative p-4 sm:p-5 bg-[#faf6ed] border border-[#2d263b]/40 rounded-xl shadow-[3px_4px_0px_rgba(45,38,59,0.18)] ${finalRotation} hover:rotate-0 transition-transform ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(45,38,59,0.04) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      <div className="absolute -top-2.5 right-6 w-12 h-4 bg-[#e8dec8]/80 backdrop-blur-[1px] border border-[#2d263b]/15 rotate-3 pointer-events-none" />

      <div className="text-left border-b border-[#2d263b]/25 pb-2 mb-2.5">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2d263b]">
          <span className="text-[#c6814b]">★</span>
          <span>{title}</span>
        </div>
        {subtitle && (
          <div className="text-[10px] text-[#585068] font-handwriting text-sm">
            {subtitle}
          </div>
        )}
      </div>

      <ul className="text-left space-y-1 text-xs text-[#2d263b] font-mono leading-tight">
        {metrics.map((m, idx) => (
          <li key={idx} className="flex items-center justify-between gap-3">
            <span>• {m.label}</span>
            <span className={`font-bold ${m.color || "text-[#2d263b]"}`}>
              {m.value}
            </span>
          </li>
        ))}
      </ul>

      {marginError && (
        <div className="mt-3 pt-2 border-t border-[#2d263b]/15 flex items-center justify-between text-[10px] text-[#585068]">
          <span className="font-mono">
            {lang === "ru" ? "Погрешность:" : lang === "sr" ? "Margina greške:" : "Margin of error:"}
          </span>
          <span className="font-handwriting text-sm text-[#2d263b] font-bold">
            {marginError}
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Flexible Hand-Stamper Badge
 */
export const CustomStampBadge: React.FC<{
  label: string;
  caption: string;
  starsCount?: number;
  className?: string;
}> = ({ label, caption, starsCount = 5, className = "" }) => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-dashed border-[#2d263b]/35 bg-[#fbf8f1] rounded-2xl text-center select-none ${className}`}
    >
      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#585068] font-bold">
        {label}
      </div>
      <div className="flex items-center gap-1 text-[#c6814b] text-base sm:text-lg my-1">
        {Array.from({ length: starsCount }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <div className="font-handwriting text-sm sm:text-base text-[#2d263b] leading-tight">
        {caption}
      </div>
    </div>
  );
};

/**
 * Flexible P.S. Footnote Card
 */
export const CustomPSCard: React.FC<{
  noteTitle?: string;
  text: string;
  className?: string;
}> = ({ noteTitle, text, className = "" }) => {
  const { lang } = useLanguage();
  const defaultTitle = lang === "ru" ? "P.S. Инженерная заметка:" : lang === "sr" ? "P.S. Inženjerska beleška:" : "P.S. Engineering Note:";
  return (
    <div
      className={`p-3.5 sm:p-4 bg-[#fbf8f1] border border-[#2d263b]/30 rounded-xl shadow-sm text-left ${className}`}
    >
      <div className="font-mono text-[10px] text-[#8c829c] font-bold uppercase tracking-wider mb-1">
        {noteTitle || defaultTitle}
      </div>
      <p className="font-handwriting text-base sm:text-lg text-[#2d263b] leading-tight">
        {text}
      </p>
    </div>
  );
};

/**
 * Doodle curved arrow with customizable text and orientation
 */
export const DoodlePointer: React.FC<{
  text: string;
  direction?: "curved-down-right" | "curved-down-left" | "curved-up-right" | "curved-right";
  className?: string;
}> = ({ text, direction = "curved-right", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none pointer-events-none ${className}`}>
      {direction === "curved-right" && (
        <>
          <span className="font-handwriting text-base sm:text-lg text-[#386161] font-bold leading-tight -rotate-3">
            {text}
          </span>
          <svg
            className="w-8 h-6 text-[#386161] -rotate-6 shrink-0"
            viewBox="0 0 50 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
          >
            <path d="M 5 24 C 20 24, 32 18, 44 8" />
            <path d="M 33 6 L 45 7 L 43 18" />
          </svg>
        </>
      )}

      {direction === "curved-down-right" && (
        <div className="flex flex-col items-center gap-1">
          <span className="font-handwriting text-base sm:text-lg text-[#386161] font-bold leading-tight -rotate-2">
            {text}
          </span>
          <svg
            className="w-6 h-8 text-[#386161] shrink-0"
            viewBox="0 0 35 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
          >
            <path d="M 12 5 C 10 20, 15 35, 24 44" />
            <path d="M 14 39 L 25 45 L 28 34" />
          </svg>
        </div>
      )}

      {direction === "curved-down-left" && (
        <div className="flex flex-col items-center gap-1">
          <span className="font-handwriting text-base sm:text-lg text-[#386161] font-bold leading-tight rotate-2">
            {text}
          </span>
          <svg
            className="w-6 h-8 text-[#386161] shrink-0 -scale-x-100"
            viewBox="0 0 35 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
          >
            <path d="M 12 5 C 10 20, 15 35, 24 44" />
            <path d="M 14 39 L 25 45 L 28 34" />
          </svg>
        </div>
      )}

      {direction === "curved-up-right" && (
        <>
          <span className="font-handwriting text-base sm:text-lg text-[#386161] font-bold leading-tight -rotate-3">
            {text}
          </span>
          <svg
            className="w-8 h-6 text-[#386161] -scale-y-100 shrink-0"
            viewBox="0 0 50 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
          >
            <path d="M 5 24 C 20 24, 32 18, 44 8" />
            <path d="M 33 6 L 45 7 L 43 18" />
          </svg>
        </>
      )}
    </div>
  );
};

export const SketchedCallout = CustomStampBadge;

