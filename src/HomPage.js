import TopBanner from "./TopBanner";
import Brands from "./Brands";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";
import Advertise from "./Advertise";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

/*  const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const NintendoUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Nintendo%20Switch%20Games&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";
 
 const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "19ed09e4c0msh06e34c0f07b6070p167f93jsn81a0b8b13e2f",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },

*/
const consoleArray = require("./Array/consoleArray");
const accArray = require("./Array/accArray");
const gameArray = require("./Array/gameArray");

function HomePage() {
  const [accProducts, accSetProducts] = useState([]);
  const [conProducts, conSetProducts] = useState([]);
  const [gameProducts, gameSetProducts] = useState([]);
  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };

  useEffect(() => {
    conSetProducts(consoleArray.default);
    accSetProducts(accArray.default);
    gameSetProducts(gameArray.default);
  }, []);

  //Fetch 周邊設備
  /*  useEffect(() => {
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
        accSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);
 */
  //Fetch 遊戲主機
  /*   useEffect(() => {
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
  }, []); */

  //Fetch 遊戲光碟
  /*  useEffect(() => {
    const fetchingFn = async () => {
      try {
        const response = await fetch(NintendoUrl, options);
        const dataSet = await response.json();
        const result = dataSet.data.search.products;
        const extractedProducts = result.map((product) => ({
          image: product.item.enrichment.images.primary_image_url,
          name: product.item.product_description.title,
          price: product.price.formatted_current_price,
          priceType: product.price.formatted_current_price_type,
          tcin: product.item.tcin,
        }));
        gameSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

  console.log(gameProducts); */

  return (
    <>
      <main>
        <TopBanner />
        <Brands />
        <span>Featured Items</span>
        <div className="featuredItemsContainer">
          <ProductCard2
            image="https://target.scene7.com/is/image/Target/GUEST_8e7a3c22-fb56-408e-91ba-cf64051d0d01"
            name="PlayStation 5 Console Marvel's Spider-Man 2 Bundle"
            price="499.99"
            tcin="89981366"
            onClick={handleCardClick}
          />

          <ProductCard2
            image="https://target.scene7.com/is/image/Target/GUEST_6703aac2-39b6-49b3-81b2-f8a2b9961953"
            name="Minecraft Legends Deluxe Edition - Nintendo Switch"
            price="49.99"
            tcin="88472033"
            onClick={handleCardClick}
          />
          <ProductCard2
            image="https://target.scene7.com/is/image/Target/GUEST_95fd7464-203b-4779-aad9-624da4149fa0"
            name="The Legend of Zelda: Tears of the Kingdom - Nintendo Switch"
            price="69.9"
            tcin="88492050"
            onClick={handleCardClick}
          />
        </div>
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
        <Link to="./AdFunction/Advertisement">
          <Advertise>
            <img src="./Banner_image/ad1.png" alt="15"></img>
          </Advertise>
        </Link>
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

        <Advertise>
          <ProductCard
            image="./Banner_image/ad2.png"
            tcin="89430347"
            onClick={handleCardClick}
          ></ProductCard>
        </Advertise>

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
      </main>
    </>
  );
}

export default HomePage;
