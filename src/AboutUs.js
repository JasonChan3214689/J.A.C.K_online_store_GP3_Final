import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  const coFounders = [
    {
      name: "JASON",
      url: "url(/px2.jpg)",
    },
    {
      name: "ANSON",
      url: "url(/px4.jpg)",
    },
    {
      name: "CECILIA",
      url: "url(/px3.jpg)",
    },
    {
      name: "KAYLIE",
      url: "url(/px5.jpg)",
    },
  ];
  return (
    <div className="about-us-container">
      <img src="/AboutUs4.png" alt="aboutUs" className="aboutUsImg" />
      <div className="about-us-text">
        {coFounders.map((founder, index) => (
          <article className="article-wrapper" key={index}>
            <div
              className="rounded-lg container-project"
              style={{
                backgroundImage: founder.url,
                backgroundSize: "cover",
                backgroundPosition: "center top -10px",
              }}
            ></div>
            <div className="project-info">
              <div className="flex-pr">
                <div className="project-title text-nowrap">{founder.name}</div>
                <div className="project-hover"></div>
              </div>
              <div className="types"></div>
            </div>
          </article>
        ))}
      </div>
      <div className="pixelImgContainer">
        <img src="/starPixel.png" alt="star" />
        <img src="/blockPixel.png" alt="block" />
      </div>
      <div className="AboutUsBottomContent">
        <div>
          <h2>Welcome to Gaming Paradise</h2>
          <p>
            Welcome to our gaming entertainment platform! Discover a wide range
            of gaming options, from the latest video games to consoles and
            accessories. Immerse yourself in the world of gaming and elevate
            your entertainment experience.
          </p>
        </div>
        <div>
          <h2>Unleash Your Gaming Potential</h2>
          <p>
            Experience the best in gaming with our top-quality products from
            leading brands. Explore a diverse selection of games, including
            action-packed adventures, immersive RPGs, and competitive
            multiplayer titles. Stay up to date with the latest releases and
            trends.
          </p>
        </div>
        <div>
          <h2>Elevate Your Gameplay with Premium Accessories</h2>
          <p>
            Enhance your gaming setup with our range of high-performance
            accessories. Find gaming controllers, headsets, keyboards, mice, and
            more to optimize your gameplay. Elevate your gaming experience with
            comfort, precision, and style.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
