import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const {name,image,price,location,review,key} = props.home;
    
    return (
        
        <div className="home">
            <Link to={`/home/${key}`}>
            <img className="img-fluid rounded" src={image}/>
            </Link>
                <h6>{location}</h6>
                <h5>{name}</h5>
                <p className="text-secondary small">${price} per person</p>
                <div className="d-flex small align-items-center">
                {/* {
                    review[0].count ===5 && */}
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    
                {/* }  */}
                <span className="mx-1">{review[0].count}</span> . superhost
                </div>
        </div>
    
    );
};

export default Home;