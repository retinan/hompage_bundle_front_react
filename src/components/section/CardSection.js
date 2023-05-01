import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card1 from "../cards/Card1";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image11 from "../../assets/image/11.jpg"
import image12 from "../../assets/image/12.jpg"
import image14 from "../../assets/image/14.jpg"

const CardSection = () => {

    // animation
    gsap.registerPlugin(ScrollTrigger)

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    y:0,
                    opacity:1,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 100%',
                        end: 'top 40%',
                        scrub: true,
                    },
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    
    
    return (
        <section>
            <Container className="my-5 py-5">
                <h2 className="fs-2-up mb-5 text-center fw-bolder">CardSection 1</h2>
                <Row ref={main}>
                    <Col sm={12} md={4} className="box" style={{opacity:0.2, transform: "translateY(40%)"}}>
                        <Card1 img={image11}/>
                    </Col>
                    <Col sm={12} md={4} className="box" style={{opacity:0.1, transform: "translateY(50%)"}}>
                        <Card1 img={image12}/>
                    </Col>
                    <Col sm={12} md={4} className="box" style={{opacity:0, transform: "translateY(60%)"}}>
                        <Card1 img={image14}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CardSection;