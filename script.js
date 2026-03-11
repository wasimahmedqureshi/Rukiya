var audio = document.getElementById("audio");
var progress = document.getElementById("progress");

function playAudio(){
audio.play();
}

function pauseAudio(){
audio.pause();
}

function stopAudio(){
audio.pause();
audio.currentTime = 0;
}

audio.addEventListener("timeupdate",function(){

progress.value = (audio.currentTime / audio.duration) * 100;

});

progress.addEventListener("input",function(){

audio.currentTime = (progress.value/100)*audio.duration;

});
