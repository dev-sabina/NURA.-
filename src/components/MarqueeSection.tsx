import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MarqueeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1200, 0]);

  const rows = [
    { words: [{ text: "FRUIT", filled: true }, { text: "JOY", filled: false }], direction: 1 },
    { words: [{ text: "HEALTHY", filled: false }, { text: "SWEET", filled: true }], direction: -1 },
    { words: [{ text: "FRUIT", filled: true }, { text: "JOY", filled: false }], direction: 1 },
    { words: [{ text: "HEALTHY", filled: false }, { text: "SWEET", filled: true }], direction: -1 },
    { words: [{ text: "FRUIT", filled: true }, { text: "JOY", filled: false }], direction: 1 },
    { words: [{ text: "HEALTHY", filled: false }, { text: "SWEET", filled: true }], direction: -1 },
  ];

  return (
    <section ref={ref} className="py-8 overflow-hidden select-none">
      {rows.map((row, i) => (
        <div key={i} className="overflow-hidden leading-none">
          <motion.div
            style={{ x: row.direction === 1 ? x1 : x2 }}
            className="flex whitespace-nowrap"
          >
            {Array(30).fill(null).map((_, j) => (
              <span key={j} className="flex-shrink-0 flex items-center">
                {row.words.map((word, k) => (
                  <span
                    key={k}
                    className="inline-block px-1"
                    style={{
                      fontSize: "clamp(4rem, 10vw, 10rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      color: word.filled
                        ? "hsl(var(--primary) / 0.06)"
                        : "transparent",
                      WebkitTextStroke: word.filled
                        ? "1.5px hsl(var(--primary) / 0.12)"
                        : "1.5px hsl(var(--primary) / 0.06)",
                    }}
                  >
                    {word.text}
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default MarqueeSection;
