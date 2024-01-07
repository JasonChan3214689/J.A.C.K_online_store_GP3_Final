import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProductCard({
  image,
  name,
  price,
  rating,
  tcin,
  onClick,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleCardClick = () => {
    onClick(tcin);
  };

  const cardVariants = {
    hidden: { opacity: 0, translateY: 50 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      className="ProductCard"
      onClick={handleCardClick}
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/product/${tcin}`}>
        <div className="ProductImage ProductImageShadow">
          <img src={image} alt="精選圖片"></img>
        </div>
      </Link>
      <div className="ProductTitle">{name}</div>

      <div className="ProductPrice">
        <span>{price}</span>
        <span>{rating}</span>
      </div>
    </motion.div>
  );
}
