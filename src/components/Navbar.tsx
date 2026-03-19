import { useState } from "react";

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
        className="sticky top-0 z-[999999] flex items-center justify-between w-full px-[4vw] md:px-[5.8vw] py-[2vh] md:py-[4vh]"
        style={{
          color: menuOpen ? "var(--nura-menu-text)" : "var(--nura-text-nav)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          transition: "color 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
        }}
      >
        <h2 className="text-[0.8rem] md:text-[1rem] tracking-[0.5vw] uppercase cursor-pointer font-thin">
          NURA
        </h2>
        <div className="flex items-center">
          <h3
            className="hidden md:block text-[1rem] uppercase mr-[55px] tracking-[2px] cursor-pointer"
            style={{ wordSpacing: 6 }}
          >
            Cart
          </h3>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between cursor-pointer relative z-[9999999]"
            style={{
              width: "5vw",
              minWidth: 24,
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
          className="text-[20vw] md:text-[13.5vw] mt-[12vh] md:mt-[15vh] ml-[4.8vw] uppercase font-bold"
          style={{ letterSpacing: "-1vw" }}
        >
          Menu
        </h1>
        <div
          className="flex flex-col flex-wrap ml-[5.5vw] mt-[3vh] md:mt-[5vh] gap-y-[1.5vh] md:gap-y-0"
          style={{ height: "auto", maxHeight: "45vh" }}
        >
          {[...menuItems, ...navLinks].map((item) => (
            <h4
              key={item}
              className="cursor-pointer hover:opacity-60 transition-opacity text-[4.5vw] md:text-[1.8vw] font-medium mb-[1vh] md:mb-[2.2vh]"
              style={{ width: "fit-content" }}
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
