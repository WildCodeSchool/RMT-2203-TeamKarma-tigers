import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import MovieCarousel from "../components/MovieCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AllMovies({ sortType }) {
  return (
    <div>
      <Header isOnHome={false} />
      <Flex h="100vh" p={5}>
        <Box my="20px" w="30vw" h="full" bg="gray.50" borderRadius="md">
          Filter Section
        </Box>
        <MovieCarousel
          type="alphabeticalMovies"
          url={`https://api.themoviedb.org/3/discover/movie?sort_by=${sortType}&include_adult=false`}
        />
      </Flex>
      <Footer />
    </div>
  );
}

export default AllMovies;
