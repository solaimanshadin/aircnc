import React from 'react';
import { Row, Form } from 'react-bootstrap';

const Payment = () => {
    return (
        <div className="my-5">
            <h6>Payment Select</h6>
            <Row className="rounded border p-4">
            <Form>
            {['checkbox', 'radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                />

                <Form.Check
                    type={type}
                    label={` ${type}`}
                    id={`disabled-default-${type}`}
                />
                </div>
            ))}
            </Form>
            </Row>
        </div>
    );
};

export default Payment;