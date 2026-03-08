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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-label tracking-[0.3em]"
          style={{ color: "hsl(var(--primary))" }}
        >
          N U R A
        </motion.span>
        <div className="flex items-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-label cursor-pointer hidden md:block"
            style={{ color: "hsl(var(--primary))" }}
          >
            CART
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer z-[60]"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-[2px]"
              style={{ background: "hsl(var(--primary))" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-7 h-[2px]"
              style={{ background: "hsl(var(--primary))" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
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
            className="fixed inset-0 z-40 bg-card flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-label mb-8">Menu</p>
              <div className="flex flex-col gap-3 mb-12">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-2xl md:text-3xl font-bold hover:opacity-60 transition-opacity"
                    style={{ color: "hsl(var(--primary))" }}
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="text-label hover:opacity-60 transition-opacity"
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
