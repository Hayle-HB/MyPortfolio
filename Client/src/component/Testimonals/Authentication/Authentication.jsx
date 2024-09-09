import React, { useState } from "react";
import "./Authentication.css";
import close from "../../../assets/svgs/close.svg";
const Authentication = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newData = e.target.value;
    setData(newData);
    console.log(data);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const handleErrorMessage = () => {
    setError(!error);
  };

  return (
    <div className="authentication-container">
      <div className="authentication">
        <div className="header">
          {/* <h1>Pass Key</h1> */}
          <img src={close} alt="X" />
        </div>
        <form>
          {/* <input type="text" for="name" required placeholder="Name" />
          <input type="text" required placeholder="Email" />
          <textarea placeholder="Add some note" /> */}
          <input
            id="input"
            type="password"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Enter Pass Key"
          />
          <input type="submit" onSubmit={() => handleSubmit()} />
          {error && (
            <span className="error-message-box">
              <h4>Please Enter the pass key first or close it</h4>
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Authentication;
