import { Metadata } from "next";
import { MaintenanceView } from "@/components/MaintenanceView";

export const metadata: Metadata = {
  title: "Website Retainer Support & Maintenance Services | Few Hands",
  description:
    "Predictable monthly retainer support for web platforms from $190/mo. Team onboarding, 24/7 uptime monitoring, rapid UI/UX sprints, and enterprise SLAs.",
  keywords: [
    "website retainer support",
    "monthly website maintenance",
    "Next.js web maintenance",
    "retainer support web studio",
    "ecommerce maintenance",
    "24/7 uptime monitoring",
    "Few Hands maintenance",
  ],
  alternates: {
    canonical: "https://fewhands.com/maintenance",
  },
  openGraph: {
    title: "Website Retainer Support & Maintenance Services | Few Hands",
    description:
      "Predictable monthly retainer support for web platforms. Round-the-clock monitoring, automated backups, staff training, and rapid SLA turnaround.",
    url: "https://fewhands.com/maintenance",
    siteName: "Few Hands Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
