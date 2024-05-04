import React, { useState } from "react";

const AddVideo = ({ addVideo }) => {
  const initialState = {
    channel: "react multiverse",
    time: "1 month ago",
    verified: false,
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(initialState);
  // console.log(video);
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addVideo(video);
    setVideo(initialState);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title.."
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views.."
        value={video.views}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddVideo;
