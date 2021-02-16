import Navbar from "./Navbar"
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function AboutUsContainer({google}) {

    const mapStyles = {
        width: '100%',
        height: '100%'
      };

    return (
        <div>
            <Navbar />
            <h1>555-555-5555</h1>
            <h1>123 ABC Street, Sesame, USA</h1>
            <h2>Where Family and Good Friends Meet!</h2>
            <Map
                google={google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                {
                    lat: 39.827454,
                    lng: -75.250243
                }
                }
            />
        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBLqeKV7BMSaJXvShCIzK9D1rGwU3--Zpw'
})(AboutUsContainer);


