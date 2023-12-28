import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";

const Layout = () => {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Header">
        <div className="SearchBarCotainer">
          <SearchBar />
        </div>
        <Filter />
        <Login />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Layout;
