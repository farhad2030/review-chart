import React from "react";
import Card from "../Card/Card";
import { UseReviews } from "../../hooks/ReviewsHook/UseReviews";

function Home() {
  const url = "data/review.json";
  const reviewData = UseReviews(url);
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-md-6">
          <h1>Its a awesome Computer for daily uses </h1>
          <p>You can buy it for long time uses . It will satisfy you.</p>
        </div>
        <div className="col-md-6">
          <img src="images/pcjpg.jpg" alt="" />
        </div>
      </div>

      <div className="">
        <h1 className="text-center ">Rewiews</h1>
      </div>
      <div className="row">
        {reviewData.slice(0, 3).map((review) => {
          return (
            <div className="col-md-4" key={review.id}>
              <Card review={review} />
            </div>
          );
        })}
      </div>
      <button type="button" className="btn btn-secondary mt-3">
        All rewiews
      </button>
    </div>
  );
}

export default Home;
