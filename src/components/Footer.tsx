import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-5xl md:text-7xl font-black mb-4"
            style={{ color: "hsl(var(--primary))" }}
            whileHover={{ scale: 1.02 }}
          >
            NURA
          </motion.p>
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Real fruit. Pure deliciousness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="flex gap-16"
        >
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Flavors</p>
            {["Strawberry", "Mango", "Mixed Berry", "Apple Burst", "Citrus Zing"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ x: 5 }}
                className="text-sm hover:opacity-60 transition-opacity"
                style={{ color: "hsl(var(--primary))" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Company</p>
            {["About", "FAQs", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ x: 5 }}
                className="text-sm hover:opacity-60 transition-opacity"
                style={{ color: "hsl(var(--primary))" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-xs"
        style={{ color: "hsl(var(--muted-foreground) / 0.4)" }}
      >
        © 2026 NURA. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
