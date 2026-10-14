import { Metadata } from "next";
import { MaintenanceView } from "@/components/MaintenanceView";

export const metadata: Metadata = {
  title: "Абонентская техподдержка сайтов и обучение персонала | Few Hands Studio",
  description:
    "Надежная техническая поддержка сайтов по фиксированной абонплате от $190/мес. Обучение контент-менеджеров, 24/7 мониторинг доступности, быстрое внесение правок и SLA гарантии.",
  keywords: [
    "техподдержка сайтов абонплата",
    "абонентское обслуживание сайтов",
    "поддержка next.js сайтов",
    "обучение персонала управлению сайтом",
    "сопровождение интернет магазина",
    "retainer поддержка веб студия",
    "uptime мониторинг 24 7",
    "few hands support",
  ],
  alternates: {
    canonical: "https://fewhands.com/maintenance",
  },
  openGraph: {
    title: "Абонентская техподдержка сайтов и обучение персонала | Few Hands Studio",
    description:
      "Профессиональное сопровождение веб-проектов по фиксированному тарифу Retainer. Обучение вашей команды, круглосуточный мониторинг, резервные копии и быстрый ответ по SLA.",
    url: "https://fewhands.com/maintenance",
    siteName: "Few Hands Studio",
    locale: "ru_RU",
    type: "website",
  },
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
