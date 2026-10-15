import { Metadata } from "next";
import { EstimateView } from "@/components/EstimateView";

export const metadata: Metadata = {
  title: "Project Estimator & Pricing Matrix | Few Hands",
  description:
    "Interactive pricing calculator for CMS migration to Next.js, bespoke web engineering, and AI video production. Fixed transparent milestones with zero hidden fees.",
  keywords: [
    "website cost calculator",
    "web development estimate",
    "WordPress migration pricing",
    "Next.js website cost",
    "AI video production rates",
    "few hands estimate calculator",
  ],
  alternates: {
    canonical: "https://fewhands.com/estimate",
  },
  openGraph: {
    title: "Project Estimator & Pricing Matrix | Few Hands",
    description:
      "Calculate exact turnaround timelines and fixed engineering budget for custom web applications and Next.js migrations.",
    url: "https://fewhands.com/estimate",
    type: "website",
  },
};

export default function EstimatePage() {
  return <EstimateView />;
}
