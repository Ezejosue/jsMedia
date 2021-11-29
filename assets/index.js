import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.getElementById("playButton");
const buttonMute = document.getElementById("muteButton");
const player = new MediaPlayer({
  el: video,
  plugins: [
    //new AutoPlay()
  ],
});
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
