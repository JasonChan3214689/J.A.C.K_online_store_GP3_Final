import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotKeyA, hotKeyB, hotKeyC, hotKeyD } from "./hotKey";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(input);
    navigate(`/search-results/${input}`);
  };

  const handleClear = () => {
    setInput("");
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
        <button className="ClearSearchButton" onClick={handleClear}>
          <img
            className="clear-search"
            style={{ width: "20px" }}
            src="/remove.png"
            alt="clear"
          />
        </button>
        <button className="SearchButton" onClick={handleSearch}>
          <img style={{ width: "35px" }} src="/放大鏡.png" alt="放大镜" />
        </button>
      </div>

      <div className="HotText">
        <span>HOT</span>
        <img
          src="/calciferFire.gif"
          alt="fire icon"
          style={{ width: "30px", height: "35px" }}
        />

        <span>
          :<span />
          <Link to={`/search-results/${hotKeyA}`}>Zelda</Link>
        </span>
        <span>
          <Link to={`/search-results/${hotKeyB}`}>Switch</Link>
        </span>
        <span>
          <Link to={`/search-results/${hotKeyC}`}>Mario</Link>
        </span>
        <span>
          <Link to={`/search-results/${hotKeyD}`}>Minecraft</Link>
        </span>
      </div>
    </>
  );
}
