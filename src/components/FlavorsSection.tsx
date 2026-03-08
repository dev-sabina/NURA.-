import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const flavors = [
  { id: "strawberry", num: "01", name: "Strawberry", subtitle: "real strawberry", color: "rgb(255, 99, 132)" },
  { id: "mango", num: "02", name: "Mango", subtitle: "real mango", color: "rgb(255, 208, 0)" },
  { id: "mixedberry", num: "03", name: "Mixed Berry", subtitle: "berries blend", color: "rgb(153, 50, 204)" },
  { id: "appleburst", num: "04", name: "Apple Burst", subtitle: "crisp apple", color: "rgb(60, 179, 113)" },
  { id: "citruszing", num: "05", name: "Citrus Zing", subtitle: "citrus fruits", color: "rgb(255, 255, 0)" },
  { id: "flavormix", num: "06", name: "Flavor Mix Pack", subtitle: "all your favorites", color: "rgb(255, 195, 145)" },
];

const FlavorCard = ({ flavor }: { flavor: typeof flavors[0] }) => {
  const [hovered, setHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
  };

  return (
    <div
      ref={ref}
      className="flex items-start relative cursor-pointer"
      style={{
        margin: "4vh 0",
        transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Floating colored card */}
      <div
        className="absolute z-[1] flex flex-col justify-between"
        style={{
          top: "50%",
          left: hovered ? `${mouseX}px` : "20%",
          transform: `translate(-50%, -50%) rotate(${hovered ? 20 : 0}deg)`,
          height: 300,
          width: 250,
          borderRadius: 20,
          color: "black",
          padding: "20px 25px",
          opacity: hovered ? 1 : 0,
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 4s",
          textTransform: "uppercase",
          backgroundColor: flavor.color,
          position: "fixed",
          pointerEvents: "none",
        }}
      >
        <h2 style={{ fontSize: 33, fontWeight: 100 }}>
          NURA<br />{flavor.num}
        </h2>
        <h3 style={{ fontSize: 15, position: "absolute", top: "80%", left: 25 }}>
          made with: {flavor.subtitle}
        </h3>
      </div>

      {/* Number */}
      <h4
        className="self-center"
        style={{
          fontSize: 15,
          fontWeight: 500,
          minWidth: "5vw",
        }}
      >
        {flavor.num}
      </h4>

      {/* Fruit name */}
      <h1
        style={{
          fontSize: "4.9vw",
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
          marginLeft: "12vw",
          textAlign: "left",
          position: "relative",
          zIndex: 99,
          fontWeight: 700,
          letterSpacing: -5,
          WebkitTextStroke: "1px var(--nura-text-nav)",
          color: hovered ? "var(--nura-bg)" : "var(--nura-text)",
        }}
      >
        {flavor.name}
      </h1>

      {/* Arrow */}
      <p
        style={{
          position: "absolute",
          right: 0,
          fontWeight: 900,
          fontSize: 65,
          opacity: hovered ? 1 : 0,
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1.3s",
        }}
      >
        ↗
      </p>
    </div>
  );
};

const FlavorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.7], ["20%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{
        height: "100vh",
        marginBottom: "6vw",
        padding: "10vh 6vw",
      }}
    >
      {/* Animated line */}
      <div className="relative">
        <motion.div
          style={{
            height: 2,
            backgroundColor: "var(--nura-text-dim)",
            width: lineWidth,
          }}
        />
        <h6
          style={{
            textTransform: "uppercase",
            fontSize: 11,
            position: "absolute",
            left: "16vw",
            top: "-1.5vh",
          }}
        >
          Explore Flavors
        </h6>
      </div>

      <div className="mt-8">
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  );
};

export default FlavorsSection;
