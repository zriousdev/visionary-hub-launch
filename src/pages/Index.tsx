import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import NewsletterSection from "@/components/NewsletterSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <NewsletterSection />
      <DownloadSection />
      <ContactSection />
    </div>
  );
};

export default Index;
