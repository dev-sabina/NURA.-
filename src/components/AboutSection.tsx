import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const lines = [
    "We're bringing the pure taste of real fruit",
    "into a chewy treat bursting with natural flavor.",
    "Sweetness you can feel good about.",
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12">
      <div ref={ref} className="max-w-5xl">
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="mb-12 overflow-hidden rounded-lg"
        >
          <motion.img
            initial={{ scale: 1.3, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            src="/images/img2.png"
            alt="Vibrant fruit candy"
            className="w-full max-w-md"
          />
        </motion.div>

        <div className="text-section-heading space-y-2" style={{ perspective: "800px" }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, rotateX: -90, y: 40 }}
              animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformOrigin: "bottom center" }}
            >
              {i === 1 ? (
                <>into a chewy treat bursting with <span style={{ color: "hsl(var(--accent))" }}>natural flavor</span>.</>
              ) : line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 origin-left"
        >
          <a
            href="#flavors"
            className="inline-block text-label border-b pb-2 hover:opacity-60 transition-opacity cursor-pointer"
            style={{
              color: "hsl(var(--primary))",
              borderColor: "hsl(var(--primary) / 0.3)",
            }}
          >
            Explore Flavors
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
