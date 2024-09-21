import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavBar from "./component/NavBar/NavBar";
import SocialLinks from "./component/SideBar/SocialLinks";
import Testimonials from "./component/Testimonals/Testimonials";
import MainBody from "./component/MainBody/MainBody";
import Skill from "./component/Skill/Skill";
import RunningText from "./component/RunningText/RunningText";
import Footer from "./component/Footer/Footer";
import Belongs from "./component/Belongs/Belongs";
import AddTestimony from "./component/AddTestimony/AddTestimony";
import Tempo from "./component/Tempo/Tempo";
const App = () => {
  return (
    <> 
      <NavBar />
      <Tempo/>
      {/* <SocialLinks /> */}
      <MainBody />
      <RunningText text="This is a scrolling text!" />
      <Skill />
      {/* <Belongs /> */}
      <Testimonials />
      <AddTestimony />

      <Footer />
    </>
  );
};

export default App;
