import React from 'react';
import { Button } from 'react-bootstrap';

const SearchFilter = () => {
    return (
        <div className="display-flex my-4">
            <Button variant="outline-dark" size="sm" className="btn-rounded mr-1">Cancellation Flexibility</Button>
            <Button variant="outline-dark" size="sm" className="btn-rounded mr-1">Type of Place</Button>
            <Button variant="outline-dark" size="sm" className="btn-rounded mr-1">Price</Button>
            <Button variant="outline-dark" size="sm" className="btn-rounded mr-1">Instant Book</Button>
            <Button variant="outline-dark" size="sm" className="btn-rounded">More filter</Button>
        </div>
    );
};

export default SearchFilter;