import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProductCard({
  image,
  name,
  price,
  priceType,
  rating,
  tcin,
  onClick,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const handleCardClick = () => {
    // Call the onClick callback function and pass the tcin value
    onClick(tcin);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/product/${tcin}`}>
        <div className="ProductImage ProductImageShadow">
          <img className="crown" src="./premium-quality 1.png" alt="15" />
          <img src={image} alt="精選圖片"></img>
        </div>
      </Link>
      <div className="ProductTitle">{name}</div>

      <div className="ProductPrice">
        <span>${price}</span>
        <span>{rating}</span>
      </div>
    </motion.div>
  );
}
