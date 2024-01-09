import React from "react";

import Advertise from "../Advertise";
import "./ad.css";
import Filter from "../Filterfunction/Filter";
import Brandfilter from "../Filterfunction/Brandfilter";
import Typefilter from "../Filterfunction/Typefilter";

function Advertisement({ saleresult }) {
  const saleProductResults = saleresult.filter(
    (product) => product.priceType === "sale"
  );

  const handleCardClick = (tcin) => {
    console.log("Product card clicked. tcin:", tcin);
  };

  const calculateDiscount = (originalPrice, price) => {
    const discountPercentage =
      100 - ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discountPercentage) + "% off";
  };

  return (
    <>
      <p>New Year Sale</p>
      <Advertise>
        <img src="../Banner_image/ad1.png" alt="15"></img>
      </Advertise>
      <Filter
        searchedResults={saleProductResults}
        BrandfilterComponent={Brandfilter}
        TypefilterComponent={Typefilter}
      />
      {/* <div className="sale-container">
        {saleProductResults.map((product) => (
          <ProductCard3
            key={product.tcin}
            image={product.image}
            name={product.name}
            originalPrice={"$" + product.originalPrice}
            price={"$" + product.price}
            discount={calculateDiscount(product.originalPrice, product.price)} // Pass the discount value directly
            priceType={product.priceType}
            tcin={product.tcin}
            onClick={handleCardClick}
          />
        ))}
      </div> */}
    </>
  );
}

export default Advertisement;
