import { Metadata } from "next";
import { DevelopmentView } from "@/components/DevelopmentView";

export const metadata: Metadata = {
  title: "Создание сайтов на Next.js с нуля | Few Hands Studio",
  description:
    "Профессиональная веб-разработка продающих лендингов, каталогов и корпоративных порталов на Next.js 14 и React. Google PageSpeed 100/100, Edge CDN и 100% владение кодом.",
  keywords: [
    "создание сайтов next.js",
    "разработка сайтов с нуля",
    "заказать сайт на react",
    "быстрый лендинг под ключ",
    "разработка каталога товаров",
    "корпоративный сайт nextjs",
    "бессерверный сайт vercel",
    "few hands studio",
  ],
  alternates: {
    canonical: "https://fewhands.com/development",
  },
  openGraph: {
    title: "Создание сайтов на Next.js с нуля | Few Hands Studio",
    description:
      "Разработка высоконагруженных сайтов и веб-витрин на чистом стеке Next.js. Загрузка < 0.8с, 100% защита от взлома, передача прав на репозиторий.",
    url: "https://fewhands.com/development",
    siteName: "Few Hands Studio",
    locale: "ru_RU",
    type: "website",
  },
};

export default function DevelopmentPage() {
  return <DevelopmentView />;
}
