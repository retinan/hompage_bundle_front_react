import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card1 from "../cards/Card1";

const CardSection = () => {

    const slideanimElems = useRef([]);

    useEffect(() => {
        // Add slide class to elements with class slideanim when they are in view
        const handleScroll = () => {
            slideanimElems.current.forEach((elem) => {
                const elemOffsetTop = elem.offsetTop;
                const winTop = window.pageYOffset + window.innerHeight;
                if (elemOffsetTop < winTop) {
                    elem.classList.add('slide');
                } else {
                    elem.classList.remove('slide');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    return (
        <section>
            <Container className="my-5 py-5">
                <h2 className="fs-2-up mb-5 text-center fw-bolder">CardSection 1</h2>
                <Row>
                    <Col sm={12} md={4} className="slideanim" ref={el => slideanimElems.current[0] = el}>
                        <Card1/>
                    </Col>
                    <Col sm={12} md={4} className="slideanim" ref={el => slideanimElems.current[1] = el}>
                        <Card1/>
                    </Col>
                    <Col sm={12} md={4} className="slideanim" ref={el => slideanimElems.current[2] = el}>
                        <Card1/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CardSection;