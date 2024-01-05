import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

function Consoles() {
  const [conProducts, conSetProducts] = useState([]);
  const consoleArray = require("../Array/consoleArray");

  useEffect(() => {
    conSetProducts(consoleArray.default);
  }, []);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  return (
    <>
      <span>Console</span>
      <div className="ItemsContainer">
        {conProducts.map((accProducts, index) => (
          <div key={index}>
            <ProductCard
              image={accProducts.image}
              name={accProducts.name}
              price={accProducts.price}
              priceType={accProducts.priceType}
              tcin={accProducts.tcin}
              onClick={handleCardClick}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Consoles;
