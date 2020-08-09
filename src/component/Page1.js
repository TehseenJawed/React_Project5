import React, {useRef, useEffect} from 'react';
import lottie from "lottie-web";
import { Col } from 'react-bootstrap';

export default function Page1(){

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./../animation/Page1-3.json"),
        });
      }, []);
      const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
          container: container1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("./../animation/Page1-1.json"),
        });
      }, []);
      const container1 = useRef(null);

    return(
        <div className="Page1">
            <Col xs lg="6" className="set-col">
                <div className="main-head" style={{marginTop:"-200px"}}>
                    IllustrationApp
                  <span className="sub-head">React Project 5</span>    
                </div>
            </Col>
            <Col xs lg="5" className="set-col">
                <div ref={container}> </div>
                <div className="set-col-2" ref={container1}> </div>
            </Col>
        </div>
    )
}