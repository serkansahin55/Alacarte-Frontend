import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Slideshow from "./Slideshow"



function LinksContainer() {
    return (
        <div style={{ 
            backgroundImage: `url("https://raw.githubusercontent.com/briancodex/react-restaurant-website-v1/main/src/images/pizza-3.jpg")` 
          }}>
            <Navbar />
            <br />
            <H1>Welcome to AlaCarte Family Restaurant!</H1>
            {/* <Slideshow /> */}
            <br />
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

