import React from "react";
import "./Authentication.css";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="authentication">
        <h1>Pass Key</h1>
        <form method="post">
          {/* <input type="text" for="name" required placeholder="Name" />
          <input type="text" required placeholder="Email" />
          <textarea placeholder="Add some note" /> */}
          <input type="password" required placeholder="Pass Key" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Authentication;
