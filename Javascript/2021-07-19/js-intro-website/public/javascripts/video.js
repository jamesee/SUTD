// const video = document.querySelector('#vision-video');
// const btn = document.querySelector('#play-video-btn');

// let isPlaying = false;

// btn.addEventListener('click', () => {
//     // either use isPlaying variable or using video.paused property are both ok.
//     if (isPlaying) {
//         video.pause();
//         btn.innerHTML = 'Watch video';
//         isPlaying = false;
//     } else {
//         video.play();
//         btn.innerHTML = 'Pause video';
//         isPlaying = true;
//     }
// });

// reference : https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// let videoElem = document.getElementById("vision-video");
// let playButton = document.getElementById("play-video-btn");

// playButton.addEventListener("click", handlePlayButton, false);
// // playVideo();

// async function playVideo() {
//   try {
//     await videoElem.play();
//     playButton.classList.add("playing");
//   } catch(err) {
//     playButton.classList.remove("playing");
//   }
// }

// function handlePlayButton() {
//   if (videoElem.paused) {
//     playButton.innerHTML = 'Paused video';
//     playVideo();
    
//   } else {
//     playButton.innerHTML = 'Watch video';
//     videoElem.pause();
//     playButton.classList.remove("playing");
//   }
// }

// reference : https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
let videoElem = document.getElementById("vision-video");
let playButton = document.getElementById("play-video-btn");

playButton.addEventListener("click", handlePlayButton, false);
// playVideo();

const playBtnDisplay = () => { 
    playButton.innerHTML = (playButton.classList.contains("playing"))? 'Pause Video': 'Watch Video';
}

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch(err) {
    playButton.classList.remove("playing");
  }
  playBtnDisplay();
}

function handlePlayButton() {
    
  
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
  playBtnDisplay();
}
