import React from "react";
import ProductCard from "../ProductCard";

function SearchResults({ keyword, totalResults }) {
  const results = totalResults.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <span>Search result</span>
      <div className="ItemsContainer">
        {results.length > 0 ? (
          results.map((resultProducts, index) => (
            <ProductCard
              key={index}
              image={resultProducts.image}
              name={resultProducts.name}
              price={resultProducts.price}
              priceType={resultProducts.priceType}
            />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </>
  );
}

export default SearchResults;
