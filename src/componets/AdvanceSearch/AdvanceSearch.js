import React, { useState } from 'react';
import { Form,Row,Col, Button,Accordion,Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './AdvanceSearch.scss'
import { useHistory } from 'react-router-dom';

const AdvanceSearch = () => {
    const [adult, setAdult] = useState(1);
    const [baby, setBaby] = useState(0);
    const [child, setChild] = useState(0);
    const [collapsed, setCollapsed] = useState(false);
    let history = useHistory();


    const { register, handleSubmit} = useForm();

    const redirect = () =>{
        history.push('/search-result');
    }
    const onSubmit = data => {
        console.log(data);
        redirect();
    };
    
    

    return (
        <div class="advance-search pr-md-3">
            <h5 className="mb-4">Where do you want to go</h5>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="rounded shadow p-3">
                    <Form.Label className="font-weight-bold">Location</Form.Label>
                    <Form.Control ref={register({ required: true })}  name="city" type="text" placeholder="Add city, landmark, area "></Form.Control>
                </Form.Group>
                <Row>
                    <Col className="pr-0">
                        <Form.Group className="rounded shadow p-3 mr-0">
                            <Form.Label className="text-secondary">Arrival</Form.Label>
                            <Form.Control ref={register({ required: true })}  type="date" name="arrival"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className="pl-1">
                        <Form.Group className="rounded shadow p-3 ">
                            <Form.Label  className="text-secondary">Departure</Form.Label>
                            <Form.Control ref={register({ required: true })}  type="date" name="departure"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="shadow">
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle
                        onClick={() => {collapsed ? setCollapsed(false) : setCollapsed(true) }}
                         as={Card.Header} className="bg-white d-flex justify-content-between align-items-center" eventKey="0">
                            <div>
                            <Form.Label className="text-secondary">Guest</Form.Label>
                            <p className="font-weight-bold">{adult} Adults {child} Child</p>
                            </div>
                            
                            {
                            collapsed ? 
                            <FontAwesomeIcon  icon={faAngleDown}/>
                            : 
                            <FontAwesomeIcon  icon={faAngleUp}/>

                            }

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="persons">
                            <div className="d-flex justify-content-between">
                                <h6 className="text-uppercase">Adults</h6>
                                <div className="d-flex align-items-center">
                                    <Button 
                                     onClick={() => adult > 0 && setAdult(adult - 1)}
                                     variant="default" size="sm">-</Button>
                                    <input name="adult" ref={register({ required: true })} value={adult} type="text"/>
                                    <Button variant="default" size="sm"
                                    onClick={() =>  setAdult(adult + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    <h6 className="text-uppercase">Child</h6>
                                    <p className="text-secondary">age 2-12</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Button variant="default" size="sm"
                                    onClick={() => child > 0 && setChild(child - 1)}
                                    >-</Button>
                                    <input name="child" ref={register({ required: true })} value={child} type="text"/>
                                    <Button variant="default" size="sm"
                                    onClick={() =>  setChild(child + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="text-uppercase">Babies</h6>
                                    <p className="text-secondary">Younger than 2</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Button variant="default" size="sm"
                                    onClick={() => baby > 0 && setBaby(baby - 1)}
                                    >-</Button>
                                    <input name="baby" ref={register({ required: true })} value={baby} type="text"/>
                                    <Button variant="default" size="sm"
                                    onClick={() =>  setBaby(baby + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            {/* <div className="text-right">
                                <Button variant="outline-primary" size="sm">Apply</Button>
                            </div> */}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Form.Group>
                <Form.Group>
                    <Button block type="submit" variant="primary">
                        <FontAwesomeIcon className="mr-2" icon={faSearch} /> 
                        Search
                    </Button>
                </Form.Group>
                
            </Form>
        </div>
    );
};

export default AdvanceSearch;