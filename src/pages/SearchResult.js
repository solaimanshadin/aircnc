import React, { useEffect } from 'react';
import SearchResults from '../componets/SearchResults/SearchResults';
import { Row, Col, Container } from 'react-bootstrap';
import Header2 from '../componets/Header/Header2';
import Map from '../componets/Map/Map';

const SearchResult = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <>
        <Header2/>
    
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
        </>
    );
};

export default SearchResult;