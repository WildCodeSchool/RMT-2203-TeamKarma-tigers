import React, { useEffect } from "react";
import axios from "axios";
import { Flex, Text } from "@chakra-ui/react";

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
    <div>
      <Text marginBottom="10px" fontSize="3xl" fontWeight="bold">
        Distribution des rôles
      </Text>
      <Flex
        scrollBehavior="smooth"
        overflowX="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "16px",
            borderRadius: "8px",
            border: "1px",
            backgroundColor: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            backgroundColor: "#282c34",
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
    </div>
  );
}

export default CardCastingCarousel;
