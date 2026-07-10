var h1=document.querySelector("h1");
var h1text=h1.textContent;

var splittedText=h1text.split("");
var halfValue=(h1text.length)/2

var clutter="";

splittedText.forEach(function(elem,idx){
    if(idx<halfValue)
    {
        clutter+= `<span class="a">${elem}</span>`
    }
    else{
        clutter+= `<span class="b">${elem}</span>`
    }
})
h1.innerHTML=clutter;

gsap.from(".a",{
    opacity:0,
    y:100,
    duration:0.5,
    ease:"ease.out",
    stagger:0.18,
    
})
gsap.from(".b",{
    opacity:0,
    y:100,
    duration:0.5,
    ease:"ease.out",
    stagger:-0.18,
    
})