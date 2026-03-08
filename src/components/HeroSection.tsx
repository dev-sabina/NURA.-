import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="text-hero"
      >
        NURA
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-tagline"
        >
          <p>Real fruit</p>
          <p className="text-foreground font-medium">Pure deliciousness</p>
          <p>Made with joy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right"
        >
          <p className="text-label mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>NATURAL SWEETNESS</p>
          <p className="text-label mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>ZERO</p>
          <p className="text-label" style={{ color: "hsl(var(--muted-foreground))" }}>GUILT</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
