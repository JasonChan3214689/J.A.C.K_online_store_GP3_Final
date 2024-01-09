import ProductCard3 from "../ProductCard3";
import { useState, useEffect } from "react";
import Loading from "../ProductDetails/Loading";
import "./pages.css";
import consoleArray from "../Array/consoleArray";
import Filter from "../Filterfunction/Filter";
import Brandfilter from "../Filterfunction/Brandfilter";

function Consoles() {
  const [conProducts, conSetProducts] = useState([]);
  //const consoleArray = require("../Array/consoleArray");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    conSetProducts(consoleArray);
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
          <span>Console</span>
          <Filter
            searchedResults={conProducts}
            BrandfilterComponent={Brandfilter}
          />
          {/* <div className="ItemsContainer">
            {conProducts.map((accProducts, index) => (
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

export default Consoles;
