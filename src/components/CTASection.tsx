import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-label mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          THIS IS WHAT HEALTHY CANDY FEELS LIKE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-section-heading mb-8"
        >
          Deliciously Guilt-Free, Anytime
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-tagline max-w-3xl mx-auto mb-16"
        >
          Perfect for your desk, your bag, or your next adventure. NURA is the sweet treat you crave.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-6xl mb-12"
        >
          😊
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center text-section-heading mt-16"
      >
        Snack Smarter.
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-8 mt-16"
      >
        {["Strawberry", "Mango", "Mixed Berry", "Apple Burst"].map((name, i) => (
          <motion.div
            key={name}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center group cursor-pointer"
          >
            <div className="w-40 h-56 md:w-48 md:h-64 overflow-hidden rounded-2xl mb-4">
              <img
                src="/images/canglow.png"
                alt={`NURA ${name} Fruit Chews`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CTASection;
