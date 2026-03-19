import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MarqueeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-2000, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = [
    { type: "fruit", direction: 1 },
    { type: "healthy", direction: -1 },
    { type: "fruit", direction: 1 },
    { type: "healthy", direction: -1 },
    { type: "fruit", direction: 1 },
    { type: "healthy", direction: -1 },
  ];

  const renderWords = (type: string) => {
    const words =
      type === "fruit"
        ? [
            { text: "FRUIT", outline: false },
            { text: "JOY", outline: true },
          ]
        : [
            { text: "HEALTHY", outline: false },
            { text: "SWEET", outline: true },
          ];

    return Array(20)
      .fill(null)
      .flatMap((_, i) =>
        words.map((word, j) => (
          <span
            key={`${i}-${j}`}
            style={{
              color: word.outline ? "transparent" : "var(--nura-text)",
              WebkitTextStroke: word.outline
                ? "1px var(--nura-text-dim)"
                : "none",
              marginRight: isMobile ? "1vw" : "0", 
            }}
          >
            {word.text}
          </span>
        ))
      );
  };

  return (
    <section ref={ref} className="overflow-hidden select-none">
      {rows.map((row, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.h1
            style={{
              fontSize: isMobile ? "16vw" : "10vw", 
              textTransform: "uppercase",
              cursor: "default",
              lineHeight: isMobile ? "18vw" : "25vh", 
              whiteSpace: "nowrap",
              fontWeight: 700,
              x: row.direction === 1 ? x1 : x2,
              display: "flex",
              gap: 0,
            }}
          >
            {renderWords(row.type)}
          </motion.h1>
        </div>
      ))}
    </section>
  );
};

export default MarqueeSection;
