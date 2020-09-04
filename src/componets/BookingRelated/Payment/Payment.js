import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Payment = ({stepHandler}) => {
    return (
        <div className="my-5">
            <h6>Payment Select</h6>
            <Form>
                <div className="rounded border p-4 my-3">
                    <Form.Check
                        defaultChecked={true}
                        name="paymentMethod"
                        value="creditCard"
                        type="radio"
                        id="default-radio"
                        label="Credit Card"
                    />
                </div>
                <div className="rounded border p-4">
                <Form.Check
                        name="paymentMethod"
                        value="PayPal"
                        type="radio"
                        id="default-radio-2"
                        label="PayPal"
                    />
                </div>
                <div className="text-right my-5">
                    <Button onClick={() => stepHandler({})}>Continue to Pay</Button>
                </div>
            </Form>

        </div>
    );
};

export default Payment;