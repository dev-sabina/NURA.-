import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  "Strawberry", "Mango", "Mixed Berry", "Apple Burst", "Citrus Zing", "Flavor Mix Pack"
];
const navLinks = ["About", "FAQs", "Contacts"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-difference">
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-label tracking-[0.3em]"
          style={{ color: "hsl(var(--primary))" }}
        >
          N U R A
        </motion.span>
        <div className="flex items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-label cursor-pointer hidden md:block hover:opacity-60 transition-opacity"
            style={{ color: "hsl(var(--primary))" }}
          >
            CART
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer z-[60] p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="block w-7 h-[2px]"
              style={{ background: "hsl(var(--primary))" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="block w-7 h-[2px]"
              style={{ background: "hsl(var(--primary))" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="block w-7 h-[2px]"
              style={{ background: "hsl(var(--primary))" }}
            />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ background: "hsl(var(--card))" }}
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-label mb-10"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Menu
              </motion.p>
              <div className="flex flex-col gap-4 mb-16">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: 40, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.06,
                      duration: 0.6,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    whileHover={{ x: 20, scale: 1.05 }}
                    className="text-2xl md:text-4xl font-bold transition-colors"
                    style={{
                      color: "hsl(var(--primary))",
                      transformOrigin: "left bottom",
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="flex gap-8 justify-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-label transition-opacity hover:opacity-60"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
