import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavBar from "./component/NavBar/NavBar";
import SocialLinks from "./component/SideBar/SocialLinks";
import Testimonials from "./component/Testimonals/Testimonials";
import MainBody from "./component/MainBody/MainBody";
import Skill from "./component/Skill/Skill";
import RunningText from "./component/RunningText/RunningText";
const App = () => {
  return (
    <>
      <NavBar />
      <SocialLinks />
      <MainBody />
      <RunningText text="This is a scrolling text!" />
      <Skill />
      <div className="box"></div>
      <Testimonials />
    </>
  );
};

export default App;
