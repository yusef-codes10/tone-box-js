import { musicList } from "./audio.js";
import { getCurrentMusicID } from "./app.js";

// here we are going to load the imgs into disc-container
const discContainer = document.querySelector('.disc-container');

// 1️⃣ create the disc once
const discImg = document.createElement('img');
discImg.classList.add('disc');
discContainer.appendChild(discImg);

// 2️⃣ change the src only when the song changes
function loadImg() {
    discImg.src = musicList[getCurrentMusicID()].img;
    discImg.alt = musicList[getCurrentMusicID()].id;
}


// 3️⃣ Control the animation with class toggle
function startAnimation() {
    discImg.classList.add('playing');
}

function stopAnimation() {
    discImg.classList.remove('playing');
}


export {loadImg, startAnimation, stopAnimation};