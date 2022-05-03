import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import CardReview from "./CardReview";

function CardReviewCarousel({ movie }) {
  const [reviews, setReviews] = React.useState([]);
  const [results, setResults] = React.useState(0);
  const [totalResult, setTotalResult] = React.useState(0);

  const navigate = useNavigate();

  const getReviewFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setReviews(
          reviews.concat(
            data.results[results],
            data.results[results + 1],
            data.results[results + 2]
          )
        );
        setTotalResult(data.total_results);
      })
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
      <Flex
        flexDirection="column"
        height="500px"
        maxW="900px"
        mx="auto"
        scrollBehavior="smooth"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "14px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "5.9px",
            backgroundColor: "#15141f",
          },
        }}
      >
        {reviews.map((review) =>
          review ? (
            <Flex
              height="160px"
              _even={{
                alignSelf: "flex-end",
              }}
            >
              <CardReview review={review} />{" "}
            </Flex>
          ) : null
        )}
      </Flex>
      {results + 3 <= totalResult && (
        <Button
          width="20%"
          alignSelf="center"
          colorScheme="teal"
          variant="solid"
          onClick={handleMoreReviews}
          type="button"
        >
          Read more reviews
        </Button>
      )}
    </div>
  );
}

export default CardReviewCarousel;
