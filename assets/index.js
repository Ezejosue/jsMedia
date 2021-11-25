import MediaPlayer from "./mediaPlayer";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video });
button.onclick = () => player.togglePlay();

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();
