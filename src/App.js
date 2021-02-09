import React from "react"
import './App.css';
import LinksContainer from "./LinksContainer"
import MenuItemsContainer from "./MenuItemsContainer"
import Navbar from "./Navbar";
import Reviews from "./Reviews";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <hr />
      <Router>
        <Switch>          
          <Route exact path='/' component={LinksContainer} />
          <Route exact path='/menu_items' component={MenuItemsContainer} />
          <Route exact path='/reviews' component={Reviews} />
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
    
      
