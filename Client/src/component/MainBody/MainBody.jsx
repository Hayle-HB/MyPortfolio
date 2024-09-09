import React from "react";
import TypeWriter from "typewriter-effect";
import profile from "../../assets/Img/main-one.jpg";
import Icons from "./TechnologyIcons.jsx";
import "./MainBody.css";
const MainBody = () => {
  return (
    <div className="main-body-container">
      <div className="main-body-content">
        <div className="main-text-area">
          <h4 className="I-am">
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Hello, I am..."],
              }}
            />
          </h4>
          <h1>Haylemeskel Haylemariam</h1>
          <p>
            A passionate Software Engineering student currently in my 4rd year
            at AASTU. With a keen interest in full-stack web development <br/> and
            Python, I’m dedicated to creating innovative solutions that simplify
            and enhance everyday processes.
          </p>
          <p>
            I’m always open to new connections and opportunities, so feel free
            to reach out if you'd like to collaborate or just have a chat about
            technology!
          </p>
          <div className="main-buttons">
            <img src={Icons.code}></img>
            <img src={Icons.css}></img>
            <img src={Icons.js}></img>
            <img src={Icons.nodejs}></img>
            <img src={Icons.react}></img>
            <img className="mongo-db" src={Icons.mongoDB}></img>
            <img src={Icons.python}></img>
            <img src={Icons.html}></img> <br />
          </div>
          <div className="download-resume">
            <button className="download">My-CV</button>
            <button className="hire-mre">Hire-Me</button>
          </div>
        </div>
        <div className="profile-image">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
