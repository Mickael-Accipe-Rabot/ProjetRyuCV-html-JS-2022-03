const ElisaFace = document.querySelector(".wildersImgE");
const ElisaName = document.querySelector('.wildersE');
const mikeFace = document.querySelector(".wildersImgM");
const mikeName = document.querySelector('.wildersM');

// mikeFace.addEventListener('click',(event)=>{
//     event.preventDefault();
//     document.body.style.backgroundImage =" url('ryu_relax_01.png')";
// });
const ElisaImgToggle = document.querySelector('.ElisaImgToggle');
const ElisaText = document.querySelector('.ElisaText');
const mikeImgToggle = document.querySelector('.mikeImgToggle');
const mikeText = document.querySelector('.mikeText');
let isVisibleE = false ;
let isVisibleM = false ;
console.log(isVisibleE);





ElisaFace.addEventListener('click',(event)=>{
    event.preventDefault();
    // ElisaImgToggle.style.display = "block"; ElisaText.style.display = "block";
    if (isVisibleM === true){
        mikeImgToggle.classList.remove('is-visibleM');
        mikeText.classList.remove('is-visibleM');
        isVisibleM = false;
    }
    isVisibleE = !isVisibleE;
    isVisibleE ? ElisaImgToggle.classList.add('is-visibleE') : ElisaImgToggle.classList.remove('is-visibleE');
    isVisibleE ? ElisaText.classList.add('is-visibleE') : ElisaText.classList.remove('is-visibleE');
    // mikeImgToggle.style.display = "none"; mikeText.style.display = "none";/* remove la balise hmtl mike */
    console.log(isVisibleE); 
});
ElisaName.addEventListener('click',(event)=>{
    // ElisaImgToggle.style.display = "block"; ElisaText.style.display = "block";
     if (isVisibleM === true){
        mikeImgToggle.classList.remove('is-visibleM');
        mikeText.classList.remove('is-visibleM');
        isVisibleM = false;
    }
    event.preventDefault();
    isVisibleE = !isVisibleE;
    isVisibleE ? ElisaImgToggle.classList.add('is-visibleE') : ElisaImgToggle.classList.remove('is-visibleE'); 
    isVisibleE ? ElisaText.classList.add('is-visibleE') : ElisaText.classList.remove('is-visibleE');
    console.log(isVisibleE);
});
/* MIKE TOGLE */
mikeFace.addEventListener('click',(event)=>{
    event.preventDefault();
    // mikeImgToggle.style.display = "block"; mikeText.style.display = "block";
    if (isVisibleE === true){
        ElisaImgToggle.classList.remove('is-visibleE');
        ElisaText.classList.remove('is-visibleE');
        isVisibleE = false;
    }
    isVisibleM = !isVisibleM;
    isVisibleM ? mikeImgToggle.classList.add('is-visibleM') : mikeImgToggle.classList.remove('is-visibleM');
    isVisibleM ? mikeText.classList.add('is-visibleM') : mikeText.classList.remove('is-visibleM');
    console.log(isVisibleM);
    
});
mikeName.addEventListener('click',(event)=>{
    event.preventDefault();
    // mikeImgToggle.style.display = "block"; mikeText.style.display = "block";
    if (isVisibleE === true){
        ElisaImgToggle.classList.remove('is-visibleE');
         ElisaText.classList.remove('is-visibleE');
         isVisibleE = false;
    }
    isVisibleM = !isVisibleM;
    isVisibleM ? mikeImgToggle.classList.add('is-visibleM') : mikeImgToggle.classList.remove('is-visibleM');
    isVisibleM ? mikeText.classList.add('is-visibleM') : mikeText.classList.remove('is-visibleM');
    console.log(isVisibleM);
});

