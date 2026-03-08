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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
      className="group relative border-t py-10 md:py-14 cursor-pointer overflow-hidden"
      style={{ borderColor: "hsl(var(--border))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.06 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: `hsl(${flavor.color})` }}
      />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-6 md:gap-12 flex-1">
          {/* Info card that reveals on hover */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={hovered ? { width: 200, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="hidden md:flex flex-col justify-between overflow-hidden rounded-xl p-4 h-28 flex-shrink-0"
            style={{ background: `hsl(${flavor.color} / 0.15)` }}
          >
            <div>
              <p className="text-xs font-bold whitespace-nowrap" style={{ color: `hsl(${flavor.color})` }}>
                NURA <br />{flavor.num}
              </p>
            </div>
            <p className="text-[10px] whitespace-nowrap" style={{ color: "hsl(var(--muted-foreground))" }}>
              made with: {flavor.subtitle}
            </p>
          </motion.div>

          <div>
            <div className="flex items-center gap-4 mb-1 md:hidden">
              <span className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>NURA</span>
              <span className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>{flavor.num}</span>
            </div>
            <p className="text-xs mb-2 md:hidden" style={{ color: "hsl(var(--muted-foreground))" }}>
              made with: {flavor.subtitle}
            </p>
            <motion.h3
              animate={{ x: hovered ? 20 : 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              style={{ color: hovered ? `hsl(${flavor.color})` : "hsl(var(--primary))" }}
            >
              {flavor.name}
            </motion.h3>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flavor-number select-none hidden md:block">{flavor.num}</span>
          <motion.div
            animate={{ x: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl"
            style={{ color: `hsl(${flavor.color})` }}
          >
            ↗
          </motion.div>
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
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="flavors" ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      {/* Animated progress line */}
      <div className="relative mb-8">
        <div className="h-[1px] w-full" style={{ background: "hsl(var(--border))" }} />
        <motion.div
          className="absolute top-0 left-0 h-[1px]"
          style={{ width: lineWidth, background: "hsl(var(--primary))" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-label mt-4"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Explore Flavors
        </motion.p>
      </div>

      {flavors.map((flavor, i) => (
        <FlavorCard key={flavor.num} flavor={flavor} index={i} />
      ))}
    </section>
  );
};

export default FlavorsSection;
