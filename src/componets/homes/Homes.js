import React from 'react';
import Home from './Home/Home';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import './Homes.scss'


const Homes = () => {
    const [allHomes, setAllHomes] = useState([]);
    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homes")
        .then(res=>res.json())
        .then(data=>setAllHomes(data))
    },[allHomes.length])
    console.log(allHomes)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
 
    return (
        <section className="homes my-5">

            <div className="d-flex justify-content-between mb-3">
                <h5>Homes</h5>
                <Link to="">See All &#8594;	</Link>
            </div>

            <div>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={12}
                    leftChevron={<button class="left-indecator">{'<'}</button>}
                    rightChevron={<button className="right-indecator">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {
                        allHomes.map(home => <Home home={home}/>)
                    }
                </ItemsCarousel>
                </div>
        </section>
        
    );
};

export default Homes;