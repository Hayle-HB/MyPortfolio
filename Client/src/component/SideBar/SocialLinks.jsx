import React from "react";
import icons from "./SocialIcons";
import "./SocialLinks.css";
const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="open-close">
        <img src={icons.leftArrow} alt="expand -->"/>
        <img src={icons.rightArrow} alt="collapse <--"/>
      </div>
      <h2>HB</h2>
      <div className="social-links-content">
        <a target="_blank" href="https://t.me/Hayle_HB">
          <img src={icons.telegram} alt="social-links" />
        </a>
        <a target="_blank" href="mailto:haylemeskelhaylemariam@gmail.com">
          <img src={icons.email} alt="social-links" />
        </a>
        <a target="_blank" href="https://github.com/Hayle-HB/">
          <img src={icons.github} alt="social-links" />
        </a>
        <a target="_blank" href="https://www.instagram.com/hayle_hb/">
          <img src={icons.instagram} alt="social-links" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/haylemeskel-haylemariam-b9212b298/"
        >
          <img src={icons.linkedin} alt="social-links" />
        </a>
        <a target="_blank" href="https://x.com/hayle_hb">
          <img src={icons.twitter} alt="social-links" />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@hayle_hb">
          <img src={icons.tiktok} alt="social-links" id="tiktok" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
