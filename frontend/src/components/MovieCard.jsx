import React from "react";
import {
  Flex,
  Badge,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import moment from "moment";

import MovieRating from "./MovieRating";
import emptyImage from "../assets/emptyImage.svg";

function MovieCard({ movie, isInspiration = false }) {
  return (
    <div>
      <LinkBox
        as="article"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        h={!isInspiration ? "450px" : "70vh"}
        m="20px"
        w={!isInspiration ? "300px" : "400px"}
        bg="gray"
        borderRadius="md"
        bgPosition="center"
        backgroundImage={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : `url(${emptyImage})`
        }
        bgSize={movie.poster_path ? "cover" : "fit"}
        bgRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Badge colorScheme="green" fontSize="md" maxW="25%">
          {moment(Date()).diff(movie.release_date, "days") < 30 ? "NEW" : ""}
        </Badge>
        <LinkOverlay href={`/movies/${movie.id}`}>
          <Flex
            bgColor="white"
            direction="column"
            borderBottomRadius="md"
            align="flex-start"
            justify="flex-start"
            h="150px"
            p="2"
            _hover={{ height: "250px" }}
          >
            <Heading
              as="h3"
              mt={2}
              fontSize="xl"
              fontWeight="semibold"
              lineHeight="short"
              color="gray.700"
              align="left"
              noOfLines={2}
            >
              {movie.original_title}
            </Heading>
            <Text mt={2} fontSize="sm" color="grey">
              {moment(movie.release_date).format("MMMM Do YYYY")}
            </Text>
            <MovieRating movie={movie} />
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </div>
  );
}

export default MovieCard;
