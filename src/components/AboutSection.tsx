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
      style={{ position: "relative", width: "100%", minHeight: "100vh", paddingBottom: "10vh" }}
    >
      <motion.div
        style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 500, marginBottom: "5vw", y: imgY }}
      >
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          src="/images/img2.png"
          alt="Vibrant image of fruit candy"
          style={{ height: "100%", objectFit: "contain" }}
        />
      </motion.div>

      <TextLine index={0} text="We're bringing the pure taste of real fruit" />
      <TextLine index={1} text="into a chewy treat bursting with " span="natural flavor" after="." />
      <TextLine index={2} text="Sweetness you can feel good about." isScript />
    </section>
  );
};

const TextLine = ({ index, text, span, after, isScript }: {
  index: number; text: string; span?: string; after?: string; isScript?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, rotateX: -90 }}
      animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
      style={{
        fontSize: index === 1 ? "3.8vw" : index === 2 ? "4.5vw" : "4vw",
        fontWeight: index === 2 ? 900 : 500,
        width: index === 1 ? "67%" : index === 2 ? "60%" : "80%",
        margin: "0 auto",
        textAlign: "center",
        transformOrigin: "-10% -10%",
        fontFamily: isScript ? "'Dancing Script', cursive" : undefined,
      }}
    >
      {span ? (
        <>{text}<span className="font-script" style={{ fontWeight: 900, fontSize: "4.4vw" }}>{span}</span>{after}</>
      ) : text}
    </motion.h1>
  );
};

export default AboutSection;
