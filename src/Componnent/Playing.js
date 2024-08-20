import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
  const { currentSong, handleSetSong } = useContext(Songs)
  const handleClickNext = () => {
    handleSetSong(currentSong.id + 1)
  }
  const handleClickPre = () => {
    handleSetSong(currentSong.id - 1)
  }
  return (
    <div>
      <AudioPlayer
        className="player-music bg-slate-900 h-[6rem]"
        src={currentSong.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}