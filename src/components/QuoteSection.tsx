import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0.5, 1]);

  const lines = [
    "COULDN'T STOP",
    "UNTIL THEY WERE GONE.",
    "ZERO GUILT.",
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <motion.div ref={ref} className="max-w-6xl mx-auto" style={{ x, opacity }}>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -120, skewX: -3 }}
            animate={isInView ? { opacity: 1, x: 0, skewX: 0 } : {}}
            transition={{
              duration: 1,
              delay: i * 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="text-section-heading"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      <motion.div className="max-w-6xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 60, rotateX: -60 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-tagline"
          style={{ perspective: "600px", transformOrigin: "bottom" }}
        >
          PURE JOY IN EVERY CHEW.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
