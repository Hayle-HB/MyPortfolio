import React, { useState, useEffect } from "react";
import DesktopNavBar from "./DesktopNav/DesktopNav";
import MobileNavBar from "./MobileNav/MobileNav";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    // Function to check window width and toggle between mobile/desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
