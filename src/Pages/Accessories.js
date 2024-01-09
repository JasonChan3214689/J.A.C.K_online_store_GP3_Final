import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e8d0cfb23bmsh321dada6fbd4a11p19ac25jsnf55cc8978c2c",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function Accessories() {
  const [accProducts, accSetProducts] = useState([]);

  const accArray = require("../Array/accArray");

  useEffect(() => {
    accSetProducts(accArray.default);
  }, []);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  return (
    <>
      <span>Gaming Accessories</span>
      <div className="ItemsContainer">
        {accProducts.map((accProducts, index) => (
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

export default Accessories;
