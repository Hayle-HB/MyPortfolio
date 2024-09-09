import React from "react";
import "./Card.css";
import edit from "../../../assets/svgs/usages/edit.svg";
import remove from "../../../assets/svgs/usages/delete.svg";
const Card = ({
  id,
  name,
  testimony,
  image,
  isHighlighted,
  handleSelected,
}) => {
  return (
    <div className={`card ${isHighlighted ? "highlighted" : ""}`}>
      <img src={image} alt={`${name}'s picture`} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-testimony">"{testimony}"</p>
        <button href={`testimonials/`} onClick={() => handleSelected(id-1)}>
          show more
        </button>
      </div>
    </div>
  );
};

export default Card;
