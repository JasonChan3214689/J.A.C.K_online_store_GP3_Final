import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import TopBanner from "./TopBanner";
import Brands from "./Brands";
import ProductCard from "./ProductCard";
import Advertise from "./Advertise";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const NintendoUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Nintendo%20Switch%20Games&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e3ca1e040msh4b56a7c4ad59526p1b3dc3jsn62c6879d7e16",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function App() {
  const [accProducts, accSetProducts] = useState([]);
  const [conProducts, conSetProducts] = useState([]);
  const [gameProducts, gameSetProducts] = useState([]);

  //Fetch 周邊設備
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
        }));
        accSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

  //Fetch 遊戲主機
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
        }));
        conSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

  //Fetch 遊戲光碟
  useEffect(() => {
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
        }));
        gameSetProducts(extractedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchingFn();
  }, []);

  return (
    <>
      <div className="NavBar">
        <NavBar></NavBar>
      </div>
      <div className="Header">
        <div className="SearchBarCotainer">
          <SearchBar></SearchBar>
        </div>

        <Filter></Filter>

        <Login></Login>
        {/* 最遲先做 */}
        <ShoppingCart></ShoppingCart>
      </div>
      <main>
        <TopBanner />
        <Brands />
        <span>Featured Items</span>
        <div className="featuredItemsContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
              />
            </div>
          ))}
        </div>
        <Advertise>
          <img src="./Banner_image/14.png" alt="15"></img>
        </Advertise>
        <span>Game</span>
        <div className="ItemsContainer">
          {gameProducts.map((accProducts, index) => (
            <div key={index}>
              <ProductCard
                image={accProducts.image}
                name={accProducts.name}
                price={accProducts.price}
                priceType={accProducts.priceType}
              />
            </div>
          ))}
        </div>
        <Advertise>
          <img src="./Banner_image/15.png" alt="15"></img>
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
              />
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
