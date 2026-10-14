"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" />
            </svg>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">Few Hands</span>
          <span className="text-xs text-slate-500">© {new Date().getFullYear()}</span>
        </div>

        {/* GoMVP partner note */}
        <a
          href="https://gomvp.dev/en/migrate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition"
        >
          <span>{t.footer.partnerText}</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
          <a href="#migration" className="hover:text-sky-500">
            {t.nav.migration}
          </a>
          <a href="#development" className="hover:text-sky-500">
            {t.nav.development}
          </a>
          <a href="#video" className="hover:text-sky-500">
            {t.nav.video}
          </a>
          <a href="#portfolio" className="hover:text-sky-500">
            {t.nav.portfolio}
          </a>
        </div>
      </div>
    </footer>
  );
};
