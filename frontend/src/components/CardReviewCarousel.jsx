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

  return (
    <div>
      <Flex
        flexDirection="column"
        height="500px"
        maxW="900px"
        mx="auto"
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
              _even={{
                alignSelf: "flex-end",
              }}
            >
              <CardReview review={review} />{" "}
            </Flex>
          ) : null
        )}
      </Flex>
    </div>
  );
}

export default CardReviewCarousel;
