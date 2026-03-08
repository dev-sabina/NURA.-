import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12">
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-label mb-8"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        Is your treat just sugar?
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-section-heading opacity-40">Typical Candy</h3>
          <div className="overflow-hidden rounded-lg">
            <img src="/images/candy.webp" alt="Typical candy" className="w-full object-cover grayscale opacity-60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-section-heading">NURA</h3>
          <div className="overflow-hidden rounded-lg">
            <img src="/images/right.webp" alt="NURA fruit candy" className="w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
