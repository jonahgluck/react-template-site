import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
