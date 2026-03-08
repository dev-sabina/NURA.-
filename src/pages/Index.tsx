import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavorsSection from "@/components/FlavorsSection";
import QuoteSection from "@/components/QuoteSection";
import MarqueeSection from "@/components/MarqueeSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FlavorsSection />
      <QuoteSection />
      <MarqueeSection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
