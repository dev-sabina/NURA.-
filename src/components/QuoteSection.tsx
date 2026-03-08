import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);

  const lines = [
    "COULDN'T STOP",
    "UNTIL THEY WERE GONE.",
    "ZERO GUILT.",
  ];

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <motion.div ref={ref} className="max-w-6xl mx-auto" style={{ opacity: sectionOpacity }}>
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: -200, skewX: -5 }}
              animate={isInView ? { opacity: 1, x: 0, skewX: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-section-heading leading-tight"
            >
              {line}
            </motion.p>
          </div>
        ))}
      </motion.div>

      {/* Two large sticky-like text elements */}
      <div className="max-w-6xl mx-auto mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          style={{ x }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-section-heading"
          >
            PURE JOY IN EVERY CHEW.
          </motion.h2>
        </motion.div>

        <motion.div>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-label leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))", fontSize: "1rem", letterSpacing: "0.05em" }}
          >
            THIS IS WHAT HEALTHY CANDY FEELS LIKE
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
