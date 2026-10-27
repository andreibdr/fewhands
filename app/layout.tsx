import type { Metadata } from "next";
import Script from "next/script";
import { Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { LogoProvider } from "@/components/LogoContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Analytics } from "@vercel/analytics/next";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fewhands.com"),
  title: {
    default: "Few Hands - Boutique Web Engineering, CMS Migration & AI Media",
    template: "%s | Few Hands Studio",
  },
  description:
    "Engineering migration of websites from WordPress, Tilda, Webflow, Bitrix to Next.js in partnership with GoMVP. Ongoing website retainer support and turnkey generative AI video production. Est. 2008 by Andrei Ryzhenko.",
  keywords: [
    "Next.js",
    "CMS migration",
    "WordPress to Next.js",
    "Tilda migration",
    "Bitrix migration",
    "Webflow migration",
    "website retainer support",
    "monthly maintenance",
    "AI video avatars",
    "boutique web studio",
    "Andrei Ryzhenko",
    "GoMVP partner",
    "few hands",
  ],
  authors: [
    { name: "Andrei Ryzhenko", url: "https://fewhands.com/about" },
    { name: "Few Hands" },
  ],
  creator: "Andrei Ryzhenko",
  publisher: "Few Hands Studio",
  alternates: {
    canonical: "https://fewhands.com",
    languages: {
      en: "https://fewhands.com",
      ru: "https://fewhands.com",
      sr: "https://fewhands.com",
      "x-default": "https://fewhands.com",
    },
  },
  openGraph: {
    title: "Few Hands - Boutique Web Engineering, CMS Migration & AI Media",
    description:
      "Modernize legacy platforms to Next.js with sub-second performance. Senior-only boutique engineering studio founded in 2008 by Andrei Ryzhenko.",
    url: "https://fewhands.com",
    siteName: "Few Hands Studio",
    locale: "en_US",
    alternateLocale: ["ru_RU", "sr_RS"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Few Hands - Boutique Web Engineering & Next.js Migration",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Few Hands - Boutique Web Engineering, CMS Migration & AI Media",
    description:
      "Senior-only boutique web engineering since 2008. Migrating WordPress, Tilda, Webflow to decoupled Next.js with sub-second performance.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    yandex: "e8981cf59d5d38bb",
  },
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://fewhands.com/#organization",
      name: "Few Hands",
      alternateName: ["Few Hands Web Engineering Studio", "Few Hands Studio"],
      url: "https://fewhands.com",
      logo: "https://fewhands.com/logo.png",
      image: "https://fewhands.com/og-image.jpg",
      email: "web@fewhands.com",
      foundingDate: "2008",
      founder: {
        "@type": "Person",
        "@id": "https://fewhands.com/#founder",
        name: "Andrei Ryzhenko",
        jobTitle: "Founder & Lead Software Architect",
        url: "https://fewhands.com/about",
        image: "https://fewhands.com/andrei-ryzhenko.webp",
        description: "Web engineering pioneer since 1998, founder of Few Hands Studio.",
      },
      priceRange: "$$",
      currenciesAccepted: "USD, EUR, RSD, RUB",
      paymentAccepted: "Wire Transfer, Card, Crypto",
      knowsLanguage: ["en", "ru", "sr"],
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "European Union" },
        { "@type": "Country", name: "Serbia" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Few Hands Core Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CMS to Next.js Migration",
              url: "https://fewhands.com/migrate",
              description: "Turnkey architectural migration from WordPress, Tilda, Webflow to decoupled Next.js with 100% SEO preservation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Boutique Web Development",
              url: "https://fewhands.com/development",
              description: "Custom web application engineering with Next.js, TypeScript, and Tailwind CSS without agency overhead.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Retainer Support & SLA",
              url: "https://fewhands.com/maintenance",
              description: "Dedicated monthly engineering oversight, security audits, Core Web Vitals maintenance, and rapid issue resolution.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative AI Video Production",
              url: "https://fewhands.com/ai-video",
              description: "Production of photorealistic digital AI video presenters with native lip-sync in 30+ languages.",
            },
          },
        ],
      },
      sameAs: [
        "https://github.com/andreibdr/fewhands",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://fewhands.com/#website",
      url: "https://fewhands.com",
      name: "Few Hands Web Engineering Studio",
      publisher: {
        "@id": "https://fewhands.com/#organization",
      },
      inLanguage: ["en", "ru", "sr"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="yandex-verification" content="e8981cf59d5d38bb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
      </head>
      <body className={`min-h-screen flex flex-col antialiased text-[#2d263b] bg-[#faf9fb] selection:bg-[#352f44] selection:text-[#faf9fb] ${caveat.variable}`}>
        <AnimatedBackground />
        <LanguageProvider>
          <LogoProvider>
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
            <Analytics />
          </LogoProvider>
        </LanguageProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72W06KDJEZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-72W06KDJEZ');
          `}
        </Script>
      </body>
    </html>
  );
}
