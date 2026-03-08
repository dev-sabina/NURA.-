import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{
        height: "100vh",
        padding: "1vw 4vw",
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
        }}
      >
        COULDN'T STOP<br />
        UNTIL THEY WERE GONE.<br />
        ZERO GUILT.
      </motion.h1>
    </section>
  );
};

export default QuoteSection;
