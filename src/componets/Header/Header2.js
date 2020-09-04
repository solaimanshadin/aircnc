import React from 'react';
import { Navbar,Nav, Button, Container, Form, Row, Col } from 'react-bootstrap';
import './Header.scss';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SearchContext } from '../../App';
const Header2 = () => {
    const {searchData,setSearchData} = useContext(SearchContext);
    const date1 = new Date(searchData.arrival || new Date());
    const date2 = new Date(searchData.departure  || new Date());
    const arrivalMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date1);
    const getDepartureMonth =  new Intl.DateTimeFormat("en-US", { month: "short" }).format(date2);
    const departureMonth = arrivalMonth !== getDepartureMonth ? getDepartureMonth + " " : "";
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
                <Row className="ml-auto align-items-center col-md-5 header-search shadow">
                
                   <Col md={4} className="m-0 p-0">
                       <Form.Control defaultValue={searchData.city && searchData.city} placeholder="Location"></Form.Control>
                   </Col>
                   <Col md={4}  className="m-0 p-0">
                       <Form.Control  defaultValue={date1 && `${arrivalMonth} ${date1.getDate()}-${departureMonth}${date2.getDate()}` } placeholder="Date"></Form.Control>
                   </Col>
                   <Col md={3}  className="m-0 p-0">
                       <Form.Control defaultValue={searchData.adult && searchData.adult + " Guest"} placeholder="Guest"></Form.Control>
                   </Col>
                   <Col md={1}>
                       <FontAwesomeIcon icon={faSearch}/>
                   </Col>
                </Row>

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