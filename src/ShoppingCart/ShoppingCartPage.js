import React from "react";
import "./ShoppingCartPage.css";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = ({
  shoppingCartItem,
  onSetGrand,
  clientGrandTotal,
  setshoppingCartItem,
}) => {
  const navigate = useNavigate();
  const total = shoppingCartItem.reduce((acc, item) => {
    const numericPriceString = item.price.replace(/[^0-9.]/g, "");
    const price = parseFloat(numericPriceString);
    return acc + price * item.qty;
  }, 0);

  const grandTotal = total;

  function handleCheckoutButton() {
    onSetGrand(grandTotal);
    navigate("/Checkout");
  }

  function hanldeClearButton() {
    setshoppingCartItem([]);
  }

  return (
    <div className="Shopping_wrapper">
      <div className="card cart">
        <label className="title">CHECKOUT</label>
        <div className="steps">
          <hr />
          <div className="payments">
            <h2>Shopping Cart</h2>
            {shoppingCartItem.length === 0
              ? "no item ar"
              : shoppingCartItem.map((item, index) => {
                  const numericPriceString = item.price.replace(/[^0-9.]/g, "");
                  const price = parseFloat(numericPriceString);

                  return (
                    <div className="ProductWrapper" key={index}>
                      <div>Product Name: {item.title}</div>
                      <div>Price: ${price.toFixed(2)}</div>
                      <div>Quantity: {item.qty}</div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      <div className="card checkout">
        <div className="footer">
          <label className="price">${grandTotal.toFixed(2)}</label>
          {shoppingCartItem.length === 0 ? (
            ""
          ) : (
            <div className="btnWrapper">
              <button
                className="checkout-btn"
                type="button"
                onClick={hanldeClearButton}
              >
                Clear
              </button>

              <button
                className="checkout-btn"
                type="button"
                onClick={handleCheckoutButton}
              >
                Check Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
