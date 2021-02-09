import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav"

function NavBar() {

  // const AuthNav = () => {
  //   const { isAuthenticated } = useAuth0()

  //   return (
  //     <Nav>
  //       {isAuthenticated ? <LogoutButton /> : <LoginButton />}
  //     </Nav>
  //   )
  // }
  return (
    <nav>
        <h1>AlaCarte Restaurant</h1>
        <AuthNav />
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