const aMenu = document.querySelector('.aMenu');
const bMenu = document.querySelector('.bMenu');
const cMenu = document.querySelector('.cMenu');
const dMenu = document.querySelector('.dMenu');
const aWilders = document.querySelector('.aWilders');

const a = [bMenu,cMenu,dMenu,aWilders];
aMenu.addEventListener('mouseover', ()=>{
    a.forEach(element => {element.style.opacity='0';})
    });
aMenu.addEventListener('mouseleave', ()=>{
    a.forEach(element => {element.style.opacity='1';})
    });

const b = [aMenu,cMenu,dMenu,aWilders];
bMenu.addEventListener('mouseover', ()=>{
    b.forEach(element => {element.style.opacity='0';})
});
bMenu.addEventListener('mouseleave', ()=>{
    b.forEach(element => {element.style.opacity='1';})
    });

const c = [aMenu,bMenu,dMenu,aWilders];
cMenu.addEventListener('mouseover', ()=>{
    c.forEach(element => {element.style.opacity='0';})
    });
cMenu.addEventListener('mouseleave', ()=>{
    c.forEach(element => {element.style.opacity='1';})
    });

const d = [aMenu,bMenu,cMenu,aWilders];
dMenu.addEventListener('mouseover', ()=>{
    d.forEach(element => {element.style.opacity='0';})
    });
dMenu.addEventListener('mouseleave', ()=>{
    d.forEach(element => {element.style.opacity='1';})
    });

    const e = [aMenu,bMenu,cMenu,dMenu];
aWilders.addEventListener('mouseover', ()=>{
    e.forEach(element => {element.style.opacity='0';})
    });
aWilders.addEventListener('mouseleave', ()=>{
    e.forEach(element => {element.style.opacity='1';})
    });