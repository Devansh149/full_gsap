var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var imgd=document.querySelector(".imgd")
document.body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration:1,
        ease:"elastic.out"
    })
})

imgd.addEventListener("mouseenter",function(){
    cursor.innerHTML='View More';
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"pink"
    })
})
imgd.addEventListener("mouseleave",function(){
    cursor.innerHTML='';
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})