import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import CardReview from "./CardReview";

function CardReviewCarousel({ movie }) {
  const [reviews, setReviews] = React.useState([]);
  // const [pageReview, setPageReview] = React.useState(1);
  const [results, setResults] = React.useState(0);
  console.log(reviews);
  console.log(results);
  const navigate = useNavigate();

  const getReviewFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) =>
        setReviews(
          reviews.concat(
            data.results[results],
            data.results[results + 1],
            data.results[results + 2]
          )
        )
      )
      .catch((err) => {
        if (err.response.status === 404) {
          return navigate("/error");
        }
        return err;
      });
  };

  useEffect(() => {
    getReviewFromMovie();
  }, [results]);
  const handleMoreReviews = () => {
    setResults(results + 3);
  };

  return (
    <div>
      <Flex flexDirection="column">
        {reviews.map((review) => (
          <CardReview review={review} />
        ))}
      </Flex>
      <div>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={handleMoreReviews}
          type="button"
        >
          Read more reviews
        </Button>
      </div>
    </div>
  );
}

export default CardReviewCarousel;
