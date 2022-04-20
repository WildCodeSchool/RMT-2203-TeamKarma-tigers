import React, { useEffect } from "react";
// import { browserHistory } from "history";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardReview from "./CardReview";
// import Error from "../pages/Error";

function CardReviewCarousel({ movie }) {
  const [reviews, setReviews] = React.useState([]);
  const [pageReview, setPageReview] = React.useState(1);
  const navigate = useNavigate();

  const getReviewFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US&page=${pageReview}`
      )
      .then((response) => response.data)
      .then((data) => setReviews(reviews.concat(data.results)))
      .catch((err) => {
        if (err.response.status === 404) {
          return navigate("/error");
        }
        return err;
      });
  };

  useEffect(() => {
    getReviewFromMovie();
  }, [pageReview]);
  const handleMoreReviews = () => {
    setPageReview(pageReview + 1);
  };

  return (
    <div>
      <div>
        {reviews.map((review) => (
          <CardReview review={review} />
        ))}
      </div>
      <div>
        <button onClick={handleMoreReviews} type="button">
          Read more reviews
        </button>
      </div>
    </div>
  );
}

export default CardReviewCarousel;
