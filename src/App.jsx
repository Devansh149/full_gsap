import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
//npm i @gsap/react
//npm i gsap
const App = () => {

  //Method 1
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:700,
  //     y:700,
  //     duration:2,
  //     delay:1
  //   })
  // })

  //Method 2
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      opacity:0,
      duration: 2,
      rotate: 720
    })
  })
  return <>
    <div className="container1">
      <div ref={gsapRef} className="box"></div>
      <div className="circle"></div>
    </div>
    <div className="container2">
      <div className="box"></div>
      <div className="circle"></div>
    </div>
  </>
}

export default App