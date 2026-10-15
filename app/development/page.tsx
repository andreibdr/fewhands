import { Metadata } from "next";
import { DevelopmentView } from "@/components/DevelopmentView";

export const metadata: Metadata = {
  title: "Custom Web Engineering & Next.js Development | Few Hands Studio",
  description:
    "Engineering high-performance web products, e-commerce storefronts, and corporate portals on Next.js 15, React 19, and TypeScript. Google PageSpeed 100/100 and unencumbered code ownership.",
  keywords: [
    "Next.js web development",
    "custom web engineering",
    "React TypeScript web application",
    "high-performance landing page",
    "headless e-commerce catalog",
    "enterprise portal development",
    "serverless edge architecture",
    "few hands studio",
  ],
  alternates: {
    canonical: "https://fewhands.com/development",
  },
  openGraph: {
    title: "Custom Web Engineering & Next.js Development | Few Hands Studio",
    description:
      "Modern web products engineered on Next.js 15. Sub-second load speeds, zero CMS bloat, and complete private repository ownership.",
    url: "https://fewhands.com/development",
    siteName: "Few Hands Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function DevelopmentPage() {
  return <DevelopmentView />;
}
