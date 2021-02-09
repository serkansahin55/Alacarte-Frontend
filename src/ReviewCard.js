import React from "react";
import StarRating from "./StarRating";

function ReviewCard({text, rating, username}) {
    return (
        <div>            
            <h2>Description: {text}</h2>
            <h3>Rated By: {username}</h3>
            <h3><StarRating totalStars={5} currentRating={rating} displayStar={true} /></h3>
            <hr />
        </div>   
    )
}

export default ReviewCard;