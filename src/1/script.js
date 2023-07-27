var myVideo = document.getElementById("video1"); 
var playPauseText = document.getElementById("playPauseText");
var playPauseSymbol = document.getElementById("playPauseSymbol");

function playPause() { 
  if (myVideo.paused){ 
    myVideo.play();
    playPauseText.textContent = "Pause";
    playPauseSymbol.classList.remove("fa-play");
    playPauseSymbol.classList.add("fa-pause");

  } else { 
    myVideo.pause();
    playPauseText.textContent = "Play";
    playPauseSymbol.classList.remove("fa-pause");
    playPauseSymbol.classList.add("fa-play");
  }
} 

function makeBig() { 
  myVideo.width = 560; 
} 

function makeSmall() { 
  myVideo.width = 320; 
} 

function makeNormal() { 
  myVideo.width = 420; 
} 


var c31Window = document.getElementById("c31-window");

function hideWindow() {
  if(c31Window.classList.contains("hide")){
    c31Window.classList.remove("translate-y-[90%]");
    c31Window.classList.remove("hide");
  } else {
    c31Window.classList.add("translate-y-[90%]")
    c31Window.classList.add("hide");
  }
}

// ! Using MediaAPI
// ! https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player#using_the_media_api

const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const timeCur = document.getElementById("video-player-time-curr");
const timeTot = document.getElementById("video-player-time-total");

myVideo.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", myVideo.duration);
});

myVideo.addEventListener("timeupdate", () => {
  progress.value = myVideo.currentTime;
  progressBar.style.width = `${Math.floor(
    (myVideo.currentTime * 100) / myVideo.duration,
  )}%`;

  // Convert to second, minute, hour
  var curSecondInt = Math.floor(myVideo.currentTime);

  var curHour = Math.floor(curSecondInt / 3600);
  var curMinute = Math.floor(curSecondInt / 60);
  var curSeconds = curSecondInt % 60;
  curSeconds = curSeconds < 10 ? "0"+curSeconds : curSeconds;

    
  var totSecondInt = Math.floor(myVideo.duration);

  var totHour = Math.floor(totSecondInt / 3600);
  var totMinute = Math.floor(totSecondInt / 60);
  var totSeconds = totSecondInt % 60;
  totSeconds = totSeconds < 10 ? "0"+totSeconds : totSeconds;

  if (totHour == 0){
    timeCur.innerText = curMinute + ":" + curSeconds;
    timeTot.innerText = totMinute + ":" + totSeconds;
  } else {
    timeCur.innerText = curHour + ":" + curMinute + ":" + curSeconds;
    timeTot.innerText = totHour + ":" + totMinute + ":" + totSeconds;
  }


});



