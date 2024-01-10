import React from "react";
//import ProductCard from "../ProductCard";
import Filter from "../Filterfunction/Filter";
import Brandfilter from "../Filterfunction/Brandfilter";
import Typefilter from "../Filterfunction/Typefilter";
import "../index.css";

function SearchResults({ keyword, totalResults }) {
  const results = totalResults.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(results);
  // const handleCardClick = (tcin) => {
  //   console.log("Product card clicked. tcin:", tcin);
  // };
  return (
    <>
      <div className="search-result">
        Search result:"{keyword}" Total: {results.length} results
      </div>
      <div>
        <Filter
          searchedResults={results}
          BrandfilterComponent={Brandfilter}
          TypefilterComponent={Typefilter}
        />
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
