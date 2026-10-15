import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Few Hands Studio | Discuss Your Web Project",
  description:
    "Get in touch with Few Hands Studio for site audits, CMS migration estimates to Next.js, and generative AI video inquiries. Direct email: web@fewhands.com.",
  keywords: [
    "contact Few Hands",
    "request website migration",
    "web performance audit",
    "web engineering consultation",
    "web@fewhands.com",
    "hire Next.js developers",
  ],
  alternates: {
    canonical: "https://fewhands.com/contact",
  },
  openGraph: {
    title: "Contact Few Hands Studio | Discuss Your Project",
    description:
      "Direct communication with senior engineering leads at Few Hands. Complimentary technical audit and project estimates.",
    url: "https://fewhands.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
