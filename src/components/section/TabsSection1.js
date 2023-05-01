import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Col, Container, Dropdown, Nav, Row, Tab} from "react-bootstrap";
import TabContent from "../contents/TabContent";
import './TabsSection1.css'
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TabsSection1 = () => {

    const [selectedItem, setSelectedItem] = useState('Tab 1'); // 초기 값은 Dropdown Button 입니다.
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleDropdownSelect = (eventKey, event) => {
        setSelectedItem(event.target.innerHTML); // Dropdown item의 텍스트를 가져와서 Dropdown Toggle의 텍스트로 설정합니다.
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    useEffect(() => {
        handleResize();
    }, []);

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
        <section className="py-5 bg-gray900">
            <Container className="py-5" ref={main}>
                <h2 className="fs-2-up mb-3 mb-sm-5 text-center fw-bolder text-white">TabSection</h2>
                <Tab.Container
                    defaultActiveKey="tab1"
                    id="fill-tab-example"
                    justify
                >

                    { isMobile ?

                        <Dropdown onSelect={handleDropdownSelect} className={"box"} style={{opacity:0, transform: "translateY(40%)"}}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="w-100 py-2 mt-3 mb-4" style={{borderRadius:"0", }}>
                                {selectedItem}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="w-100">
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab4">Tab 4</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Dropdown.Menu>
                        </Dropdown>

                        :

                        <Nav variant="pills" className="box mb-3 justify-content-center flex-column flex-sm-row" style={{opacity:0, transform: "translateY(40%)"}}>
                            <Nav.Item className="mx-2">
                                <Nav.Link eventKey="tab1" className="fs-5 fw-bold my-1 py-xs-2 px-lg-2 py-lg-3 px-lg-5">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <Nav.Link eventKey="tab2" className="fs-5 fw-bold my-1 py-xs-2 px-lg-2 py-lg-3 px-lg-5">Tab 2 - Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <Nav.Link eventKey="tab3" className="fs-5 fw-bold my-1 py-xs-2 px-lg-2 py-lg-3 px-lg-5">Tab 3</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-2">
                                <Nav.Link eventKey="tab4" className="fs-5 fw-bold my-1 py-xs-2 px-lg-2 py-lg-3 px-lg-5">Tab 4</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    }


                    <Row className="box justify-content-center" style={{opacity:0, transform: "translateY(40%)"}}>
                        <Col md={12} lg={10} xl={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="tab1" title="Tab1">
                                    <TabContent
                                        img={"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187088c8e65%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187088c8e65%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                                        title={'Tap 1 title'}
                                        content={'이것은 탭 1 내용입니다!!!'}
                                        link={"/"}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2" title="Tab2">
                                    <TabContent
                                        img={"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187088c8e65%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187088c8e65%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                                        title={'Tap 2 title'}
                                        content={'이것은 탭 2 내용입니다!!!이것은 탭 2 내용입니다!!!'}
                                        link={"/"}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3" title="Tab3-Tab3">
                                    <TabContent
                                        img={"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187088c8e65%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187088c8e65%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                                        title={'Tap 3 title'}
                                        content={'이것은 탭 3 내용입니다!!이것은 탭 3 내용입니다!!이것은 탭 3 내용입니다!!!'}
                                        link={"/"}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4" title="Tab4" >
                                    <TabContent
                                        img={"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187088c8e65%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187088c8e65%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                                        title={'Tap 4 title'}
                                        content={'이것은 탭 4 내용입니다!!!이것은 탭 4 내용입니다!!!이것은 탭 4 내용입니다!!!이것은 탭 4 내용입니다!!!이것은 탭 4 내용입니다!!!'}
                                        link={"/"}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default TabsSection1;