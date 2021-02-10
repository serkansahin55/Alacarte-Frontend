import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewsContainer() {

    const [reviews, setReviews] = useState([]);
    const [showReviewForm, setShowReviewForm] = useState(false);
  

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/reviews")
          .then((r) => r.json())
          .then(reviews => {
            setReviews(reviews)
          })
      }, [])


      const reviewItems = reviews.map((item) => {
        return <ReviewCard key={item.id} username={item.user.username} text={item.text} rating={item.rating}/>
      })

      const handleAddReview = () => {
        setShowReviewForm(!showReviewForm);
      }

    return(
        <div>
            <Navbar />
            <h1>Reviews</h1>
            {reviewItems}
            <button onClick={handleAddReview} type="button">Add a Review</button>
            {showReviewForm ? <ReviewForm reviews={reviews} setReviews={setReviews} showReviewForm={showReviewForm} setShowReviewForm={setShowReviewForm} /> : null}
        </div>
    )
}

export default ReviewsContainer;