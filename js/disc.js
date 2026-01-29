import { musicList } from "./audio.js";

// here we are going to load the imgs into disc-container
const discContainer = document.querySelector('.disc-container');

function loadImg() {
    musicList.forEach(
        image => {
            const discImg = document.createElement('img');
            discImg.src = image.img;
            discImg.alt = image.id;

            discContainer.appendChild(discImg);
        }
    )
}
export {loadImg};