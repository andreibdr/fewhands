import { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: "Few Hands — Студия Веб-Инженерии, Миграции CMS на Next.js и AI-Видео",
  description:
    "Инженерная миграция сайтов с WordPress, Tilda, 1C-Битрикс на ультрабыстрый Next.js с сохранением 100% SEO-позиций. Веб-разработка с нуля, абонентская техподдержка по абонплате и AI-видеопродакшн.",
  keywords: [
    "разработка сайтов next.js",
    "миграция с wordpress на next.js",
    "миграция с тильды",
    "перенос сайтов с битрикс",
    "абонентская поддержка сайтов",
    "создание ai видео аватаров",
    "веб студия few hands",
    "быстрые сайты react typescript",
  ],
  alternates: {
    canonical: "https://fewhands.com",
  },
  openGraph: {
    title: "Few Hands — Веб-Инженерия, Миграция CMS и AI-Видео",
    description:
      "Освобождаем сайты от устаревших CMS. Перенос на Next.js 15, скорость 100/100, абонентская поддержка и AI-видеопродакшн.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
