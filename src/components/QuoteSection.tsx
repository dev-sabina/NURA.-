import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        padding: "1vw 4vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ fontSize: "7.9vw", fontWeight: 700, lineHeight: 1.05 }}
      >
        COULDN'T STOP<br />
        UNTIL THEY WERE GONE.<br />
        ZERO GUILT.
      </motion.h1>
    </section>
  );
};

export default QuoteSection;
