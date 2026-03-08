import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-12 overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, y: 120, skewY: 5 }}
        animate={{ opacity: 1, y: 0, skewY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ y: heroY, opacity: heroOpacity, scale }}
        className="text-hero"
      >
        NURA
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ y: taglineY }}
          className="text-tagline"
        >
          {["Real fruit", "Pure deliciousness", "Made with joy"].map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className={i === 1 ? "text-foreground font-medium" : ""}
              style={{ transformOrigin: "bottom", perspective: "600px" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ y: taglineY }}
          className="text-right"
        >
          {["NATURAL SWEETNESS", "ZERO", "GUILT"].map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
              className="text-label mb-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
