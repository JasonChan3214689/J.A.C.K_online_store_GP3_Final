import React from "react";

const TotalvalueofItem = ({ shoppingCartItem }) => {
  const totalitem = shoppingCartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return <div className="quantity">Total Quantity: {totalitem}</div>;
};

export default TotalvalueofItem;
