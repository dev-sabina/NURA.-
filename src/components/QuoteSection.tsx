import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "COULDN'T STOP",
    "UNTIL THEY WERE GONE.",
    "ZERO GUILT.",
  ];

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="text-section-heading"
          >
            {line}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-tagline max-w-3xl"
        >
          PURE JOY IN EVERY CHEW.
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
