const dojo = document.querySelector('.dojo');
const dojoVisible = document.querySelector('.dojo-down');

let visible = false;

dojo.addEventListener('click',(event)=>{
    console.log(visible);
    event.preventDefault();
        visible = !visible;
        visible ? dojoVisible.classList.add('visible') : dojoVisible.classList.remove('visible');
});


const tournoi = document.querySelector('.tournoi');
const tournoiVisible = document.querySelector('.tournoi-down');



tournoi.addEventListener('click',(event)=>{
    console.log(visible);
    event.preventDefault();
        visible = !visible;
        visible ? tournoiVisible.classList.add('visible') : tournoiVisible.classList.remove('visible');
});


const vagabond = document.querySelector('.vagabond');
const vagabondVisible = document.querySelector('.vagabond-down');



vagabond.addEventListener('click',(event)=>{
    console.log(visible);
    event.preventDefault();
        visible = !visible;
        visible ? vagabondVisible.classList.add('visible') : vagabondVisible.classList.remove('visible');
});

/*****************************Toggle EVIL RYU******************************* */
const body = document.querySelector('.bodyAbout');
const content = document.querySelector('.content');
const cursor = document.querySelector('.cursor');
const formations= document.querySelector('.formations');

cursor.addEventListener('click', ()=>{
    cursor.classList.toggle('cursor-white');
    body.classList.toggle('bodyAbout-white');
    content.classList.toggle('content-white');
    formations.classList.toggle('formations-evil');
})

