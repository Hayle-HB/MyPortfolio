import React, { useState } from "react";
import "./Authentication.css";
import close from "../../../assets/svgs/close.svg";
const Authentication = () => {
  const [data, setData] = useState("");
  const [visible, setVisible] = useState(true);


  const handleChange = (e) => {
    const newData = e.target.value;
    setData(newData);
    console.log(data);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const handleClose = () => {
    setVisible(!visible);
  }




  return (
    <div className="authentication-container">
      {visible && <div className="authentication">
        <div className="header">
          {/* <h1>Pass Key</h1> */}
          <img src={close} onClick={() => handleClose()} alt="X" />
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
        </form>
      </div>}
    </div>
  );
};

export default Authentication;
