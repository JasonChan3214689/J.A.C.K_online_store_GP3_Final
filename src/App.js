import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";

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

function App() {
  return (
    <Router>
      <Layout />
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
