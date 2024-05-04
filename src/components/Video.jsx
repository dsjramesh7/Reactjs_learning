import React, { Children } from "react";
import PlayButton from "./PlayButton";

const Video = ({ title, channel = "yowai mo", views, time, id, verified, children }) => {
  return (
    <div>
      <div className="pic">
        <img
          className="video-image"
          src={`https://picsum.photos/id/${id}/200/120`}
          alt=""
        />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified ? "✅" : null}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Video;
