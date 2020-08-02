export const  radioPlayerInit = ()=>{
   

   let radio=document.querySelector('.radio'),
    radioCoverImg=document.querySelector('.radio-cover__img'),
    radioNavigation=document.querySelector('.radio-navigation'),
    radioHeaderBig=document.querySelector('.radio-header__big'),
    radioItem=document.querySelectorAll('.radio-item'),
    radioStop=document.querySelector('.radio-stop');

const audio = new Audio();
audio.type = 'audio/aac';
radioStop.disabled = true;


const changeIconPlay = ()=>{
    if(audio.paused){
        radioStop.classList.add('fa-play')
        radioStop.classList.remove('fa-stop')
    }else{
        radioStop.classList.remove('fa-play')
        radioStop.classList.add('fa-stop')
    }
}

const selectItem = elem =>{
    radioItem.forEach(item=> item.classList.remove('select'))
    elem.classList.add('select');
}
    radioNavigation.addEventListener('change', (event)=>{
    const target = event.target;
    const parrent = target.closest('.radio-item');
    selectItem (parrent);
    const title = parrent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;
    const img = parrent.querySelector('.radio-img').src;
    radioCoverImg.src = img;
    radioStop.disabled = false;
    audio.src=target.dataset.radioStantion;
    audio.play()
    radio.classList.add('play')
    changeIconPlay()
  
    })


    radioStop.addEventListener('click', ()=>{
    if(audio.paused){
        radio.classList.add('play')
        audio.play()
        changeIconPlay()
    }else{
        radio.classList.remove('play')
        audio.pause();
        changeIconPlay();
    }
    })








}