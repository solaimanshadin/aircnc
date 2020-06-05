import React from 'react';
import { Button } from 'react-bootstrap';

const SearchFilter = () => {
    return (
        <div className="display-flex my-4">
            <Button variant="outline-dark" className="btn-rounded">Cancellation Flexibility</Button>
            <Button variant="outline-dark" className="btn-rounded">Type of Place</Button>
            <Button variant="outline-dark" className="btn-rounded">Price</Button>
            <Button variant="outline-dark" className="btn-rounded">Instant Book</Button>
            <Button variant="outline-dark" className="btn-rounded">More filter</Button>
        </div>
    );
};

export default SearchFilter;