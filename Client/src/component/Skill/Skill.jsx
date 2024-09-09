// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypeWriter from "typewriter-effect";
import "./Skill.css"; // Custom styles

import { SKILLS } from "../../utils/skillData.jsx";

const Skill = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <h1>
        <TypeWriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: ["Skills"],
          }}
        />
      </h1>

      <Slider {...settings}>
        {SKILLS.map((skill, index) => (
          <div key={index} className="slide">
            <div className="skill-content">
              <div className="icon-title">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className={`skill-icon ${
                    skill.title == "JavaScript" ? " js" : ""
                  } ${skill.title == "Python" ? " py" : ""}${
                    skill.title == "CSS" ? " css" : ""
                  }`}
                />
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
              <span
                data-percentage={skill.percentage}
                style={{ "--percentage": skill.percentage }}
              >
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skill;
