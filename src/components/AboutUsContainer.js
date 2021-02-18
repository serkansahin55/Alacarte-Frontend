import Navbar from "./Navbar"
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styled from "styled-components"
import { GlobalStyle } from "../globalstyles";
import Card from "./Card"
import Carousel from 'react-elastic-carousel'


function AboutUsContainer({google}) {


    const containerStyle = {
    position: 'absolute',  
    width: '100%',
    height: '100%'
    }


    const images = [
        {
          id:"0",
          url:"https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/promo/2018-hero-mixmatch-desktop.jpg",
          title:"",
          des:"some text",
        },
        {
            id:"1",
            url:"https://image.winudf.com/v2/image/Y29tLmJhcnJ5ZGV2LmRlbGljaW91c3BpenphcmVjaXBlc19zY3JlZW5zaG90c18wX2I2MTFjNDQ4/screen-0.jpg?fakeurl=1&type=.jpg",
          title:"some text",
          des:"some text",
        },
        {
          id:"2",
          url:"https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/img/products/larges/S_BUFC.jpg",
          title:"some text",
          des:"some text",
        }
      ]

      

    return (
        <div>
            <Navbar />
            <H1>Contact Us</H1>
            <Carousel>
                <Card image={images[0].url} />
                <Card image={images[1].url} />
                <Card image={images[2].url} />
            </Carousel>
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
