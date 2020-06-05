import React from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';
import './Header.scss';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="white" className="border-bottom" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <Link to="/">
                    <img src={logo} alt="AirCNC"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Link to="/host-home" className="nav-link">Host your Home</Link>
                    <Link to="/host-experience" className="nav-link">Host your Experience</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signup"><Button variant="primary" className="btn-rounded">Sign Up</Button></Link>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;