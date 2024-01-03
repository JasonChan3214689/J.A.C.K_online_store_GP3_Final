import Layout from "./Layout";
import HomePage from "./HomPage";
import Footer from "./Footer";
import SearchResults from "./searchResult/searchResult";
import ProductDetails from "./ProductDetails/ProductDetails";
import AboutUs from "./AboutUs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Games from "./Pages/Games";
import Accessories from "./Pages/Accessories";
import Consoles from "./Pages/Consoles";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartPage from "./ShoppingCart/ShoppingCartPage";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const NintendoUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Nintendo%20Switch%20Games&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

/* const options = {
  method: "GET",
  headers: {
<<<<<<< HEAD
    "X-RapidAPI-Key": "19ed09e4c0msh06e34c0f07b6070p167f93jsn81a0b8b13e2f",
=======
    "X-RapidAPI-Key": "0b0fd8d0demshb0ddb263b890fb3p1d0423jsn1bf4d46b69bd",
>>>>>>> 957d55b (aboutUs)
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
}; */

function App() {
  const [totalResults, setTotalResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [shoppingCartItem, setshoppingCartItem] = useState([]);
  // Fetch 全部資料

  const resultArray = require("./Array/resultArray");
  console.log(resultArray);

  useEffect(() => {
    setTotalResults(resultArray.default);
  }, []);

  /* useEffect(() => {
    const fetchAllData = async () => {
      try {
        const urls = [url, conUrl, NintendoUrl];

        const responses = await Promise.all(urls.map((u) => fetch(u, options)));

        const dataSets = await Promise.all(responses.map((res) => res.json()));

        const totalResultArray = dataSets.flatMap((dataSet) => {
          const result = dataSet.data.search.products;
          return result.map((product) => {
            const priceString = product.price.formatted_current_price;
            const numericPriceString = priceString.replace(/[^0-9.]/g, "");
            const price = parseFloat(numericPriceString);
            return {
              image: product.item.enrichment.images.primary_image_url,
              name: product.item.product_description.title,
              price: price,
              priceType: product.price.formatted_current_price_type,
              productTypes: product.item.product_classification.item_type.name,
            };
          });
        });

        setTotalResults(totalResultArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []); */

  useEffect(() => {
    console.log("Loading items from local storage on mount");
    const savedCartItems = localStorage.getItem("shoppingCartItems");
    if (savedCartItems) {
      console.log("Found saved items:", savedCartItems);
      setshoppingCartItem(JSON.parse(savedCartItems));
    } else {
      console.log("No saved items found in local storage");
    }
  }, []);

  useEffect(() => {
    console.log("Setting items to local storage", shoppingCartItem);
    localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCartItem));
  }, [shoppingCartItem]);

  function handleAddShoppingCartButton(value) {
    console.log("Updating shopping cart items: ", value);
    setshoppingCartItem((item) => [...item, value]);
  }

  return (
    <Router>
      <Layout onSearch={setSearchKeyword} totalResults={totalResults} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Pages/Consoles" element={<Consoles />}></Route>
          <Route path="/Pages/Games" element={<Games />}></Route>
          <Route path="/Pages/Accessories" element={<Accessories />}></Route>
          <Route
            path="/search-results"
            element={
              <SearchResults
                keyword={searchKeyword}
                totalResults={totalResults}
              />
            }
          ></Route>
          <Route
            path={`/product/:tcin`}
            element={
              <ProductDetails
                shoppingCartItem={shoppingCartItem}
                onShoppingCartitem={handleAddShoppingCartButton}
              />
            }
          ></Route>
          <Route path="/login/signin" element={<SignIn />}></Route>
          <Route path="/login/create-account" element={<CreateAcc />}></Route>
          <Route
            path={`/shopping-cart`}
            element={<ShoppingCartPage shoppingCartItem={shoppingCartItem} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
