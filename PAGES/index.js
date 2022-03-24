// const blink = document.querySelector('.creditNumber');
// function blinker() {
//     blink.fadeOut(500);
//     blink.fadeIn(500);
//    }
//    setInterval(blinker, 1000);




/********** BLINK CREDIT ************/
window.addEventListener("load", function() {
    var b = document.querySelector('.creditNumber');
    setInterval(function() {
        b.style.opacity = (b.style.opacity == '0' ? '' : '0');
    }, 500);
}, false);
/************************************/ 

/****** HOVER PRESS SOUND ***********/
const press = document.querySelector('.press a');
const sound = new Audio();
sound.src="../sons/startSound.mp3";

press.addEventListener('mouseover', ()=>{
    sound.play();
});
press.addEventListener('mouseleave', ()=>{
    sound.pause();
})
/************************************/

/***********FADE OUT ****************/
const CVS = document.querySelector('.CVS')
const footer = document.querySelector('footer');
const m = [CVS, footer];
press.addEventListener('mouseover', ()=>{
    m.forEach(element => {element.style.opacity='0';})
    });
press.addEventListener('mouseleave', ()=>{
    m.forEach(element => {element.style.opacity='1';})
    });