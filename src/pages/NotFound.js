import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center"
        style={{height:"88vh"}}>
            <div className="text-center">
                <h1 className="display-1">404</h1>
                <p className="lead">Page not found!</p>
                <Link to="/" className="btn btn-primary btn-rounded">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;