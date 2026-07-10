var tl=gsap.timeline();
var menu=document.querySelector(".nav i");
var close=document.querySelector(".side i");

tl.to(".side",{
    right:"0%",
    duration:0.3,
})
tl.from(".side h4",{
    x:150,
    duration:0.5,
    stagger:0.28,
    opacity:0
})
tl.from(close,{
    opacity:0

})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})