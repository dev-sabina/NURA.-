import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full text-center"
      style={{
        height: "100vh",
        backgroundColor: "var(--nura-bg)",
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.8vw",
          width: "38%",
          margin: "2vw auto",
          marginTop: "6vw",
          marginBottom: "6vw",
          fontWeight: 400,
        }}
      >
        Is your treat{" "}
        <span className="font-script" style={{ fontSize: "3.4vw", letterSpacing: "0.6vw" }}>
          just sugar?
        </span>
      </motion.h3>

      <div
        className="flex items-center justify-around"
        style={{ height: "40vh" }}
      >
        <ComparisonElement
          title="Typical Candy"
          imgSrc="/images/candy.webp"
          isInView={isInView}
          delay={0}
        />
        <ComparisonElement
          title="NURA"
          imgSrc="/images/right.webp"
          isInView={isInView}
          delay={0.2}
        />
      </div>
    </section>
  );
};

const ComparisonElement = ({
  title,
  imgSrc,
  isInView,
  delay,
}: {
  title: string;
  imgSrc: string;
  isInView: boolean;
  delay: number;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - 100,
      y: e.clientY - rect.top - 100,
    });
  };

  return (
    <motion.div
      ref={elRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: "25%", height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1
        style={{
          fontSize: "3.3vw",
          zIndex: 99,
          fontWeight: 700,
          transition: "opacity cubic-bezier(0.19, 1, 0.22, 1) 0.5s",
        }}
      >
        {title}
      </h1>
      <img
        src={imgSrc}
        alt={title}
        style={{
          position: "absolute",
          transform: "rotate(11deg)",
          opacity: hovered ? 1 : 0,
          width: 200,
          height: 200,
          borderRadius: "100%",
          objectFit: "cover",
          border: "2px solid #ddd",
          boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          left: mousePos.x,
          top: mousePos.y,
          zIndex: hovered ? 1 : -22,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default ComparisonSection;
