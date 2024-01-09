import ProductCard3 from "../ProductCard3";
import { useState, useEffect } from "react";
import Loading from "../ProductDetails/Loading";
import "./pages.css";
import Filter from "../Filterfunction/Filter";
import Brandfilter from "../Filterfunction/Brandfilter";

function Accessories() {
  const [accProducts, accSetProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    accSetProducts(accArray);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Delay of 2000 milliseconds (2 seconds)

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);

  const accArray = require("../Array/accArray");

  useEffect(() => {
    accSetProducts(accArray.default);
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
          <span>Gaming Accessories</span>
          <Filter
            searchedResults={accProducts}
            BrandfilterComponent={Brandfilter}
          />
          {/* <div className="ItemsContainer">
            {accProducts.map((accProducts, index) => (
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

export default Accessories;
