import React, { useState } from "react";
import Heading from "./components/Heading";
import Video from "./components/Video";
import { videosData } from "./data/Data";
// import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState(videosData);

  function addVideo(video) {
    setVideos([
      ...videos,
      {
        ...video,
        id: videos.length + 1,
      },
    ]);
  }
  return (
    <>
      <Heading />
      <div className="video-container">
        <AddVideo addVideo={addVideo} />
        <VideoList videos={videos} />

        {/* <Counter /> */}
      </div>
    </>
  );
};

export default App;
