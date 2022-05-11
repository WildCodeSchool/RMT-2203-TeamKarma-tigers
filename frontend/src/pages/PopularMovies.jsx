import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import MovieCarousel from "../components/MovieCarousel";
import popularImg from "../assets/popular.jpg";

import Header from "../components/Header";

function PopularMovies({ sortType }) {
  return (
    <Box bg="#15141f">
      <Flex
        h="60vh"
        bgImage={popularImg}
        bgPosition="center"
        alignItems="center"
        justify="flex-start"
        direction="column"
        w="100%"
      >
        <Header isOnHome={false} />
        <Flex
          alignItems="center"
          justify="center"
          direction="column"
          paddingTop="100px"
        >
          <Heading id="Popular-heading" as="h1" fontSize="xl" color="white">
            Popular Movies
          </Heading>
          <Heading
            id="Popular-heading"
            as="h2"
            fontSize="4xl"
            color="white"
            py="30px"
          >
            Millions of movies to discover. Explore now.
          </Heading>
        </Flex>
      </Flex>
      <Box w="90%" m="auto" py="50px">
        <MovieCarousel
          type="alphabeticalMovies"
          url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
        />
      </Box>
    </Box>
  );
}

export default PopularMovies;
