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

function App() {
  return (
    <>
      <div className="NavBar">
        <NavBar></NavBar>
        123
      </div>
      <div className="Header">
        <div className="SearchBarCotainer">
          <SearchBar></SearchBar>
        </div>

        <Filter></Filter>

        <Login></Login>

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Advertise>
          <img src="./Banner_image/14.png" alt="15"></img>
        </Advertise>
        <span>Game</span>
        <div className="ItemsContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Advertise>
          <img src="./Banner_image/15.png" alt="15"></img>
        </Advertise>
        <span>Gaming Accessories</span>
        <div className="ItemsContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
