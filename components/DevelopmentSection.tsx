"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Layout, ShoppingBag, Cpu, Check, ArrowRight } from "lucide-react";

export const DevelopmentSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case "Layout":
        return <Layout className="w-6 h-6 text-sky-500" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-indigo-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-cyan-500" />;
      default:
        return <Layout className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="development" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <span>{t.development.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.development.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.development.subtitle}
          </p>
        </div>

        {/* Development Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {t.development.cards.map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {getIcon(card.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {card.desc}
                </p>

                <ul className="space-y-2.5 border-t border-slate-100 dark:border-slate-800 pt-5">
                  {card.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>Заказать разработку</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
