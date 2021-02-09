import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <h1>AlaCarte Restaurant</h1>
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
    </nav>
  )
}

export default NavBar;