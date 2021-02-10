import React, {useState} from "react";
import StarRating from "./StarRating";

function EditReviewForm({ setReviews, reviews, showEditReviewForm, setEditReviewForm, rating, text, id }) {

  const [editedText, setEditedText] = useState(text);
  const [editedRating, setEditedRating] = useState(rating);

  function handleCancel() {
    setEditReviewForm(!showEditReviewForm);
  }

  function handleUpdateReview(e) {
    e.preventDefault()

    const data = {
        "review": {
            "text": editedText,
            "rating": editedRating,
            "user_id": 7,
            "restaurant_id": 20
        }
    }

    fetch(`http://localhost:4000/api/v1/reviews/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(updatedReview => {
          const updatedReviews = reviews.map((review) => {
              if (review.id === updatedReview.id) {
                    return updatedReview;
                  }
              else {
                return review;
              }  
            }
          )
          setReviews(updatedReviews);
          setEditReviewForm(!showEditReviewForm);
      })
  }

  return (
      <div>
        <h3>Update Your Review</h3>
        <form className="note-editor">
        <label>
            <StarRating totalStars={5} currentRating={editedRating} setRating={setEditedRating} />
        </label>
        <label>
            Text:
            <textarea onChange={(e) => setEditedText(e.target.value)} value={editedText} />
        </label>        
        <div className="button-row">
            <input onClick={handleUpdateReview} className="button" type="submit" value="Update Review" />
            <button onClick={handleCancel} type="button">Cancel</button>
        </div>
        </form>
      </div>
  );
}

export default EditReviewForm;
