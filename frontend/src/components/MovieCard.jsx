import React from "react";
import "./MovieCard.css";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import moment from "moment";

function MovieCard({ movie }) {
  return (
    <div>
      <Box
        p="5"
        w="100%"
        h="350px"
        m="20px"
        maxW="320px"
        bg="white"
        borderRadius="md"
      >
        <Image
          borderRadius="md"
          src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        />
        <Flex direction="column" align="flex-start" mt={2}>
          <Badge colorScheme="green" fontSize="md" maxW="25%">
            {moment(Date()).diff(movie.release_date, "days") < 30 ? "NEW" : ""}
          </Badge>
          <Text
            mt={2}
            fontSize="xl"
            fontWeight="semibold"
            lineHeight="short"
            color="gray.700"
            align="left"
            noOfLines={2}
          >
            {movie.original_title}
          </Text>
          <Text mt={2} fontSize="sm" color="grey">
            {moment(movie.release_date).format("MMMM Do YYYY")}
          </Text>
        </Flex>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                w={4}
                h={4}
                key={movie.id}
                color={
                  i < Math.round(movie.vote_average / 2)
                    ? "teal.500"
                    : "gray.300"
                }
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {movie.vote_count} reviews
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MovieCard;
