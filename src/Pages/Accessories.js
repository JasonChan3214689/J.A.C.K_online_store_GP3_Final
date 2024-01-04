import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19ed09e4c0msh06e34c0f07b6070p167f93jsn81a0b8b13e2f",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function Accessories() {
  const [accProducts, accSetProducts] = useState([]);

  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  useEffect(() => {
    const fetchingFn = async () => {
      try {
        const response = await fetch(url, options);
        const dataSet = await response.json();
        const result = dataSet.data.search.products;
        const extractedProducts = result.map((product) => ({
          image: product.item.enrichment.images.primary_image_url,
          name: product.item.product_description.title,
          price: product.price.formatted_current_price,
          priceType: product.price.formatted_current_price_type,
          tcin: product.item.tcin,
        }));
        console.log(extractedProducts);
        accSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

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
