import React from "react";
import { Avatar, Container, Flex, Text, Box, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import moment from "moment";

function CardReview({ review }) {
  return (
    <Container
      maxH="20vh"
      color="white"
      margin="0.5rem"
      padding="0.5rem"
      mb="2rem"
    >
      <Flex justifyContent="space-between">
        <HStack spacing="30px">
          <Avatar
            marginLeft="1rem"
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
            <Text fontSize="xl">{review.author}</Text>
            <Text mb={2} fontSize="md" fontStyle="italic">
              {moment(review.updated_at).format("MMMM Do YYYY")}
            </Text>
          </Flex>
        </HStack>
        <Box display="flex" alignSelf="center" margin="0.5rem" width="30%">
          {review.author_details.rating === null
            ? null
            : Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    w={5}
                    h={5}
                    key={review.id}
                    color={
                      i < Math.round(review.author_details.rating / 2)
                        ? "teal.500"
                        : "gray.300"
                    }
                  />
                ))}
        </Box>
      </Flex>
      <Flex
        bg="#2b3543"
        h="80%"
        borderRadius="8px"
        justifyContent="center"
        mt="0.5rem"
      >
        <Box
          margin=".5rem"
          scrollBehavior="smooth"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "14px",
              borderRadius: "8px",
              backgroundColor: "white",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "5.9px",
              backgroundColor: "#15141f",
            },
          }}
        >
          <Text fontSize="sm" margin="0.5rem" lineHeight="1.7">
            {review.content}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
export default CardReview;
