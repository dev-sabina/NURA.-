import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      style={{ position: "relative", width: "100%", minHeight: "100vh", backgroundColor: "var(--nura-bg)", textAlign: "center", padding: "6vw 0" }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.8vw", width: "38%", margin: "2vw auto", marginBottom: "6vw", fontWeight: 400 }}
      >
        Is your treat{" "}
        <span className="font-script" style={{ fontSize: "3.4vw", letterSpacing: "0.6vw" }}>just sugar?</span>
      </motion.h3>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", height: "40vh" }}>
        <ComparisonElement title="Typical Candy" imgSrc="/images/candy.webp" isInView={isInView} delay={0} />
        <ComparisonElement title="NURA" imgSrc="/images/right.webp" isInView={isInView} delay={0.2} />
      </div>
    </section>
  );
};

const ComparisonElement = ({ title, imgSrc, isInView, delay }: { title: string; imgSrc: string; isInView: boolean; delay: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={elRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{ width: "25%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
      onMouseMove={(e) => {
        if (!elRef.current) return;
        const rect = elRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left - 100, y: e.clientY - rect.top - 100 });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 style={{ fontSize: "3.3vw", zIndex: 99, fontWeight: 700 }}>{title}</h1>
      <img
        src={imgSrc}
        alt={title}
        style={{
          position: "absolute",
          transform: "rotate(11deg)",
          opacity: hovered ? 1 : 0,
          width: 200, height: 200,
          borderRadius: "100%",
          objectFit: "cover",
          border: "2px solid #ddd",
          boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          left: mousePos.x, top: mousePos.y,
          zIndex: hovered ? 1 : -1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default ComparisonSection;
