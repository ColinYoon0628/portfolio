'use strict';
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when trapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//contact me srolling
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',(event) =>{
    scrollIntoView('#contact');
});

//Make home slowly fade out as it is scrolling
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 -(window.scrollY / homeHeight);
   
});

//show arrow button as scrolling
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');        
    }
});
//handle arrow button to the top
arrowUp.addEventListener('click',(event) =>{
    scrollIntoView('#home');
});
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
