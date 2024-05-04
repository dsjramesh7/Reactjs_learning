import React, { useState } from "react";

const PlayButton = ({ children, onPlay, onPause }) => {
  const [play, setPlay] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (play) {
      onPause();
      console.log("pause");
    } else {
      onPlay();
      console.log("play");
    }
    setPlay(!play);
  };
  return (
    <button className="button-56" onClick={handleClick}>
      {children}:{play ? "⏸️" : "▶️"}
    </button>
  );
};

export default PlayButton;
