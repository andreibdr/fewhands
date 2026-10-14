"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Send, Check, Copy, MessageCircle, Mail } from "lucide-react";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });

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
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", contact: "", message: "" });
      } else {
        // Fallback: open mailto
        window.location.href = `mailto:web@fewhands.com?subject=New project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\nContact: " + formData.contact)}`;
        setStatus("success");
      }
    } catch {
      window.location.href = `mailto:web@fewhands.com?subject=New project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\nContact: " + formData.contact)}`;
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Info Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
              <span>{t.contacts.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.contacts.title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.contacts.subtitle}
            </p>

            <div className="mt-8 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
              {/* Direct email */}
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Email
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:web@fewhands.com"
                    className="font-bold text-lg text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                  >
                    web@fewhands.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Messengers */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  {t.contacts.directChat}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://t.me/Strashilamudry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm hover:bg-sky-500/20 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://wa.me/+79611809004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t.contacts.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван / John"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t.contacts.contactLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="@telegram или name@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                  {t.contacts.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Миграция с WordPress / разработка сайта / AI-аватар..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base transition shadow-md shadow-sky-500/25 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <span>Отправка...</span>
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    Заявка отправлена!
                  </span>
                ) : (
                  <>
                    <span>{t.contacts.sendBtn}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
