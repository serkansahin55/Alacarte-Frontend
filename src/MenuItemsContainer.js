import React, {useEffect, useState} from "react"
import ItemCard from "./ItemCard"


function MenuItemsContainer() {

    const [menuItems, setMenuItems] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/api/v1/menu_items")
          .then((r) => r.json())
          .then(menuItems => {
            setMenuItems(menuItems)
          })
      }, [])


      const menItems = menuItems.map((item) => {
        return <ItemCard key={item.id} name={item.name} image={item.image} description={item.description} price={item.price}/>
      })


    return (
        <ul>
            {menItems}
        </ul>
    )
}

export default MenuItemsContainer