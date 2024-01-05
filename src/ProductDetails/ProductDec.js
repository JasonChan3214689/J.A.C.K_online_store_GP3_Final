import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDec = ({ title, price, shoppingCartItem, onShoppingCartitem }) => {
  const [qty, setQty] = useState(1);

  function handleShoppingCartButton() {
    const id = crypto.randomUUID();
    alert("Add to Cart successful~");
    const newProduct = {
      id,
      title,
      price,
      qty,
    };
    onShoppingCartitem(newProduct);
  }

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
        <select
          style={{ width: "80px" }}
          name="Qty"
          id="Qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div className="shoppingCartButton" onClick={handleShoppingCartButton}>
          <span style={{ alignItems: "center", color: "white" }}>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDec;
