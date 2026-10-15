import { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: "Few Hands — Web Engineering, CMS Migration & Generative AI Media",
  description:
    "Engineering migration of websites from WordPress, Tilda, 1C-Bitrix to ultra-fast Next.js with 100% SEO ranking equity preservation. Custom web development, monthly retainer support, and AI video production.",
  keywords: [
    "Next.js web development",
    "WordPress to Next.js migration",
    "Tilda migration",
    "Bitrix migration",
    "monthly web retainer support",
    "AI video avatar production",
    "Few Hands web studio",
    "fast React TypeScript websites",
  ],
  alternates: {
    canonical: "https://fewhands.com",
  },
  openGraph: {
    title: "Few Hands — Web Engineering, CMS Migration & AI Video",
    description:
      "Freeing web platforms from legacy CMS bloat. Migration to Next.js 15, 100/100 speed, retainer support, and AI video production.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
