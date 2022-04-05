import React from "react";
import Card from "../Card/Card";
import useReviews from "../../hooks/ReviewsHook/UseReviews";

const Reviews = () => {
  const url = "data/review.json";
  const reviewData = useReviews(url);
  return (
    <div className="row p-5">
      {reviewData.map((review) => {
        return (
          <div className="col-md-4" key={review.id}>
            <Card review={review} />
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
