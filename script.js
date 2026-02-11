gsap.registerPlugin(ScrollTrigger);

// SMOOTH SCROLL

const lenis = new Lenis();

function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:0.03
});

});


// CURSOR GROW ON HOVER

document.querySelectorAll("a, button, .project").forEach(el=>{

el.addEventListener("mouseenter",()=>cursor.classList.add("active"));
el.addEventListener("mouseleave",()=>cursor.classList.remove("active"));

});


// HERO CINEMATIC INTRO

gsap.from(".hero-text",{
y:120,
opacity:0,
duration:1.3,
ease:"power4.out"
});


// PARALLAX PROJECT DEPTH

document.querySelectorAll(".project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let rect = card.getBoundingClientRect();

let x = (e.clientX - rect.left) / rect.width - 0.5;
let y = (e.clientY - rect.top) / rect.height - 0.5;

gsap.to(card,{
rotationY:x*10,
rotationX:-y*10,
transformPerspective:800,
duration:0.3
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
rotationY:0,
rotationX:0,
duration:0.5
});

});

});


// MAGNETIC BUTTON

const magnetic = document.querySelector(".magnetic");

magnetic.addEventListener("mousemove",(e)=>{

const rect = magnetic.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

gsap.to(magnetic,{
x:x*0.3,
y:y*0.3
});

});

magnetic.addEventListener("mouseleave",()=>{

gsap.to(magnetic,{x:0,y:0});

});