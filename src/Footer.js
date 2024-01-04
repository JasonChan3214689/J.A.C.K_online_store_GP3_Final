import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="SocialMediaIcon">
        <img src="/Social Media/facebook.png" alt=" facebook"></img>
        <img src="/Social Media/ig.png" alt=" ig"></img>
        <img src="/Social Media/twitter.png" alt=" twitter"></img>
      </div>
      <div>
        <Link to="./AboutUs">About Us</Link>
      </div>
      <div className="CompanyName">
        <img src="/Social Media/c.png" alt="c"></img>
        <span>J.A.C.K Company Ltd</span>
      </div>
    </div>
  );
}
