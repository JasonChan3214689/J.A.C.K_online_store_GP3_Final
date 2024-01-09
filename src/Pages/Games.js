//import ProductCard3 from "../ProductCard3";
import { useState, useEffect } from "react";
import Loading from "../ProductDetails/Loading";
import gameArray from "../Array/gameArray";
import Filter from "../Filterfunction/Filter";
import Brandfilter from "../Filterfunction/Brandfilter";

import "./pages.css";

function Games() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameProducts, setGameProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setGameProducts(gameArray);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Delay of 2000 milliseconds (2 seconds)

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  const calculateDiscount = (originalPrice, price) => {
    const discountPercentage =
      100 - ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discountPercentage) + "% off";
  };

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <span>Game</span>
          <Filter
            searchedResults={gameProducts}
            BrandfilterComponent={Brandfilter}
          />

          {/* <div className="ItemsContainer">
            {gameProducts.map((accProducts, index) => (
              <div key={index}>
                <ProductCard3
                  key={accProducts.tcin}
                  image={accProducts.image}
                  name={accProducts.name}
                  originalPrice={"$" + accProducts.originalPrice}
                  price={"$" + accProducts.price}
                  discount={calculateDiscount(
                    accProducts.originalPrice,
                    accProducts.price
                  )} // Pass the discount value directly
                  priceType={accProducts.priceType}
                  tcin={accProducts.tcin}
                  onClick={handleCardClick}
                />
              </div>
            ))}
          </div> */}
        </>
      )}
    </>
  );
}

export default Games;
