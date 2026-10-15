import { Metadata } from "next";
import { PortfolioView } from "@/components/PortfolioView";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Portfolio | Few Hands",
  description:
    "Showcase of production web platforms engineered on Next.js, legacy CMS migrations (WordPress, Tilda, Bitrix), highload e-commerce catalogs, and generative AI video production. PageSpeed 95-100 benchmarks.",
  keywords: [
    "web engineering portfolio",
    "Next.js case studies",
    "CMS migration benchmarks",
    "Few Hands portfolio",
    "ecommerce engineering cases",
    "AI video production examples",
  ],
  alternates: {
    canonical: "https://fewhands.com/portfolio",
  },
  openGraph: {
    title: "Case Studies & Engineering Portfolio | Few Hands",
    description:
      "Production case studies of Next.js web applications, high-performance migrations, and AI media production with 95-100 Core Web Vitals.",
    url: "https://fewhands.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
