import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LinksContainer() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to AlaCarte Restaurant!</h1>        
            <h2><Link to='/about_us'> Call to Place an Order! </Link></h2> 
            <h2><Link to='/menu_items'> Check out our Menu! </Link></h2> 
            <h2><Link to='/about_us'> Open 7 days! </Link></h2> 
        </div>     
    )
}

export default LinksContainer