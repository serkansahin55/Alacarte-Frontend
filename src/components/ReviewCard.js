import React from "react";
import StarRating from "./StarRating";

function ReviewCard({id, text, rating, username, reviews, setReviews}) {

    function handleDeleteReview() {    
        fetch(`http://localhost:4000/api/v1/reviews/${id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }            
          })
            .then(response => response.json())
            .then(deletedReview => {
                const updatedReviews = reviews.filter((review) => {
                        if (review.id !== deletedReview.id) {
                            return review;
                        }     
                    }
                  )
                setReviews(updatedReviews);                
            })         
    }

    return (
        <div>            
            <h2>Description: {text}</h2>
            <h3>Rated By: {username}</h3>
            <h3><StarRating totalStars={5} currentRating={rating} displayStar={true} /></h3>
            <button onClick={handleDeleteReview} type="button">Delete Review</button>
            <hr />
        </div>   
    )
}

export default ReviewCard;