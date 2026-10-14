import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Few Hands — Веб-разработка, миграция CMS, видеомонтаж и AI-аватары",
  description:
    "Профессиональный перенос сайтов с WordPress, Tilda, Webflow на Next.js. Создание сайтов, видеомонтаж для YouTube и фотореалистичные AI-видеоаватары под ключ.",
  keywords: [
    "Next.js",
    "миграция с wordpress",
    "миграция с тильды",
    "перенос сайта",
    "ai видео аватары",
    "видеомонтаж",
    "разработка сайтов",
    "few hands",
  ],
  authors: [{ name: "Few Hands" }],
  openGraph: {
    title: "Few Hands — Веб-инженерия, миграция CMS и AI-медиа",
    description:
      "Модернизация сайтов, перенос на Next.js, видеомонтаж и AI-видеоаватары под ключ.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
