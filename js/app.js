import { musicList } from "./audio.js";
import { loadImg } from "./disc.js";

// we should use event delegation for the buttons
// const toneBoxPlayer = document.querySelector();
const btnSection = document.querySelector('.btn-section');
const playBtn = document.querySelector('.play-btn');
const playIcon = playBtn.querySelector('i');

let currentMusicID = 0;

btnSection.addEventListener('click', e => {
    const currentMusic = musicList[currentMusicID];

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
    if (btn.classList.contains('next-btn')) {
        console.log('next music has been clicked');
        nextMusic();
        return;
    }
    if (btn.classList.contains('prev-btn')) {
        prevMusic();
        return;
    }
})

function pause() {
    const currentMusic = musicList[currentMusicID];
    toggleIcon();
    currentMusic.music.pause();
}

function toggleIcon() {
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-circle-pause');
}

function playMusic() {
    const currentMusic = musicList[currentMusicID];
    toggleIcon();
    loadImg();
    currentMusic.music.play();
}

function nextMusic() {
    // we have to make sure we are not out of bounds
    if (currentMusicID < musicList.length - 1) {
        currentMusicID++;
    } else {
        currentMusicID = 0;
    }
}

function prevMusic() {
    // same thing
    if (currentMusicID <= 0) {
        currentMusicID = musicList.length - 1;
    } else {
        currentMusicID--;
    }
}