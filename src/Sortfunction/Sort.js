import React, { useEffect, useState } from "react";
import ProductCard3 from "../ProductCard3";

function Sort({ searchResultProducts, ProductCard }) {
  const [open, setOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleCardClick = (tcin) => {
    console.log("Product card clicked. tcin:", tcin);
  };

  useEffect(() => {
    setSortedProducts(
      [...searchResultProducts].sort((a, b) => a.price - b.price)
    );
  }, [searchResultProducts]);

  function SortbyPrice(e) {
    e.stopPropagation();
    if (e.target.value === "Price: Low to High") {
      setSortedProducts(
        [...searchResultProducts].sort((a, b) => a.price - b.price)
      );
    }
    if (e.target.value === "Price: High to Low") {
      setSortedProducts(
        [...searchResultProducts].sort((a, b) => b.price - a.price)
      );
    }
  }

  const calculateDiscount = (originalPrice, price) => {
    const discountPercentage =
      100 - ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discountPercentage) + "% off";
  };

  return (
    <div>
      <div className="SortContainer">
        <button
          className="sortbtn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <img src="../sort.png" alt="sort" width="20px" />
          Sort
        </button>
        {open && (
          <div className="SortOptions">
            <select onChange={SortbyPrice}>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        )}
      </div>
      <div className="ProductList">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product, index) => (
            <ProductCard3
              key={index}
              image={product.image}
              name={product.name}
              originalPrice={"$" + product.originalPrice}
              price={"$" + product.price}
              discount={calculateDiscount(product.originalPrice, product.price)} // Pass the discount value directly
              priceType={product.priceType}
              tcin={product.tcin}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <div>
            No products found.
            <img
              style={{ width: "25px" }}
              src="../crying.png"
              alt="noproduct"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sort;
