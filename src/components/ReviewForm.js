import React, {useState} from "react";
import StarRating from "./StarRating";

function ReviewForm({ setReviews, reviews, showReviewForm, setShowReviewForm}) {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  function handleCancel(){
    setShowReviewForm(!showReviewForm);
  }

  function handleSave(e) {
    e.preventDefault()

    const data = {
        "review": {
            "text": text,
            "rating": rating,
            "user_id": 1,
            "restaurant_id": 1
        }
    }

    fetch("https://alacartepizza.herokuapp.com/api/v1/reviews", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(review => {
          setReviews([...reviews, review]);
          setShowReviewForm(!showReviewForm);
      })      
  }

  return (
      <div class="review-form">
        <h3>Submit Your Review</h3>
        <form className="note-editor">
          <label htmlFor='rating'>
              <StarRating totalStars={5} currentRating={rating} setRating={setRating} />
          </label>
          <label htmlFor='text'>
              Text:
              <textarea onChange={(e) => setText(e.target.value)} value={text} />
          </label>        
          <div className="button-row">            
              <button onClick={handleSave} type="button">Save</button>
              <button onClick={handleCancel} type="button">Cancel</button>
          </div>
        </form>
      </div>
  );
}

export default ReviewForm;
