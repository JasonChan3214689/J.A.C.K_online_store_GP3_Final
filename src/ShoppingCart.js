import { useNavigate } from "react-router-dom";

export default function ShoppingCart({ shoppingCartItem }) {
  const navigate = useNavigate();

  const handleOpenShoppingCart = () => {
    navigate("/shopping-cart");
  };

  return (
    <div className="CartContainer" onClick={handleOpenShoppingCart}>
      {shoppingCartItem.length === 0 ? (
        <img src="/購物車ICON.png" alt="購物車"></img>
      ) : (
        <>
          <img
            className="includeProductCart"
            src="/購物車ICON_H.png"
            alt="購物車"
          ></img>
          <span>{shoppingCartItem.length} product in shopping cart</span>
        </>
      )}
    </div>
  );
}
