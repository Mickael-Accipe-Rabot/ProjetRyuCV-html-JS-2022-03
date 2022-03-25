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

window.addEventListener("load", function() {
    var b = document.querySelector('.insert');
    setInterval(function() {
        b.style.opacity = (b.style.opacity == '0' ? '' : '0');
    }, 500);
}, false);
/*************Coin count*************/
const press = document.querySelector('.press a');
const preSS =document.querySelector('.press');
const insert = document.querySelector('.insert');

const coinSound = new Audio();
coinSound.src="../sons/coinSound.mp3";
const coin = document.querySelector('.creditNumber');
const btn = document.querySelector('.btn');
const count = () =>{
    coin.innerHTML++;
    coinSound.play();
    preSS.classList.add('pressVisible');
    insert.classList.add('insertInvisible');
}
btn.addEventListener('click',count);



// coin.innerHTML= z;
// console.log(z);
// btn.addEventListener('click', ()=>{
//     return z = z + 1;
// })
// // coin.appendChild(z);

/************************************/ 

/****** HOVER PRESS SOUND ***********/

const startSound = new Audio();
startSound.src="../sons/startSound2.mp3";

press.addEventListener('mouseover', ()=>{
    startSound.play();
});
press.addEventListener('mouseleave', ()=>{
    startSound.pause();
})
/************************************/

/***********FADE OUT ****************/
const CVS = document.querySelector('.CVS')
const footer = document.querySelector('footer');
const m = [CVS, footer,btn];
press.addEventListener('mouseover', ()=>{
    m.forEach(element => {element.style.opacity='0';})
    });
press.addEventListener('mouseleave', ()=>{
    m.forEach(element => {element.style.opacity='1';})
    });