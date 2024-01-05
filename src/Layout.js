import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
//import LoginSidebar from "./LoginSidebar";

import LoginSidebarToggle from "./LoginSidebar";
import ShoppingCart from "./ShoppingCart";

const Layout = ({ totalResults, onSearch, shoppingCartItem }) => {
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
        <ShoppingCart shoppingCartItem={shoppingCartItem} />
      </div>
    </>
  );
};

export default Layout;
