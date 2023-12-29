import Layout from "./Layout";
import HomePage from "./HomPage";
import Footer from "./Footer";
import SearchResults from "./searchResult/searchResult";
import ProductDetails from "./ProductDetails/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const url =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Video%20Game%20Accessories&count=20&offset=0&faceted_value=5tal2&default_purchasability_filter=true&sort_by=relevance";

const conUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=video%20game%20consoles&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const NintendoUrl =
  "https://target1.p.rapidapi.com/products/v2/list?store_id=911&category=5xtg6&keyword=Nintendo%20Switch%20Games&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e2b0514502msh93b0511af19445ep1fe412jsn5bcb00a782cc",
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
          return result.map((product) => ({
            image: product.item.enrichment.images.primary_image_url,
            name: product.item.product_description.title,
            price: product.price.formatted_current_price,
            priceType: product.price.formatted_current_price_type,
            tcin: product.item.tcin,
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
    <Router>
      <Layout onSearch={setSearchKeyword} totalResults={totalResults} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
