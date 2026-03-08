import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smileyRotate = useTransform(scrollYProgress, [0.3, 0.7], [0, 360]);
  const smileyScale = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const products = ["Strawberry", "Mango", "Mixed Berry", "Apple Burst", "Citrus Zing"];

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-label mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          THIS IS WHAT HEALTHY CANDY FEELS LIKE
        </motion.p>

        <div style={{ perspective: "800px" }}>
          <motion.h2
            initial={{ opacity: 0, rotateX: -60, y: 60 }}
            animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-section-heading mb-8"
            style={{ transformOrigin: "bottom center" }}
          >
            Deliciously Guilt-Free, <span style={{ color: "hsl(var(--accent))" }}>Anytime</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-tagline max-w-3xl mx-auto mb-16"
        >
          Perfect for your desk, your bag, or your next adventure. NURA is the sweet treat you crave.
        </motion.p>

        <motion.div
          style={{ rotate: smileyRotate, scale: smileyScale }}
          className="text-7xl mb-12 inline-block"
        >
          😊
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        className="text-center text-section-heading mt-16"
      >
        Snack Smarter.
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16">
        {products.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 100, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: [0.76, 0, 0.24, 1],
            }}
            viewport={{ once: true }}
            whileHover={{ y: -20, scale: 1.08, rotate: -2 }}
            className="text-center group cursor-pointer"
          >
            <motion.div
              className="w-36 h-52 md:w-44 md:h-60 overflow-hidden rounded-2xl mb-4 relative"
              whileHover={{ boxShadow: "0 20px 60px -15px hsl(var(--primary) / 0.3)" }}
            >
              <motion.img
                src="/images/canglow.png"
                alt={`NURA ${name} Fruit Chews`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <p className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
