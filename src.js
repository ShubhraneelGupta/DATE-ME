const btn = document.querySelector(".unclickable");
const yBtn = document.querySelector(".positive");
let clickedTimes = 0;


btn.addEventListener('mouseover', ()=>{
    let h = Math.floor(Math.random()*30);
    let w = Math.floor(Math.random()*30);

    btn.style.top = `${h}vh`;
    btn.style.left = `${w}vw`;
})

yBtn.addEventListener('click', ()=>{
    const heading = document.querySelector(".heading");
    const buttonC = document.querySelector(".button-container");
    heading.innerHTML = `<h1>Can't get away from ME ahahaha!!!</h1>`
    buttonC.innerHTML = "<button class='button positive2'>FIX A DATE</button>"
    const btn2 = document.querySelector(".positive2");
    btn2.addEventListener('click', ()=>{
        window.location.assign("mailto:wow.sng@gmail.com");
    })
})