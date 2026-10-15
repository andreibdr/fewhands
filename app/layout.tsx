import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { LogoProvider } from "@/components/LogoContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Few Hands — Веб-инженерия, миграция CMS и AI-медиа",
  description:
    "Профессиональная миграция сайтов с WordPress, Tilda, Webflow, Bitrix на Next.js в партнёрстве с GoMVP. Техническая поддержка сайтов (Retainer) и AI-видеопродакшн под ключ.",
  keywords: [
    "Next.js",
    "миграция с wordpress",
    "миграция с тильды",
    "перенос с битрикс",
    "поддержка сайтов retainer",
    "сопровождение сайтов",
    "ai видео аватары",
    "видеомонтаж youtube",
    "gomvp партнёр",
    "few hands",
  ],
  authors: [{ name: "Few Hands" }],
  openGraph: {
    title: "Few Hands — Веб-инженерия, миграция CMS и AI-медиа",
    description:
      "Модернизация сайтов, перенос на Next.js в партнёрстве с GoMVP, комплексная поддержка сайтов (Retainer) и AI-видеопродакшн.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased text-[#2d263b] bg-[#faf9fb] selection:bg-[#352f44] selection:text-[#faf9fb]">
        <AnimatedBackground />
        <LanguageProvider>
          <LogoProvider>
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </LogoProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
