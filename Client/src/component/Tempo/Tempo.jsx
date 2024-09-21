import React from "react";
import "./Tempo.css";

import programmable from "../../assets/svgs/technologies/programmible.svg";
import sdk from "../../assets/svgs/technologies/sdk.svg";
import developer from "../../assets/svgs/technologies/developerOnbording.svg";
import video from "../../assets/svgs/technologies/videoTutorials.svg";

const Tempo = () => {
  return (
    <div className="tempo-container">
      <div className="tempo-content">
        <div className="header-top">
          <img src={programmable} alt="prog" />
          <div className="prog-note">
            <h1>Programmable Media </h1>
            <h4>
              AI Powered image and video APIS, SDKs and widgets to automate the
              visual assets lifecycle
            </h4>
            <h3 className="btm">Getting Started</h3>
          </div>
        </div>

        <div className="card-tempo">
          <div className="item">
            <img src={sdk} alt="sdk" />
            <h3>SDK Quick Start</h3>
          </div>
          <div className="item">
            <img src={developer} alt="sdk" />
            <h3>Developer Onboarding</h3>
          </div>
          <div className="item">
            <img src={video} alt="sdk" />
            <h3>Video Tutorials</h3>
          </div>
          <div className="last">
            <h3>Get started with...</h3>
            <h4>Upload </h4>
            <h4>Transformation URL API</h4>
            <h4>REST APIs </h4>
            <h4>Video best practices</h4>
            <h4>Responsive images</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempo;
