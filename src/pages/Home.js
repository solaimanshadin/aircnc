import React from 'react';
import AdvanceSearch from '../componets/AdvanceSearch/AdvanceSearch';
import { Container, Row, Col } from 'react-bootstrap';
import Homes from '../componets/homes/Homes';
import Experiences from '../componets/Experiences/Expreiences';

const Home = () => {
    return (
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
    );
};

export default Home;