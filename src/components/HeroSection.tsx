import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section ref={ref} className="h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-12 overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, y: 150, skewY: 6 }}
        animate={{ opacity: 1, y: 0, skewY: 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="text-hero will-change-transform"
      >
        NURA
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto"
        style={{ y: taglineY, opacity: taglineOpacity }}
      >
        <div className="text-tagline" style={{ perspective: "800px" }}>
          {["Real fruit", "Pure deliciousness", "Made with joy"].map((text, i) => (
            <div key={text} className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 60, rotateX: -50 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6 + i * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={i === 1 ? "text-foreground font-medium" : ""}
                style={{ transformOrigin: "center bottom" }}
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>

        <div className="text-right">
          {["NATURAL SWEETNESS", "ZERO", "GUILT"].map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-label mb-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
