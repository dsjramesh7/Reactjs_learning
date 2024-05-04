import React from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";

const VideoList = ({videos}) => {
  return (
    <>
      {videos.map((v) => {
        return (
          <Video
            key={v.id}
            title={v.title}
            views={v.views}
            channel={v.channel}
            id={v.id}
            verified={v.verified}
            time={v.time}
          >
            <PlayButton
              onPlay={() => console.log("playing", v.title)}
              onPause={() => console.log("paused", v.title)}
            >
              {v.title}
            </PlayButton>
          </Video>
        );
      })}
    </>
  );
};

export default VideoList;
