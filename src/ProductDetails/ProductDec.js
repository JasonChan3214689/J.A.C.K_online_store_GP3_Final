import React from "react";
import "./ProductDetails.css";

const ProductDec = ({ title, price }) => {
  return (
    <div className="ProductDecWrapper">
      <h3>{title} </h3>
      <h2>{price}</h2>
      <p className="PurchasedOnline">When purchased online</p>
      <p>Email delivery</p>
      <span style={{ color: "green" }}>
        Dowanload Link sent by email after purchase
      </span>
      <div className="QtyWrapper">
        <select style={{ width: "80px" }} name="Qty" id="Qty">
          <option value="1">QTY 1</option>
          <option value="2">QTY 2</option>
          <option value="3">QTY 3</option>
          <option value="4">QTY 4</option>
          <option value="5">QTY 5</option>
          <option value="6">QTY 6</option>
          <option value="7">QTY 7</option>
          <option value="8">QTY 8</option>
          <option value="9">QTY 9</option>
          <option value="10">QTY 10</option>
        </select>
        <div className="shoppingCartButton">
          <span style={{ alignItems: "center", color: "white" }}>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDec;
