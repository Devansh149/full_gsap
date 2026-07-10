// Box Animation: You can apply any properties of css in this

// .to: is used to define the behaviour from initial to final position
// gsap.to(".box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     scale: 0.5,
//     borderRadius: "50%",
//     backgroundColor: "blue"
// })

//.from: is used to to define the behaviour from final to initial position i.e. first the properties will be applied in the gsap function then it will return back to its original state 
// gsap.from(".box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     scale: 0.5,
//     borderRadius: "50%",
//     backgroundColor: "blue"
// })

// Text Animation 
// gsap.from("h1",{
//     y:30,
//     opacity:0,
//     duration:1,
//     delay:1,
//     stagger:0.5 //Stagger se element ek ek karke aata hai, iski values -1,0 se lekar positive ho sakti hai.
// })

//Repeat: Agar animation infinite baar chalana hai to repeat -1 diya jata hai aur 1 doge to ek baar repeat hoga
//yoyo : dene se box aage se peeche aayega  yoyo nahi doge to baar baar box initial se hi start hoga
// gsap.to(".box1",{
    // x:1200,
    // duration:1,
    // delay:1,
    // rotate:180,
    // repeat:-1, 
    // yoyo:true
// })