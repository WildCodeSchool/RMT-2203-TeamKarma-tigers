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
  Link,
} from "@chakra-ui/react";
import emptyResults from "../assets/emptyResults.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCarousel from "../components/MovieCarousel";

function Results() {
  const { search } = useParams();
  const [numOfResults, setNumOfResults] = useState(null);

  return (
    <Box bg="#15141f" overflowX="hidden">
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
            justify={{ base: "flex-end", sm: "center" }}
            direction="column"
            p={{ base: "1rem", sm: "3rem" }}
            align="flex-start"
            bgImage={emptyResults}
            backgroundRepeat="no-repeat"
            w="100vw"
            overflowX=""
            h={{ base: "60vh", "2xl": "90vh" }}
            filter="auto"
            bgRepeat="no-repeat"
            bgSize={{ base: "cover", "2xl": "110% 100%" }}
            bgPosition="center"
            gap={{ base: "2", sm: "10" }}
            pt={{ base: "0", sm: "20rem", lg: "15rem", xl: "7rem" }}
          >
            <Heading
              as="h2"
              fontSize={{
                base: "xl",
                sm: "3xl",
                lg: "4xl",
                xl: "5xl",
                "2xl": "6xl",
              }}
              color="white"
              maxW={{
                base: "100%",
                sm: "100%",
                lg: "55%",
                xl: "50%",
                "2xl": "49%",
              }}
              align="left"
            >
              Oops, it seems we could not find anything for :{search}
            </Heading>
            <Text
              fontSize={{
                base: "lg",
                sm: "2xl",
                lg: "3xl",
                xl: "4xl",
                "2xl": "5xl",
              }}
              color="white"
              align="left"
            >
              There are no movies that matched your query.
            </Text>
            <Text
              fontSize={{
                base: "lg",
                sm: "2xl",
                lg: "3xl",
                xl: "4xl",
                "2xl": "5xl",
              }}
              color="white"
              align="left"
            >
              Check for any potential mispellings or tap into :
            </Text>

            <UnorderedList pl={{ base: "0.5rem", sm: "0.8rem" }}>
              <ListItem
                fontSize={{
                  base: "lg",
                  sm: "2xl",
                  lg: "3xl",
                  xl: "4xl",
                  "2xl": "5xl",
                }}
                color="white"
                align="left"
              >
                <Link fontStyle="italic" href="/movies">
                  All movies
                </Link>
              </ListItem>
              <ListItem
                fontSize={{
                  base: "lg",
                  sm: "2xl",
                  lg: "3xl",
                  xl: "4xl",
                  "2xl": "5xl",
                }}
                color="white"
                align="left"
              >
                <Link fontStyle="italic" href="/popular">
                  Popular movies
                </Link>
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
