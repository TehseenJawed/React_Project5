import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
export default function Navbar(){
    const { ref: animate1, playState: animate1playState1 } = useWebAnimations({
        keyframes: [
          {transform:"translate(-200px,0px)"},
          {transform:"translate(200px,0px)"},
          
        ],
        timing: {
        //   delay: 50, // Start with a 500ms delay
          duration: 5000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: 'ease-in-out',
          direction: 'alternate', // Run the animation forwards and then backwards
          
        },
      }); 
    return(
        <div className="Navbar">
          <div ref={animate1} style={{color:'white', marginTop:'10px', display:'inline-block', marginLeft:'40%'}}>Welcome to<b> React Illustration APP </b></div>
        </div>
    )
}