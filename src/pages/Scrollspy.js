import React, {useEffect, useState} from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import MobileNav from "../components/scrollspy/MobileNav";
import { useTranslation } from 'react-i18next';


const Scrollspy = () => {

    const { t } = useTranslation()

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleClick = (e) => {
        e.preventDefault();  // 이벤트 기본동작 막기
        e.stopPropagation();  // 자동으로 active가 붙는걸 막아줌 (버블링 중지)

        const href = e.currentTarget.getAttribute('href');
        const target = document.querySelector(href);
        const topOffset = target.offsetTop - 80;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });

        if (isMobile) {
            const getDropdownBasic = document.getElementById('dropdown-basic');
            getDropdownBasic.click()
        }
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    useEffect(() => {

        handleResize();

        const sections = document.querySelectorAll('#item-contents > div');
        const navLinks = document.querySelectorAll('#item-nav a');

        const handleScroll = () => {
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            sections.forEach((section) => {
                const top = section.offsetTop - 80;
                const bottom = top + section.offsetHeight;
                if (scrollPos >= top && scrollPos <= bottom) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').slice(1) === section.getAttribute('id')) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [isMobile]);


    return (
        <Container className="mt-5 py-5">
            <h2 className="mt-4 fs-3-up mb-5 fw-bolder">{ t("scrollspy") }</h2>
            <Row>
                { isMobile ?
                    <MobileNav handleClick={handleClick}/>
                    :
                    <Col xs={12} md={4} lg={3}>
                        <ListGroup id="item-nav" className="position-sticky" style={{top:"5em"}}>
                            <ListGroup.Item action href="#item-1" className="py-3 border-0 rounded-0" onClick={handleClick}>
                                { t("item") } 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#item-2" className="py-3 border-0" onClick={handleClick} >
                                { t("item") } 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="#item-3" className="py-3 border-0" onClick={handleClick} >
                                { t("item") } 3
                            </ListGroup.Item>
                            <ListGroup.Item action href="#item-4" className="py-3 border-0" onClick={handleClick} >
                                { t("item") } 4
                            </ListGroup.Item>
                            <ListGroup.Item action href="#item-5" className="py-3 border-0 rounded-0" onClick={handleClick} >
                                { t("item") } 5
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                }
                <Col xs={12} md={8} lg={9}>
                    <div id="item-contents" tabIndex="0" className="mb-0 mb-md-5 pb-0 pb-md-5">
                        <Card id="item-1" className={"p-4 mb-5"}>
                            <Card.Body>
                                <Card.Title className={"fs-3 fw-bold"}>{ t("item") } 1</Card.Title>
                                <hr/>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className={"py-3 mb-4"}>
                                    Some quick example text to build on the card title and make up the<br/>
                                    bulk of the card's content.<br/>
                                    This is some placeholder content for the scrollspy page.<br/>
                                    Note that as you scroll down the page, the appropriate navigation link is highlighted.<br/>
                                    It's repeated throughout the component example.<br/>
                                    We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="item-2" className={"p-4 mb-5"}>
                            <Card.Body>
                                <Card.Title className={"fs-3 fw-bold"}>{ t("item") } 2</Card.Title>
                                <hr/>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className={"py-3 mb-4"}>
                                    Some quick example text to build on the card title and make up the<br/>
                                    bulk of the card's content.<br/>
                                    This is some placeholder content for the scrollspy page.<br/>
                                    Note that as you scroll down the page, the appropriate navigation link is highlighted.<br/>
                                    It's repeated throughout the component example.<br/>
                                    We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="item-3" className={"p-4 mb-5"}>
                            <Card.Body>
                                <Card.Title className={"fs-3 fw-bold"}>{ t("item") } 3</Card.Title>
                                <hr/>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className={"py-3 mb-4"}>
                                    Some quick example text to build on the card title and make up the<br/>
                                    bulk of the card's content.<br/>
                                    This is some placeholder content for the scrollspy page.<br/>
                                    Note that as you scroll down the page, the appropriate navigation link is highlighted.<br/>
                                    It's repeated throughout the component example.<br/>
                                    We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="item-4" className={"p-4 mb-5"}>
                            <Card.Body>
                                <Card.Title className={"fs-3 fw-bold"}>{ t("item") } 4</Card.Title>
                                <hr/>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className={"py-3 mb-4"}>
                                    Some quick example text to build on the card title and make up the<br/>
                                    bulk of the card's content.<br/>
                                    This is some placeholder content for the scrollspy page.<br/>
                                    Note that as you scroll down the page, the appropriate navigation link is highlighted.<br/>
                                    It's repeated throughout the component example.<br/>
                                    We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="item-5" className={"p-4 mb-5"}>
                            <Card.Body>
                                <Card.Title className={"fs-3 fw-bold"}>{ t("item") } 5</Card.Title>
                                <hr/>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text className={"py-3 mb-4"}>
                                    Some quick example text to build on the card title and make up the<br/>
                                    bulk of the card's content.<br/>
                                    This is some placeholder content for the scrollspy page.<br/>
                                    Note that as you scroll down the page, the appropriate navigation link is highlighted.<br/>
                                    It's repeated throughout the component example.<br/>
                                    We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Scrollspy;