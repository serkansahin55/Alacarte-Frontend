import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LinksContainer() {
    return (
        <div>
            <Navbar />        
            <h1><Link to='/about_us'> Call to Place an Order! </Link></h1> 
            <h1><Link to='/menu_items'> Check out our Menu! </Link></h1> 
            <h1><Link to='/about_us'> Open 7 days! </Link></h1> 
        </div>     
    )
}

export default LinksContainer