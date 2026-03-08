import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0.1, 0.4], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const leftImgScale = useTransform(scrollYProgress, [0.2, 0.5], [1.3, 1]);
  const rightImgScale = useTransform(scrollYProgress, [0.2, 0.5], [1.3, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12">
      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-label mb-12"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Is your treat <span style={{ color: "hsl(var(--accent))" }}>just sugar?</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div style={{ x: leftX, opacity: leftOpacity }} className="space-y-6">
            <h3 className="text-section-heading opacity-40">Typical Candy</h3>
            <div className="overflow-hidden rounded-lg">
              <motion.img
                style={{ scale: leftImgScale }}
                src="/images/candy.webp"
                alt="Typical candy"
                className="w-full object-cover grayscale opacity-60"
              />
            </div>
          </motion.div>

          <motion.div style={{ x: rightX, opacity: rightOpacity }} className="space-y-6">
            <h3 className="text-section-heading">NURA</h3>
            <div className="overflow-hidden rounded-lg">
              <motion.img
                style={{ scale: rightImgScale }}
                src="/images/right.webp"
                alt="NURA fruit candy"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
