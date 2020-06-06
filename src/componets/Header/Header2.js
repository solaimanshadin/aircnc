import React from 'react';
import { Navbar,Nav, Button, Container, Form } from 'react-bootstrap';
import './Header.scss';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Header2 = () => {
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
                <Form className="mx-auto">
                    <Form.Control type="text" className="btn-rounded"/>
                </Form>
                <Nav className="ml-auto align-items-center">
                    <Link className="nav-link" to="/help">Help</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/signup"><Button variant="primary" className="btn-rounded">Sign Up</Button></Link>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header2;