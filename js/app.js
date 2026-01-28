import { musicList } from "./audio.js";

// we should use event delegation for the buttons
// const toneBoxPlayer = document.querySelector();
const btnSection = document.querySelector('.btn-section');
const playBtn = document.querySelector('.play-btn');
const playIcon = playBtn.querySelector('i');

let currentMusic = 0;

btnSection.addEventListener('click', e => {
    const btn = e.target.closest('.btn');

    if(!btn) return; // you did not click on the btn

    // we garuntee that the btn has been clicked
    console.log('you clicked the btn');
    if(btn.classList.contains('play-btn')) {
        console.log('this is the play btn');
        pause();
        return;
    }
})

function pause() {
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-circle-pause');

}

function playMusic() {
    
}

function nextMusic() {
    
}

function prevMusic() {
    
}