import { Metadata } from "next";
import { AiVideoView } from "@/components/AiVideoView";

export const metadata: Metadata = {
  title: "AI Видео и Цифровые Аватары для Сайта под Ключ | Few Hands",
  description:
    "Продакшн AI-видео, виртуальных спикеров и мультиязычных аватаров для бизнеса. Повышение конверсии сайта до +40%, ролики для YouTube, Shorts, Reels за 24 часа без студий и операторов.",
  keywords: [
    "AI видео для сайта",
    "цифровые аватары спикеры",
    "генеративные видео нейросети",
    "мультиязычные аватары для бизнеса",
    "видеомаркетинг нейросети",
    "видеопродакшн AI",
    "HeyGen Synthesia интеграция",
    "few hands ai video",
  ],
  alternates: {
    canonical: "https://fewhands.com/ai-video",
  },
  openGraph: {
    title: "AI Видео и Цифровые Аватары для Сайта | Few Hands",
    description:
      "Мультиязычные цифровые аватары, продающие презентации и видеоролики для YouTube/Reels. Сократите расходы на видеопродакшн на 85%.",
    url: "https://fewhands.com/ai-video",
    type: "website",
  },
};

export default function AiVideoPage() {
  return <AiVideoView />;
}
