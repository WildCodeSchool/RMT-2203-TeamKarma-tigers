import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

import Header from "../components/Header";
import MovieCarousel from "../components/MovieCarousel";

function Results() {
  const { search } = useParams();

  return (
    <div>
      <Header isOnHome={false} />
      <Heading as="h2">Search Results for: {search}...</Heading>
      <Container maxW="90vw" my={5}>
        <Flex h="100vh" p={5}>
          <Box my="20px" w="30vw" h="full" bg="gray.50" borderRadius="md">
            Filter Section
          </Box>

          <Box w="full" h="full">
            <MovieCarousel
              type="searchQuery"
              url={`https://api.themoviedb.org/3/search/movie?&query=${search}&language=en-US&include_adult=false`}
            />
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
export default Results;
