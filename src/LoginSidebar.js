import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function LoginSidebarToggle() {
	const [toggled, setToggled] = React.useState(false);
	return (
		<div
			style={{
				display: "flex",
				height: "100%",
				minHeight: "75px",
				direction: "rtl",
			}}
		>
			<Sidebar
				rtl
				onBackdropClick={() => setToggled(false)}
				toggled={toggled}
				breakPoint="always"
			>
				<Menu>
					<MenuItem> Sign in</MenuItem>
					<MenuItem> Create Account</MenuItem>
					<MenuItem> Orders</MenuItem>
				</Menu>
			</Sidebar>
			<main style={{ display: "flex", padding: 10 }}>
				<div
					className="LoginContainer"
					onClick={() => setToggled(!toggled)}
				>
					<span>Login</span>
					<img src="/Login.png" alt="Login" />

					{/* <button
						className="LoginContainer"
						onClick={() => setToggled(!toggled)}
					>
						Toggle
					</button> */}
				</div>
			</main>
		</div>
	);
}

// export default function Login() {
//   return (
//     <div className="LoginContainer">
//       <img src="./Login.png" alt="Login" />
//       <span>Login</span>
//     </div>
//   );
// }

export default LoginSidebarToggle;
