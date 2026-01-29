import { musicList } from "./audio.js";
import { getCurrentMusicID } from "./app.js";

// here we are going to load the imgs into disc-container
const discContainer = document.querySelector('.disc-container');

function loadImg() {
    // we have to clear the entire state
    const imgsToDelete = document.querySelectorAll('.to-delete');
    imgsToDelete.forEach(
        image => {
            image.remove();
        }
    );

    const discImg = document.createElement('img');
    discImg.classList.add('to-delete');
    discImg.src = musicList[getCurrentMusicID()].img;
    discImg.alt = musicList[getCurrentMusicID()].id;

    discContainer.appendChild(discImg);
}


export {loadImg};