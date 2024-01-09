import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
      display: "block",
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div>
          <div
            onClick={toggleMenu}
            className="burger-menu"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          >
            ☰
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/consoles" onClick={toggleMenu}>
                    Consoles
                  </Link>
                </li>
                <li>
                  <Link to="/games" onClick={toggleMenu}>
                    Games
                  </Link>
                </li>
                <li>
                  <Link to="/accessories" onClick={toggleMenu}>
                    Accessories
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
      {!isMobile && (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./Pages/Consoles">Consoles</Link>
            </li>
            <li>
              <Link to="./Pages/Games">Games</Link>
            </li>
            <li>
              <Link to="./Pages/Accessories">Accessories</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
