import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ResultItem = (props) => {
    const {key, name,image, price, review} = props.home;
    return (
        <Link to={`/home/${key}`}>
        <Row className="border-bottom mb-4">
            <Col md={5}>
                <img className="img-fluid rounded" src={image} alt=""/>
            </Col>
            <Col md={7}>
                <h6>{name}</h6>
                <p className="text-secondary">With wifi air cikthen</p>
                <p className="text-secondary">With wifi air cikthen</p>
                <div className="d-flex justify-content-between">
                    <p className="text-secondary"><FontAwesomeIcon icon={faStar} className="text-primary"/> {review[0].star} ({review[0].count})</p>
                    <div>
                        <p className="mb-0">$20/<span className="small">Night</span></p>
                        <p className="small text-secondary">$152 total</p>
                    </div>
                </div>
                
            </Col>
        </Row>
        </Link>
    );
};

export default ResultItem;