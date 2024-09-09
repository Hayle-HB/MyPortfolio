import React, { useState } from "react";
import "./NavBar.css"; // Assuming you have a separate CSS file for styling
import open from "../../assets/svgs/menu.svg";
import close from "../../assets/svgs/close.svg";
const NavBar = () => {
  const [menu, setMenu]  = useState(true);

  const handleNavigationMenu = (e) => {
    setMenu(!menu);
  }

  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="logo">
          <h1>HB</h1>
        </div>

        <nav>
          {/* <input className="none" type="checkbox" id="check" />
            <label className="none" for="check" class="checkbtn">
              <h3 className="none" id="btn">
                +
              </h3>
              <h3 className="none" id="cancel">
                X
              </h3>
            </label> */}

          {!menu && <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="about">Skills</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
            <li>
              <a href="awards">Awards & Certificates</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
              <a href="blogs">Blogs</a>
            </li>
            <li>
              <a href="generation">Generation</a>
            </li>
          </ul>}

          {menu && <img
            id="menu"
            src={open}
            onClick={(e) => handleNavigationMenu(e)}
            alt="="
          />}
          {!menu && <img
            id="close"
            src={close}
            onClick={(e) => handleNavigationMenu(e)}
            alt="="
          />}
        </nav>
        {/* <button className="leave-note">Talk-Me</button> */}
      </div>
    </div>
  );
};

export default NavBar;
