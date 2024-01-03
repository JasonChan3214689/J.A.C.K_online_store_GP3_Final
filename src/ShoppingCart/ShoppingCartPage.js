import React from "react";
import "./ShoppingCartPage.css";

const ShoppingCartPage = ({ shoppingCartItem }) => {
  const total = shoppingCartItem.reduce((acc, item) => {
    const numericPriceString = item.price.replace(/[^0-9.]/g, "");
    const price = parseFloat(numericPriceString);
    return acc + price * item.qty;
  }, 0);

  const grandTotal = total;

  return (
    <div className="Shopping_wrapper">
      <div className="card cart">
        <label className="title">CHECKOUT</label>
        <div className="steps">
          <hr />
          <div className="payments">
            <h2>Shopping Cart</h2>
            {shoppingCartItem.map((item, index) => {
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
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
