import { musicList } from "./audio.js";

// we should use event delegation for the buttons
// const toneBoxPlayer = document.querySelector();
const btnSection = document.querySelector('.btn-section');
const playBtn = document.querySelector('.play-btn');
const playIcon = playBtn.querySelector('i');

let currentMusicID = 0;

btnSection.addEventListener('click', e => {
    const btn = e.target.closest('.btn');

    if(!btn) return; // you did not click on the btn

    // we garuntee that the btn has been clicked
    console.log('you clicked the btn');
    if(btn.classList.contains('play-btn')) {
        console.log('this is the play btn');
        if (currentMusic.music.paused) {playMusic()}
        else {pause()}
        return;
    }
})

const currentMusic = musicList[currentMusicID];
function pause() {
    toggleIcon();
    currentMusic.music.pause();
}

function toggleIcon() {
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-circle-pause');
}

function playMusic() {
    toggleIcon();
    currentMusic.music.play();
}

function nextMusic() {
    currentMusicID++; // we have to make sure we are not out of bounds
}

function prevMusic() {
    currentMusicID--; // same thing
}