import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftClip = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const rightClip = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const leftTitleY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0]);
  const rightTitleY = useTransform(scrollYProgress, [0.15, 0.4], [60, 0]);
  const leftTitleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const rightTitleOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p
            className="text-sm md:text-base"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Is your treat{" "}
            <span style={{ color: "hsl(var(--accent))" }}>just sugar?</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Typical Candy */}
          <div className="space-y-6">
            <motion.h3
              className="text-section-heading opacity-30"
              style={{ y: leftTitleY, opacity: leftTitleOpacity }}
            >
              Typical Candy
            </motion.h3>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <motion.img
                src="/images/candy.webp"
                alt="Typical candy"
                className="w-full h-full object-cover grayscale"
                style={{ clipPath: leftClip, opacity: 0.5 }}
              />
            </div>
          </div>

          {/* NURA */}
          <div className="space-y-6">
            <motion.h3
              className="text-section-heading"
              style={{ y: rightTitleY, opacity: rightTitleOpacity }}
            >
              NURA
            </motion.h3>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <motion.img
                src="/images/right.webp"
                alt="NURA fruit candy"
                className="w-full h-full object-cover"
                style={{ clipPath: rightClip }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
