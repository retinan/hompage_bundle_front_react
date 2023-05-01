import React, {useLayoutEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card2 from "../cards/Card2";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const CardSection2 = () => {

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
        <section className="py-5 bg-light">
            <Container className="my-3 py-5">
                <h2 className="fs-2-up mb-5 text-center fw-bolder">CardSection 2</h2>
                <Row ref={main}>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)" }}>
                        <Card2/>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)" }}>
                        <Card2/>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)"}}>
                        <Card2/>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)" }}>
                        <Card2/>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)" }}>
                        <Card2/>
                    </Col>
                    <Col xs={12} sm={6} md={4} className={'box py-2 d-flex justify-content-center'} style={{ opacity:0, transform: "translateY(40%)" }}>
                        <Card2/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CardSection2;