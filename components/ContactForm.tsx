"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Send, Check, Copy, MessageSquare, Mail, Globe, Clock } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Прямая связь" : "Direct Contact"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {lang === "ru" ? "Обсудим ваш проект?" : "Let's Discuss Your Project"}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === "ru"
              ? "Оставьте контакты и краткое описание задачи. Мы свяжемся с вами по электронной почте или в мессенджере с предварительным планом и сметой."
              : "Send us a brief inquiry. We'll reply within 1–2 business hours with an initial evaluation, timeline, and next steps."}
          </p>

          <div className="mt-8 p-6 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-md space-y-6">
            
            {/* Email Card */}
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                {lang === "ru" ? "Корпоративный Email" : "Corporate Email"}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:web@fewhands.com"
                  className="font-bold text-lg text-white hover:text-sky-400 transition-colors"
                >
                  web@fewhands.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Global Remote Delivery Card */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                {lang === "ru" ? "Формат работы" : "Client Geography"}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {lang === "ru"
                  ? "Удалённая разработка · Клиенты в США, Европе и по всему миру"
                  : "Remote Engineering · Serving clients in US, EU & Worldwide"}
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                {lang === "ru"
                  ? "Ответ в рабочие часы (Mon–Fri, 10:00–19:00)"
                  : "Response during business hours (Mon–Fri, 10:00–19:00 UTC)"}
              </span>
            </div>

          </div>
        </div>

        {/* Right Form Column */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                {lang === "ru" ? "Ваше имя" : "Your Name"} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === "ru" ? "Александр / John" : "John Doe"}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                {lang === "ru" ? "Рабочий Email или Телефон" : "Work Email or Phone"} *
              </label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                {lang === "ru" ? "Адрес текущего сайта (если есть)" : "Current Website URL (optional)"}
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://mysite.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-1.5">
                {lang === "ru" ? "Опишите задачу или проект" : "Project Details"} *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  lang === "ru"
                    ? "Миграция с WordPress на Next.js / разработка каталога / техподдержка..."
                    : "CMS migration / custom development / retainer support / AI avatars..."
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base transition shadow-md shadow-sky-500/25 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <span>{lang === "ru" ? "Отправка..." : "Submitting..."}</span>
              ) : status === "success" ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  {lang === "ru" ? "Заявка успешно отправлена!" : "Inquiry Sent Successfully!"}
                </span>
              ) : (
                <>
                  <span>{lang === "ru" ? "Отправить заявку" : "Send Inquiry"}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
