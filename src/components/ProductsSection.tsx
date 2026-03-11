import { motion } from "framer-motion";

const products = [
  { id: "product1", left: "19vw", top: "41.5vh", height: "37vh", zIndex: 9 },
  { id: "product2", left: "30vw", top: "38vh", height: "44vh", zIndex: 10 },
  {
    id: "product3",
    left: "43%",
    top: "35vh",
    height: "50vh",
    zIndex: 11,
    transform: "translateX(-50%)",
  },
  { id: "product4", left: "57vw", top: "38vh", height: "44vh", zIndex: 10 },
  { id: "product5", left: "70.5vw", top: "41.5vh", height: "37vh", zIndex: 9 },
];

const ProductsSection = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "var(--nura-bg)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        style={{
          fontSize: "4.2vw",
          position: "absolute",
          top: "20vh",
          fontWeight: 700,
        }}
      >
        Snack Smarter.
      </motion.h1>

      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          whileHover={{ rotate: -13, scale: 1.1 }}
          style={{
            position: "absolute",
            left: product.left,
            top: product.top,
            height: product.height,
            zIndex: product.zIndex,
            transform: product.transform,
            boxShadow: "0px 0px 15px var(--nura-bg)",
            cursor: "pointer",
            transition: "all cubic-bezier(0.19, 1, 0.22, 1) 2s",
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
    </section>
  );
};

export default ProductsSection;
