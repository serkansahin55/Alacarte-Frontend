import React from "react"

function ItemCard({id, name, image, description, price, favorited, fetchMenuItems}) {

    function handleUnFavorite(e) {
        e.preventDefault();

        const data = {
            "favorite": {                
                "menu_item_id": id,
                "user_id": 7
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
                "user_id": 7
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
        <>
            <h2>
                Name: {name} <span></span>
                {
                favorited ? 
                    <button className="button favorite" onClick={handleUnFavorite} type="button">Unfavorite It!</button>
                    : 
                    <button className="button non-favorite" onClick={handleFavorite} type="button">Favorite It!</button>
                }
            </h2>
            <img src={image} alt={name} style={{width: "200px"}} /> 
            <h2>Description: {description}</h2>
            <h2>${price}</h2>
            <hr />
        </>
    )
}

export default ItemCard