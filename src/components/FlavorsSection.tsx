import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const flavors = [
  {
    id: "strawberry",
    num: "01",
    name: "Strawberry",
    subtitle: "real strawberry",
    color: "rgb(255, 99, 132)",
  },
  {
    id: "mango",
    num: "02",
    name: "Mango",
    subtitle: "real mango",
    color: "rgb(255, 208, 0)",
  },
  {
    id: "mixedberry",
    num: "03",
    name: "Mixed Berry",
    subtitle: "berries blend",
    color: "rgb(153, 50, 204)",
  },
  {
    id: "appleburst",
    num: "04",
    name: "Apple Burst",
    subtitle: "crisp apple",
    color: "rgb(60, 179, 113)",
  },
  {
    id: "citruszing",
    num: "05",
    name: "Citrus Zing",
    subtitle: "citrus fruits",
    color: "rgb(255, 255, 0)",
  },
  {
    id: "flavormix",
    num: "06",
    name: "Flavor Mix Pack",
    subtitle: "all your favorites",
    color: "rgb(255, 195, 145)",
  },
];

const FlavorCard = ({ flavor }: { flavor: (typeof flavors)[0] }) => {
  const [hovered, setHovered] = useState(false);
  const [cardLeft, setCardLeft] = useState("20%");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        cursor: "pointer",
        margin: "4vh 0",
        transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
      }}
      onMouseMove={(e) => {
        setCardLeft(`${e.clientX}px`);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setCardLeft("20%");
      }}
    >
      {/* Floating card - absolutely positioned in section */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: cardLeft,
          zIndex: 1,
          transform: `translate(-50%, -50%) rotate(${hovered ? 20 : 0}deg)`,
          height: 300,
          width: 250,
          borderRadius: 20,
          color: "black",
          padding: "20px 25px",
          opacity: hovered ? 1 : 0,
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 4s, opacity 0.5s",
          textTransform: "uppercase",
          backgroundColor: flavor.color,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontSize: 33, fontWeight: 100 }}>
          NURA
          <br />
          {flavor.num}
        </h2>
        <h3 style={{ fontSize: 15, position: "absolute", top: "80%" }}>
          made with: {flavor.subtitle}
        </h3>
      </div>

      <h4
        style={{
          alignSelf: "center",
          fontSize: 15,
          fontWeight: 500,
          minWidth: "5vw",
        }}
      >
        {flavor.num}
      </h4>

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
        onMouseEnter={() => {
          setHovered(true);
          setCardLeft("40%");
        }}
      >
        {flavor.name}
      </h1>

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

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        marginBottom: "6vw",
        padding: "10vh 6vw",
      }}
    >
      <div
        style={{
          height: 2,
          backgroundColor: "var(--nura-text-dim)",
          width: isInView ? "100%" : "20%",
          transition: "width 2s cubic-bezier(0.19, 1, 0.22, 1)",
          position: "relative",
        }}
      >
        <h6
          style={{
            textTransform: "uppercase",
            fontSize: 11,
            position: "absolute",
            left: "17vw",
            top: -18,
          }}
        >
          Explore Flavors
        </h6>
      </div>

      <div style={{ marginTop: 32 }}>
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  );
};

export default FlavorsSection;
