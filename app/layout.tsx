import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { LogoProvider } from "@/components/LogoContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Few Hands — Boutique Web Engineering, CMS Migration & AI Media",
  description:
    "Engineering migration of websites from WordPress, Tilda, Webflow, Bitrix to Next.js in partnership with GoMVP. Ongoing website retainer support and turnkey generative AI video production.",
  keywords: [
    "Next.js",
    "CMS migration",
    "WordPress to Next.js",
    "Tilda migration",
    "Bitrix migration",
    "website retainer support",
    "monthly maintenance",
    "AI video avatars",
    "YouTube production",
    "GoMVP partner",
    "few hands",
  ],
  authors: [{ name: "Few Hands" }],
  openGraph: {
    title: "Few Hands — Boutique Web Engineering, CMS Migration & AI Media",
    description:
      "Modernize legacy platforms to Next.js in partnership with GoMVP, monthly retainer support, and AI video production.",
    url: "https://fewhands.com",
    siteName: "Few Hands",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased text-[#2d263b] bg-[#faf9fb] selection:bg-[#352f44] selection:text-[#faf9fb]">
        <AnimatedBackground />
        <LanguageProvider>
          <LogoProvider>
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </LogoProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
