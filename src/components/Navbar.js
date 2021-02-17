import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav"
import styled from "styled-components"


function NavBar() {


  return (
    <Nav className="navlinks" style={{backgroundColor: "cornsilk"}}>
      <h1 className="title">AlaCarte Restaurant</h1>
      <ul>
        <li> 
          <Link to='/'> Home </Link> 
        </li>
        <li> 
          <Link to='/menu_items'> Menu Items </Link>
        </li>        
        <li> 
          <Link to='/reviews'> Reviews </Link> 
        </li>
        <li> 
          <Link to='/about_us'> About Us </Link>
        </li>        
      </ul>
        <p />
        <AuthNav />
    </Nav>
  )
}

export default NavBar;



const Nav = styled.nav`
  background: transparent;
  height: 110px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

