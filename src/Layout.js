import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

import ShoppingCart from "./ShoppingCart";
import LoginSidebarToggle from "./LoginSidebar";

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

				<LoginSidebarToggle />
				<ShoppingCart />
			</div>
		</>
	);
};

export default Layout;
