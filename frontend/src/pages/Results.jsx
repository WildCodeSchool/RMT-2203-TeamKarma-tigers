import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  VStack,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import emptyResults from "../assets/emptyResults.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCarousel from "../components/MovieCarousel";

function Results() {
  const { search } = useParams();
  const [numOfResults, setNumOfResults] = useState(null);

  return (
    <Box bg="#15141f">
      <Header isOnHome={false} />
      <VStack gap={30} pt={10}>
        <Heading as="h1" color="white">
          Search Results for: {search}... ({numOfResults} Results)
        </Heading>
        {numOfResults === null || numOfResults > 0 ? (
          <Box>
            <Container maxW="90vw" my={5}>
              <Box w="full" h="full">
                <MovieCarousel
                  type="searchQuery"
                  url={`https://api.themoviedb.org/3/search/movie?&query=${search}&language=en-US&include_adult=false`}
                  onResultChange={setNumOfResults}
                />
              </Box>
            </Container>
          </Box>
        ) : (
          <Flex
            justify="center"
            direction="column"
            p="10vh"
            align="flex-start"
            h="80vh"
            bgImage={emptyResults}
            w="100vw"
            filter="auto"
          >
            <Heading
              as="h2"
              fontSize="60px"
              color="white"
              maxW="55%"
              align="left"
            >
              Oops, it seems we could not find anything for :{search}
            </Heading>
            <Text fontSize="2xl" color="white" align="left">
              There are no movies that matched your query.
            </Text>
            <Text fontSize="2xl" color="white" align="left">
              Check for any potential mispellings or tap into :
            </Text>

            <UnorderedList>
              <ListItem fontSize="2xl" color="white" align="left">
                All movies
              </ListItem>
              <ListItem fontSize="2xl" color="white" align="left">
                Popular Movies
              </ListItem>
            </UnorderedList>
          </Flex>
        )}
      </VStack>
      <Footer />
    </Box>
  );
}
export default Results;
