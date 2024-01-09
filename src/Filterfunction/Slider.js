import Slider from "react-slider";
import React, { useState } from "react";
import "./Filter.css";

const PriceSlider = ({ handleChange }) => {
  const [values, setValues] = useState([0, 700]);
  const handleSlider = (newValues) => {
    setValues(newValues);
    handleChange(newValues[0], newValues[1]); // Invoke the callback function
  };

  return (
    <>
      <div className="slidercontain">
        <Slider
          className="slider"
          value={values}
          onChange={handleSlider}
          min={0}
          max={700}
        />
      </div>
      <div className="containall">
        <div>
          <label className="minlable" htmlFor="minPrice">
            Min:$
            <input
              className="min"
              type="number"
              id="minPrice"
              value={values[0]}
              onChange={(e) => handleSlider([+e.target.value, values[1]])}
            />
          </label>
        </div>

        <div>
          <label className="maxlable" htmlFor="maxPrice">
            Max:$
            <input
              className="max"
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
