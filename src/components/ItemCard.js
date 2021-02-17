import React from "react"

function ItemCard({id, name, image, description, price, favorited, fetchMenuItems}) {

    function handleUnFavorite(e) {
        e.preventDefault();

        const data = {
            "favorite": {                
                "menu_item_id": id,
                "user_id": 3
            }
        }
    
        fetch(`http://localhost:4000//api/v1/menu_items/${id}/delete_favorites`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(menuItem => {
            fetchMenuItems();
          })
    }

    function handleFavorite(e) {        
        e.preventDefault();

        const data = {
            "favorite": {                
                "menu_item_id": id,
                "user_id": 3
            }
        }
    
        fetch("http://localhost:4000/api/v1/favorites", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(menuItem => {
            fetchMenuItems();
          })
    }
    return (
        <li className="items">
            <h2 className="h2ele">
                Name: {name} <span></span>
                {
                favorited ? 
                    <button className="button-non-favorite" onClick={handleUnFavorite} type="button">Unfavorite It!</button>
                    : 
                    <button className="button" onClick={handleFavorite} type="button">Favorite It!</button>
                }
            </h2>
            <img src={image} alt={name} style={{width: "200px"}} /> 
            <h2 className="h2ele">Description: {description}</h2>
            <h2 className="h2ele">${price}</h2>
            <hr />
        </li>
    )
}

export default ItemCard