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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === "ru" ? "Прямая связь" : "Direct Contact"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {lang === "ru" ? "Обсудим ваш проект?" : "Let's Discuss Your Project"}
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === "ru"
              ? "Оставьте контакты и краткое описание задачи. Мы свяжемся с вами по электронной почте или в мессенджере с предварительным планом и сметой."
              : "Send us a brief inquiry. We'll reply within 1–2 business hours with an initial evaluation, timeline, and next steps."}
          </p>

          <div className="mt-8 p-6 rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm space-y-6">
            
            {/* Email Card */}
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                {lang === "ru" ? "Корпоративный Email" : "Corporate Email"}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:web@fewhands.com"
                  className="font-bold text-lg text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  web@fewhands.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition shadow-sm"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Global Remote Delivery Card */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                {lang === "ru" ? "Формат работы" : "Client Geography"}
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {lang === "ru"
                  ? "Удалённая разработка · Клиенты в США, Европе и по всему миру"
                  : "Remote Engineering · Serving clients in US, EU & Worldwide"}
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                {lang === "ru"
                  ? "Ответ в рабочие часы (Mon–Fri, 10:00–19:00)"
                  : "Response during business hours (Mon–Fri, 10:00–19:00 UTC)"}
              </span>
            </div>

          </div>
        </div>

        {/* Right Form Column */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1.5">
                {lang === "ru" ? "Ваше имя" : "Your Name"} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === "ru" ? "Александр / John" : "John Doe"}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1.5">
                {lang === "ru" ? "Рабочий Email или Телефон" : "Work Email or Phone"} *
              </label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1.5">
                {lang === "ru" ? "Адрес текущего сайта (если есть)" : "Current Website URL (optional)"}
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://mysite.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1.5">
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2"
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
