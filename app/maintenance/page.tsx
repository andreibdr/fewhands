import { Metadata } from "next";
import { MaintenanceView } from "@/components/MaintenanceView";

export const metadata: Metadata = {
  title: "Абонентское Обслуживание и Техническая Поддержка Сайтов | Few Hands",
  description:
    "Профессиональное техническое сопровождение сайтов по фиксированному тарифу Retainer от $190/мес. Онбординг персонала, 24/7 мониторинг доступности, быстрое внедрение доработок и SLA гарантии.",
  keywords: [
    "техническая поддержка сайтов",
    "абонентское обслуживание сайтов",
    "сопровождение next.js сайтов",
    "retainer поддержка веб студия",
    "поддержка интернет магазина",
    "uptime мониторинг 24 7",
    "few hands maintenance",
  ],
  alternates: {
    canonical: "https://fewhands.com/maintenance",
  },
  openGraph: {
    title: "Абонентское Обслуживание и Техподдержка Сайтов | Few Hands",
    description:
      "Профессиональное сопровождение веб-проектов по фиксированному тарифу Retainer. Круглосуточный мониторинг, резервные копии, онбординг персонала и быстрый ответ по SLA.",
    url: "https://fewhands.com/maintenance",
    siteName: "Few Hands Studio",
    locale: "ru_RU",
    type: "website",
  },
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
