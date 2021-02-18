import React, {useEffect, useState} from "react";
import ItemCard from "./ItemCard";
import Navbar from "./Navbar";
import styled from "styled-components"

function MenuItemsContainer() {

  /*  I want a variable that I can compare with the 
        names of the projects 
      So that I can filter the list of items being 
        displayed
  */
    const [itemSearch, setItemSearch] = useState("") 
    const [menuItems, setMenuItems] = useState([])

    
    const filteredItems = menuItems.filter((item) => {
      return item.name.toLowerCase().includes(itemSearch.toLowerCase())
    })

    function fetchMenuItems() {
      fetch("https://alacartepizza.herokuapp.com/api/v1/menu_items")
      .then((r) => r.json())
      .then(menuItems => {
        setMenuItems(menuItems)
      })
    }

    useEffect(() => {
      fetchMenuItems()
      }, [])


      const menItems = filteredItems.map((item) => {
        return <ItemCard id={item.id} key={item.id} name={item.name} image={item.image} description={item.description} price={item.price} favorited={item.favorited} fetchMenuItems={fetchMenuItems} />
      })


    return (
      <div>
        <Navbar />
        <H1>Menu</H1>
        <input className="search" type="text" placeholder="Search for pizza" onChange={e => setItemSearch(e.target.value)} />
        <ul className="ull">
            {menItems}
        </ul>
      </div>
    )
}

export default MenuItemsContainer

const H1 = styled.h1`
    font-size: 3rem;
    color: black;
    display: flex;
    justify-content: center;
    border-style: solid;
    background-color: orange;
`
