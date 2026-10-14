import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты студии Few Hands | Email, WhatsApp, Заявка",
  description:
    "Свяжитесь с нами для аудита сайта, миграции с CMS или заказа AI-видеоаватаров. Быстрый ответ по почте и в WhatsApp в течение 1–2 часов.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-sky-400">Контакты</span>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
