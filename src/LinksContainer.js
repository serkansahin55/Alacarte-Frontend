import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LinksContainer() {
    return (
        <div>
            <Navbar />        
            <h1><Link to='/about_us'> Call to Place an Order! </Link></h1> 
            <h1>Check out our Menu!</h1>
            <h1>Open 7 days!</h1>
        </div>     
    )
}

export default LinksContainer