import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MeetHost = ({stepHandler}) => {
    return (
        <div className="my-5 meet-host">
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
        </div>
    );
};

export default MeetHost;