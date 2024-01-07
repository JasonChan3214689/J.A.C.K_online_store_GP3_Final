import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function CategoryTitle({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.95 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="categoryContainer"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
