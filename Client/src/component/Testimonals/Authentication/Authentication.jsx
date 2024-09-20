import React, { useState } from "react";
import "./Authentication.css";
import close from "../../../assets/svgs/close.svg";

const Authentication = ({ handlegetAuthPage, handleDelete, selected }) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selected);
    //backend here to check if the submited data is correct
    // handleDelete(selected.id);
  };

  return (
    <div className="authentication-container">
      <div className="authentication">
        <div className="header">
          <img src={close} onClick={handlegetAuthPage} alt="X" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="input"
            type="password"
            autoComplete="true"
            onChange={handleChange}
            required
            placeholder="Enter Pass Key"
          />
          <button type="submit">Check</button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
