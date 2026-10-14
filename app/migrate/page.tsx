import { Metadata } from "next";
import { MigrateHubView } from "@/components/MigrateHubView";

export const metadata: Metadata = {
  title: "Миграция Сайтов с WordPress, Tilda, Битрикс на Next.js | Few Hands",
  description:
    "Профессиональный перенос сайтов и интернет-магазинов с медленных CMS (WordPress, Tilda, 1C-Битрикс, Webflow, OpenCart, InSales) на Next.js 15. Гарантия 100% сохранения SEO-позиций, ускорение загрузки до 0.8с, обучение персонала.",
  keywords: [
    "миграция сайтов на next.js",
    "перенос сайта с wordpress на nextjs",
    "миграция с тильды на чистый код",
    "перенос интернет магазина с битрикс",
    "ускорение сайта core web vitals",
    "сохранение seo позиций при редизайне",
    "few hands migration hub",
  ],
  alternates: {
    canonical: "https://fewhands.com/migrate",
  },
  openGraph: {
    title: "Миграция Сайтов с CMS на Next.js под Ключ | Few Hands",
    description:
      "Безопасный перенос с WordPress, Tilda, Битрикс на Next.js. Скорость 95-100 Google PageSpeed, сохранение SEO-трафика, обучение персонала.",
    url: "https://fewhands.com/migrate",
    type: "website",
  },
};

export default function MigrationHubPage() {
  return <MigrateHubView />;
}
