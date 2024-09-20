import React from "react";
import tiktok from "../../assets/svgs/tiktok.svg";
import instagram from "../../assets/svgs/instagram.svg";
import telegram from "../../assets/svgs/telegram.svg";

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-footer">
          <h1>
            H <sup>2</sup> B
          </h1>
        </div>
        <div className="middle-footer">
          <a href="./home">
            <h3>Home</h3>
          </a>
          <a href="./About">
            <h3>About</h3>
          </a>
          <a href="./Service">
            <h3>Service</h3>
          </a>
          <a href="./Skills">
            <h3>Skills</h3>
          </a>

          <a href="./Awards & Certificates">
            <h3>Achievements </h3>
          </a>

          <a href="./Contact">
            <h3>Contact</h3>
          </a>
        </div>
        <div className="right-footer">
          <a href="http://www.tiktok.com/Hayle_HB">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="http://www.instagram.com/hayle_hb">
            <img src={telegram} />
          </a>

          <a href="http://www.telegram.web/Hayle_HB">
            <img src={tiktok} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
