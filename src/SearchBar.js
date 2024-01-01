import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(input);
    navigate("/search-results");
  };

  return (
    <>
      <div className="search-container">
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="SearchButton" onClick={handleSearch}>
          <img style={{ width: "35px" }} src="/放大鏡.png" alt="放大镜" />
        </button>
      </div>

      <div className="HotText">
        <span>HOT</span>
        <img
          src="/hot-sale.png"
          alt="fire icon"
          style={{ width: "15px", height: "20px" }}
        />
        <span>: Zelda </span>
        <span> PS5</span>
        <span> Switch</span>
        <span> 星之卡比</span>
      </div>
    </>
  );
}
