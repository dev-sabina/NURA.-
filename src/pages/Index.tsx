import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
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
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);


  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastX = 0;
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const deltaX = Math.abs(e.clientX - lastX);
      setVelocity(deltaX);
      lastX = e.clientX;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

 
  const dynamicRotation = Math.min(velocity / 10, 30);

  return (
    <div style={{ backgroundColor: "var(--nura-bg)" }} className="relative">
      
      {}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          pointerEvents: "none", 
          zIndex: 9999,
        }}
        className="flex items-center justify-center"
      >
        <motion.div
     
          animate={{ 
            rotate: [ -15, 15, -15 ], 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
         
          whileTap={{ scale: 0.8 }}

          className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ 

            transform: `rotate(${dynamicRotation}deg)`,
            transformOrigin: "center center",
          }}
        >
       
          <span className="text-[38px] md:text-[45px] select-none" style={{ position: "relative" }}>
            🍉
            
        
            <motion.div 
              className="absolute inset-0 bg-white rounded-full blur-[8px] opacity-10" 
              style={{
                filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))",
                pointerEvents: "none"
              }}
              animate={{ opacity: [ 0.1, 0.3, 0.1 ] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>

          {/* Optional: Tiny shadow for "hover" feel */}
          <div className="absolute -bottom-2 w-6 h-1 bg-black/10 rounded-full blur-[2px]" />
        </motion.div>
      </motion.div>

      <Navbar />
      <div style={{ position: "relative" }}>
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

   
      <style>{`
        html, body, * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default Index;