export const videoPlayerInit = ()=>{
let videoPlayer = document.querySelector('.video-player'),
videoButtonPlay=document.querySelector('.video-button__play'),
videoButtonStop=document.querySelector('.video-button__stop'),
videoTimePassed=document.querySelector('.video-time__passed'),
videoProgress=document.querySelector('.video-progress'),
videoTimeTotal=document.querySelector('.video-time__total');
    
// list need change icon if else
const toggleIcon = () =>{
    if(videoPlayer.paused){
        videoButtonPlay.classList.remove('fa-pause')
        videoButtonPlay.classList.add('fa-play')
    }else{
        videoButtonPlay.classList.add('fa-pause')
        videoButtonPlay.classList.remove('fa-play')

    }
}

//if pause change icons
const togglePlay = () =>{
    if(videoPlayer.paused){
        videoPlayer.play();
        toggleIcon()
    }else{
        videoPlayer.pause()
        toggleIcon()
    }
}

//when click stop time equale 0
const stopPlay = ()=>{
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

const addZero = n=> n<10? '0'+n:n;



videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);
videoPlayer.addEventListener('play', toggleIcon);
videoPlayer.addEventListener('pause', toggleIcon);
videoButtonStop.addEventListener('click', stopPlay)
videoPlayer.addEventListener('timeupdate', ()=>{
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
videoProgress.value=(currentTime/duration)*100;
    let minutePassed = Math.floor(currentTime/60);
    let secondsPassed = Math.floor(currentTime%60);

    let minuteTotal = Math.floor(duration/60);
    let secondsTotal = Math.floor(duration%60);
videoTimePassed.textContent=addZero(minutePassed)+':'+addZero(secondsPassed);
videoTimeTotal.textContent=addZero(minuteTotal)+':'+addZero(secondsTotal);

})
videoProgress.addEventListener('change', ()=>{
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value*duration)/100;
})


}  