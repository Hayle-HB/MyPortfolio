import React from "react";
import "./RunningText.css";

const RunningText = ({ text }) => {
  return (
    <div className="running-text-container">
      <div className="running-text">{text}</div>
    </div>
  );
};

export default RunningText;
