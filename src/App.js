import Layout from "./Layout";
import HomePage from "./HomPage";
import Footer from "./Footer";
import SearchResults from "./searchResult/searchResult";
import ProductDetails from "./ProductDetails/ProductDetails";
import SignIn from "./Login/SignIn";
import CreateAcc from "./Login/CreateAcc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Games from "./Pages/Games";
import Accessories from "./Pages/Accessories";
import Consoles from "./Pages/Consoles";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const NintendoUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Nintendo%20Switch%20Games&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c31c12f83bmshaa15045277e89acp1e97ffjsn2df9f8ba7cfa",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function App() {
  const [totalResults, setTotalResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  // Fetch 全部資料
  useEffect(() => {
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
  }, []);

  console.log(totalResults);

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
          <Route path={`/product/:tcin`} element={<ProductDetails />}></Route>
          <Route path="/login/signin" element={<SignIn />}></Route>
          <Route path="/login/create-account" element={<CreateAcc />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
