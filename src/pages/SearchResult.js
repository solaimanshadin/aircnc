import React from 'react';
import SearchResults from '../componets/SearchResults/SearchResults';
import { Row, Col, Container } from 'react-bootstrap';
import Map from '../componets/Map/Map';

const SearchResult = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <SearchResults/>
                </Col>
                <Col md={6}>
                    <Map/>
                </Col>
            </Row>
           
        </Container>
    );
};

export default SearchResult;