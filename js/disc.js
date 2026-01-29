import { musicList } from "./audio.js";
import { getCurrentMusicID } from "./app.js";

// here we are going to load the imgs into disc-container
const discContainer = document.querySelector('.disc-container');

// create the disc once
const discImg = document.createElement('img');
discImg.classList.add('disc');
discContainer.appendChild(discImg);

function loadImg() {
    discImg.src = musicList[getCurrentMusicID()].img;
    discImg.alt = musicList[getCurrentMusicID()].id;
}

function stopAnimation() {
    
}


export {loadImg};