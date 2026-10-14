import { Metadata } from "next";
import { EstimateView } from "@/components/EstimateView";

export const metadata: Metadata = {
  title: "Калькулятор Сметы Сайта и AI-Видео | Расчет Стоимости Онлайн Few Hands",
  description:
    "Интерактивный расчет стоимости и сроков миграции CMS на Next.js, индивидуальной веб-разработки и AI-видеопродакшна. Прозрачные фиксированные сметы без скрытых переплат.",
  keywords: [
    "калькулятор стоимости сайта",
    "расчет сметы веб разработки",
    "стоимость миграции с wordpress",
    "цена сайта на next.js",
    "стоимость ai видеороликов",
    "few hands estimate calculator",
  ],
  alternates: {
    canonical: "https://fewhands.com/estimate",
  },
  openGraph: {
    title: "Онлайн-Калькулятор Сметы Сайта и AI-Видео | Few Hands",
    description:
      "Рассчитайте точные сроки и стоимость создания сайта или миграции на Next.js за 1 минуту.",
    url: "https://fewhands.com/estimate",
    type: "website",
  },
};

export default function EstimatePage() {
  return <EstimateView />;
}
