import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Few Hands — Веб-инженерия, миграция CMS и AI-медиа",
  description:
    "Профессиональная миграция сайтов с WordPress, Tilda, Webflow, Bitrix на Next.js в партнёрстве с GoMVP. Обучение персонала, ежемесячная техподдержка по абонплате и AI-видеопродакшн под ключ.",
  keywords: [
    "Next.js",
    "миграция с wordpress",
    "миграция с тильды",
    "перенос с битрикс",
    "поддержка сайтов абонплата",
    "обучение персонала cms",
    "ai видео аватары",
    "видеомонтаж youtube",
    "gomvp партнёр",
    "few hands",
  ],
  authors: [{ name: "Few Hands" }],
  openGraph: {
    title: "Few Hands — Веб-инженерия, миграция CMS и AI-медиа",
    description:
      "Модернизация сайтов, перенос на Next.js в партнёрстве с GoMVP, техническая поддержка перенесённых сайтов и AI-видеоаватары под ключ.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
