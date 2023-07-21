import React from "react";
import Wrapper from "../assets/wrappers/YoutubeVideo";

const YoutubeEmbed = ({ embedId }) => (
  <Wrapper>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </Wrapper>
);

export default YoutubeEmbed;
