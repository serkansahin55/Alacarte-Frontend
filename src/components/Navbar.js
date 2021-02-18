import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav"
import styled from "styled-components"


function NavBar() {


  return (
    <div className="navlinks" style={{backgroundColor: "cornsilk"}}>
      <h1 className="title">AlaCarte Restaurant</h1>
      <ul className="unordered">
        <li> 
          <Link style={{ color: 'black' }} to='/'> Home </Link> 
        </li>
        <li> 
          <Link style={{ color: 'black' }} to='/menu_items'> Menu Items </Link>
        </li>        
        <li> 
          <Link style={{ color: 'black' }} to='/reviews'> Reviews </Link> 
        </li>
        <li> 
          <Link style={{ color: 'black' }} to='/about_us'> Contact Us </Link>
        </li>        
      </ul>
        {/* <p /> */}
        <AuthNav />
    </div>
  )
}

export default NavBar;



