import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic29sYWltYW5zaGFkaW4iLCJhIjoiY2tiMmQyeXR1MDFucjJwbnhqYzFzOWR3eCJ9.12SNRcv0uF7VAxE2UGCnlA';


const Map = () => {
    const [mapControl, setMapControl] = useState({lng: 5,
        lat: 34,
        zoom: 2})

    // const map = new mapboxgl.Map({
    //     container: this.mapContainer,
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [this.state.lng, this.state.lat],
    //     zoom: this.state.zoom
    // });
        
    return (
        <div>
            <img src="https://potionwebstudio.com/wp-content/uploads/2018/10/google-map3.jpg" className="img-fluid"/>
        </div>
    );
};

export default Map;