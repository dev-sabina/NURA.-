import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const tagY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        marginBottom: "5vw",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          fontSize: "13vw",
          textTransform: "uppercase",
          position: "absolute",
          top: "5vh",
          left: "5vw",
          letterSpacing: 7,
          fontWeight: 700,
          y: heroY,
          opacity: heroOpacity,
        }}
      >
        NURA
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          top: "55vh",
          left: "20vw",
          fontSize: "3vw",
          fontWeight: 100,
          lineHeight: "6vh",
          color: "var(--nura-text-dim)",
          y: tagY,
        }}
      >
        Real fruit<br />
        Pure deliciousness<br />
        Made with joy
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{
          fontSize: "1.5vw",
          position: "absolute",
          top: "58vh",
          right: "19vw",
          color: "var(--nura-text-dim)",
          fontWeight: 100,
          lineHeight: "4vh",
          y: tagY,
        }}
      >
        NATURAL SWEETNESS<br />
        ZERO<br />
        GUILT
      </motion.h3>
    </section>
  );
};

export default HeroSection;
