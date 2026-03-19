import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "auto" : "100vh",
        padding: "5vw 4vw",
        marginTop: isMobile ? "0" : "10vh",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          fontSize: "7.9vw",
          fontWeight: 700,
          lineHeight: 1.05,
          marginTop: isMobile ? 0 : "10vh",
        }}
      >
        COULDN'T STOP
        <br />
        UNTIL THEY WERE GONE.
        <br />
        ZERO GUILT.
      </motion.h1>
    </section>
  );
};

export default QuoteSection;
