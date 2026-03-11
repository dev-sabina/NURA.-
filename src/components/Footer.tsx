import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "60vh",
        padding: "8vh 5vw",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        style={{
          fontSize: "10vw",
          textTransform: "uppercase",
          letterSpacing: 6,
          fontWeight: 700,
        }}
      >
        NURA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "1.4vw",
          marginTop: "2vh",
          maxWidth: "40vw",
          color: "var(--nura-text-dim)",
        }}
      >
        A concept brand exploring the joy of natural fruit snacks and playful
        design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          right: "5vw",
          bottom: "8vh",
          textAlign: "right",
          lineHeight: "1.8",
          fontSize: "0.9rem",
        }}
      >
        <p>Concept & Development</p>
        <p style={{ fontWeight: 600 }}>Sabina Asghar</p>

        {/* Links */}
        <div style={{ marginTop: "1.5vh", opacity: 0.7 }}>
          <a href="https://github.com/dev-sabina" target="_blank">
            GitHub
          </a>
          <span style={{ margin: "0 8px" }}>·</span>
          <a href="mailto:dev.sabinaa@gmail.com">Email</a>
        </div>

        <div style={{ marginTop: "2vh", opacity: 0.6 }}>
          <p>React · TypeScript · Framer Motion</p>
        </div>

        <p style={{ marginTop: "3vh", opacity: 0.4 }}>
          © {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
