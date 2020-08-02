export const  musicPlayerInit = ()=>{
  

   const  audio=document.querySelector('.audio'),
    audioImg=document.querySelector('.audio-img'),
    audioHeader=document.querySelector('.audio-header'),
    audioPlayer=document.querySelector('.audio-player'),
    audioNavigation=document.querySelector('.audio-navigation'),
    audioButtonPlay=document.querySelector('.audio-button__play'),
    audioTimePassed=document.querySelector('.audio-time__passed'),
    audioProgress=document.querySelector('.audio-progress__timing'),
    audioProgressTiming=document.querySelector('.audio-progress'),
    audioTimeTotal=document.querySelector('.audio-time__total');

const playlist = ['flow', 'hello', 'speed'];
let trackIndex = 0;

const loadTrack = ()=>{
const isPlayed =audioPlayer.paused;
const track  = playlist[trackIndex];

audioHeader.textContent=track.toUpperCase();
audioImg.src  =`./audio/${track}.jpg`;
audioPlayer.src = `./audio/${track}.mp3`;

if(isPlayed){
    audioPlayer.pause();
}else{
    audioPlayer.play();
} 
}

const nextTrack = () =>{
    if(trackIndex===playlist.length -1){
        trackIndex =0;
    }else{
        trackIndex++
    }
    loadTrack()
}

const prevTrack = ()=>{
    if(trackIndex!== 0){
        trackIndex--;
    }else{
        trackIndex = playlist.length-1; 
    }
    loadTrack()

}

audioNavigation.addEventListener('click', event=>{
    const target = event.target;
    if(target.classList.contains('audio-button__play')){
        audio.classList.toggle('play');
        audioButtonPlay.classList.toggle('fa-paly');
        audioButtonPlay.classList.toggle('fa-pause');
        if(audioPlayer.paused){
            audioPlayer.play();
        }else{
            audioPlayer.pause()
        }
        
    }
    if(target.classList.contains('audio-button__prev')){
        prevTrack()
    }
    if(target.classList.contains('audio-button__next')){
        nextTrack();
    }
})


audioPlayer.addEventListener('ended', ()=>{
    nextTrack();
    audioPlayer.play();
})

const addZero = n=> n<10?'0'+n:n;

audioPlayer.addEventListener('timeupdate', ()=>{
    const duration = audioPlayer.duration;
    const currentTime  = audioPlayer.currentTime;
    const progress =(currentTime/duration)*100;
    audioProgress.style.width = progress+'%';
    const minutesPassed = Math.floor(currentTime/60)||'0';
    const secondsPassed = Math.floor(currentTime%60)||'0';

    const minutesTotal = Math.floor(duration / 60)||'0';
    const secondsTotal =Math.floor(duration % 60)||'0';
    audioTimeTotal.textContent=`${addZero( minutesTotal)}:${addZero(secondsTotal)}`;
    audioTimePassed.textContent=`${addZero(minutesPassed)}:${addZero(secondsPassed)}`
})

audioProgressTiming.addEventListener('click', event=>{
    const x =event.offsetX;
    const allWidth =audioProgressTiming.clientWidth;
    const progress = (x / allWidth)*audioPlayer.duration;
    audioPlayer.currentTime =progress;
})
























}