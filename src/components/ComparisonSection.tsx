import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[60vh] md:h-screen text-center hidden md:block" // hidden on mobile
      style={{ backgroundColor: "var(--nura-bg)" }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-[5vw] md:text-[2.8vw] w-[80%] md:w-[38%] mx-auto mt-[8vw] md:mt-[6vw] mb-[6vw] font-normal"
      >
        Is your treat{" "}
        <span
          className="font-script text-[6vw] md:text-[3.4vw]"
          style={{ letterSpacing: "0.6vw" }}
        >
          just sugar?
        </span>
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center justify-around min-h-[30vh] md:h-[40vh] gap-8 md:gap-0 px-4 md:px-0">
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

  return (
    <motion.div
      ref={elRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="w-[80%] md:w-[25%] h-[20vh] md:h-full relative flex items-center justify-center cursor-pointer"
      onMouseMove={(e) => {
        if (!elRef.current) return;
        const rect = elRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left - 100,
          y: e.clientY - rect.top - 100,
        });
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <h1
        className="text-[8vw] md:text-[3.3vw] z-[99] font-bold"
        style={{ transition: "opacity cubic-bezier(0.19, 1, 0.22, 1) 0.5s" }}
      >
        {title}
      </h1>
      <img
        src={imgSrc}
        alt={title}
        className="absolute hidden md:block"
        style={{
          transform: "rotate(11deg)",
          opacity: hovered ? 1 : 0,
          height: "80%",
          width: 200,
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
