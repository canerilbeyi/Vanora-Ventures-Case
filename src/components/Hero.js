import React from "react";
import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <div className="text-container">
        <p>Nothing can stop you</p>
      </div>
      <div className="btn-container">
        <button>Find out more</button>
      </div>
    </Wrapper>
  );
};

export default Hero;
