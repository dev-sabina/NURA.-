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
      className="relative w-full min-h-[70vh] md:min-h-screen pb-[5vh] md:pb-[10vh]"
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

      <TextLine index={0} text="We're bringing the pure taste of real fruit" />
      <TextLine
        index={1}
        text="into a chewy treat bursting with "
        span="natural flavor"
        after="."
      />
      <TextLine index={2} text="Sweetness you can feel good about." isScript />
    </section>
  );
};

const TextLine = ({
  index,
  text,
  span,
  after,
  isScript,
}: {
  index: number;
  text: string;
  span?: string;
  after?: string;
  isScript?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const mobileSizes = ["6vw", "5.5vw", "7vw"];
  const desktopSizes = ["4vw", "3.8vw", "4.5vw"];

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, rotateX: -90 }}
      animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: index * 0.15,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        fontWeight: index === 2 ? 900 : 500,
        margin: "0 auto",
        textAlign: "center",
        transformOrigin: "-10% -10%",
        fontFamily: isScript ? "'Dancing Script', cursive" : undefined,
        padding: "0 4vw",
      }}
      className={`text-[${mobileSizes[index]}] md:text-[${desktopSizes[index]}] w-[95%] md:w-[${index === 1 ? "67%" : index === 2 ? "60%" : "80%"}]`}
    >
      {span ? (
        <>
          {text}
          <span
            className="font-script text-[7vw] md:text-[4.4vw]"
            style={{ fontWeight: 900 }}
          >
            {span}
          </span>
          {after}
        </>
      ) : (
        text
      )}
    </motion.h1>
  );
};

export default AboutSection;
