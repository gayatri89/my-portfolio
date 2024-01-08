import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <React.Fragment>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><span><b>&lt;/&gt;</b> Art of coding</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutme">About Me</Nav.Link>
                            <NavDropdown title="Teach Stack" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Typescript</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Reactjs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Nodejs
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Angularjs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    PHP CMS
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#ln">EN/DE</Nav.Link>
                            <Nav.Link eventKey={2} href="#theme">
                                Dark Mode
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header