import React from "react";
import NavbarComp from "./components/NavbarComp";
import CarouselComp from "./components/CarouselComp";
import Marketting from "./components/Marketting";
import Featurette from "./components/Featurette";
import FooterComp from "./components/FooterComp";

const App = () => {
  return (
    <>
      <NavbarComp />
      <CarouselComp />
      <Marketting />
      <Featurette />
      <FooterComp />
    </>
  );
};

export default App;
