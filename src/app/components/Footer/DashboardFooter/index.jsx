import AudioPlayer from "react-h5-audio-player";
import { AudioContext } from "../../../store/audioContext";
import React from "react";

export const DashboardFooter = () => {
  const { audio } = React.useContext(AudioContext);
  return (
    audio.playing && (
      <AudioPlayer
        autoPlay
        src={audio.playing}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    )
  );
};