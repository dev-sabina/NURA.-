import { motion } from "framer-motion";

const products = [
  { id: "product1", style: { left: "19vw", top: "41.5vh", height: "37vh", zIndex: 9 } },
  { id: "product2", style: { left: "30vw", top: "38vh", height: "44vh", zIndex: 10 } },
  { id: "product3", style: { left: "50%", top: "35vh", height: "50vh", zIndex: 11, transform: "translateX(-50%)" } },
  { id: "product4", style: { left: "57vw", top: "38vh", height: "44vh", zIndex: 10 } },
  { id: "product5", style: { left: "70.5vw", top: "41.5vh", height: "37vh", zIndex: 9 } },
];

const ProductsSection = () => {
  return (
    <section
      className="relative flex items-center justify-center flex-col"
      style={{
        height: "100vh",
        backgroundColor: "var(--nura-bg)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        style={{
          fontSize: "4.2vw",
          top: "20vh",
          position: "absolute",
          fontWeight: 700,
        }}
      >
        Snack Smarter.
      </motion.h1>

      <div
        className="flex items-center justify-center"
        style={{ transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s" }}
      >
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            viewport={{ once: true }}
            className="absolute"
            style={{
              ...product.style,
              transition: "all cubic-bezier(0.19, 1, 0.22, 1) 2s",
              boxShadow: "0px 0px 15px var(--nura-bg)",
              cursor: "pointer",
            }}
            whileHover={{
              rotate: -13,
              scale: 1.1,
              transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
            }}
          >
            <img
              src="/images/canglow.png"
              alt="NURA Fruit Chews"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "var(--nura-bg)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
