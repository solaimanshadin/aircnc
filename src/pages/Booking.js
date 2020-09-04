import React from 'react';
import Header2 from '../componets/Header/Header2';
import { Container, Row, Col } from 'react-bootstrap';
import HouseRules from '../componets/BookingRelated/HouseRule/HouseRules';
import StepIndicator from '../componets/BookingRelated/StepIndecator/StepIndicator';
import { useEffect } from 'react';
import PricingReview from '../componets/BookingRelated/PricingReview/PricingReview';
import { useState } from 'react';
import MeetHost from '../componets/BookingRelated/MeetHost/MeetHost';
import Payment from '../componets/BookingRelated/Payment/Payment';

const Booking = () => {
    
    const [step, setStep] = useState(1);
    const stepHandler = (data) => {
        setStep(step +1);
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
        <Header2/>
        
        <Container className="my-5">
            <StepIndicator step={step}/>
            <Row className="my-4">
                <Col md={7}>
                    {
                        step === 1 ?
                        <HouseRules stepHandler={stepHandler}/>
                        :
                        step === 2 ?
                        <MeetHost stepHandler={stepHandler}/>
                        :
                        step === 3 ?
                        <Payment stepHandler={stepHandler}/>
                        :
                        <h1>Thank you ... </h1>

                    }
                </Col>
                <Col md={5}>
                    <PricingReview/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Booking;