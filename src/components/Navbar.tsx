import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  "Strawberry",
  "Mango",
  "Mixed Berry",
  "Apple Burst",
  "Citrus Zing",
  "Flavor Mix Pack",
];
const navLinks = ["About", "FAQs", "Contacts"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-[999999] flex items-center justify-between w-full"
        style={{
          padding: "4vh 5.8vw",
          color: menuOpen ? "var(--nura-menu-text)" : "var(--nura-text-nav)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          transition: "color 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            letterSpacing: "0.5vw",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 100,
          }}
        >
          NURA
        </h2>
        <div className="flex items-center">
          <h3
            className="hidden md:block"
            style={{
              fontSize: "1rem",
              textTransform: "uppercase",
              marginRight: 55,
              letterSpacing: 2,
              wordSpacing: 6,
              cursor: "pointer",
            }}
          >
            Cart
          </h3>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between cursor-pointer relative z-[9999999]"
            style={{
              width: "2vw",
              minWidth: 28,
              height: "1.6vh",
              minHeight: 14,
            }}
          >
            <span
              className="block rounded-full"
              style={{
                height: 2,
                width: menuOpen ? "70%" : "100%",
                backgroundColor: menuOpen
                  ? "var(--nura-menu-text)"
                  : "var(--nura-text-nav)",
                transformOrigin: "0 100%",
                transform: menuOpen ? "rotate(40deg)" : "rotate(0deg)",
                transition: "all cubic-bezier(0.19, 1, 0.22, 1) 2s",
              }}
            />
            <span
              className="block rounded-full"
              style={{
                height: 2,
                width: menuOpen ? "100%" : "70%",
                backgroundColor: menuOpen
                  ? "var(--nura-menu-text)"
                  : "var(--nura-text-nav)",
                transformOrigin: "30% 50%",
                transform: menuOpen ? "rotate(-40deg)" : "rotate(0deg)",
                transition: "all cubic-bezier(0.19, 1, 0.22, 1) 2s",
              }}
            />
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className="fixed inset-0 z-[999] flex flex-col justify-center overflow-hidden"
        style={{
          backgroundColor: "var(--nura-menu-bg)",
          color: "var(--nura-menu-text)",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1.8s",
          borderTop: "1px solid #000",
        }}
      >
        <h1
          style={{
            fontSize: "13.5vw",
            marginTop: "15vh",
            marginLeft: "4.8vw",
            letterSpacing: "-1vw",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Menu
        </h1>
        <div
          className="flex flex-col flex-wrap"
          style={{
            height: "45vh",
            width: "45vw",
            marginLeft: "5.5vw",
            marginTop: "5vh",
          }}
        >
          {[...menuItems, ...navLinks].map((item) => (
            <h4
              key={item}
              className="cursor-pointer hover:opacity-60 transition-opacity"
              style={{
                fontSize: "1.8vw",
                marginBottom: "2.2vh",
                fontWeight: 500,
                width: "15vw",
              }}
            >
              {item}
            </h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
