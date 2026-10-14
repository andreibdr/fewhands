import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Контакты Студии Few Hands | Обсудить Проект Миграции или Разработки",
  description:
    "Свяжитесь со студией Few Hands для аудита сайта, расчета сметы на перенос с CMS на Next.js или заказа AI-видеопродакшна. Прямая почта web@fewhands.com, ответ в течение 1 рабочего дня.",
  keywords: [
    "контакты few hands",
    "заказать миграцию сайта",
    "аудит кода сайта",
    "few hands контакты",
    "web@fewhands.com",
    "разработка сайтов контакты",
  ],
  alternates: {
    canonical: "https://fewhands.com/contact",
  },
  openGraph: {
    title: "Контакты Студии Few Hands | Обсудить Проект",
    description:
      "Прямая связь с ведущими разработчиками Few Hands. Экспресс-аудит сайта, расчет сметы и консультации.",
    url: "https://fewhands.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
