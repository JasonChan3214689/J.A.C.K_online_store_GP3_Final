import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";

const Layout = ({ totalResults }) => {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Header">
        <div className="SearchBarCotainer">
          <SearchBar totalResults={totalResults} />
        </div>
        <Filter />
        <Login />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Layout;
