import React from "react";
import "./ShoppingCartPage.css";

const CheckOutSucessful = ({ setshoppingCartItem }) => {
  setshoppingCartItem([]);
  return (
    <div className="Shopping_wrapper">
      <div className="card cart">
        <h3 style={{ textAlign: "center" }}>Your payment was successful</h3>
      </div>
    </div>
  );
};

export default CheckOutSucessful;
