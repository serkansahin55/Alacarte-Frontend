import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import styled from "styled-components"

function ReviewsContainer() {

    const [reviews, setReviews] = useState([]);
    const [showReviewForm, setShowReviewForm] = useState(false);
  

    useEffect(() => {
        fetch("https://alacartepizza.herokuapp.com/api/v1/reviews")
          .then((r) => r.json())
          .then(reviews => {
            setReviews(reviews)
          })
      }, [])


      const reviewItems = reviews.map((item) => {
        return <ReviewCard id={item.id} key={item.id} username={item.user.username} text={item.text} rating={item.rating} reviews={reviews} setReviews={setReviews} />
      })

      const handleAddReview = () => {
        setShowReviewForm(!showReviewForm);
      }

    return(
        <div>
            <Navbar />
            <H1 style={{color: 'black'}}>Reviews</H1>
            <br></br>
            <hr></hr>
            <hr></hr>
            {reviewItems}
            <button className="add-button" onClick={handleAddReview} type="button">Add a Review</button>
            {showReviewForm ? <ReviewForm reviews={reviews} setReviews={setReviews} showReviewForm={showReviewForm} setShowReviewForm={setShowReviewForm} /> : null}
        </div>
    )
}

export default ReviewsContainer;

const H1 = styled.h1`
    font-size: 3rem;
    color: black;
    display: flex;
    justify-content: center;
    border-style: solid;
    background-color: orange;
`