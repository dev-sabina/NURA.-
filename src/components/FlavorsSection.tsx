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

// ... rest of your imports and flavors array stay the same

const FlavorCard = ({ flavor }: { flavor: (typeof flavors)[0] }) => {
  const [hovered, setHovered] = useState(false);
  const [cardLeft, setCardLeft] = useState("20%");

  return (
    <div
      className="relative cursor-pointer my-[2vh] md:my-[4vh] flex items-start"
      style={{ transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s" }}
      // Note: For a smoother "following" effect, you might want to use 
      // Framer Motion's useSpring for cardLeft instead of raw state
      onMouseMove={(e) => {
        setHovered(true);
        setCardLeft(`${e.clientX}px`);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setCardLeft("20%");
      }}
    >
      {/* Hovering Card Preview */}
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
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s, opacity 0.5s", // Adjusted transition speed to match CSS
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

      {/* Flavor Number */}
      <h4 className="self-center text-[11px] md:text-[15px] font-medium min-w-[8vw] md:min-w-[5vw]">
        {flavor.num}
      </h4>

      {/* FLAVOR NAME - FONT CHANGED HERE */}
  {/* FLAVOR NAME - FONT CHANGED & FILL EFFECT APPLIED HERE */}
      <h1
        className="relative z-[99] ml-[5vw] md:ml-[12vw] text-left uppercase"
        style={{
          // 1. Specific Font Family from your CSS snippet
          fontFamily: '"Havelock Titling", sans-serif',
          
          // 2. Specific Font Size from your CSS snippet
          fontSize: "4.9vw", // Using explicit 4.9vw
          fontWeight: 700,
          
          // 3. Specific Spacing/Stroke from your CSS snippet
          letterSpacing: "-5px",
          WebkitTextStroke: "1px #cecece", // Default outline color

          // 4. Cubic Bezier from your CSS snippet
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",

          // 5. FILL EFFECT LOGIC:
          // Normally: transparent fill (show just the outline)
          // On Hover: solid white fill
          color: hovered ? "white" : "transparent",

          // OPTIONAL refinement for the outline color on hover (e.g., matching the fill)
          // WebkitTextStrokeColor: hovered ? "white" : "#cecece",
        }}
        // Handlers are likely on the parent <div>, but adding them here for safety if isolated
        onMouseEnter={() => {
          setHovered(true);
          setCardLeft("40%");
        }}
        onMouseLeave={() => {
          setHovered(false);
          setCardLeft("20%");
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

// ... rest of FlavorsSection stays the same

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
