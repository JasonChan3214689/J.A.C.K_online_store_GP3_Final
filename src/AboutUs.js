import "./AboutUs.css";
const AboutUs = () => {
  console.log(123);
  return (
    <div id="AboutUs">
      <div>
        <img src="/AboutUs.png" alt="AboutUs" style={{ width: "100%" }} />
      </div>
      <div className="AboutUsCard">
        <img src="./Chairman.png" alt="Chairman" className="Chairman" />
        <div className="AboutUsText">
          <p>Welcome to J.A.C.K Company Limited!</p>
          <p>
            As the CEOs of our esteemed gaming enterprise, We are thrilled to
            introduce you to a world of immersive gaming experiences.
          </p>
          <p>
            At J.A.C.K, we are passionate about providing our customers with
            top-quality games, cutting-edge consoles, and a wide range of
            accessories to enhance their gaming adventures. With a deep
            understanding of the gaming industry and a commitment to customer
            satisfaction, we strive to bring you the latest releases, timeless
            classics, and innovative gaming technology.
          </p>
          <p>
            Our mission is to create a platform where gamers of all levels can
            discover their next favorite game, connect with fellow enthusiasts,
            and elevate their gaming prowess. Join us on this exciting journey
            as we unlock the power of gaming and fuel your passion for immersive
            entertainment. Get ready to level up with J.A.C.K Company Limited!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
