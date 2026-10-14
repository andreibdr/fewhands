"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { ContactForm } from "./ContactForm";

export const ContactPageContent: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            {lang === "ru" ? "Главная" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-indigo-600 font-semibold">{lang === "ru" ? "Контакты" : "Contact"}</span>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};
