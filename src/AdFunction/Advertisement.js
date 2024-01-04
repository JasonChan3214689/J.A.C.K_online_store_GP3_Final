import React from "react";
import ProductCard from "../ProductCard";
import Advertise from "../Advertise";

function Advertisement({ saleresult }) {
  const saleProductResults = saleresult.filter(
    (product) => product.priceType === "sale"
  );

  const handleCardClick = (tcin) => {
    console.log("Product card clicked. tcin:", tcin);
  };

  return (
    <>
      <p>New Year Sale</p>
      <Advertise>
        <img src="../Banner_image/ad1.png" alt="15"></img>
      </Advertise>
      {saleProductResults.map((product) => (
        <ProductCard
          key={product.tcin} // Use a unique identifier as the key prop
          image={product.image}
          name={product.name}
          price={product.price}
          priceType={product.priceType}
          tcin={product.tcin}
          onClick={handleCardClick}
        />
      ))}
    </>
  );
}

export default Advertisement;
