import React, { useState } from "react";
import Brandfilter from "./Brandfilter";
import Typefilter from "./Typefilter";
import Pricefilter from "./Pricefilter";
import Slider from "./Slider";
import ProductCard from "../ProductCard";

function Filter({ searchedResults }) {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(500);
  const [open, setOpen] = useState(false);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  console.log(selectedBrand);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  console.log(selectedType);

  const handlePriceChange = (min, max) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);
  };

  console.log(selectedMinPrice);
  console.log(selectedMaxPrice);

  const handleCardClick = (tcin) => {
    console.log("Product card clicked. tcin:", tcin);
  };

  const filteredResults = searchedResults.filter(
    (product) =>
      (!selectedBrand || product.name.includes(selectedBrand)) &&
      (!selectedType || product.productTypes.includes(selectedType)) &&
      selectedMinPrice <= product.price &&
      product.price <= selectedMaxPrice
  );

  return (
    <div>
      <div className="FilterContainer">
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <img src="./filter.png" alt="filter"></img>
          Filter
        </button>
        {open && (
          <div className="container">
            <Brandfilter handleChange={handleBrandChange} />
            <Typefilter handleChange={handleTypeChange} />
            <Pricefilter handleChange={handlePriceChange} />
            <Slider handlePriceChange={handlePriceChange} />
          </div>
        )}
      </div>
      {filteredResults.map((product, index) => (
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
  );
}

export default Filter;
