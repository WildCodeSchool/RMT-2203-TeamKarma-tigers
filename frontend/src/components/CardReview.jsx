import React from "react";
import { Avatar, Container, Flex, Text, Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function CardReview({ review }) {
  return (
    <Container border="1px" maxH="150px">
      <Flex justifyContent="space-around">
        <Avatar
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
          <h4>{review.author}</h4>
          <p>{review.updated_at}</p>
        </Flex>
      </Flex>
      <Box display="flex" mt="2" alignItems="center">
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
      <Box>
        <Text isTruncated>{review.content}</Text>
      </Box>
    </Container>
  );
}
export default CardReview;
