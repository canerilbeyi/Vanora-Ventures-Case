import React from "react";
import YoutubeEmbed from "./YoutubeVideo";
import Wrapper from "../assets/wrappers/Promo";

const Promo = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>Feel the excellent wet braking with Driveways!</p>
        <button className="watch-btn">Watch all videos</button>
      </div>
      <YoutubeEmbed embedId="_XqUpE06pyc" />
      <button className="watch-btn2">Watch all videos</button>
    </Wrapper>
  );
};

export default Promo;
