import AudioPlayer from "react-h5-audio-player";
import { AudioContext } from "../../../store/audioContext";
import { AudioInformation } from "../../MusicCard/AudioInformation";
import footerstyle from "../style.module.css";

import React from "react";
import { combineClasses } from "../../../../utils/format";
import "./style.css";

export const DashboardFooter = (props) => {
  const { audio } = React.useContext(AudioContext);
  console.log(audio);
  return (
    audio.playing && (
      <footer className={combineClasses(props.className, footerstyle.footer)}>
        <AudioInformation {...audio?.current} />
        <div className="player">
          <AudioPlayer
            autoPlay
            src={audio.playing}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </footer>
    )
  );
};
