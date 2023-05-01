import React, {useEffect, useState} from 'react';
import {Accordion, Container} from "react-bootstrap";


const Footer1 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    useEffect(() => {
        handleResize()
    }, []);


    return (
        <footer className="pt-5 pb-3 border-top">
            <Container>
                <div className="d-md-flex justify-content-between flex-row-reverse">

                    { isMobile ?

                        <Accordion className="mb-5">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>AAAAA</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="pe-5 me-5">
                                        <li className="py-1">aaa-1</li>
                                        <li className="py-1">aaa-2</li>
                                        <li className="py-1">aaa-3</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>BBBBB</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="pe-5 me-5">
                                        <li className="py-1">bbb-1</li>
                                        <li className="py-1">bbb-2</li>
                                        <li className="py-1">bbb-3</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>CCCCC</Accordion.Header>
                                <Accordion.Body>
                                    <ul className="pe-5 me-5">
                                        <li className="py-1">ccc-1</li>
                                        <li className="py-1">ccc-2</li>
                                        <li className="py-1">ccc-3</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        :

                        <div className="d-flex ps-2">
                            <ul className="pe-5 me-5">
                                <li className="fw-bold mb-2">AAAAA</li>
                                <li className="py-1"><a href='/Board.js'>aaa-1</a></li>
                                <li className="py-1">aaa-2</li>
                                <li className="py-1">aaa-3</li>
                            </ul>
                            <ul className="pe-5 me-5">
                                <li className="fw-bold mb-2">BBBBB</li>
                                <li className="py-1">bbb-1</li>
                                <li className="py-1">bbb-2</li>
                                <li className="py-1">bbb-3</li>
                            </ul>
                            <ul className="">
                                <li className="fw-bold mb-2">CCCCCC</li>
                                <li className="py-1">ccc-1</li>
                                <li className="py-1">ccc-2</li>
                                <li className="py-1">ccc-3</li>
                            </ul>
                        </div>

                    }


                    <div>
                        <div className="fw-bold fs-3">LOGO</div>
                        <div className="mt-4 fs-6">
                            <p className="py-1">(주) 헥슬란트 | 강남구 강남대로 340 경원빌딩 7층 | 대표 노진우</p>
                            <p className="py-1">사업자등록번호 636-88-00831</p>
                            <p className="py-1">통신판매업신고 2018-서울강남-02117</p>
                            <p className="py-1">contact@hexlant.com</p>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="">
                    FooterFooter @{ new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    );
};

export default Footer1;