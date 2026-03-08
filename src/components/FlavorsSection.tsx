import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const flavors = [
  { num: "01", name: "Strawberry", subtitle: "real strawberry", color: "0 70% 50%" },
  { num: "02", name: "Mango", subtitle: "real mango", color: "40 90% 50%" },
  { num: "03", name: "Mixed Berry", subtitle: "berries blend", color: "280 60% 45%" },
  { num: "04", name: "Apple Burst", subtitle: "crisp apple", color: "120 60% 40%" },
  { num: "05", name: "Citrus Zing", subtitle: "citrus fruits", color: "50 90% 55%" },
  { num: "06", name: "Flavor Mix Pack", subtitle: "all your favorites", color: "330 70% 50%" },
];

const FlavorCard = ({ flavor, index }: { flavor: typeof flavors[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
      className="group relative border-t py-8 md:py-12 cursor-pointer overflow-hidden"
      style={{ borderColor: "hsl(var(--border))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 0.08 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: `linear-gradient(90deg, hsl(${flavor.color} / 0.2), transparent)` }}
      />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4 md:gap-10 flex-1">
          {/* Expanding colored card */}
          <motion.div
            animate={hovered ? { width: 180, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="hidden md:flex flex-col justify-between overflow-hidden rounded-xl h-24 flex-shrink-0"
            style={{ background: `hsl(${flavor.color} / 0.12)`, borderLeft: `3px solid hsl(${flavor.color})` }}
          >
            <div className="p-3">
              <p className="text-xs font-bold whitespace-nowrap" style={{ color: `hsl(${flavor.color})` }}>
                NURA {flavor.num}
              </p>
              <p className="text-[10px] whitespace-nowrap mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                made with: {flavor.subtitle}
              </p>
            </div>
          </motion.div>

          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 md:mb-0">
              <span className="text-label hidden md:inline" style={{ color: "hsl(var(--muted-foreground))" }}>NURA</span>
              <span className="text-label hidden md:inline" style={{ color: "hsl(var(--muted-foreground))" }}>{flavor.num}</span>
            </div>
            <motion.h3
              animate={{ x: hovered ? 15 : 0, color: hovered ? `hsl(${flavor.color})` : "hsl(var(--primary))" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold whitespace-nowrap"
            >
              {flavor.name}
            </motion.h3>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <span
            className="text-6xl md:text-8xl font-black select-none hidden lg:block"
            style={{
              color: "transparent",
              WebkitTextStroke: `1px hsl(${hovered ? flavor.color : "var(--primary)"} / ${hovered ? 0.3 : 0.08})`,
              transition: "all 0.5s",
            }}
          >
            {flavor.num}
          </span>
          <motion.span
            animate={{ x: hovered ? 0 : 15, opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-xl md:text-2xl"
            style={{ color: `hsl(${flavor.color})` }}
          >
            ↗
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const FlavorsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.7], ["0%", "100%"]);

  return (
    <section id="flavors" ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      <div className="relative mb-10">
        <div className="h-[1px] w-full" style={{ background: "hsl(var(--border))" }} />
        <motion.div
          className="absolute top-0 left-0 h-[2px]"
          style={{ width: lineWidth, background: "hsl(var(--primary))" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-label mt-5"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Explore Flavors
        </motion.p>
      </div>

      {flavors.map((flavor, i) => (
        <FlavorCard key={flavor.num} flavor={flavor} index={i} />
      ))}

      {/* Last border */}
      <div className="border-t" style={{ borderColor: "hsl(var(--border))" }} />
    </section>
  );
};

export default FlavorsSection;
