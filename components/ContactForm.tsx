"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Send, Check, Copy, MessageSquare, Mail, Globe, Clock } from "lucide-react";
import {
  CraftCard,
  CustomStampBadge,
  CustomPSCard,
  DoodlePointer,
} from "./HandDrawnDecorations";
import { isValidEmailOrPhone } from "@/lib/validation";

export const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactError, setContactError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("web@fewhands.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmailOrPhone(formData.email)) {
      setContactError(
        lang === "ru"
          ? "Укажите корректный email или номер телефона"
          : lang === "sr"
          ? "Unesite validan email ili broj telefona"
          : "Please enter a valid email or phone number"
      );
      return;
    }

    setContactError(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.email,
          message: `${formData.message} (Website: ${formData.website || "not specified"})`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        window.location.href = `mailto:web@fewhands.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\nContact: " + formData.email + "\nWebsite: " + formData.website)}`;
        setStatus("success");
      }
    } catch {
      window.location.href = `mailto:web@fewhands.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\nContact: " + formData.email + "\nWebsite: " + formData.website)}`;
      setStatus("success");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Info Column */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f0f5] border border-[#2d263b]/15 text-[#2d263b] text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5 text-[#386161]" />
            <span>{lang === "ru" ? "Прямая связь" : lang === "sr" ? "Direktan kontakt" : "Direct Contact"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2d263b]">
            {lang === "ru" ? "Обсудим ваш проект?" : lang === "sr" ? "Hajde da razgovaramo o projektu?" : "Let's Discuss Your Project"}
          </h2>

          <p className="mt-4 text-[#585068] text-sm sm:text-base leading-relaxed">
            {lang === "ru"
              ? "Оставьте контакты и краткое описание задачи. Мы свяжемся с вами по электронной почте или в мессенджере с предварительным планом и сметой."
              : lang === "sr"
              ? "Ostavite kontakt i kratak opis zadatka. Javićemo vam se putem emaila sa preliminarnim planom, procenom i sledećim koracima."
              : "Send us a brief inquiry. We'll reply within 1-2 business hours with an initial evaluation, timeline, and next steps."}
          </p>

          <div className="mt-8 p-6 rounded-3xl border border-[#2d263b]/10 bg-white/90 backdrop-blur-md shadow-sm space-y-6">
            
            {/* Email Card */}
            <div>
              <div className="text-xs uppercase tracking-wider text-[#585068] font-semibold mb-1">
                {lang === "ru" ? "Корпоративный Email" : lang === "sr" ? "Zvanični Email" : "Corporate Email"}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:web@fewhands.com"
                  className="font-bold text-lg text-[#2d263b] hover:text-[#9c386d] transition-colors"
                >
                  web@fewhands.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg border border-[#2d263b]/15 text-[#585068] hover:text-[#2d263b] hover:bg-[#f1f0f5] transition shadow-sm"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#7ea368]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Global Remote Delivery Card */}
            <div className="pt-4 border-t border-[#2d263b]/10">
              <div className="text-xs uppercase tracking-wider text-[#585068] font-semibold mb-1">
                {lang === "ru" ? "Формат работы" : lang === "sr" ? "Format saradnje" : "Client Geography"}
              </div>
              <div className="text-sm font-semibold text-[#2d263b]">
                {lang === "ru"
                  ? "Удалённая разработка · Клиенты в США, Европе и по всему миру"
                  : lang === "sr"
                  ? "Rad na daljinu · Klijenti u SAD, Evropi i širom sveta"
                  : "Remote Engineering · Serving clients in US, EU & Worldwide"}
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="pt-4 border-t border-[#2d263b]/10 flex items-center gap-2 text-xs text-[#585068]">
              <Clock className="w-4 h-4 text-[#386161] shrink-0" />
              <span>
                {lang === "ru"
                  ? "Ответ в рабочие часы (Mon-Fri, 10:00-19:00)"
                  : lang === "sr"
                  ? "Odgovor tokom radnog vremena (Pon-Pet, 10:00-19:00)"
                  : "Response during business hours (Mon-Fri, 10:00-19:00 UTC)"}
              </span>
            </div>

          </div>

          {/* Craft Editorial Card */}
          <div className="mt-8 flex justify-center md:justify-start">
            <CraftCard
              tag={lang === "ru" ? "ПРЯМОЙ ДОСТУП К ИНЖЕНЕРАМ" : lang === "sr" ? "DIREKTAN PRISTUP INŽENJERIMA" : "DIRECT LEAD ACCESS"}
              question={
                lang === "ru"
                  ? "Отделы продаж и менеджеры? НЕТ [X]"
                  : lang === "sr"
                  ? "Prodajni menadžeri i birokratija? NE [X]"
                  : "Sales managers & bureaucracy? NO [X]"
              }
              reason={
                lang === "ru"
                  ? "Вы консультируетесь напрямую с ведущими техническими архитекторами Few Hands без навязчивого спама."
                  : lang === "sr"
                  ? "Konsultujete se direktno sa vodećim tehničkim arhitektama Few Hands bez agresivne prodaje."
                  : "You consult directly with senior technical leads and architects with zero aggressive sales fluff."
              }
              checked={false}
              rotate="-rotate-1"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Form Column */}
        <div className="p-8 sm:p-10 rounded-3xl border border-[#2d263b]/10 bg-white/95 backdrop-blur-md shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#2d263b] mb-1.5">
                {lang === "ru" ? "Ваше имя" : lang === "sr" ? "Vaše ime" : "Your Name"} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === "ru" ? "Александр / John" : lang === "sr" ? "Marko / John" : "John Doe"}
                className="w-full px-4 py-3 rounded-xl border border-[#2d263b]/20 bg-white text-[#2d263b] placeholder:text-[#585068]/50 focus:ring-2 focus:ring-[#2d263b]/20 focus:border-[#2d263b] outline-none transition text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#2d263b] mb-1.5">
                {lang === "ru" ? "Рабочий Email или Телефон" : lang === "sr" ? "Poslovni Email ili Telefon" : "Work Email or Phone"} *
              </label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (contactError) setContactError(null);
                }}
                placeholder={
                  lang === "ru"
                    ? "name@company.com или +7 (999) 000-00-00"
                    : lang === "sr"
                    ? "name@company.com ili +381 60 000-0000"
                    : "name@company.com or +1 (555) 000-0000"
                }
                className={`w-full px-4 py-3 rounded-xl border bg-white text-[#2d263b] placeholder:text-[#585068]/50 focus:ring-2 outline-none transition text-sm shadow-sm ${
                  contactError
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                    : "border-[#2d263b]/20 focus:ring-[#2d263b]/20 focus:border-[#2d263b]"
                }`}
              />
              {contactError && (
                <p className="text-xs text-rose-500 font-medium mt-1.5 pl-1">
                  {contactError}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#2d263b] mb-1.5">
                {lang === "ru" ? "Адрес текущего сайта (если есть)" : lang === "sr" ? "Adresa postojećeg sajta (opciono)" : "Current Website URL (optional)"}
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://mysite.com"
                className="w-full px-4 py-3 rounded-xl border border-[#2d263b]/20 bg-white text-[#2d263b] placeholder:text-[#585068]/50 focus:ring-2 focus:ring-[#2d263b]/20 focus:border-[#2d263b] outline-none transition text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#2d263b] mb-1.5">
                {lang === "ru" ? "Опишите задачу или проект" : lang === "sr" ? "Opišite zadatak ili projekat" : "Project Details"} *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  lang === "ru"
                    ? "Миграция с WordPress на Next.js / разработка каталога / техподдержка..."
                    : lang === "sr"
                    ? "Migracija sa WordPress-a na Next.js / izrada kataloga / tehnička podrška..."
                    : "CMS migration / custom development / retainer support / AI avatars..."
                }
                className="w-full px-4 py-3 rounded-xl border border-[#2d263b]/20 bg-white text-[#2d263b] placeholder:text-[#585068]/50 focus:ring-2 focus:ring-[#2d263b]/20 focus:border-[#2d263b] outline-none transition text-sm shadow-sm"
              />
            </div>

            <div className="pt-2 flex flex-col items-center">
              <DoodlePointer
                text={lang === "ru" ? "ответим в течение 1-2 часов ↘" : lang === "sr" ? "odgovaramo u roku od 1-2 sata ↘" : "we reply within 1-2 hours ↘"}
                direction="curved-down-right"
                className="mb-2"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-4 rounded-xl bg-[#2d263b] hover:bg-[#1e1927] text-[#faf9fb] font-bold text-sm sm:text-base transition shadow-md shadow-[#2d263b]/20 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <span>{lang === "ru" ? "Отправка..." : lang === "sr" ? "Slanje..." : "Submitting..."}</span>
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#7ea368]" />
                    {lang === "ru" ? "Заявка успешно отправлена!" : lang === "sr" ? "Upit je uspešno poslat!" : "Inquiry Sent Successfully!"}
                  </span>
                ) : (
                  <>
                    <span>{lang === "ru" ? "Отправить заявку" : lang === "sr" ? "Pošaljite upit" : "Send Inquiry"}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Craft Annotations: Stamp & PS */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <CustomStampBadge
          label={lang === "ru" ? "КОНФИДЕНЦИАЛЬНОСТЬ" : lang === "sr" ? "100% POVERLJIVO" : "100% CONFIDENTIAL"}
          caption={
            lang === "ru"
              ? "Строгий NDA • Защита коммерческих данных"
              : lang === "sr"
              ? "Striktni NDA • Zaštita poslovnih podataka"
              : "Strict NDA • Full commercial privacy"
          }
          starsCount={5}
          className="-rotate-1 max-w-xs shrink-0"
        />

        <CustomPSCard
          noteTitle={lang === "ru" ? "P.S. Прямая почта ведущих инженеров:" : lang === "sr" ? "P.S. Direktan inbox inženjera:" : "P.S. Direct Engineering Inbox:"}
          text={
            lang === "ru"
              ? "Также можете сразу отправить исходное ТЗ, ссылки на GitHub или макеты Figma на web@fewhands.com."
              : lang === "sr"
              ? "Takođe možete poslati tehničku specifikaciju, linkove ka GitHub-u ili Figma dizajnu direktno na web@fewhands.com."
              : "Feel free to email your technical specification, repository links, or Figma design files directly to web@fewhands.com."
          }
          className="rotate-1 flex-1 w-full"
        />
      </div>
    </div>
  );
};
