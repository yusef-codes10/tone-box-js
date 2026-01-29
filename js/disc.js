import { musicList } from "./audio.js";

// here we are going to load the imgs into disc-container
const discContainer = document.querySelector('.disc-container');

function loadImg() {
    musicList.forEach(
        image => {
            const img = document.createElement('img');
            img.src = musicList[image].img;
            img.alt = musicList[image].id;

            discContainer.appendChild(img);
        }
    )
}
export {loadImg};