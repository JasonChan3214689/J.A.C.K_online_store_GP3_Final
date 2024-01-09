import { motion, AnimatePresence } from "framer-motion";

import "./ProductDeAnimation.css";

//variants
export const AnimationVariants1 = {
  end: {
    x: "10vw",
    opacity: 1,
    scale: 1.3,
  },
  start: {
    x: "-100vw",
    opacity: 1,
    scale: 1.2,
  },
};
export const AnimationVariants2 = {
  end: {
    x: "90vw",
    opacity: 1,
    scale: 1.2,
  },
  start: {
    x: "100vw",
    opacity: 1,
    scale: 1.2,
  },
};
export const AnimationVariants3 = {
  end: {
    x: "3vw",
    opacity: 1,
    scale: 0.8,
  },
  start: {
    x: "100vw",
    opacity: 1,
    scale: 0.8,
  },
};
export const AnimationVariants4 = {
  end: {
    opacity: 0.8,
    scale: 0.9,
  },
  start: {
    opacity: 1,
    scale: 1,
  },
};
export const AnimationVariants5 = {
  end: {
    x: 0,
    y: "4rem",
    opacity: 1,
  },
  start: {
    x: 0,
    y: "80vh",
    opacity: 1,
  },
};
//motion Div
export const cloud1Container = (
  <motion.div
    className="cloud1"
    variants={AnimationVariants1}
    initial="start"
    animate="end"
    transition={{
      delay: 1,
      duration: 2,
      ease: "easeInOut",
    }}
  >
    <img src="/PdtDescAnimation/cloud1.png" alt="cloud1" />
  </motion.div>
);
export const cloud2Container = (
  <motion.div
    className="cloud2"
    variants={AnimationVariants2}
    initial="start"
    animate="end"
    transition={{
      delay: 1,
      duration: 2,
      ease: "easeInOut",
    }}
  >
    <img src="/PdtDescAnimation/cloud2.png" alt="cloud2" />
  </motion.div>
);
export const cloud3Container = (
  <motion.div
    className="cloud3"
    variants={AnimationVariants3}
    initial="start"
    animate="end"
    transition={{
      delay: 1,
      duration: 2,
      ease: "easeInOut",
    }}
  >
    <img src="/PdtDescAnimation/cloud3.png" alt="cloud3" />
  </motion.div>
);
export const cloud4Container = (
  <motion.div
    className="cloud4"
    variants={AnimationVariants4}
    initial="start"
    animate="end"
    transition={{
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      repeat: Infinity,
    }}
  >
    <img src="/PdtDescAnimation/cloud4.png" alt="cloud4" />
  </motion.div>
);
