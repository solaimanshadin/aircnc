import React from 'react';
import { Form, Button, Row,Col } from 'react-bootstrap';

const MeetHost = ({stepHandler}) => {
    return (
        <Row className="my-5 meet-host">
            <Col md={9}>
            <h3>Travelling for work?</h3>
            <p>Say hello to our host</p>
            <p>Let Rowdra know a little bit yourself and why you are coming</p>
            <Form>
                <Form.Control as="textarea" rows="5" className="my-4" >

                </Form.Control>
                <Form className="Group">
                    <Button onClick={() => stepHandler()}>Continue</Button>
                </Form>
            </Form>
            </Col>
            <Col md={3} className="text-center">
                <img className="host-img" src="https://imgur.com/Gyu1TXZ.png" alt=""/>
                <p>Rowdra</p>
            </Col>
        </Row>
    );
};

export default MeetHost;