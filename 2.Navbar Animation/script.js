//Timeline : Ise use karne se elements ek ek karke aate haimatlab sequence follow hota hai hame delay nahi calculate karna padta.
var tl=gsap.timeline();

tl.from("h2",{
    opacity: 0,
    duration:0.4,
    delay:1,
    y:-20
})
tl.from("h3",{
    opacity: 0,
    duration:1,
    y:-20,
    stagger:0.3
})
tl.from("h1",{
    opacity:0,
    duration:0.5,
    y:20,
    scale:20
})