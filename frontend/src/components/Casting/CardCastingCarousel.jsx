import React, { useEffect } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

import CardCasting from "./CardCasting";

function CardCastingCarousel({ movie }) {
  const [casting, setCasting] = React.useState([]);

  const getCastFromMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => {
        setCasting(casting.concat(data.cast));
      });
  };

  useEffect(() => {
    getCastFromMovie();
  }, []);

  return (
    <Flex
      scrollBehavior="smooth"
      overflowX="scroll"
      w="inherit"
      maxW="99%"
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "8px",
          border: "1px",
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
      {casting
        .filter(
          (element) =>
            element.known_for_department &&
            element.known_for_department.includes("Acting")
        )
        .map((element) => (
          <CardCasting cast={element} key={element.credit_id} />
        ))}
    </Flex>
  );
}

export default CardCastingCarousel;
