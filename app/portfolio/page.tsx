import { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: "Портфолио Реализованных Сайтов и AI-Видео | Кейсы Few Hands",
  description:
    "Примеры разработанных сайтов на Next.js, миграций с WordPress/Tilda/Bitrix, интернет-магазинов и AI-видеороликов агентства Few Hands. PageSpeed 95-100, живые ссылки и метрики.",
  keywords: [
    "портфолио веб разработчиков",
    "кейсы создания сайтов next.js",
    "примеры миграции сайтов",
    "few hands portfolio",
    "кейсы разработка интернет-магазинов",
    "примеры ai видеороликов",
  ],
  alternates: {
    canonical: "https://fewhands.com/portfolio",
  },
  openGraph: {
    title: "Портфолио Реализованных Проектов | Few Hands",
    description:
      "Реальные кейсы разработки сайтов на Next.js и AI-видеопродакшна. Скорость 95-100 Google PageSpeed, чистый стек, коммерческие результаты.",
    url: "https://fewhands.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
