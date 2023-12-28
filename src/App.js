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
    "X-RapidAPI-Key": "0da8c1e193msh7432aab7ae8b188p1d4d39jsnbd2ee9b25f0b",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function App() {
  const [accProducts, accSetProducts] = useState([]);
  const [conProducts, conSetProducts] = useState([]);
  const [gameProducts, gameSetProducts] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

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

  //Fetch 所有結果
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const urls = [url, conUrl, NintendoUrl];

        const responses = await Promise.all(urls.map((u) => fetch(u, options)));

        const dataSets = await Promise.all(responses.map((res) => res.json()));

        const totalResultArray = dataSets.flatMap((dataSet) => {
          const result = dataSet.data.search.products;
          return result.map((product) => ({
            image: product.item.enrichment.images.primary_image_url,
            name: product.item.product_description.title,
            price: product.price.formatted_current_price,
            priceType: product.price.formatted_current_price_type,
          }));
        });

        setTotalResults(totalResultArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []);

  console.log(totalResults);

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
          <img src="./Banner_image/ad1.png" alt="15"></img>
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
          <img src="./Banner_image/ad2.png" alt="15"></img>
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
