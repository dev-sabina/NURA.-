import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavorsSection from "@/components/FlavorsSection";
import QuoteSection from "@/components/QuoteSection";
import ContentSection from "@/components/ContentSection";
import MarqueeSection from "@/components/MarqueeSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ backgroundColor: "var(--nura-bg)", position: "relative" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FlavorsSection />
      <QuoteSection />
      <ContentSection />
      <MarqueeSection />
      <ComparisonSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
