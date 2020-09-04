import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css'; 
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../../../App';


const Pricing = () => {
    const { register, handleSubmit,watch } = useForm();
    const {searchData,setSearchData} = useContext(SearchContext);
    const date1 = new Date(watch("arrival"));
    const date2 = new Date(watch("departure"));
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

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
            <h4>$34/<span className="font-weight-lighter">Night</span></h4>
            <p><FontAwesomeIcon className="text-primary" icon={faStar}/> <span>4.9(220 reviews)</span></p>
            <Form.Group>
                <Form.Label>Dates</Form.Label>
                <div  className="d-flex align-items-center form-control">
                    <Form.Control ref={register({ required: true })} defaultValue={searchData.arrival && searchData.arrival} name="arrival" type="date"/>
                    <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                    <Form.Control ref={register({ required: true })} defaultValue={searchData.departure && searchData.departure} name="departure" className="text-right" type="date"/>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Guest</Form.Label>
                <Form.Control ref={register({ required: true })} name="guest" as="select">
                    <option selected={searchData.adult === '1'} defaultValue="1">1 guest</option>
                    <option  selected={searchData.adult === '2'}  defaultValue="2">2 guest</option>
                    <option  selected={searchData.adult === '3'}  defaultValue="3">3 guest</option>
                    <option  selected={searchData.adult === '4'}  defaultValue="4">4 guest</option>
                </Form.Control>
            </Form.Group>
            
            <ul className="preview list-unstyled">
                <li>
                    <span>34x{diffDays || 1} night</span>
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
                <input type="hidden" ref={register({ required: true })} defaultValue="130" name="totalFee"/>
                <Button type="submit" block variant="primary">Reserve</Button>
                <p className="text-secondary small mt-1 text-center">you won't be charged</p>
            </Form.Group>
        </Form>
    );
};

export default Pricing;