import React, {useContext, useState} from 'react';
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Hamburger from "./hamburger/Hamburger";
import {Offcanvas} from "react-bootstrap";
import {UserContext} from "../../provider/UserProvider";
import './Navi2.css'
import { useTranslation } from 'react-i18next';

const Navi2 = () => {

    const { t } = useTranslation()

    const pathname = window.location.pathname

    const { user, handleLogout, eventTestHandler } = useContext(UserContext);

    const onLogoutClick = () => {
        handleLogout();
    };

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('lang') || "ko");

    const handleLanguageSelect = (lang) => {
        setSelectedLanguage(lang);
        localStorage.setItem('lang', lang);
        eventTestHandler(lang);
    };


    return (
        <Navbar bg="light" expand="lg" fixed="top" className="py-0" style={{height:"4rem"}}>
            <Container>
                <Navbar.Brand href="/">Navi2</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Hamburger/>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Navi2
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-grow-1 pe-3">
                            <Nav.Link href="/board">{ t("board")}</Nav.Link>
                            <Nav.Link href="/scrollspy">{ t("scrollspy")}</Nav.Link>
                        </Nav>
                        <Nav>
                            { user ?
                                <div className="d-flex align-items-center">
                                    <Nav.Link eventKey={2} href="/">
                                        { user.email }
                                    </Nav.Link>
                                    <span role="button" className="text-primary pe-auto" onClick={onLogoutClick}>(logout)</span>
                                </div>
                                :
                                <Nav.Link eventKey={2} href={`/accounts/login?redirect_to=${pathname}`}>
                                    Login
                                </Nav.Link>
                            }

                            <NavDropdown title={selectedLanguage} id="basic-nav-dropdown" className="ms-2">
                                <NavDropdown.Item as="button" onClick={() => handleLanguageSelect("ko")}>ko</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as="button" onClick={() => handleLanguageSelect("en")}>en</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
};

export default Navi2;