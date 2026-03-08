import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src="/images/img2.png"
            alt="Vibrant fruit candy"
            className="w-full max-w-md rounded-lg"
          />
        </motion.div>

        <div className="text-section-heading space-y-2">
          {[
            "We're bringing the pure taste of real fruit",
            "into a chewy treat bursting with natural flavor.",
            "Sweetness you can feel good about.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.a
          href="#flavors"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block mt-12 text-label border-b pb-2 hover:opacity-60 transition-opacity cursor-pointer"
          style={{
            color: "hsl(var(--primary))",
            borderColor: "hsl(var(--primary) / 0.3)",
          }}
        >
          Explore Flavors
        </motion.a>
      </div>
    </section>
  );
};

export default AboutSection;