const mikeImg = document.querySelector('.wildersImgM');
const mikeTextSelected = document.querySelector('.wildersM');
mikeImg.addEventListener('click', () => {
    mikeImg.classList.toggle('wilderImgSelected');
    mikeTextSelected.classList.toggle('wilderLiSelected');
    elisaImg.classList.remove('wilderImgSelected')
    elisaTextSelected.classList.remove('wilderLiSelected');

})
const elisaImg = document.querySelector('.wildersImgE');
const elisaTextSelected = document.querySelector('.wildersE');
elisaImg.addEventListener('click', () => {
    elisaImg.classList.toggle('wilderImgSelected');
    elisaTextSelected.classList.toggle('wilderLiSelected');
    mikeImg.classList.remove('wilderImgSelected');
    mikeTextSelected.classList.remove('wilderLiSelected');
})
// const press = document.querySelector('.press');
// const pressSound = ('startSound.mp4');
//  press.addEventListener('click',()=>{
//     Audio.play();
//  })

// ElisaFace.addEventListener('click',(event)=>{
//     event.preventDefault();
//     ElisaImgToggle.style.display = "block"; ElisaText.style.display = "block";
//     if (isVisibleM = true){
//         mikeImgToggle.classList.remove('is-visibleM');
//         mikeText.classList.remove('is-visibleM');
//         isVisibleM = false;
//     }
//     isVisibleE = !isVisibleE;
//     isVisibleE ? ElisaImgToggle.classList.add('is-visibleE') : ElisaImgToggle.classList.remove('is-visibleE');
//     isVisibleE ? ElisaText.classList.add('is-visibleE') : ElisaText.classList.remove('is-visibleE');
//     mikeImgToggle.style.display = "none"; mikeText.style.display = "none";/* remove la balise hmtl mike */
//     console.log(isVisibleE); 
// });
// ElisaName.addEventListener('click',(event)=>{
//     ElisaImgToggle.style.display = "block"; ElisaText.style.display = "block";
//     if (isVisibleM = true){
//         mikeImgToggle.classList.remove('is-visibleM');
//         mikeText.classList.remove('is-visibleM');
//         isVisibleM = false;
//     }
//     event.preventDefault();
//     isVisibleE = !isVisibleE;
//     isVisibleE ? ElisaImgToggle.classList.add('is-visibleE') : ElisaImgToggle.classList.remove('is-visibleE'); 
//     isVisibleE ? ElisaText.classList.add('is-visibleE') : ElisaText.classList.remove('is-visibleE');
//     console.log(isVisible);
// });
// /* MIKE TOGLE */
// mikeFace.addEventListener('click',(event)=>{
//     event.preventDefault();
//     mikeImgToggle.style.display = "block"; mikeText.style.display = "block";
//     if (isVisibleE = true){
//         ElisaImgToggle.classList.remove('is-visibleE');
//         ElisaText.classList.remove('is-visibleE');
//         isVisibleE = false;
//     }
//     isVisibleM = !isVisibleM;
//     isVisibleM ? mikeImgToggle.classList.add('is-visibleM') : mikeImgToggle.classList.remove('is-visibleM');
//     isVisibleM ? mikeText.classList.add('is-visibleM') : mikeText.classList.remove('is-visibleM');
//     console.log(isVisibleM);
    
// });
// mikeName.addEventListener('click',(event)=>{
//     event.preventDefault();
//     mikeImgToggle.style.display = "block"; mikeText.style.display = "block";
//     if (isVisibleE = true){
//         ElisaImgToggle.classList.remove('is-visibleE');
//         ElisaText.classList.remove('is-visibleE');
//         isVisibleE = false;
//     }
//     isVisibleM = !isVisibleM;
//     isVisibleM ? mikeImgToggle.classList.add('is-visibleM') : mikeImgToggle.classList.remove('is-visibleM');
//     isVisibleM ? mikeText.classList.add('is-visibleM') : mikeText.classList.remove('is-visibleM');
//     console.log(isVisible);
// });



// mikeFace.addEventListener('click',()=>{
//     // event.preventDefault();

//     const selectW = document.querySelector(".selectW");
//     const newImgMike = document.createElement("img");

//     newImgMike.classList.add("newImgMike");
//     selectW.appendChild(newImgMike);

//     newImgMike.src='ryu_relax_01.png';
//     newImgMike.style.width = "300px"; 
// });

//     const newImg = document.createElement("div");
//   newImg.classList.add("newImg");
//   body.appendChild(newimg);