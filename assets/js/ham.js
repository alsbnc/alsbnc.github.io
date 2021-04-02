// Open/close and animate on click

const hamMenu = document.querySelector("#ham-menu");
const darkBg = document.querySelector(".background-darken");

const topLine = document.querySelector("#line1");
const midLine = document.querySelector("#line2");
const bttmLine = document.querySelector("#line3");

function animateMenu(){
    hamMenu.classList.toggle("accordion");
    darkBg.classList.toggle("show-hide");

    topLine.classList.toggle("tilt1");
    midLine.classList.toggle("hide-line");
    bttmLine.classList.toggle("tilt2");
}