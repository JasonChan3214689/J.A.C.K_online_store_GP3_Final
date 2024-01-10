import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

function LoginSuccessSidebar({ firstInput, LoginName }) {
  const [toggled, setToggled] = React.useState(false);
  const navigate = useNavigate();

  const handleOnClickCreateAcc = () => {
    navigate("/login/create-account");
  };
  const handleOnClickSignIn = () => {
    navigate("/login/signin");
  };
  const handleOnClickShoppingCart = () => {
    navigate("/shopping-cart");
  };

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
          <MenuItem onClick={handleOnClickSignIn}>Login</MenuItem>
          <MenuItem onClick={handleOnClickCreateAcc}>Create Account</MenuItem>
          <MenuItem onClick={handleOnClickShoppingCart}>Shopping Cart</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div className="LoginContainer" onClick={() => setToggled(!toggled)}>
          <span>Hi, {firstInput}</span>
          <img src="/panda.png" alt="panda" />

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

export default LoginSuccessSidebar;
