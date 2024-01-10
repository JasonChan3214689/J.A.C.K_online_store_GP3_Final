import React, { useEffect } from "react";
import "./ShoppingCartPage.css";
import "./CheckOutpage.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CheckOutSucessful = ({ setshoppingCartItem, billingDetails }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setshoppingCartItem([]);
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.1, // 悬停时放大
      textShadow: "0px 0px 8px rgb(255, 255, 255)", // 文字阴影效果
      boxShadow: "0px 0px 8px rgb(255, 255, 255)", // 按钮阴影效果
      transition: {
        duration: 0.3,
        yoyo: Infinity, // 鼠标悬停时无限循环放大缩小
      },
    },
    focus: {
      scale: 0.95, // 获得焦点时缩小
      borderColor: "#ffffff", // 边框颜色变为白色
      transition: {
        duration: 0.25,
      },
    },
  };

  console.log(billingDetails);
  return (
    <div className="Shopping_wrapper">
      <div className="billInformationWrapper">
        <h3 style={{ textAlign: "center" }}>
          Your payment was successful{" "}
          <img style={{ width: "30px" }} src="/TICK.png" alt="TICK" />
        </h3>
        <h3 style={{ textAlign: "center" }}>
          The following is your order information:
        </h3>
        <p>Name: {billingDetails.name}</p>
        <p>Phone: {billingDetails.phone}</p>
        <p>Address: {billingDetails.address}</p>
      </div>
      <motion.button
        style={{
          background: "#f82330",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          cursor: "pointer",
          outline: "none",
          fontSize: "1rem",
          fontWeight: "400",
          letterSpacing: "0.1rem",
          transition: "transform 0.1s ease-in-out",
        }}
        whileHover="hover"
        whileFocus="focus"
        variants={buttonVariants}
        onClick={() => navigate("/")}
      >
        Back To Home Page
      </motion.button>
    </div>
  );
};

export default CheckOutSucessful;
