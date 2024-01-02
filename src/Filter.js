import { useState } from "react";

export default function Filter({ handleChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="FilterCotainer">
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="./filter.png" alt="filter"></img>
        Filter
      </button>
      {open && <div className="container"></div>}
    </div>
  );
}
