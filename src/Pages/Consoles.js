import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19ed09e4c0msh06e34c0f07b6070p167f93jsn81a0b8b13e2f",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function Consoles() {
  const [conProducts, conSetProducts] = useState([]);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  useEffect(() => {
    const fetchingFn = async () => {
      try {
        const response = await fetch(conUrl, options);
        const dataSet = await response.json();
        const result = dataSet.data.search.products;
        const extractedProducts = result.map((product) => ({
          image: product.item.enrichment.images.primary_image_url,
          name: product.item.product_description.title,
          price: product.price.formatted_current_price,
          priceType: product.price.formatted_current_price_type,
          tcin: product.item.tcin,
        }));
        conSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

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
