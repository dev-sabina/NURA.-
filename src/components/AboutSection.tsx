import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[70vh] md:min-h-screen pb-[5vh] md:pb-[10vh] flex flex-col items-center"
    >
      <motion.div
        className="flex items-center justify-center h-[250px] md:h-[500px] mb-[5vw]"
        style={{ y: imgY }}
      >
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          src="/images/img2.png"
          alt="Vibrant image of fruit candy"
          className="h-full object-contain"
        />
      </motion.div>

      
      <div className="flex flex-col items-center text-center w-full px-4">
        <TextLine index={0} text="We're bringing the pure taste of real" />
        <TextLine index={1} text="fruit" />
        <TextLine index={2} text="into a chewy treat bursting with" />
        <TextLine index={3} text="natural flavor." isScript />
        <TextLine index={4} text="Sweetness you can feel good about." isScript />
      </div>
    </section>
  );
};

const TextLine = ({
  index,
  text,
  isScript,
}: {
  index: number;
  text: string;
  isScript?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, rotateX: 90, y: 20 }}
        animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
        transition={{
          duration: 1.2,
          delay: index * 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={`
          leading-[1.2] tracking-tight
          ${isScript 
            ? "font-['Dancing_Script',_cursive] text-[7.5vw] md:text-[3.5vw] font-normal lowercase italic" 
            : "font-sans font-bold text-[6vw] md:text-[4.8vw]"
          }
        `}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AboutSection;