import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Card from "./Card"
import Carousel from 'react-elastic-carousel'



function LinksContainer() {

    // const breakPoints = [
    //     {width: 500, itemsToShow: 1},
    //     {width: 769, itemsToShow: 2},
    //     {width: 1200, itemsToShow: 3},
    //     {width: 1500, itemsToShow: 4}
    // ]

    const images = [
        {
          id:"0",
          url:"http://deepwaterdiner.com/wp-content/uploads/2015/10/deepslider-1050x400.jpg",
          title:"",
          des:"some text",
        },
        {
          id:"1",
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-Ywgtp6tuOL8a-PI26yI4EfMCc7Y3mkgrA&usqp=CAU",
          title:"some text",
          des:"some text",
        },
        {
          id:"2",
          url:"http://deepwaterdiner.com/wp-content/uploads/2015/10/deepslider4-1050x400.jpg",
          title:"some text",
          des:"some text",
        }
      ]

    return (
        <div style={{ 
            backgroundImage: `url("https://raw.githubusercontent.com/briancodex/react-restaurant-website-v1/main/src/images/pizza-3.jpg")` 
          }}>
            <Navbar />
            <br />
            <H1>Welcome to AlaCarte Family Restaurant!</H1>
            <br />
            {/* <Carousel>
                <Card image={images[0].url} />
                <Card image={images[1].url} />
                <Card image={images[2].url} />
                <Card number="4" />
                <Card number="5" />
                <Card number="6" />
                <Card number="7" />
                <Card number="8" />
            </Carousel> */}
            <div className="linkers">   
            <Link to='/about_us'>
                <img className="card" src="http://deepwaterdiner.com/wp-content/uploads/2015/10/phonedec15-01.png" alt="Call to place an order!"/>
            </Link>
            <br />
            <Link to='/menu_items'>
                <img src="http://deepwaterdiner.com/wp-content/uploads/2015/10/menudec15-01.png" alt="View Menu Items"/>
            </Link>
            <br />
             <Link to='/about_us'>
                 <img src="http://deepwaterdiner.com/wp-content/uploads/2015/10/clockdec15-01.png" alt="Learn more about us!"/>
             </Link>
             </div>
             <div className="text">
                 <h1>Call to place an order</h1>
                 <br />
                 <h1>View our Menu</h1>
                 <br />
                 <h1>Open 7 days a week!</h1>
             </div>
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />


        </div>     
    )
}

export default LinksContainer


const H1 = styled.h1`
    font-size: 3rem;
    color: black;
    display: flex;
    justify-content: center;
    border-style: solid;
    background-color: orange;
`

