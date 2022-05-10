import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import CardReview from "./CardReview";

function CardReviewCarousel({ movie }) {
  const [reviews, setReviews] = React.useState([]);

  const navigate = useNavigate();

  const getReviewFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setReviews(reviews.concat(data.results));
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
  }, []);

  if (reviews.length === 0) {
    return <p>No review found...</p>;
  }

  return (
    <div>
      <Flex
        width={{ base: "100%", xl: "98%" }}
        justifyContent="flex-start"
        flexDirection="column"
        h="40vh"
        scrollBehavior="smooth"
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "18px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            backgroundColor: "#2b3543",
            border: "1px",
            color: "red",
          },
        }}
      >
        {reviews.map((review) =>
          review ? (
            <Flex
              maxWidth="97%"
              _even={{
                alignSelf: { base: "flex-start", sm: "flex-end" },
              }}
            >
              <CardReview review={review} />
            </Flex>
          ) : null
        )}

        {/* {reviews.total_result === 0 ? (
          reviews.map((review) =>
            review ? (
              <Flex
                maxWidth="97%"
                _even={{
                  alignSelf: { base: "flex-start", sm: "flex-end" },
                }}
              >
                <CardReview review={review} />
              </Flex>
            ) : null
          )
        ) : (
          <p>No content</p>
        )} */}
      </Flex>
    </div>
  );
}

export default CardReviewCarousel;
