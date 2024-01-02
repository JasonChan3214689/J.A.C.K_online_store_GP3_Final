import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
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
					<SearchBar
						totalResults={totalResults}
						onSearch={onSearch}
					/>
				</div>
				<Filter />
				<LoginSidebarToggle />
				<ShoppingCart />
			</div>
		</>
	);
};

export default Layout;
