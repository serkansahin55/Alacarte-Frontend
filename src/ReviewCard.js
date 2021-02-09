import React from "react"

function ReviewCard({text, rating, username}) {
    return (
        <div>            
            <h2>Description: {text}</h2>
            <h3>Rated By: {username}</h3>
            <h3>Rating: {rating}</h3>
            <hr />
        </div>        
    )
}

export default ReviewCard;