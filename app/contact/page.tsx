import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contacts & Direct Inquiries | Few Hands Studio",
  description:
    "Direct contact for CMS migration, custom web development, retainer maintenance, and AI video production. Fast reply via email and WhatsApp.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
