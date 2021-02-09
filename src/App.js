import React from "react"
import './App.css';
import LinksContainer from "./LinksContainer"
import MenuItemsContainer from "./MenuItemsContainer"
import Navbar from "./Navbar"



function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <p>This is the HomePage</p>
      <LinksContainer />
      <hr />
      <h1>This is the menu page!</h1>
      <MenuItemsContainer />
    </div>  
  );
}

export default App;
    
      
