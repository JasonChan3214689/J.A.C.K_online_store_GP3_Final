import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import LoginSidebarToggle from "./LoginSidebar";
import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";

import LoginSuccessSidebar from "./LoginSuccessSidebar";

const Layout = ({
  totalResults,
  onSearch,
  shoppingCartItem,
  isLogin,
  firstInput,
  LoginName,
}) => {
  return (
    <div className="layout">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Header">
        <Link to="/">
          <div className="Logo">
            <img src="../J.A.C.K (2).png" alt="logo" />
          </div>
        </Link>
        <div className="SearchBarCotainer">
          <SearchBar totalResults={totalResults} onSearch={onSearch} />
        </div>

        {isLogin && LoginName ? (
          <LoginSuccessSidebar firstInput={firstInput} LoginName={LoginName} />
        ) : (
          <LoginSidebarToggle />
        )}
        <ShoppingCart shoppingCartItem={shoppingCartItem} />
      </div>
    </div>
  );
};

export default Layout;
