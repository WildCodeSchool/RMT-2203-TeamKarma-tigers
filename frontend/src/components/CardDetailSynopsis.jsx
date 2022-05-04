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
      <Text borderBottom="1px solid white" padding="1.5rem" textAlign="left">
        <Heading size="lg" paddingBottom="1rem">
          SYNOPSIS
        </Heading>
        {synopsis.overview}
      </Text>
      <Flex
        borderBottom="1px solid white"
        marginTop="2rem"
        justifyContent="space-around"
        w="100%"
        flexDir={{ md: "" }}
      >
        <Flex flexDir="column">
          <Heading size="md" paddingBottom="0.5rem">
            GENRES
          </Heading>
          <HStack>
            {synopsis.genres &&
              synopsis.genres.map((genre) => {
                return <Text>{genre.name}</Text>;
              })}
          </HStack>
          <Heading size="md" marginTop="1rem">
            POPULARITY
          </Heading>
          <Text marginBottom="1rem">{synopsis.popularity}</Text>
        </Flex>
        <Flex flexDir="column">
          <Heading size="md" paddingBottom="0.5rem">
            REVENUE
          </Heading>
          <Text marginBottom="1rem">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(synopsis.revenue)}
          </Text>
          <Heading size="md">AVERAGE VOTE</Heading>
          <Text marginBottom="1rem">{synopsis.vote_average}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
