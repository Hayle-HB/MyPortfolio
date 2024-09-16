import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import back from "../../../assets/svgs/usages/back.svg";
import remove from "../../../assets/svgs/usages/delete.svg";
import edit from "../../../assets/svgs/usages/edit.svg";
import photo from "../../../assets/Img/main-one.jpg";

import linkedin from "../../../assets/svgs/linkedin.svg";
import telegram from "../../../assets/svgs/telegram.svg";
import instagram from "../../../assets/svgs/instagram.svg";
import email from "../../../assets/svgs/email.svg";

import Authentication from "../Authentication/Authentication";

import "./ShowMore.css";

const ShowMore = ({ selected, handleSelected, handleDelete }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [showEditWarning, setShowEditWarning] = useState(false);
  const [getAuthPage, setgetAuthPage] = useState(false);

  const handleDeleteClick = () => {
    if (!showEditWarning) {
      setShowWarning(!showWarning);
    }
  };

  const handleEditClick = () => {
    if (!showWarning) {
      setShowEditWarning(!showEditWarning);
    }
  };

  const handlegetAuthPage = () => {
    setgetAuthPage(true);
    setShowEditWarning(false);
    setShowWarning(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="showMore-Container2">
      <div className="show-more-content">
        <div
          className={`top-element ${showEditWarning ? " opacity" : ""} ${
            showWarning ? " opacity" : ""
          }`}
        >
          <div className="show-more-top">
            <img
              className="icon"
              src={back}
              alt="Back"
              onClick={() => handleSelected(selected.id)}
            />
            <h1>{selected.name}</h1>
            <p>.</p>
          </div>

          <div className="show-more-middle">
            <img
              className="main-photo"
              src={photo}
              alt={`${selected.name} photo`}
            />
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur animi veritatis modi suscipit eum accusantium rem
                aliquid sapiente, recusandae dignissimos vitae deleniti. Esse
                deleniti cupiditate aliquid nihil incidunt veniam quidem?
              </p>
              <div className="user-icons">
                <img src={telegram} alt="facebook" />
                <img src={linkedin} alt="facebook" />
                <img src={email} alt="facebook" />
                <img src={instagram} alt="facebook" />
              </div>
            </div>
          </div>
        </div>

        <div className="show-more-actions">
          {showEditWarning && (
            <div
              className={`yes-no-box-edit ${
                showEditWarning ? "show-edit-warning" : ""
              }`}
            >
              <h4>Only the one who added this can edit this testimonial.</h4>
              <h4>Are you the one, and are you sure?</h4>

              <div className="yes-no">
                <button onClick={() => handlegetAuthPage()}>Yes</button>
                <button onClick={handleEditClick}>No</button>
              </div>
            </div>
          )}
          <img
            className="icon"
            src={edit}
            alt="Edit"
            onClick={handleEditClick}
          />

          {showWarning && (
            <div className={`yes-no-box ${showWarning ? "show-warning" : ""}`}>
              <h4>Only the one who added this can delete this testimonial.</h4>
              <h4>Are you the one, and are you sure?</h4>

              <div className="yes-no">
                <button onClick={() => handlegetAuthPage()}>Yes</button>
                <button onClick={handleDeleteClick}>No</button>
              </div>
            </div>
          )}
          <img
            className="icon"
            src={remove}
            alt="Delete"
            onClick={handleDeleteClick}
          />
        </div>
      </div>
      {getAuthPage && <Authentication handlegetAuthPage= {handlegetAuthPage} />}
    </div>
  ); 
};

export default ShowMore;
