import React from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';
import './Header.scss';
import logo from '../../images/logo.png'
const Header2 = () => {
    return (
        <Navbar bg="white" className="border-bottom" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="AirCNC"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Nav.Link href="#home">Host your Home</Nav.Link>
                    <Nav.Link href="#home">Host your Experience</Nav.Link>
                    <Nav.Link href="#home">Help</Nav.Link>
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#home"><Button variant="primary" className="btn-rounded">Sign Up</Button></Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header2;