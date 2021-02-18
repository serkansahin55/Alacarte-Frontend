import React, { useState } from "react";
import StarRating from "./StarRating";
import EditReviewForm from "./EditReviewForm";

function ReviewCard({id, text, rating, username, reviews, setReviews}) {

    const [showEditReviewForm, setEditReviewForm] = useState(false);

    function handleEditReview() {
        setEditReviewForm(!showEditReviewForm);
    }

    function handleDeleteReview() {
        fetch(`https://alacartepizza.herokuapp.com/api/v1/reviews/${id}`, {
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
                <li className="reviewz">
                    <h2 style={{color: 'white'}}>{text}</h2>
                    <StarRating totalStars={5} currentRating={rating} displayStar={true} />
                    <h3 style={{color: 'white'}}>- {username}</h3>
                    <button className="button" onClick={handleEditReview} type="button">Edit Review</button>
                    <p />
                    <button className="button" onClick={handleDeleteReview} type="button">Delete Review</button>
                    <hr />
                    <br />
                    <hr />
                    <br />
                </li>
            }         
        </div> 
    )
}

export default ReviewCard;
