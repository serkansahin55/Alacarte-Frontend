import Navbar from "./Navbar"
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styled from "styled-components"
import { GlobalStyle } from "../globalstyles";

function AboutUsContainer({google}) {


    const containerStyle = {
    position: 'absolute',  
    width: '100%',
    height: '100%'
    }
      

    return (
        <div>
            <Navbar />
            <H1>Contact Us</H1>
            <div  className="card">
                <h1 style={{color: 'white'}}>555-555-5555</h1>
                <p />
                <hr></hr>
                <h1 style={{color: 'white'}}>123 ABC Street, Sesame, USA</h1>
                <p />
                <hr></hr>
                <h2 style={{color: 'white'}}>Where Family and Good Friends Meet!</h2>
            </div>
            <Map
                google={google}
                zoom={14}
                style={containerStyle}
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

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100vw;
//     height: 25vh;
// `

const H1 = styled.h1`
    font-size: 3rem;
    color: black;
    display: flex;
    justify-content: center;
    border-style: solid;
    background-color: orange;
`
