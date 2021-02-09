import React from "react";
import '../App.css'; 
import LinksContainer from "./LinksContainer";
import MenuItemsContainer from "./MenuItemsContainer";
import ReviewsContainer from "./ReviewsContainer";
import AboutUsContainer from "./AboutUsContainer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <hr />
      <Router>
        <Switch>          
          <Route exact path='/' component={LinksContainer} />
          <Route exact path='/menu_items' component={MenuItemsContainer} />
          <Route exact path='/reviews' component={ReviewsContainer} />
          <Route exact path='/about_us' component={AboutUsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
    
      
