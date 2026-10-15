import { Metadata } from "next";
import { MigrateHubView } from "@/components/MigrateHubView";

export const metadata: Metadata = {
  title: "CMS Migration to Next.js (WordPress, Tilda, Bitrix) | Few Hands",
  description:
    "Engineering migration of websites and stores from legacy CMS (WordPress, Tilda, 1C-Bitrix, Webflow, OpenCart, InSales) to Next.js 15. 100% SEO ranking equity preservation, sub-second TTFB, and team training.",
  keywords: [
    "CMS migration to Next.js",
    "WordPress to Next.js migration",
    "Tilda migration to clean code",
    "Bitrix store migration",
    "Core Web Vitals speed optimization",
    "SEO preservation during redesign",
    "Few Hands migration hub",
  ],
  alternates: {
    canonical: "https://fewhands.com/migrate",
  },
  openGraph: {
    title: "Zero-Downtime CMS Migration to Next.js | Few Hands",
    description:
      "Safe and reliable migration from WordPress, Tilda, Bitrix to Next.js. 95-100 Google PageSpeed, full organic SEO preservation, and team training.",
    url: "https://fewhands.com/migrate",
    type: "website",
  },
};

export default function MigrationHubPage() {
  return <MigrateHubView />;
}
