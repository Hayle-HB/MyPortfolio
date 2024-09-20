import React, { useState } from "react";
import "../NavBar.css"; // Assuming you have a CSS file for styling
import open from "../../../assets/svgs/menu.svg";
import close from "../../../assets/svgs/close.svg";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigationMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="logo">
          <h1>HB</h1>
        </div>

        <nav>
          {menuOpen ? (
            <img
              id="close"
              src={close}
              onClick={handleNavigationMenu}
              alt="Close Menu"
            />
          ) : (
            <img
              id="menu"
              src={open}
              onClick={handleNavigationMenu}
              alt="Open Menu"
            />
          )}

          {menuOpen && (
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="skills">Skills</a>
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
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
