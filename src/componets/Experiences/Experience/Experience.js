import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Experience = (props) => {
    const {name,image,price,location,review} = props.experience;
    
    return (
        
        <div className="home experience">
            <img className="img-fluid rounded" src={image}/>
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
                <span className="mx-1">{review[0].count}</span> 
                </div>
        </div>
    
    );
};

export default Experience;