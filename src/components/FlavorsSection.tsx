import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const flavors = [
  { num: "01", name: "Strawberry", subtitle: "real strawberry" },
  { num: "02", name: "Mango", subtitle: "real mango" },
  { num: "03", name: "Mixed Berry", subtitle: "berries blend" },
  { num: "04", name: "Apple Burst", subtitle: "crisp apple" },
  { num: "05", name: "Citrus Zing", subtitle: "citrus fruits" },
  { num: "06", name: "Flavor Mix Pack", subtitle: "all your favorites" },
];

const FlavorCard = ({ flavor, index }: { flavor: typeof flavors[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative border-t py-12 md:py-16 px-2 cursor-pointer"
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>
              NURA
            </span>
            <span className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>
              {flavor.num}
            </span>
          </div>
          <p className="text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            made with: {flavor.subtitle}
          </p>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold group-hover:translate-x-4 transition-transform duration-500"
            style={{ color: "hsl(var(--primary))" }}>
            {flavor.name}
          </h3>
        </div>

        <span className="flavor-number select-none hidden md:block">
          {flavor.num}
        </span>
      </div>
    </motion.div>
  );
};

const FlavorsSection = () => {
  return (
    <section id="flavors" className="py-24 md:py-32 px-6 md:px-12">
      {flavors.map((flavor, i) => (
        <FlavorCard key={flavor.num} flavor={flavor} index={i} />
      ))}
    </section>
  );
};

export default FlavorsSection;
