import { useState } from "react";
import Brandfilter from "./Brandfilter";
import Typefilter from "./Typefilter";
import Pricefilter from "./Pricefilter";

export default function Filter({ handleChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="FilterCotainer">
      <button>
        <img src="/filter.png" alt="filter"></img>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="./filter.png" alt="filter"></img>
        Filter
      </button>
      {open && (
        <div className="container">
          <Brandfilter handleChange={handleChange} />
          <Typefilter handleChange={handleChange} />
          <Pricefilter handleChange={handleChange} />
        </div>
      )}
    </div>
  );
}
