gsap.from(".page1 .box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: 360
})

gsap.from(".page2 .box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page2 .box", //This is a trigger point 
        scroller: "body",
        markers: true,  //Markers are used to show where animations will start and end
        start: "top 60%" //Animation will start at the top 60%
    }
})

gsap.from(".page3 h1", {
    duration: 2,
    x: 400,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: "body",
        start: "top 50%"
    }
})
gsap.from(".page3 h2", {
    duration: 2,
    x: -400,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: "body",
        start: "top 50%"
    }
})

gsap.from(".page4 .box", {
    duration: 1,
    rotate: 360,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page4 .box",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2, //can have true or false values also, makes animation move purely on scroll , also can have a number between 1 to 5
    }
})

gsap.to(".page5 h2", {
    
    transform: "translateX(-120%)",
    scrollTrigger: {
        trigger: ".page5", //trigger is baar wo element nahi hoga balki wo page hoga jismein wo element hai jise animate karna hai
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        markers: true,
        scrub: 2,
        pin: true //Pin se page5 pura wahi par ruk jayega jab tak animation complete nahi hoga 
    }
})