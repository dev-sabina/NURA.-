import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MarqueeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-linked horizontal movement
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  const rows = [
    { words: ["FRUIT", "JOY"], direction: 1 },
    { words: ["HEALTHY", "SWEET"], direction: -1 },
    { words: ["FRUIT", "JOY"], direction: 1 },
    { words: ["HEALTHY", "SWEET"], direction: -1 },
    { words: ["FRUIT", "JOY"], direction: 1 },
    { words: ["HEALTHY", "SWEET"], direction: -1 },
  ];

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      {rows.map((row, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            style={{ x: row.direction === 1 ? x1 : x2 }}
            className="flex whitespace-nowrap"
          >
            {Array(20).fill(null).map((_, j) => (
              <span key={j} className="marquee-text flex-shrink-0">
                {row.words.map((word, k) => (
                  <span
                    key={k}
                    style={{
                      color: k % 2 === 0
                        ? "hsl(var(--primary) / 0.08)"
                        : "transparent",
                      WebkitTextStroke: k % 2 === 0
                        ? "1px hsl(var(--primary) / 0.15)"
                        : "1px hsl(var(--primary) / 0.08)",
                    }}
                  >
                    {word}
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
