import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate();

  const handleOpenShoppingCart = () => {
    navigate("/shopping-cart");
  };

  return (
    <div className="CartContainer" onClick={handleOpenShoppingCart}>
      <img className="shoopingCart" src="/購物車ICON.png" alt="購物車"></img>
    </div>
  );
}
