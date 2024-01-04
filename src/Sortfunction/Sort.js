import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function Sort({ searchResultProducts }) {
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

  return (
    <div>
      <div className="SortContainer">
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <img src="./sort.png" alt="sort" width="20px" />
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
        {sortedProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            priceType={product.priceType}
            tcin={product.tcin}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Sort;
