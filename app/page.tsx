import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MigrationSection } from "@/components/MigrationSection";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { VideoAvatarSection } from "@/components/VideoAvatarSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MigrationSection />
        <DevelopmentSection />
        <VideoAvatarSection />
        <PortfolioSection />
        <CostCalculator />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
