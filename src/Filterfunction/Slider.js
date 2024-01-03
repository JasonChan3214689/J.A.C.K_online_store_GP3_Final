import Slider from "react-slider";
import React, { useState } from "react";
import "./Filter.css";

const PriceSlider = ({ handlePriceChange }) => {
  const [values, setValues] = useState([0, 500]);
  const handleSlider = (newValues) => {
    setValues(newValues);
    handlePriceChange(newValues[0], newValues[1]); // Invoke the callback function
  };

  return (
    <>
      <div className="slidercontain">
        <Slider
          className="slider"
          value={values}
          onChange={handleSlider}
          min={0}
          max={500}
        />
      </div>
      <div className="containall" style={{ display: "flex" }}>
        <label htmlFor="minPrice">
          Min:$
          <input
            className="input"
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleSlider([+e.target.value, values[1]])}
          />
        </label>

        <div>
          <label htmlFor="maxPrice">
            Max:$
            <input
              className="input"
              type="number"
              id="maxPrice"
              value={values[1]}
              onChange={(e) => handleSlider([values[0], +e.target.value])}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
