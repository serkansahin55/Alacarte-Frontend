import React from "react";
import "../styles/App.css";
import LinksContainer from "./LinksContainer";
import MenuItemsContainer from "./MenuItemsContainer";
import ReviewsContainer from "./ReviewsContainer";
import AboutUsContainer from "./AboutUsContainer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from "../globalstyles";
import ImgBg from '../images/pizza-3.jpg';
import styled from "styled-components"
import Navbar from "./Navbar"




function App() {
  return (
    <div style={{backgroundColor: "black"}} >   
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

const Pizza = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;




