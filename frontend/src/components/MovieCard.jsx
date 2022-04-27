import React from "react";
import {
  Box,
  Flex,
  Badge,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import moment from "moment";
import emptyImage from "../assets/emptyImage.svg";

function MovieCard({ movie }) {
  return (
    <div>
      <LinkBox
        as="article"
        h="450px"
        m="20px"
        maxW="320px"
        bg="grey"
        borderRadius="md"
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
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </div>
  );
}

export default MovieCard;
