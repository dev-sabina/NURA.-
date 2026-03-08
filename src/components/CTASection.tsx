import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smileyRotate = useTransform(scrollYProgress, [0.2, 0.6], [0, 360]);
  const smileyScale = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.35], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const products = ["Strawberry", "Mango", "Mixed Berry", "Apple Burst", "Citrus Zing"];

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-label mb-6"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          THIS IS WHAT HEALTHY CANDY FEELS LIKE
        </motion.p>

        <div style={{ perspective: "1000px" }}>
          <motion.h2
            style={{ y: titleY, opacity: titleOpacity, transformOrigin: "center bottom" }}
            className="text-section-heading mb-10"
          >
            Deliciously Guilt-Free, <span style={{ color: "hsl(var(--accent))" }}>Anytime</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="text-tagline max-w-3xl mx-auto mb-20"
        >
          Perfect for your desk, your bag,<br />
          or your next adventure.<br />
          NURA is the sweet treat you crave.
        </motion.p>

        <motion.div
          style={{ rotate: smileyRotate, scale: smileyScale }}
          className="text-7xl md:text-8xl mb-16 inline-block"
        >
          😊
        </motion.div>
      </div>

      {/* Snack Smarter + Products */}
      <motion.h3
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        className="text-center text-section-heading mt-20 mb-16"
      >
        Snack Smarter.
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {products.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 120, rotate: 8 - i * 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              y: -25,
              scale: 1.1,
              rotate: -3,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            className="text-center cursor-pointer"
          >
            <motion.div
              className="w-32 h-48 md:w-40 md:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-2xl mb-3 relative"
              style={{
                boxShadow: "0 0 40px -10px hsl(var(--primary) / 0.1)",
              }}
              whileHover={{
                boxShadow: "0 25px 80px -15px hsl(var(--primary) / 0.4)",
              }}
            >
              <motion.img
                src="/images/canglow.png"
                alt={`NURA ${name} Fruit Chews`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              {/* Glow overlay on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--accent)), transparent 70%)",
                }}
              />
            </motion.div>
            <motion.p
              className="text-label"
              style={{ color: "hsl(var(--muted-foreground))" }}
              whileHover={{ color: "hsl(var(--primary))" }}
            >
              {name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
