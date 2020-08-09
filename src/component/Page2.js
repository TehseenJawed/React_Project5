import React, {useEffect, useRef} from 'react';
import { Col } from 'react-bootstrap';
import Img1 from './../img/Page2-1.svg';
import Img2 from './../img/Page2-2.svg';
import lottie from "lottie-web";
import useWebAnimations from "@wellyshen/use-web-animations";
import mergeRefs from "react-merge-refs";

export default function Page2(){
    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./../animation/Page2-drone.json"),
        });
      }, []);
      const container = useRef(null);

    const { ref: animate1, playState: animate1playState1 } = useWebAnimations({
        keyframes: [
          {transform:"translate(0px,20px)"},
          {transform:"translate(0px,-20px)"},
          
        ],
        timing: {
        //   delay: 50, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: 'ease-in-out',
          direction: 'alternate', // Run the animation forwards and then backwards
          
        },
      }); 
    const { ref: animate2, playState: animate1playState2 } = useWebAnimations({
        keyframes: [
          {transform:"translate(20px,0px)"},
          {transform:"translate(-20px,0px)"},
          
        ],
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: 'ease-in-out',
          direction: 'alternate', // Run the animation forwards and then backwards
          
        },
      }); 
    const { ref: animate3, playState: animate1playState3 } = useWebAnimations({
        keyframes: [
          {transform:"translate(-80px,0px)"},
          {transform:"translate(-1000px,100px)"},
          {transform:"translate(-1000px,-300px)"},
          {transform:"translate(-700px,-300px)"},
          {transform:"translate(-80px,0px)"},
          
        ],
        timing: {
        //   delay: 500, // Start with a 500ms delay
          duration: 10000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: 'ease-in-out',
        //   direction: 'alternate', // Run the animation forwards and then backwards
          
        },
      }); 
    return(
        <div className="Page2">
            <Col xs lg="5" className="set-col">
                <img ref={animate1} className="Pg-2-img" src={Img1} />
                <img ref={animate2} className="Pg-2-img" src={Img2} />
                <div className="pg2-drone" ref={mergeRefs([container,animate3])}></div>
            </Col>
            <Col xs lg="7" className="set-col">
                <div className="pg2-head"> High Quality Designs</div>
                <div className="pg2-p">We use high quality Illustration on your Website to make it professional for your business growth</div>
            </Col>
        </div>
    )
}