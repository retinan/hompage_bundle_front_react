import React, {useEffect, useRef, useState} from 'react';
import {Button} from "react-bootstrap";
import Modal1 from "../modals/Modal1";
import backgroundImage from "../../assets/image/16.jpg"
import {gsap} from "gsap";


const HeroSection1 = () => {

    const main = useRef();

    useEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    x:0,
                    opacity:1,
                    duration:1.5,
                    delay: {
                        x:1.5,
                        opacity:3,
                    }
                });
            });
        }, main);
        return () => ctx.revert();
    }, []);


    // const heroContainer = {height:"600px", backgroundColor:"#ddd"}
    const heroContainer = {
        height:"100vh",
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center" style={heroContainer}>
                <div className="text-center">
                    <div ref={main}>
                        <div className="box fs-0-up fw-bolder text-white text-start" style={{opacity:0, transform: "translateX(10%)"}}>This is</div>
                        <div className="box fs-0-up fw-bolder text-white text-start" style={{opacity:0, transform: "translateX(20%)"}}>a Hero Section</div>
                        <div className="box fs-0-up fw-bolder text-white text-start" style={{opacity:0, transform: "translateX(30%)"}}>Number One!</div>
                    </div>
                    <Button variant="primary" onClick={handleShow} className="btn my-5 py-2 px-5">Modal</Button>
                </div>

            </div>
            <Modal1
                show={show}
                handleClose={handleClose}
                title={'herosection modal title'}
                content={
                    <>
                        herosection modal content
                        <div>Woohoo, you\'re reading this text in a modal!</div>
                    </>
            }
            />
        </>

    );
};

export default HeroSection1;