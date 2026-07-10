var tl=gsap.timeline();
tl.from(".left , .right p , .right button",{
    y:-30,
    duration:0.4,
    opacity:0,
    stagger:0.15
})


tl.from(".hleft h2",{
    x:-200,
    duration:0.2,
    opacity:0,
    ease:"back.out"
})
tl.from(".hleft p",{
    x:-200,
    duration:0.4,
    opacity:0,
    ease:"back.out"
})
tl.from(".hright img",{
    x:200,
    duration:0.3,
    opacity:0,
    ease:"back.out"
})
tl.from(".hleft button",{
    x:-200,
    duration:0.6,
    opacity:0,
    ease:"back.out"
})

gsap.from(".move img",{
    y:50,
    opacity:0,
    stagger:0.17,
    ease:"power1.out",
    scrollTrigger:{
        scroller: "body",
        trigger:".move",
        start:"top 80%",
        end:" top 0%"
    }
})


gsap.from(".heading",{  
    y:50,
    opacity:0,
    ease:"back.out",
    scrollTrigger:{
        scroller: "body",
        trigger:".move",
        start:"top 80%",
        end:" top 0%"
    }
})

gsap.from(".b1",{
    x:-300,
    opacity:0,
    stagger:2.5,
    duration:2,
    scrollTrigger:{
        scroller: "body",
        trigger:".move",
        start:"top 10%",
        end:" top 0%",
        scrub:3
    }
})
gsap.from(".b2",{
    x:300,
    opacity:0,
    stagger:2.5,
    duration:2,
    scrollTrigger:{
        scroller: "body",
        trigger:".move",
        start:"top 10%",
        end:" top 0%",
        scrub:3
    }
})