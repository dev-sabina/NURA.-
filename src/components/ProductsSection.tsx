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

const mobileProducts = [
  { id: "product1", left: "5vw", top: "50vh", height: "25vh", zIndex: 9 },
  { id: "product2", left: "25vw", top: "46vh", height: "30vh", zIndex: 10 },
  {
    id: "product3",
    left: "50%",
    top: "42vh",
    height: "35vh",
    zIndex: 11,
    transform: "translateX(-50%)",
  },
  { id: "product4", left: "55vw", top: "46vh", height: "30vh", zIndex: 10 },
  { id: "product5", left: "75vw", top: "50vh", height: "25vh", zIndex: 9 },
];

const ProductsSection = () => {
  return (
    <section
      className="relative h-screen w-full flex justify-center items-center flex-col"
      style={{ backgroundColor: "var(--nura-bg)" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        className="absolute top-[15vh] md:top-[20vh] text-[8vw] md:text-[4.2vw] font-bold"
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
          className="absolute hidden md:block cursor-pointer"
          style={{
            left: product.left,
            top: product.top,
            height: product.height,
            zIndex: product.zIndex,
            transform: product.transform,
            boxShadow: "0px 0px 15px var(--nura-bg)",
            transition: "all cubic-bezier(0.19, 1, 0.22, 1) 2s",
          }}
        >
          <img
            src="/images/canglow.png"
            alt="NURA Fruit Chews"
            className="h-full w-full"
            style={{ backgroundColor: "var(--nura-bg)" }}
          />
        </motion.div>
      ))}

     
      {mobileProducts.map((product, i) => (
        <motion.div
          key={`m-${product.id}`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="absolute block md:hidden cursor-pointer"
          style={{
            left: product.left,
            top: product.top,
            height: product.height,
            zIndex: product.zIndex,
            transform: product.transform,
            boxShadow: "0px 0px 15px var(--nura-bg)",
          }}
        >
          <img
            src="/images/canglow.png"
            alt="NURA Fruit Chews"
            className="h-full w-full"
            style={{ backgroundColor: "var(--nura-bg)" }}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default ProductsSection;
