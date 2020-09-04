import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Features from './Features/Features';
import Pricing from './Features/Pricing/Pricing';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';


const SingleHome = () => {
    const {key} = useParams();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const [homeRules, setHomeRules] = useState({});
    const [home, setHome] = useState({});

    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
        .then(res=>res.json())
        .then(data=> setHomeRules(data));
    }, [homeRules.length]);
    const url = `https://air-cnc-homes-api.herokuapp.com/homeDetails/${key}`;
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(data=> setHome(data));
    }, [homeRules.length]);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <div>
            <div className="images">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={0}
                    leftChevron={<button class="left-indecator">{'<'}</button>}
                    rightChevron={<button className="right-indecator">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    <img className="w-100 d-block" src={home.image} alt=""/>
                    <img className="w-100 d-block" src={'https://imgur.com/O3JSVr5.png'} alt=""/> 
                </ItemsCarousel>

                <Container>
                    <Row className="my-5">
                        <Col md={7} className="pr-5">
                            <div className="d-flex justify-content-between">
                                <h2>{home.name}</h2>
                                <div className="text-center">
                                <img src="https://imgur.com/Gyu1TXZ.png"
                                className="host-img"
                                alt=""/>
                                <p>Rowdra</p>
                                </div>
                                
                            </div>
                            <p className="text-secondary">Dhaka, Bangladesh</p>
                            <p className="text-secondary border-bottom pb-3">
                                <span className="mr-3">4 Guest</span>
                                <span className="mr-3">2 bedrooms</span>
                                <span className="mr-3">2 beds</span>
                                <span>2 bath</span>
                            </p>

                            <Features/>

                            <p className="border-top pt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veniam aperiam saepe aliquam sit libero non voluptates tempore est totam numquam, perferendis dolore a minus dolores ullam quaerat necessitatibus hic? Consequuntur commodi provident vero soluta placeat pariatur dolor corporis repudiandae! Distinctio maxime ad, aspernatur, eos dignissimos sed dolor repellendus tempore a sint quae facilis nesciunt quasi ullam tempora ut. Doloribus exercitationem dicta maxime adipisci! Necessitatibus, nihil? Ipsam repellat, aut distinctio sint et laboriosam, esse, corporis consequatur praesentium aliquam saepe fugit repellendus. Aliquam quos excepturi molestias cumque iusto? Fugiat consequuntur, cupiditate quos accusamus ipsam distinctio voluptatibus sit fuga. Facere, consequuntur sint!
                            </p>
                            <h6 className="mt-5">Reviews</h6>
                            <p>
                            <FontAwesomeIcon className="text-primary" icon={faStar}/> 5 (200 reviews)
                            </p>
                        </Col>
                        <Col md={5}>
                            <Pricing/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingleHome;