import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full min-h-[80vh] md:min-h-[130vh]">
     
      <div
        className="flex flex-col md:flex-row items-center justify-center min-h-[30vh] md:h-[23%]"
        style={{
          border: "0.12vw solid #d1cad4",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div
          className="flex items-center justify-center w-full md:w-[70%] h-full py-6 md:py-0"
          style={{ borderRight: "none" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[7vw] md:text-[4vw] px-[4vw] md:px-[3vw] w-full md:w-[80%] font-bold"
          >
            PURE JOY IN EVERY CHEW.
          </motion.h1>
        </div>
        <div
          className="hidden md:flex items-center justify-center w-[30%] h-full"
          style={{ borderLeft: "0.12vw solid #d1cad4" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-[1.6vw] px-[5vw] leading-relaxed font-normal"
          >
            THIS IS WHAT HEALTHY CANDY FEELS LIKE
          </motion.h2>
        </div>
      </div>

      <div
        className="relative flex items-center justify-center flex-col min-h-[50vh] md:h-[77%] w-full p-[5vw] md:p-[3vw_2vw]"
        style={{
          backgroundImage: "url(/images/bgimg.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="text-[7vw] md:text-[3.8vw] w-[90%] md:w-[60%] text-center font-thin mb-[6vw] md:mb-[4vw]"
          style={{ lineHeight: 0.7 }}
        >
          Deliciously Guilt-Free,{" "}
          <span className="font-script text-[10vw] md:text-[6vw] font-black">
            Anytime
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[3vw] md:text-[1vw] w-fit mb-[12vw] md:mb-[9vw] text-center"
        >
          Perfect for your desk, your bag,
          <br />
          or your next adventure.
          <br />
          NURA is the sweet treat you crave.
        </motion.h2>

        <motion.img
          src="/images/smiley.svg"
          alt="Smiley"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
        />
      </div>
    </section>
  );
};

export default ContentSection;
