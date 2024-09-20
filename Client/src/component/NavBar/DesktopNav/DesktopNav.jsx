import React from "react";
import "../NavBar.css"; // Assuming you have a CSS file for styling

const DesktopNav = () => {
  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="logo">
          <h1>HB</h1>
        </div>
        <nav>
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
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;
