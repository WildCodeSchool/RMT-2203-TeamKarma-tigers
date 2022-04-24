import React from "react";
import { Avatar, Container, Flex, Text, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import moment from "moment";

function CardReview({ review }) {
  return (
    <Container
      border="1px"
      maxH="200px"
      bg="#282c34"
      color="white"
      margin="1rem"
      padding="0.5rem"
    >
      <Flex justifyContent="space-around">
        <Avatar
          alignSelf="center"
          size="md"
          src={
            review.author_details.avatar_path === null ||
            review.author_details.avatar_path.includes("gravatar") === true
              ? `https://bit.ly/broken-link`
              : `https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`
          }
          alt=""
        />
        <Flex flexDirection="column">
          <Text>{review.author}</Text>
          <Text mt={2}>{moment(review.updated_at).format("MMMM Do YYYY")}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Box display="flex" mt="2" alignSelf="center" margin="0.5rem">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                w={4}
                h={4}
                key={review.id}
                color={
                  i < Math.round(review.author_details.rating / 2)
                    ? "teal.500"
                    : "gray.300"
                }
              />
            ))}
        </Box>
        <Text noOfLines={3} fontSize="xs" margin="0.5rem" align="center">
          {review.content}
        </Text>
      </Flex>
    </Container>
  );
}
export default CardReview;
