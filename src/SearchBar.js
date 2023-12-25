export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <input className="searchInput" type="text" placeholder="Search" />
        <button className="SearchButton">
          <img style={{ width: "35px" }} src="./放大鏡.png" alt="放大镜" />
        </button>
      </div>

      <div className="HotText">
        <span>HOT</span>
        <img
          src="./hot-sale.png"
          alt="fire icon"
          style={{ width: "15px", height: "20px" }}
        />
        <span>: Zelda </span>
        <span> PS5</span>
        <span> Switch</span>
        <span> 星之卡比</span>
      </div>
    </>
  );
}
