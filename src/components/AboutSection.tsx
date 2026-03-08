import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.95]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.8], [0, 1, 1, 0.3]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);

  const lines = [
    "We're bringing the pure taste of real fruit",
    "into a chewy treat bursting with natural flavor.",
    "Sweetness you can feel good about.",
  ];

  return (
    <section ref={containerRef} className="relative py-0">
      {/* Full-width background image */}
      <motion.div
        className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden"
        style={{ y: imgY }}
      >
        <motion.img
          src="/images/img2.png"
          alt="Vibrant fruit candy"
          className="w-full h-full object-cover"
          style={{ scale: imgScale, opacity: imgOpacity }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 20%, transparent 60%, hsl(var(--background)) 100%)",
          }}
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        ref={ref}
        className="relative px-6 md:px-12 py-24 md:py-32 max-w-5xl"
        style={{ y: textY }}
      >
        <div style={{ perspective: "1000px" }}>
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, rotateX: -90, y: 80 }}
                animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 0.15 + i * 0.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-section-heading"
                style={{ transformOrigin: "center bottom", willChange: "transform, opacity" }}
              >
                {i === 1 ? (
                  <>into a chewy treat bursting with <span style={{ color: "hsl(var(--accent))" }}>natural flavor</span>.</>
                ) : line}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1" style={{ background: "hsl(var(--primary) / 0.2)" }} />
            <a
              href="#flavors"
              className="text-label whitespace-nowrap hover:opacity-60 transition-opacity cursor-pointer"
              style={{ color: "hsl(var(--primary))" }}
            >
              Explore Flavors
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
