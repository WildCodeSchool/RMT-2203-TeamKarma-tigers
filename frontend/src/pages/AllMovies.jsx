import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AllMovies({ sortType }) {
  return (
    <Box bg="#15141f" color="white">
      <Header isOnHome={false} />
      <Flex h="100vh" p={5}>
        <Box
          my="20px"
          w="30vw"
          h="full"
          bg="gray.50"
          borderRadius="md"
          color="black"
        >
          Filter Section
        </Box>
        <MovieCarousel
          type="alphabeticalMovies"
          url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
        />
      </Flex>
      <Footer />
    </Box>
  );
}

export default AllMovies;
