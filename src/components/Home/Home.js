import React from "react";
import Card from "../Card/Card";
import useReviews from "../../hooks/ReviewsHook/UseReviews";
import { Link } from "react-router-dom";
function Home() {
  const url = "data/review.json";
  const reviewData = useReviews(url);
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
      <Link to="/reviews" className="btn btn-secondary mt-3">
        All rewiews
      </Link>
    </div>
  );
}

export default Home;
