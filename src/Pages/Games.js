import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

import gameArray from "../Array/gameArray";

function Games() {
  const [gameProducts, setGameProducts] = useState([]);

  useEffect(() => {
    setGameProducts(gameArray);
  }, []);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  return (
    <>
      <span>Game</span>
      <div className="ItemsContainer">
        {gameProducts.map((accProducts, index) => (
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

export default Games;
