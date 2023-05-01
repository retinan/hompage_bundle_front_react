import React, {useLayoutEffect, useRef} from 'react';
import {Accordion, Container} from "react-bootstrap";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FaqSection1 = () => {

    // animation
    gsap.registerPlugin(ScrollTrigger)

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    x:0,
                    opacity:1,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 50%',
                        scrub: true,
                    },
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <section className="py-5 bg-light">
            <Container className="py-5">
                <h2 className="fs-2-up mb-5 text-center fw-bolder">FAQ Section</h2>
                <Accordion alwaysOpen ref={main}>
                    <Accordion.Item eventKey="0" className={"box"} style={{opacity:0, transform: "translateX(5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #1</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={"box"} style={{opacity:0, transform: "translateX(-5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #2</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={"box"} style={{opacity:0, transform: "translateX(5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #3</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className={"box"} style={{opacity:0, transform: "translateX(-5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #4</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className={"box"} style={{opacity:0, transform: "translateX(5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #5</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className={"box"} style={{opacity:0, transform: "translateX(-5%)"}}>
                        <Accordion.Header><b className="fw-bolder">FAQ #6</b></Accordion.Header>
                        <Accordion.Body className="lh-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Container>
        </section>
    );
};

export default FaqSection1;