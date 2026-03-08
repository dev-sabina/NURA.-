import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full" style={{ height: "130vh" }}>
      {/* Top split section with borders */}
      <div
        className="flex items-center justify-center"
        style={{
          height: "23%",
          border: "0.12vw solid #d1cad4",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: "70%",
            height: "100%",
            borderRight: "0.12vw solid #d1cad4",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontSize: "4vw",
              padding: "0 3vw",
              width: "80%",
              fontWeight: 700,
            }}
          >
            PURE JOY IN EVERY CHEW.
          </motion.h1>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ width: "30%", height: "100%" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontSize: "1.6vw",
              padding: "0 5vw",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            THIS IS WHAT HEALTHY CANDY FEELS LIKE
          </motion.h2>
        </div>
      </div>

      {/* Background gif section */}
      <div
        className="relative flex items-center justify-center flex-col"
        style={{
          height: "77%",
          width: "100%",
          backgroundImage: "url(/images/bgimg.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "3vw 2vw",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          style={{
            fontSize: "3.8vw",
            width: "60%",
            textAlign: "center",
            lineHeight: 0.7,
            fontWeight: 100,
            marginBottom: "4vw",
          }}
        >
          Deliciously Guilt-Free,{" "}
          <span className="font-script" style={{ fontSize: "6vw", fontWeight: 900 }}>
            Anytime
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1vw",
            width: "fit-content",
            marginBottom: "9vw",
            textAlign: "center",
          }}
        >
          Perfect for your desk, your bag,<br />
          or your next adventure.<br />
          NURA is the sweet treat you crave.
        </motion.h2>

        <motion.img
          src="/images/smiley.svg"
          alt="Smiley"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ width: 40, height: 40 }}
        />
      </div>
    </section>
  );
};

export default ContentSection;
