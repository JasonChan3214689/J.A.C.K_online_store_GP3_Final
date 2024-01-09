import React, { useState } from "react";
//import Typefilter from "./Typefilter";
import Pricefilter from "./Pricefilter";
import Sort from "../Sortfunction/Sort";

function Filter({
  searchedResults,
  BrandfilterComponent,
  TypefilterComponent,
}) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(700);
  const [open, setOpen] = useState(false);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handlePriceChange = (min, max) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);
  };

  const handleClearFilters = () => {
    setSelectedBrand(null);
    setSelectedType(null);
    setSelectedMinPrice(0);
    setSelectedMaxPrice(500);
  };

  const handleOnClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const filteredResults = searchedResults.filter(
    (product) =>
      (!selectedBrand || product.name.includes(selectedBrand)) &&
      (!selectedType || product.productTypes === selectedType) &&
      selectedMinPrice <= product.price &&
      product.price <= selectedMaxPrice
  );

  return (
    <div className="filterAndSort">
      <div className="FilterContainer">
        <button className="filterbtn" onClick={handleOnClick}>
          <img src="../filter.png" alt="filter" width="20px"></img>
          Filter
        </button>

        {open && (
          <div className="container">
            {BrandfilterComponent && (
              <BrandfilterComponent handleChange={handleBrandChange} />
            )}
            {TypefilterComponent && (
              <TypefilterComponent handleChange={handleTypeChange} />
            )}

            <Pricefilter handleChange={handlePriceChange} />
            <button onClick={handleClearFilters}>Clear Filters</button>
          </div>
        )}
      </div>
      <Sort searchResultProducts={filteredResults} />
    </div>
  );
}

export default Filter;
