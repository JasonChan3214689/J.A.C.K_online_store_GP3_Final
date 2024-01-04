import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
//import LoginSidebar from "./LoginSidebar";

import LoginSidebarToggle from "./LoginSidebar";
import ShoppingCart from "./ShoppingCart";

const Layout = ({ totalResults, onSearch }) => {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Header">
        <div className="SearchBarCotainer">
          <SearchBar totalResults={totalResults} onSearch={onSearch} />
        </div>

        <LoginSidebarToggle />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Layout;
