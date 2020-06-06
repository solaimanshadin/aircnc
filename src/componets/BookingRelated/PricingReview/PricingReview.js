import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const PricingReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    const redirect = () =>{
        history.push('/booking');
    }
    const onSubmit = data => {
        console.log(data);
        redirect();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded pricing shadow">
            <Row className="mb-4">
                
                <Col md={7}>
                    <h4>Lorem ipsum dolor sit amet co.</h4>
                    <p className="text-secondary"><FontAwesomeIcon icon={faStar} className="text-primary"/> 5 (40 reviews)</p>         
                </Col>
                <Col md={5}>
                    <img className="img-fluid rounded" src="https://imgur.com/yHwJMpw.png" alt=""/>
                </Col>
            </Row>

            <Form.Group>
                <Form.Label>Dates</Form.Label>
                <div  className="d-flex align-items-center form-control">
                    <Form.Control ref={register({ required: true })} name="arrival" type="date"/>
                    <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                    <Form.Control ref={register({ required: true })} name="departure" className="text-right" type="date"/>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Guest</Form.Label>
                <Form.Control ref={register({ required: true })} name="guest" as="select">
                    <option value="1">1 guest</option>
                    <option value="2">2 guest</option>
                    <option value="3">3 guest</option>
                    <option value="4">4 guest</option>
                </Form.Control>
            </Form.Group>
            
            <ul className="preview list-unstyled">
                <li>
                    <span>34x4 night</span>
                    <span>$136</span>
                </li>
                <li>
                    <span>Cleaning fee</span>
                    <span>$10</span>
                </li>
                <li>
                    <span>Service fee</span>
                    <span>$21</span>
                </li>
                <li className="total font-weight-bold">
                    <span>Total</span>
                    <span>$156</span>
                </li>
            </ul>
            <Form.Group>
                <input type="hidden" ref={register({ required: true })} value="130" name="totalFee"/>
                {/* <Button type="submit" block variant="primary">Reserve</Button> */}
            </Form.Group>
        </Form>
    );
};

export default PricingReview;