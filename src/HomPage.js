import TopBanner from "./TopBanner";
import Brands from "./Brands";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";
import Advertise from "./Advertise";
import CategoryTitle from "./CategoryTitle";
import GameIntroduction from "./GameIntroduction";
import { Link } from "react-router-dom";
import Loading from "./ProductDetails/Loading";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollToTopButton from "./BackToTop";

const consoleArray = require("./Array/consoleArray");
const accArray = require("./Array/accArray");
const gameArray = require("./Array/gameArray");

function HomePage() {
  const navigate = useNavigate();
  const [accProducts, accSetProducts] = useState([]);
  const [conProducts, conSetProducts] = useState([]);
  const [gameProducts, gameSetProducts] = useState([]);
  const [tcin, setTcin] = useState("");
  const handleCardClick = (clickedTcin) => {
    // Set the tcin value when the card is clicked
    setTcin(clickedTcin);
  };
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    conSetProducts(consoleArray.default);
    accSetProducts(accArray.default);
    gameSetProducts(gameArray.default);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Delay of 2000 milliseconds (2 seconds)

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      rotate: -180,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: {
        opacity: { duration: 2 },
        rotate: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      },
    },
    whileHover: {
      borderRadius: "50%",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const AnimatedImage = ({ src, alt, onClick }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 1,
    });

    return (
      <motion.img
        ref={ref}
        variants={variants}
        initial="initial"
        animate={inView ? "animate" : "initial"} // 当图片在视口中时触发动画
        whileHover="whileHover"
        src={src}
        alt={alt}
        onClick={onClick}
        style={{
          cursor: "pointer",
          display: "block",
        }}
      />
    );
  };

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
        <ScrollToTopButton />
        <div className="gameIntroductionWrapper">
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/76780148")}
              src="/GameBanner/topBanner_s_animals.jpg"
              alt="animals"
            />
          </GameIntroduction>
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/53494594")}
              src="/GameBanner/topBanner_s_Bros.jpg"
              alt="Bros"
            />
          </GameIntroduction>
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/54191276")}
              src="/GameBanner/topBanner_s_Kart.jpg"
              alt="Kart"
            />
          </GameIntroduction>
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/89430347")}
              src="/GameBanner/topBanner_s_Mairo.jpg"
              alt="Mairo"
            />
          </GameIntroduction>
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/88492050")}
              src="/GameBanner/topBanner_s_Zelda.jpg"
              alt="Zelda"
            />
          </GameIntroduction>
          <GameIntroduction>
            <AnimatedImage
              onClick={() => navigate("/product/82255228")}
              src="/GameBanner/topBanner_s_Cornet.jpg"
              alt="Cornet"
            />
          </GameIntroduction>
        </div>

        <CategoryTitle>
          <img
            src="/CategoryTitle/FeaturedItems.png"
            alt="FeaturedItems"
            style={{ width: "350px" }}
          />
        </CategoryTitle>
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
        <CategoryTitle>
          <img
            src="/CategoryTitle/Console.png"
            alt="FeaturedItems"
            style={{ width: "250px" }}
          />
        </CategoryTitle>
        <div className="ItemsContainer">
          {conProducts.slice(0, 6).map((accProducts, index) => (
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
        <div className="viewAllConsole">
          <Link to="./Pages/Consoles" style={{ textDecorationColor: "#000" }}>
            <span>View All Consoles</span>
          </Link>
        </div>

        <Link to="./AdFunction/Advertisement">
          <Link to="./AdFunction/Advertisement">
            <Advertise>
              <img src="./Banner_image/ad1.png" alt="15"></img>
            </Advertise>
          </Link>
        </Link>
        <CategoryTitle>
          <img
            src="/CategoryTitle/Game.png"
            alt="FeaturedItems"
            style={{ width: "200px" }}
          />
        </CategoryTitle>
        <div className="ItemsContainer">
          {gameProducts.slice(0, 6).map((accProducts, index) => (
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
        <div className="viewAllGame">
          <Link to="./Pages/Games" style={{ textDecorationColor: "#000" }}>
            <span>View All Games</span>
          </Link>
        </div>

        <Link to="./AdFunction/Ad2">
          <Advertise>
            <ProductCard
              image="./Banner_image/ad2.png"
              tcin="89430347"
              onClick={handleCardClick}
            ></ProductCard>
          </Advertise>
        </Link>
        <CategoryTitle>
          <img
            src="/CategoryTitle/GamingAc.png"
            alt="FeaturedItems"
            style={{ width: "370px" }}
          />
        </CategoryTitle>
        <div className="ItemsContainer">
          {accProducts.slice(0, 6).map((accProducts, index) => (
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
        <div className="viewAllAcc">
          <Link
            to="./Pages/Accessories"
            style={{ textDecorationColor: "#000" }}
          >
            <span>View All Accessories</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
