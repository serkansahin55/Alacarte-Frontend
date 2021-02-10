import React, { useState } from "react";
import StarRating from "./StarRating";
import EditReviewForm from "./EditReviewForm";

function ReviewCard({id, text, rating, username, reviews, setReviews}) {

    const [showEditReviewForm, setEditReviewForm] = useState(false);

    function handleEditReview() {
        setEditReviewForm(!showEditReviewForm);
    }

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
            {
                showEditReviewForm ? 
                    <EditReviewForm id={id} rating={rating} text={text} reviews={reviews} setReviews={setReviews} setEditReviewForm={setEditReviewForm} showEditReviewForm={showEditReviewForm} />
                :
                <div>
                    <h2>Description: {text}</h2>
                    <h3>Rated By: {username}</h3>
                    <h3><StarRating totalStars={5} currentRating={rating} displayStar={true} /></h3>
                    <button onClick={handleDeleteReview} type="button">Delete Review</button>
                    <button onClick={handleEditReview} type="button">Edit Review</button>
                    <hr />
                </div>
            }         
        </div> 
    )
}

export default ReviewCard;