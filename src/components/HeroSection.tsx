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
      className="relative w-full h-[60vh] md:h-[80vh] mb-[8vw] md:mb-[5vw]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-[3vh] md:top-[5vh] left-[5vw] text-[28vw] md:text-[13vw] uppercase tracking-[2px] md:tracking-[7px] font-bold"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        NURA
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-[35vh] md:top-[55vh] left-[5vw] md:left-[20vw] text-[5.5vw] md:text-[3vw] font-thin leading-[4vh] md:leading-[6vh]"
        style={{ color: "var(--nura-text-dim)", y: tagY }}
      >
        Real fruit
        <br />
        Pure deliciousness
        <br />
        Made with joy
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-[52vh] md:top-[58vh] right-[5vw] md:right-[19vw] text-[3vw] md:text-[1.5vw] font-thin leading-[3vh] md:leading-[4vh]"
        style={{ color: "var(--nura-text-dim)", y: tagY }}
      >
        NATURAL SWEETNESS
        <br />
        ZERO
        <br />
        GUILT
      </motion.h3>
    </section>
  );
};

export default HeroSection;
