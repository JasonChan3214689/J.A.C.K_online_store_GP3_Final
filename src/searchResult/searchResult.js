import React from "react";
//import ProductCard from "../ProductCard";
import Filter from "../Filterfunction/Filter";

function SearchResults({ keyword, totalResults }) {
  const results = totalResults.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(results);
  const handleCardClick = (tcin) => {
    console.log("Product card clicked. tcin:", tcin);
  };
  return (
    <>
      <span>Search result</span>
      <div>
        <Filter searchedResults={results} />
      </div>
      {/* <div className="ItemsContainer">
        {results.length > 0 ? (
          results.map((resultProducts, index) => (
            <ProductCard
              key={index}
              image={resultProducts.image}
              name={resultProducts.name}
              price={resultProducts.price}
              priceType={resultProducts.priceType}
              tcin={resultProducts.tcin}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div> */}
    </>
  );
}

export default SearchResults;
