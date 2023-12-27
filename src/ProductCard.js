export default function ProductCard({ image, name, price, priceType }) {
  return (
    <div className="ProductCard">
      <div className="ProductImage ProductImageShadow">
        <img src={image} alt="精選圖片"></img>
      </div>
      <div className="ProductTitle">{name}</div>
      <div className="ProductPrice">
        <span>{price}</span>
      </div>
    </div>
  );
}
