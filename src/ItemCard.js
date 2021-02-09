import React from "react"

function ItemCard({name, image, description, price}) {
    return (
        <>
            <h2>Name: {name}</h2>
            <img src={image} alt={name} style={{width: "200px"}} /> 
            <h2>Description: {description}</h2>
            <h2>${price}</h2>
            <hr />
        </>
    )
}

export default ItemCard