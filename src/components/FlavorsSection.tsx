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
      className="relative cursor-pointer my-[2vh] md:my-[4vh] flex items-start"
      style={{ transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s" }}
      onMouseMove={(e) => setCardLeft(`${e.clientX}px`)}
      onMouseLeave={() => {
        setHovered(false);
        setCardLeft("20%");
      }}
    >
      
      <div
        className="hidden md:flex absolute top-1/2 z-[1] flex-col justify-between"
        style={{
          left: cardLeft,
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

      <h4 className="self-center text-[11px] md:text-[15px] font-medium min-w-[8vw] md:min-w-[5vw]">
        {flavor.num}
      </h4>

      <h1
        className="text-[8vw] md:text-[4.9vw] font-bold relative z-[99] ml-[5vw] md:ml-[12vw] text-left"
        style={{
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
          letterSpacing: -2,
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
        className="absolute right-0 font-black text-[35px] md:text-[65px]"
        style={{
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
      className="relative w-full min-h-[60vh] md:h-screen mb-[6vw] px-[4vw] md:px-[6vw] py-[6vh] md:py-[10vh]"
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
        <h6 className="uppercase text-[9px] md:text-[11px] absolute left-[5vw] md:left-[18vw] -top-8">
          Explore Flavors
        </h6>
      </div>

      <div className="mt-4 md:mt-8">
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  );
};

export default FlavorsSection;
