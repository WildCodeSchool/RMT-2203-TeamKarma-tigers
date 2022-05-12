import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Heading, Flex, HStack } from "@chakra-ui/react";
import "../styles/CardDetailSynopsis.css";

export default function CardDetailSynopsis({ movie }) {
  const [synopsis, setSynopsis] = useState([]);

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=20d0a760d82811eb01a3f02b31edc400&language=en-US`
      )
      .then((result) => setSynopsis(result.data));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Box>
      <Text
        borderBottom="1px solid white"
        padding="1.5rem"
        fontSize="lg"
        textAlign={{ base: "center", xl: "left" }}
      >
        <Heading size="xl" paddingBottom="1rem">
          SYNOPSIS
        </Heading>
        {synopsis.overview}
      </Text>
      <Flex
        borderBottom="1px solid white"
        marginTop="2rem"
        justifyContent="space-around"
        w="100%"
        wrap="wrap"
      >
        <Flex flexDir="column">
          <Heading size="lg" paddingBottom="0.5rem">
            GENRES
          </Heading>
          <HStack justifyContent="center">
            {synopsis.genres &&
              synopsis.genres.map((genre) => {
                return <Text fontSize="lg">{genre.name}</Text>;
              })}
          </HStack>
          <Heading size="lg" marginTop="1rem">
            AVERAGE VOTE
          </Heading>
          <Text marginBottom="1rem" fontSize="lg">
            {synopsis.vote_average} / 10
          </Text>
        </Flex>
        <Flex flexDir="column">
          <Heading size="lg" paddingBottom="0.5rem">
            BUDGET
          </Heading>
          <Text marginBottom="1rem" fontSize="lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(synopsis.budget)}
          </Text>
          <Heading size="lg" paddingBottom="0.5rem">
            REVENUE
          </Heading>
          <Text marginBottom="1rem" fontSize="lg">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(synopsis.revenue)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
