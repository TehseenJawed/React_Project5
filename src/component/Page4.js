import React, {useEffect, useRef} from 'react';
import { Col } from 'react-bootstrap';
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
          animationData: require("./../animation/Page4.json"),
        });
      }, []);
      const container = useRef(null);

    const { ref: animate1, playState: animate1playState1 } = useWebAnimations({
        keyframes: [
          {transform:"translate(300px,0px)"},
          {transform:"translate(-1350px,0px)"},
          
        ],
        timing: {
        //   delay: 50, // Start with a 500ms delay
          duration: 12000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          easing: 'ease-in-out',
        //   direction: 'alternate', // Run the animation forwards and then backwards
          
        },
      }); 
    return(
        <div className="Page2 ">
            <Col xs lg="12" className="set-col">
                <br />
                <div className="pg2-head"> Everything That You Expect</div>
                <div className="pg2-p pg-4-p">We use high quality Illustration on your Website to make it professional for your business growth</div>
                <div className="pg4" ref={mergeRefs([container, animate1])}></div>
                <hr />
            </Col>
        </div>
    )
}