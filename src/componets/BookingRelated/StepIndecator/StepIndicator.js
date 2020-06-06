import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const StepIndicator = () => {
    return (
        <ul className="list-inline">
            <li className="list-inline-item h6 mr-4">1. Review House Rule
            <FontAwesomeIcon className="ml-2" icon={faAngleRight}/>
            </li>
            <li className="list-inline-item h6 mr-4">2. Who is Coming
            <FontAwesomeIcon className="ml-2" icon={faAngleRight}/>
            </li>
            <li className="list-inline-item h6">3. Confirm and Pay
            <FontAwesomeIcon className="ml-2" icon={faAngleRight}/>
            </li>
           
        </ul>
    );
};

export default StepIndicator;