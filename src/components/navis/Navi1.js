import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Hamburger from "./hamburger/Hamburger";


const Navi1 = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('Language');

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Navi1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Hamburger/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Board">Board</Nav.Link>
                        <Nav.Link href="/Scrollspy">Scrollspy</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#">
                            Login/SingUp
                        </Nav.Link>
                        <NavDropdown title={selectedLanguage} id="basic-nav-dropdown">
                            <NavDropdown.Item as="button" onClick={() => handleLanguageSelect("KO")}>KO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as="button" onClick={() => handleLanguageSelect("EN")}>EN</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Navi1;