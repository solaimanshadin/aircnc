import React from 'react';
import AdvanceSearch from '../componets/AdvanceSearch/AdvanceSearch';
import { Container, Row, Col } from 'react-bootstrap';
import Homes from '../componets/homes/Homes';
import Experiences from '../componets/Experiences/Expreiences';
import { useEffect } from 'react';
import Header from '../componets/Header/Header';

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
        <Header/>
        <Container className="my-4">
            <Row>
                <Col md={4}>
                    <AdvanceSearch/>
                </Col>
                <Col md={8}>
                    <Experiences/>
                    <Homes/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Home;