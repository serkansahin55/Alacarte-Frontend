import React, {useState} from "react";

function ReviewForm({ setReviews, reviews, showReviewForm, setShowReviewForm}) {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  function handleCancel(){
    setShowReviewForm(!showReviewForm);
  }

  function handleSave(e) {
    e.preventDefault()

    const data = {
        "review": {
            "text": text,
            "rating": rating,
            "user_id": 7,
            "restaurant_id": 20
        }
    }

    fetch("http://localhost:4000/api/v1/reviews", {
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
      <div>
        <h3>Submit Your Review</h3>
        <form className="note-editor">
        <label htmlFor='rating'>
            Rating:
            <input onChange={(e) => setRating(e.target.value)} type="text" label='Rating' name="rating" value={rating} />
        </label>
        <label htmlFor='text'>
            Text:
            <textarea onChange={(e) => setText(e.target.value)}name="text" value={text} />
        </label>        
        <div className="button-row">
            <input onClick={handleSave} className="button" type="submit" value="Save" />
            <button onClick={handleCancel} type="button">Cancel</button>
        </div>
        </form>
      </div>
  );
}

export default ReviewForm;
