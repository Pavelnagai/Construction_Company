import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '45vh',
    borderRadius: "10px",
};

const center = {
    lat: 55.45,
    lng: 37.37
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBZ5MufayEgZaNJ-dDo6epfouAZr5wATEs"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)