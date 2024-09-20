import React, { useState } from "react";
import "./Belongs.css";
import Card from "./Card";
import img from "../../assets/Img/main-one.jpg";
import img1 from '../../assets/Img/group.jpg'
import img2 from '../../assets/svgs/technologies/react.svg'
import img3 from '../../assets/svgs/github.svg';
const Belongs = () => {
  const [belongs, setbelongs] = useState([
    {
      id: "one",
      name: "Casiopia",
      icon: img,
      position: "vise president",
      detail:
        "LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus",
    },

    {
      id: "two",
      name: "A2SV",
      icon: img1,
      position: "vise president",
      detail:
        "LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus",
    },

    {
      id: "three",
      name: "GDSC",
      icon: img2,
      position: "vise president",
      detail:
        "LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus",
    },

    {
      id: "four",
      name: "HHBW",
      icon: img3,
      position: "vise president",
      detail:
        "LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus LuFolderMinus LuFol derMinusLuFolde rMinusLuFolder Minus",
    },
  ]);
  const map = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  };
  const [isSelected, setSelected] = useState(null);
  const handleClickBelong = (belong) => {
    setSelected(belong);
    console.log(belong)
  }
  return (
    <div className="belongs-container">
      <div className="each-belong">
        {belongs.map((belong) => (
          <div
            key={belong.id}
            className={`selected-${isSelected ? "selected": '' }`}
            onClick={() => handleClickBelong(belong)}
          >
            <Card belong={belong} />
          </div>
        ))}
      </div>
      {isSelected && (
        <div className="detail-container">
          <img src={isSelected.icon} alt="main" />
          <div className="left">
            <h1>{isSelected.name}</h1>
            <p>{isSelected.detail}</p>
          </div>
        </div>
      )}
      {!isSelected && (
        <div className="not-selected">
          <h1>Click One Belong To See</h1>
        </div>
      )}
    </div>
  );
};

export default Belongs;
