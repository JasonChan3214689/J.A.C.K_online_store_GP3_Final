import Layout from "./Layout";
import HomePage from "./HomPage";
import Footer from "./Footer";
import SearchResults from "./searchResult/searchResult";
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
    "X-RapidAPI-Key": "0da8c1e193msh7432aab7ae8b188p1d4d39jsnbd2ee9b25f0b",
    "X-RapidAPI-Host": "target1.p.rapidapi.com",
  },
};

function App() {
  const [totalResults, setTotalResults] = useState([]);
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
          }));
        });

        setTotalResults(totalResultArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <Router>
      <Layout totalResults={totalResults} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search-results" element={<SearchResults />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
