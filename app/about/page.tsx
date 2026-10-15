import { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Few Hands - Boutique Web Engineering Studio & Manifesto",
  description:
    "Engineering history, core philosophy, and boutique manifesto of Few Hands (Est. 2008). Senior-only web engineering, zero CMS bloat, uncompromised performance, and strategic alliance with GoMVP.",
  keywords: [
    "about few hands",
    "boutique web engineering",
    "senior web engineers",
    "GoMVP engineering partner",
    "web development manifesto",
    "est 2008 web studio",
    "clean code Next.js studio",
    "no CMS bloat",
    "few hands history",
  ],
  alternates: {
    canonical: "https://fewhands.com/about",
  },
  openGraph: {
    title: "About Few Hands - Boutique Web Engineering Studio & Manifesto",
    description:
      "Boutique web engineering since 2008. Why a compact senior-only studio delivers superior speed, clean architecture, and total code ownership over the agency assembly line.",
    url: "https://fewhands.com/about",
    siteName: "Few Hands Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
