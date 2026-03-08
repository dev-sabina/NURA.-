import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "hsl(var(--primary))" }}>
            NURA
          </p>
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Real fruit. Pure deliciousness.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-12"
        >
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Flavors</p>
            {["Strawberry", "Mango", "Mixed Berry"].map((item) => (
              <a key={item} href="#" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "hsl(var(--primary))" }}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Company</p>
            {["About", "FAQs", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "hsl(var(--primary))" }}>
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-xs"
        style={{ color: "hsl(var(--muted-foreground) / 0.5)" }}
      >
        © 2026 NURA. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
