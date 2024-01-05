import { Link } from "react-router-dom";
export default function ProductCard({
  image,
  name,
  price,
  priceType,
  rating,
  tcin,
  onClick,
}) {
  const handleCardClick = () => {
    // Call the onClick callback function and pass the tcin value
    onClick(tcin);
  };
  return (
    <div className="ProductCard" onClick={handleCardClick}>
      <Link to={`/product/${tcin}`}>
        <div className="ProductImage ProductImageShadow">
          <img className="crown" src="./premium-quality 1.png" alt="15" />
          <img src={image} alt="精選圖片"></img>
        </div>
      </Link>
      <div className="ProductTitle">{name}</div>

      <div className="ProductPrice">
        <span>{price}</span>
        <span>{rating}</span>
      </div>
    </div>
  );
}
